#!/bin/bash
set -e

# Catppuccin Mocha colors with improved header contrast
GREEN='\033[38;2;166;227;161m'
YELLOW='\033[38;2;249;226;175m'
RED='\033[38;2;243;139;168m'
BLUE='\033[38;2;137;180;250m'
PINK='\033[38;2;245;194;231m'
TEAL='\033[38;2;148;226;213m'
WHITE='\033[38;2;205;214;244m'
BG_HEADER='\033[48;2;40;42;54m'  # Deep gray for header background
RESET='\033[0m'

# UI elements
BOX_WIDTH=54
BOX_TOP="${PINK}╔════════════════════════════════════════════════════════╗${RESET}"
BOX_BOT="${PINK}╚════════════════════════════════════════════════════════╝${RESET}"
DIVIDER="${BLUE}════════════════════════════════════════════════════════${RESET}"
ARROW="${TEAL}➜${RESET}"
CHECK="${GREEN}✓${RESET}"
WARN="${YELLOW}⚠${RESET}"

# Header
header_text="Git Commit Push"
header_padding=$(( (BOX_WIDTH - ${#header_text}) / 2 ))
echo -e "\n${BOX_TOP}"
# Center the header text, color the background and text
printf "${PINK}║${RESET}"
printf "%*s" $header_padding ""
printf "${BG_HEADER}${WHITE}%s${RESET}" "$header_text"
printf "%*s" $((BOX_WIDTH - header_padding - ${#header_text})) ""
printf "${PINK}║${RESET}\n"
echo -e "${BOX_BOT}\n"

# Ensure inside a git repo
if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo -e "${RED}${WARN} Not a git repository.${RESET}"
  exit 1
fi

# Repo info
repo_name=$(basename -s .git "$(git config --get remote.origin.url 2>/dev/null)")
current_branch=$(git branch --show-current 2>/dev/null || echo "detached HEAD")
echo -e "${DIVIDER}\n${PINK}${ARROW} Repo:${TEAL} $repo_name${RESET}   ${PINK}${ARROW} Branch:${TEAL} $current_branch${RESET}\n${DIVIDER}"

# Show git status
echo -e "${BLUE}📋 Status:${RESET}"
git -c color.status=always status | sed 's/^/  /'
echo ""

# Stage files (fzf or all)
echo -e "${DIVIDER}\n${PINK}📦 Stage files${RESET}\n${DIVIDER}"
unstaged=$(git ls-files -o -m --exclude-standard)
if [ -z "$unstaged" ]; then
  echo -e "${YELLOW}${WARN} Nothing to stage.${RESET}"; exit 0
fi

echo -e "  ${GREEN}a${RESET} ${ARROW} Stage all"
echo -e "  ${BLUE}i${RESET} ${ARROW} Interactive (fzf)"
echo -e "  ${RED}c${RESET} ${ARROW} Cancel"
echo -en "${YELLOW}${ARROW} Choice: ${RESET}"
read stage
stage=${stage,,}

if [[ $stage == "c" ]]; then
  echo -e "\n  ${YELLOW}Operation cancelled${RESET}"
  exit 0
elif [[ $stage == "a" ]]; then
  git add .
  echo -e "  ${CHECK} ${GREEN}All files staged.${RESET}"
elif [[ $stage == "i" ]]; then
  if ! command -v fzf >/dev/null 2>&1; then
    echo -e "  ${WARN} ${RED}fzf not installed (required for interactive mode).${RESET}"
    exit 1
  fi
  files=$(echo "$unstaged" | fzf --multi --prompt="Select files (tab for multi): " --preview "git diff --color=always -- {}" --border --color=dark)
  if [ -z "$files" ]; then
    echo -e "  ${WARN} ${RED}No files selected.${RESET}"; exit 0
  fi
  IFS=$'\n'
  for f in $files; do
    git add "$f"
  done
  unset IFS
  echo -e "  ${CHECK} ${GREEN}Selected files staged.${RESET}"
else
  echo -e "  ${WARN} ${RED}Invalid choice.${RESET}"; exit 1
fi

# Confirm staged
if git diff --cached --quiet; then
  echo -e "\n${YELLOW}${WARN} No changes to commit.${RESET}"; exit 0
fi

# Commit
echo -e "\n${DIVIDER}\n${BLUE}📝 Commit message${RESET}\n${DIVIDER}"
while true; do
  echo -en "  ${ARROW} Message: "
  read msg
  [ -z "$msg" ] && echo -e "  ${WARN} ${RED}Cannot be empty.${RESET}" || break
done
git commit -m "$msg" | while IFS= read -r line; do echo -e "  $line"; done

# Push
echo -e "\n${DIVIDER}\n${BLUE}🚀 Push branch${RESET}\n${DIVIDER}"
echo -en "  ${ARROW} Push to branch [${current_branch}]: "
read branch
branch=${branch:-$current_branch}

echo -en "  ${ARROW} Push '${branch}' to origin? (y/N): "
read confirm
if [[ ! "${confirm,,}" =~ ^(y|yes)$ ]]; then
  echo -e "\n  ${YELLOW}Push cancelled${RESET}"
  exit 0
fi

if ! git ls-remote --exit-code origin "$branch" >/dev/null 2>&1; then
  echo -e "  ${YELLOW}${WARN} Branch does not exist remotely.${RESET}"
  echo -en "  ${ARROW} Create and push new branch? (y/N): "
  read create
  if [[ "${create,,}" =~ ^(y|yes)$ ]]; then
    git push -u origin HEAD:"$branch" | while IFS= read -r line; do echo -e "  $line"; done
  else
    echo -e "  ${YELLOW}Aborted.${RESET}"; exit 0
  fi
else
  git push origin HEAD:"$branch" | while IFS= read -r line; do echo -e "  $line"; done
fi

# Success
echo -e "\n${BOX_TOP}"
success_msg="✓ Success: pushed to $branch"
success_padding=$(( (BOX_WIDTH - ${#success_msg}) / 2 ))
printf "${PINK}║${RESET}"
printf "%*s" $success_padding ""
printf "${GREEN}%s${RESET}" "$success_msg"
printf "%*s" $((BOX_WIDTH - success_padding - ${#success_msg})) ""
printf "${PINK}║${RESET}\n"
echo -e "${BOX_BOT}\n"
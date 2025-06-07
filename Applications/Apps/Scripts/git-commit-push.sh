#!/bin/bash
set -e

# Catppuccin Mocha color scheme
GREEN='\033[38;2;166;227;161m'
YELLOW='\033[38;2;249;226;175m'
RED='\033[38;2;243;139;168m'
BLUE='\033[38;2;137;180;250m'
PINK='\033[38;2;245;194;231m'
TEAL='\033[38;2;148;226;213m'
WHITE='\033[38;2;205;214;244m'
BG_BLUE='\033[48;2;137;180;250m'
RESET='\033[0m'

# UI Elements
DIVIDER="${BLUE}════════════════════════════════════════════════════════${RESET}"
BOX_TOP="${PINK}╔════════════════════════════════════════════════════════╗${RESET}"
BOX_MID="${PINK}║${RESET}"
BOX_BOT="${PINK}╚════════════════════════════════════════════════════════╝${RESET}"
ARROW="${TEAL}➜${RESET}"
CHECK="${GREEN}✓${RESET}"
WARN="${YELLOW}⚠${RESET}"

# Enhanced header
echo -e "\n${BOX_TOP}"
echo -e "${BOX_MID}  ${BG_BLUE}${WHITE}🚀  G I T   C O M M I T   &   P U S H  🚀  ${RESET}  ${BOX_MID}"
echo -e "${BOX_MID}  ${WHITE}Manage your commits with elegance and precision${RESET} ${BOX_MID}"
echo -e "${BOX_BOT}\n"

# Check Git repo
git rev-parse --is-inside-work-tree >/dev/null 2>&1 || {
  echo -e "${RED}${WARN} Error: Not a Git repository${RESET}" >&2
  exit 1
}

# Repository info
repo_name=$(basename -s .git $(git config --get remote.origin.url))
current_branch=$(git branch --show-current 2>/dev/null || echo "")
[ -z "$current_branch" ] && current_branch="detached HEAD"

echo -e "${DIVIDER}"
echo -e "  ${PINK}${ARROW} Repository: ${TEAL}${repo_name}${RESET}"
echo -e "  ${PINK}${ARROW} Branch:     ${PINK}${current_branch}${RESET}"
echo -e "${DIVIDER}\n"

# Show git status
echo -e "${BLUE}📋 Current Status:${RESET}"
git -c color.status=always status | sed 's/^/  /'
echo ""

# File selection
while true; do
  echo -e "${DIVIDER}"
  echo -e "  ${PINK}📦 Stage Files${RESET}"
  echo -e "${DIVIDER}"
  echo -e "  ${GREEN}a${RESET}  ${ARROW} Stage all changes"
  echo -e "  ${BLUE}l${RESET}  ${ARROW} List uncommitted files"
  echo -e "  ${TEAL}s${RESET}  ${ARROW} Enter specific files"
  echo -e "  ${RED}c${RESET}  ${ARROW} Cancel"
  echo -e "${DIVIDER}"
  
  read -rp "$(echo -e "${YELLOW}${ARROW} Select option: ${RESET}")" choice
  
  case "${choice,,}" in
    a)
      git add .
      echo -e "\n  ${CHECK} ${GREEN}All changes staged${RESET}"
      break
      ;;
    l)
      echo -e "\n${BLUE}📄 Unstaged Files:${RESET}"
      git diff --name-only | sed 's/^/  • /'
      echo ""
      ;;
    s)
      read -rp "  ${ARROW} Enter files (space separated): " files
      if [ -n "$files" ]; then
        git add -- $files 2>/dev/null && {
          echo -e "\n  ${CHECK} ${GREEN}Added specified files${RESET}"
          break
        } || echo -e "\n  ${WARN} ${RED}Error adding files. Try again${RESET}"
      else
        echo -e "\n  ${WARN} ${RED}No files specified${RESET}"
      fi
      ;;
    c)
      echo -e "\n  ${YELLOW}Operation cancelled${RESET}"
      exit 0
      ;;
    *)
      echo -e "\n  ${WARN} ${RED}Invalid choice${RESET}"
      ;;
  esac
done

# Check for staged changes
if git diff --cached --quiet; then
  echo -e "\n${YELLOW}${WARN} No changes to commit${RESET}"
  exit 0
fi

# Commit message
echo -e "\n${DIVIDER}"
echo -e "  ${BLUE}📝 Commit Message${RESET}"
echo -e "${DIVIDER}"
while true; do
  read -rp "  ${ARROW} Enter message: " msg
  if [ -z "$msg" ]; then
    echo "  ${WARN} ${RED}Commit message cannot be empty${RESET}"
  else
    git commit -m "$msg" | sed 's/^/  /'
    break
  fi
done

# Branch selection
echo -e "\n${DIVIDER}"
echo -e "  ${BLUE}🌿 Push Destination${RESET}"
echo -e "${DIVIDER}"
echo -e "  ${ARROW} Current branch: ${PINK}${current_branch}${RESET}"
read -rp "  ${ARROW} Push to branch? [Press Enter for '$current_branch' or type new]: " branch
branch=${branch:-$current_branch}

# Push confirmation
echo -e "\n${DIVIDER}"
echo -e "  ${BLUE}🚀 Push Confirmation${RESET}"
echo -e "${DIVIDER}"
read -rp "  ${ARROW} Push ${PINK}${branch}${RESET} to origin? (y/N): " confirm

if [[ ! "${confirm,,}" =~ ^(y|yes)$ ]]; then
  echo -e "\n  ${YELLOW}Push cancelled${RESET}"
  exit 0
fi

# Push execution
echo ""
if ! git ls-remote --exit-code origin "$branch" >/dev/null 2>&1; then
  echo "  ${YELLOW}${WARN} Branch '$branch' doesn't exist on remote${RESET}"
  read -rp "  ${ARROW} Create and push new branch? (y/N): " create
  if [[ "${create,,}" =~ ^(y|yes)$ ]]; then
    echo ""
    git push -u origin HEAD:"$branch" | sed 's/^/  /'
  else
    echo -e "\n  ${YELLOW}Operation aborted${RESET}"
    exit 0
  fi
else
  git push origin HEAD:"$branch" | sed 's/^/  /'
fi

# Enhanced success message
echo -e "\n${BOX_TOP}"
echo -e "${BOX_MID}  ${GREEN}✅  S U C C E S S !  ✅${RESET}                      ${BOX_MID}"
echo -e "${PINK}╠${DIVIDER}╣${RESET}"
echo -e "${BOX_MID}  ${GREEN}Successfully pushed to: ${PINK}${branch}${RESET}         ${BOX_MID}"
echo -e "${BOX_MID}  ${GREEN}Your changes are now on ${PINK}origin/${branch}${RESET}  ${BOX_MID}"
echo -e "${BOX_BOT}\n"

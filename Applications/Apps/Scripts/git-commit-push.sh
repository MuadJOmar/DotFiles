#!/bin/bash
set -e

# Text formatting and colors
BOLD=$(tput bold)
GREEN=$(tput setaf 2)
YELLOW=$(tput setaf 3)
RED=$(tput setaf 1)
BLUE=$(tput setaf 4)
MAGENTA=$(tput setaf 5)
CYAN=$(tput setaf 6)
WHITE=$(tput setaf 7)
BG_BLUE=$(tput setab 4)
RESET=$(tput sgr0)

# UI Elements
HR="${BOLD}${BLUE}------------------------------------------------------------${RESET}"
CHECK="${GREEN}✓${RESET}"
X="${RED}✗${RESET}"
ARROW="${BOLD}${CYAN}➜${RESET}"
STAR="${YELLOW}★${RESET}"

# Header with git icon
echo -e "\n${BG_BLUE}${WHITE}${BOLD} 🚀 Git Commit & Push Assistant ${RESET}\n"

# Check Git repo
git rev-parse --is-inside-work-tree >/dev/null 2>&1 || {
  echo "${RED}${BOLD}${X} Error: Not a Git repository${RESET}" >&2
  exit 1
}

# Repository info
repo_name=$(basename -s .git $(git config --get remote.origin.url))
current_branch=$(git branch --show-current 2>/dev/null || echo "")
[ -z "$current_branch" ] && current_branch="detached HEAD"

echo "${HR}"
echo "${STAR} ${BOLD}Repository:${RESET} ${CYAN}${repo_name}${RESET}"
echo "${STAR} ${BOLD}Branch:${RESET}     ${MAGENTA}${current_branch}${RESET}"
echo "${HR}"
echo ""

# Show git status
echo "${BOLD}${CYAN}📋 Current Status:${RESET}"
git -c color.status=always status | sed 's/^/  /'
echo ""

# File selection
while true; do
  echo "${BOLD}${YELLOW}${ARROW} Stage Files:${RESET}"
  echo "  ${GREEN}a${RESET} - Stage all changes"
  echo "  ${GREEN}l${RESET} - List uncommitted files"
  echo "  ${GREEN}s${RESET} - Enter specific files"
  echo "  ${RED}c${RESET} - Cancel"
  read -rp "  Choice (a/l/s/c): " choice
  
  case "${choice,,}" in
    a)
      git add .
      echo "\n  ${CHECK} ${GREEN}All changes staged${RESET}"
      break
      ;;
    l)
      echo "\n${BOLD}${CYAN}📄 Unstaged Files:${RESET}"
      git diff --name-only | sed 's/^/  • /'
      echo ""
      ;;
    s)
      read -rp "  Enter files (space separated): " files
      if [ -n "$files" ]; then
        git add -- $files 2>/dev/null && {
          echo "\n  ${CHECK} ${GREEN}Added specified files${RESET}"
          break
        } || echo "\n  ${X} ${RED}Error adding files. Try again${RESET}"
      else
        echo "\n  ${X} ${RED}No files specified${RESET}"
      fi
      ;;
    c)
      echo "\n  ${YELLOW}Operation cancelled${RESET}"
      exit 0
      ;;
    *)
      echo "\n  ${X} ${RED}Invalid choice${RESET}"
      ;;
  esac
done

# Check for staged changes
if git diff --cached --quiet; then
  echo "\n${BOLD}${YELLOW}⚠️ No changes to commit${RESET}"
  exit 0
fi

# Commit message
echo "\n${HR}"
echo "${BOLD}${CYAN}📝 Commit Message:${RESET}"
while true; do
  read -rp "  ${ARROW} Enter message: " msg
  if [ -z "$msg" ]; then
    echo "  ${X} ${RED}Commit message cannot be empty${RESET}"
  else
    git commit -m "$msg" | sed 's/^/  /'
    break
  fi
done

# Branch selection
echo "\n${HR}"
echo "${BOLD}${CYAN}🌿 Push Destination:${RESET}"
echo "  ${ARROW} Current branch: ${MAGENTA}${current_branch}${RESET}"
read -rp "  ${ARROW} Push to branch? [Press Enter for '$current_branch' or type new]: " branch
branch=${branch:-$current_branch}

# Push confirmation
echo "\n${BOLD}${CYAN}🚀 Push Confirmation:${RESET}"
read -rp "  ${ARROW} Push ${MAGENTA}${branch}${RESET} to origin? (y/N): " confirm

if [[ ! "${confirm,,}" =~ ^(y|yes)$ ]]; then
  echo "\n  ${YELLOW}Push cancelled${RESET}"
  exit 0
fi

# Push execution
echo ""
if ! git ls-remote --exit-code origin "$branch" >/dev/null 2>&1; then
  echo "  ${YELLOW}⚠️ Branch '$branch' doesn't exist on remote${RESET}"
  read -rp "  ${ARROW} Create and push new branch? (y/N): " create
  if [[ "${create,,}" =~ ^(y|yes)$ ]]; then
    echo ""
    git push -u origin HEAD:"$branch" | sed 's/^/  /'
  else
    echo "\n  ${YELLOW}Operation aborted${RESET}"
    exit 0
  fi
else
  git push origin HEAD:"$branch" | sed 's/^/  /'
fi

# Success message
echo "\n${HR}"
echo "${BOLD}${GREEN}✅ Successfully pushed to ${MAGENTA}${branch}${RESET}"
echo "${BOLD}${GREEN}🚀 Your changes are now on origin/${branch}${RESET}"
echo "${HR}"

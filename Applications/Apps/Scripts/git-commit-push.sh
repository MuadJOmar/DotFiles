#!/bin/bash
set -e

# Text formatting
BOLD=$(tput bold)
GREEN=$(tput setaf 2)
YELLOW=$(tput setaf 3)
RED=$(tput setaf 1)
CYAN=$(tput setaf 6)
RESET=$(tput sgr0)

# Check Git repo
git rev-parse --is-inside-work-tree >/dev/null 2>&1 || {
  echo "${RED}${BOLD}Error: Not a Git repository${RESET}" >&2
  exit 1
}

echo "${CYAN}${BOLD}=== Current Repository Status ===${RESET}"
git status

# File selection with empty input handling
while true; do
  read -rp "${YELLOW}Enter files to add (space separated, 'a' for all, 'c' to cancel):${RESET} " files
  case "$files" in
    a|all) 
      git add .
      break
      ;;
    c|cancel)
      echo "${YELLOW}Operation cancelled${RESET}"
      exit 0
      ;;
    "")
      echo "${RED}No input detected. Please specify files or 'a' for all${RESET}"
      ;;
    *)
      git add -- $files 2>/dev/null || {
        echo "${RED}Error adding files. Check your input${RESET}"
        continue
      }
      break
      ;;
  esac
done

# Check for staged changes
if git diff --cached --quiet; then
  echo "${YELLOW}No changes to commit${RESET}"
  exit 0
fi

# Commit message with retry on empty input
while true; do
  read -rp "${YELLOW}Enter commit message:${RESET} " msg
  if [ -z "$msg" ]; then
    echo "${RED}Commit message cannot be empty${RESET}"
  else
    git commit -m "$msg"
    break
  fi
done

# Branch handling with better detached HEAD support
current_branch=$(git branch --show-current 2>/dev/null || echo "")
if [ -z "$current_branch" ]; then
  current_branch="(detached HEAD)"
  echo "${YELLOW}Warning: You're in detached HEAD state${RESET}"
fi

# Branch selection with default
read -rp "${YELLOW}Push to which branch? (default: '$current_branch'):${RESET} " branch
branch=${branch:-$current_branch}

# Push confirmation with retry
while true; do
  read -rp "${YELLOW}Push to ${CYAN}${BOLD}'$branch'${RESET}${YELLOW}? (y/n):${RESET} " confirm
  case "${confirm,,}" in
    y|yes) break ;;
    n|no)
      echo "${YELLOW}Push cancelled${RESET}"
      exit 0
      ;;
    *)
      echo "${RED}Invalid input. Please answer y/n${RESET}"
      ;;
  esac
done

# Branch creation logic
if ! git ls-remote --exit-code origin "$branch" >/dev/null 2>&1; then
  echo "${YELLOW}Branch '$branch' doesn't exist on remote${RESET}"
  read -rp "${YELLOW}Create and push new branch? (y/n):${RESET} " create
  if [[ "${create,,}" =~ ^y ]]; then
    git push -u origin HEAD:"$branch"
  else
    echo "${YELLOW}Operation aborted${RESET}"
    exit 0
  fi
else
  git push origin HEAD:"$branch"
fi

echo "${GREEN}${BOLD}✅ Successfully pushed to $branch${RESET}"
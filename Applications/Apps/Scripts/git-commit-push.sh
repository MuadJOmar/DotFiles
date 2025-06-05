#!/bin/bash
set -e

# Check Git repo
git rev-parse --is-inside-work-tree >/dev/null 2>&1 || {
  echo "Error: Not a Git repository" >&2
  exit 1
}

git status

read -rp "Enter files to add (or 'all'): " files
if [ "$files" = "all" ]; then
  git add .
else
  git add -- $files  # Handles special characters
fi

# Exit if nothing to commit
if git diff --cached --quiet; then
  echo "No changes to commit"
  exit 0
fi

# Commit with non-empty message
read -rp "Enter commit message: " msg
[ -z "$msg" ] && { echo "Error: Empty commit message" >&2; exit 1; }
git commit -m "$msg"

# Branch handling (works in detached HEAD)
current_branch=$(git symbolic-ref --short HEAD 2>/dev/null || echo "")
[ -z "$current_branch" ] && current_branch="(detached HEAD)"
read -rp "Push to which branch? (default: $current_branch): " branch
branch=${branch:-$current_branch}

# Push confirmation
read -rp "Push to '$branch'? (y/n): " confirm
if [[ "${confirm,,}" != "y" ]]; then
  echo "Push cancelled"
  exit 0
fi

# Create branch if missing
if ! git ls-remote --exit-code origin "$branch" >/dev/null 2>&1; then
  read -rp "Branch '$branch' doesn't exist. Create it? (y/n): " create
  [[ "${create,,}" = "y" ]] || exit 0
  git push -u origin HEAD:"$branch"
else
  git push origin HEAD:"$branch"  # Push current HEAD to branch
fi

echo "✅ Pushed to $branch"

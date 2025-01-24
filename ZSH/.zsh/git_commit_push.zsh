#This function simplifies Git workflows by automating commit and push operations with options for branch management, file staging, and error handling.

gcp() {
    set -e  # Exit immediately on any command failure

    local branch="${1:-main}"
    local remote="origin"
    local force_push=false
    local include_timestamp=true
    local files_to_stage="."
    local commit_message=""
    local max_retries=3
    local retry_count=0

    # Parse options
    while [[ $# -gt 0 ]]; do
        case "$1" in
            --force)
                force_push=true
                shift
                ;;
            --no-timestamp)
                include_timestamp=false
                shift
                ;;
            --files)
                [[ -n "$2" ]] && files_to_stage="$2" && shift 2 || { echo "Error: --files requires a path."; return 1; }
                ;;
            --message)
                [[ -n "$2" ]] && commit_message="$2" && shift 2 || { echo "Error: --message requires a commit message."; return 1; }
                ;;
            --help)
                echo "Usage: gcp [branch] [options]"
                echo "Options:"
                echo "  --force         Force-push changes to the remote branch."
                echo "  --no-timestamp  Exclude timestamp from the commit message."
                echo "  --files <path>  Stage specific files or directories (default: all changes)."
                echo "  --message <msg> Provide a commit message directly."
                echo "  --help          Show this help message."
                return 0
                ;;
            *)
                branch="$1"
                shift
                ;;
        esac
    done

    # Ensure inside a Git repository
    git rev-parse --is-inside-work-tree > /dev/null || { echo "Error: Not a Git repository."; return 1; }

    # Check or create branch
    if ! git show-ref --verify --quiet "refs/heads/$branch"; then
        git ls-remote --exit-code "$remote" "$branch" > /dev/null 2>&1 && {
            echo "Creating a local tracking branch for remote branch '$branch'..."
            git checkout -b "$branch" --track "$remote/$branch"
        } || { echo "Error: Branch '$branch' does not exist."; return 1; }
    fi

    # Switch to branch if needed
    [[ "$(git branch --show-current)" != "$branch" ]] && git checkout "$branch"

    # Prompt for commit message if not provided
    if [[ -z "$commit_message" ]]; then
        print -n "Enter your commit message: "
        read -r commit_message
    fi
    [[ -z "$commit_message" ]] && { echo "Error: Commit message cannot be empty."; return 1; }

    # Append timestamp if enabled
    [[ "$include_timestamp" == true ]] && commit_message="$commit_message (Commit made on $(date +"%A, %B %d, %Y at %I:%M %p"))"

    # Check if the specified path exists
    [[ -e "$files_to_stage" ]] || { echo "Error: Path '$files_to_stage' does not exist."; return 1; }

    # Stage files and commit
    git add "$files_to_stage"
    git commit -m "$commit_message"

    # Print a summary of changes
    echo "Staged Changes:"
    git show --stat

    # Pull latest changes
    echo "Pulling latest changes from $remote/$branch..."
    git pull "$remote" "$branch" || { echo "Error: Pull failed. Resolve conflicts before pushing."; return 1; }

    # Push with retries
    while (( retry_count < max_retries )); do
        echo "Pushing changes to $remote/$branch (Attempt $((retry_count + 1))/$max_retries)..."
        if $force_push; then
            if git push --force "$remote" "$branch"; then
                echo "Push successful."
                return 0
            else
                echo "Push failed. Retrying..."
            fi
        else
            if git push "$remote" "$branch"; then
                echo "Push successful."
                return 0
            else
                echo "Push failed. Retrying..."
            fi
        fi
        ((retry_count++))
        sleep 2  # Add delay between retries
    done

    echo "Error: Push failed after $max_retries attempts."
    return 1
}

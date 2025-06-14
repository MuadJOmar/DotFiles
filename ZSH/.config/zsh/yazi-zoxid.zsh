#The function uses **Zoxide** to resolve a directory and then launches **Yazi** in that directory, and then changes to that directory after quitting Yazi.

yy() {
    # Use zoxide to resolve the directory (fuzzy matching) if an argument is provided
    local target_dir
    if [ -n "$1" ]; then
        target_dir=$(zoxide query "$1")
    else
        target_dir="$PWD"  # Default to the current directory
    fi

    # Check if the directory exists
    if [ -z "$target_dir" ]; then
        echo "Directory not found."
        return 1
    fi

    # Create a temporary file to store the last directory from Yazi
    local temp_file=$(mktemp)

    # Launch Yazi in the target directory and pass the temp file
    yazi --cwd-file="$temp_file" "$target_dir"

    # Check if the temp file exists and read the last directory from it
    if [ -f "$temp_file" ]; then
        local last_dir=$(cat "$temp_file")
        if [ -d "$last_dir" ]; then
            # Change to the last directory
            cd "$last_dir"
        fi
        # Clean up the temp file
        rm -f "$temp_file"
    fi
}

eval "$(zoxide init --cmd cd zsh)"

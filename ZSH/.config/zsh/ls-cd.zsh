#This function automatically lists directory contents `ls` after `cd`, excluding specified directories.

if ! (($chpwd_functions[(I)chpwd_cdls])); then
    chpwd_functions+=(chpwd_cdls)
fi

function chpwd_cdls() {
    if [[ -o interactive ]]; then
        # List of directories to exclude
        local excluded_dirs=("/home/muadjomar")

        # Check if the current directory is in the excluded list
        for dir in "${excluded_dirs[@]}"; do
            if [[ "$PWD" == "$dir" ]]; then
                return
            fi
        done

        # Emulate Zsh options and run the command
        emulate -L zsh
        eval ${CD_LS_COMMAND:-ls}
    fi
}

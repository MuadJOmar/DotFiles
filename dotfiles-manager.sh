#!/bin/bash

# Dotfiles Manager with Interactive Exclusion
# For Arch Linux

# Check if running as root
if [ "$EUID" -eq 0 ]; then
    echo "Error: Do not run this script as root. Run as regular user."
    exit 1
fi

# Hardcoded list of directories to exclude
EXCLUDED_DIRS=(".git" "config-backups" "secrets" "old-dotfiles")

# Function to print the exclusion list
show_exclusions() {
    echo ""
    echo "════════════════════════════════════════"
    echo "CURRENT EXCLUSION LIST"
    echo "════════════════════════════════════════"
    printf '%s\n' "${EXCLUDED_DIRS[@]}" | sort
    echo "════════════════════════════════════════"
    echo ""
}

# Initial exclusion list display
show_exclusions

# Ask user about modifying exclusions
while true; do
    read -rp "Do you want to add more directories to exclude? [y/N] " yn
    case $yn in
        [Yy]* ) 
            echo ""
            echo "Enter additional directory names (space separated)"
            echo "Example: node_modules temp-files .config"
            read -rp "Additional exclusions: " -a more_exclusions
            
            # Add new exclusions if they don't already exist
            for new_excl in "${more_exclusions[@]}"; do
                if ! printf '%s\n' "${EXCLUDED_DIRS[@]}" | grep -qx "$new_excl"; then
                    EXCLUDED_DIRS+=("$new_excl")
                fi
            done
            
            show_exclusions
            ;;
        * ) 
            break
            ;;
    esac
done

# Final confirmation
echo "╔══════════════════════════════════════╗"
echo "║         FINAL CONFIGURATION          ║"
echo "╠══════════════════════════════════════╣"
echo "║ Excluded Directories: ${#EXCLUDED_DIRS[@]}"
printf "║   - %s\n" "${EXCLUDED_DIRS[@]}"
echo "╚══════════════════════════════════════╝"
echo ""

read -rp "Proceed with stow operation? [Y/n] " confirm
if [[ "$confirm" =~ [Nn] ]]; then
    echo "Operation cancelled by user"
    exit 0
fi

# Check and install GNU Stow
if ! command -v stow &> /dev/null; then
    echo "Installing GNU Stow..."
    sudo pacman -Sy --noconfirm stow
    if [ $? -ne 0 ]; then
        echo "Error: Failed to install GNU Stow"
        exit 1
    fi
    echo "GNU Stow installed successfully."
fi

# Get current script location
script_dir=$(cd "$(dirname "${BASH_SOURCE[0]}")" &> /dev/null && pwd)
cd "$script_dir" || exit 1

# Process directories
echo ""
echo "Starting stow operation..."
echo "───────────────────────────────"

processed=0
excluded=0

for dir in */; do
    dir_name="${dir%/}"
    
    # Check if directory is excluded
    if printf '%s\n' "${EXCLUDED_DIRS[@]}" | grep -qx "$dir_name"; then
        echo "❌ EXCLUDED: $dir_name"
        ((excluded++))
        continue
    fi
    
    echo "📦 STOWING: $dir_name"
    if stow -v -t ~ -R "$dir_name"; then
        echo "   ✅ Success"
        ((processed++))
    else
        echo "   ❗ Errors encountered - check output above"
    fi
    echo "───────────────────────────────"
done

# Summary report
echo ""
echo "╔══════════════════════════════════════╗"
echo "║            OPERATION SUMMARY         ║"
echo "╠══════════════════════════════════════╣"
echo "║ Stowed packages: $processed"
echo "║ Excluded packages: $excluded"
echo "║ Total packages: $((processed + excluded))"
echo "╚══════════════════════════════════════╝"
#!/usr/bin/env bash

# ========================================================
# Ultimate Package Manager for Arch Linux
# ========================================================

# Configuration
DB_FILE="$HOME/.package_manager_db.tsv"
BACKUP_DIR="$HOME/package_manager_backups"
TITLE="✨ Ultimate Package Manager"

# Catppuccin Mocha Color Scheme
COLOR_HEADER="\033[1;38;2;245;194;231m"        # Bold Pink
COLOR_OPTION="\033[1;38;2;148;226;213m"        # Bold Teal
COLOR_INPUT="\033[1;38;2;249;226;175m"         # Bold Yellow
COLOR_SUCCESS="\033[1;38;2;166;227;161m"       # Bold Green
COLOR_WARNING="\033[1;38;2;249;226;175m"       # Bold Yellow
COLOR_ERROR="\033[1;38;2;243;139;168m"         # Bold Red
COLOR_INFO="\033[1;38;2;137;180;250m"          # Bold Blue
COLOR_RESET="\033[0m"                          # Reset

# UI Elements
DIVIDER="${COLOR_HEADER}════════════════════════════════════════════════════════${COLOR_RESET}"
BOX_TOP="${COLOR_HEADER}╔════════════════════════════════════════════════════════╗${COLOR_RESET}"
BOX_MID="${COLOR_HEADER}║${COLOR_RESET}"
BOX_BOT="${COLOR_HEADER}╚════════════════════════════════════════════════════════╝${COLOR_RESET}"
ARROW="${COLOR_OPTION}➜${COLOR_RESET}"
CHECK="${COLOR_SUCCESS}✓${COLOR_RESET}"
WARN="${COLOR_WARNING}⚠${COLOR_RESET}"

PARU_REPO="https://aur.archlinux.org/paru.git"

# Initialize database and directories
init_db() {
    [ ! -f "$DB_FILE" ] && touch "$DB_FILE"
    mkdir -p "$BACKUP_DIR"
    touch ~/.package_manager_last_update
}

# Enhanced header with decorative elements
display_header() {
    clear
    echo -e "${BOX_TOP}"
    echo -e "${BOX_MID}   ${COLOR_HEADER}${TITLE}${COLOR_RESET} ${COLOR_INFO}::${COLOR_RESET} ${COLOR_OPTION}$(date +'%Y-%m-%d %H:%M')${COLOR_RESET}    ${BOX_MID}"
    echo -e "${BOX_MID}   ${COLOR_INFO}Manage packages with elegance and efficiency${COLOR_RESET}         ${BOX_MID}"
    echo -e "${BOX_BOT}"
    echo
}

# Check for script updates
check_for_updates() {
    current_mtime=$(stat -c %Y "$0" 2>/dev/null)
    last_mtime=$(cat ~/.package_manager_last_update 2>/dev/null)
    
    if [ -n "$current_mtime" ] && [ -n "$last_mtime" ] && [ "$current_mtime" -gt "$last_mtime" ]; then
        echo -e "${COLOR_INFO}ℹ Package manager has been updated! Restart recommended.${COLOR_RESET}"
        sleep 2
    fi
    
    echo "$current_mtime" > ~/.package_manager_last_update
}

# Ensure paru is installed
ensure_paru_installed() {
    if ! command -v paru &>/dev/null; then
        display_header
        echo -e "${COLOR_OPTION}🔧 Installing Paru (AUR Helper)${COLOR_RESET}"
        echo -e "${COLOR_INFO}This will take a few moments...${COLOR_RESET}"
        echo
        
        # Install dependencies
        if ! sudo pacman -S --needed base-devel git --noconfirm; then
            echo -e "${COLOR_ERROR}✗ Failed to install dependencies!${COLOR_RESET}"
            return 1
        fi
        
        # Clone and build paru
        temp_dir=$(mktemp -d)
        if ! git clone "$PARU_REPO" "$temp_dir"; then
            echo -e "${COLOR_ERROR}✗ Failed to clone paru repository!${COLOR_RESET}"
            rm -rf "$temp_dir"
            return 1
        fi
        
        # Build and install
        if ! (cd "$temp_dir" && makepkg -si --noconfirm); then
            echo -e "${COLOR_ERROR}✗ Failed to build and install paru!${COLOR_RESET}"
            rm -rf "$temp_dir"
            return 1
        fi
        
        # Cleanup
        rm -rf "$temp_dir"
        
        # Verify installation
        if ! command -v paru &>/dev/null; then
            echo -e "${COLOR_ERROR}✗ Paru installation failed! Please install manually.${COLOR_RESET}"
            return 1
        fi
        
        echo -e "${COLOR_SUCCESS}✓ Paru installed successfully!${COLOR_RESET}"
        sleep 2
    fi
    return 0
}

# Ensure dialog is installed
ensure_dialog_installed() {
    if ! command -v dialog &>/dev/null; then
        display_header
        echo -e "${COLOR_OPTION}🔧 Installing Dialog (for UI)${COLOR_RESET}"
        echo
        
        if ! sudo pacman -S dialog --noconfirm; then
            echo -e "${COLOR_ERROR}✗ Failed to install dialog!${COLOR_RESET}"
            return 1
        fi
        
        echo -e "${COLOR_SUCCESS}✓ Dialog installed successfully!${COLOR_RESET}"
        sleep 2
    fi
    return 0
}

# Add package with validation
add_package() {
    ensure_paru_installed || return
    
    while true; do
        display_header
        echo -e "${DIVIDER}"
        echo -e "  ${COLOR_HEADER}➕ Add New Package${COLOR_RESET}"
        echo -e "${DIVIDER}"
        echo -e "${COLOR_INFO}Leave package name empty to cancel${COLOR_RESET}"
        echo
        
        # Get package name
        read -p "$(echo -e "${COLOR_INPUT}${ARROW} Package name: ${COLOR_RESET}")" pkg
        [ -z "$pkg" ] && return
        
        # Validate package
        echo -e "${COLOR_INFO}${ARROW} Validating package...${COLOR_RESET}"
        if ! paru -Ss "^${pkg}$" &>/dev/null; then
            echo -e "${COLOR_ERROR}✗ Package '$pkg' not found in repositories${COLOR_RESET}"
            sleep 2
            continue
        fi
        
        # Check for duplicates
        if grep -q "^$pkg"$'\t' "$DB_FILE"; then
            echo -e "${COLOR_WARNING}⚠ Package '$pkg' already exists in database${COLOR_RESET}"
        fi
        
        # Get description and category
        read -p "$(echo -e "${COLOR_INPUT}${ARROW} Description: ${COLOR_RESET}")" desc
        read -p "$(echo -e "${COLOR_INPUT}${ARROW} Category: ${COLOR_RESET}")" category
        
        # Save to database
        echo -e "${pkg}\t${desc}\t${category}" >> "$DB_FILE"
        echo -e "\n${COLOR_SUCCESS}${CHECK} Package '$pkg' added successfully!${COLOR_RESET}"
        sleep 1
        return
    done
}

# Install packages with multi-select
install_packages() {
    ensure_paru_installed || return
    ensure_dialog_installed || return
    
    # Check if database is empty
    if [ ! -s "$DB_FILE" ]; then
        display_header
        echo -e "${COLOR_WARNING}⚠ Package database is empty!${COLOR_RESET}"
        sleep 2
        return
    fi
    
    # Prepare category selection
    local categories=("All" $(cut -f3 "$DB_FILE" | sort | uniq))
    local category_menu=()
    for i in "${!categories[@]}"; do
        category_menu+=("$i" "${categories[$i]}")
    done
    
    # Select category
    local category_choice
    category_choice=$(dialog --colors --backtitle "$TITLE" \
        --menu "Select category:" 15 40 8 \
        "${category_menu[@]}" \
        2>&1 >/dev/tty)
    
    [ -z "$category_choice" ] && return
    
    # Filter packages by category
    local package_list=()
    if [ "$category_choice" -eq 0 ]; then
        mapfile -t package_list < <(cut -f1 "$DB_FILE")
    else
        local selected_category="${categories[$category_choice]}"
        mapfile -t package_list < <(awk -F'\t' -v cat="$selected_category" \
            '$3 == cat {print $1}' "$DB_FILE")
    fi
    
    # Prepare checklist
    local checklist=()
    for pkg in "${package_list[@]}"; do
        checklist+=("$pkg" "" "off")
    done
    
    # Show multi-select dialog
    local selected
    selected=$(dialog --colors --backtitle "$TITLE" \
        --checklist "Select packages to install:" \
        20 60 15 \
        "${checklist[@]}" \
        2>&1 >/dev/tty)
    
    # Install selected packages
    if [ -n "$selected" ]; then
        display_header
        echo -e "${DIVIDER}"
        echo -e "  ${COLOR_OPTION}🚀 Installing Packages${COLOR_RESET}"
        echo -e "${DIVIDER}"
        echo -e "${COLOR_INFO}The following packages will be installed:"
        echo -e "${COLOR_SUCCESS}${selected// /, }${COLOR_RESET}"
        echo
        
        # Confirm installation
        read -p "$(echo -e "${COLOR_INPUT}${ARROW} Proceed with installation? (y/N): ${COLOR_RESET}")" confirm
        if [[ "$confirm" =~ ^[Yy]$ ]]; then
            echo
            paru -S $selected
            echo -e "\n${COLOR_SUCCESS}${CHECK} Installation completed!${COLOR_RESET}"
        else
            echo -e "\n${COLOR_WARNING}⚠ Installation canceled${COLOR_RESET}"
        fi
        sleep 2
    fi
}

# Export packages to file
export_packages() {
    display_header
    echo -e "${DIVIDER}"
    echo -e "  ${COLOR_OPTION}💾 Export Packages${COLOR_RESET}"
    echo -e "${DIVIDER}"
    echo
    
    # Check if database is empty
    if [ ! -s "$DB_FILE" ]; then
        echo -e "${COLOR_WARNING}⚠ Package database is empty!${COLOR_RESET}"
        sleep 2
        return
    fi
    
    # Format options
    PS3=$'\n'"$(echo -e "${COLOR_INPUT}${ARROW} Select export format: ${COLOR_RESET}")"
    local formats=("TSV (Tab-Separated Values)" "CSV (Comma-Separated Values)" "JSON (JavaScript Object Notation)" "Cancel")
    select format in "${formats[@]}"; do
        case $format in
            "TSV (Tab-Separated Values)")
                format="tsv"
                break
                ;;
            "CSV (Comma-Separated Values)")
                format="csv"
                break
                ;;
            "JSON (JavaScript Object Notation)")
                format="json"
                break
                ;;
            "Cancel")
                return
                ;;
            *)
                echo -e "${COLOR_ERROR}Invalid selection${COLOR_RESET}"
                ;;
        esac
    done
    
    # Get filename
    local default_file="packages_$(date +%Y%m%d_%H%M%S).$format"
    read -p "$(echo -e "${COLOR_INPUT}${ARROW} Output filename [$default_file]: ${COLOR_RESET}")" outfile
    outfile="${outfile:-$default_file}"
    
    # Export data
    case $format in
        tsv)
            cp "$DB_FILE" "$outfile"
            ;;
        csv)
            awk 'BEGIN {FS="\t"; OFS=","} {
                gsub(/"/, "\"\"", $0)
                $1 = "\"" $1 "\""
                $2 = "\"" $2 "\""
                $3 = "\"" $3 "\""
                print
            }' "$DB_FILE" > "$outfile"
            ;;
        json)
            awk 'BEGIN {FS="\t"; print "["}
                NR>1 {print ","}
                {
                    printf "  {\n"
                    printf "    \"package\": \"%s\",\n", $1
                    printf "    \"description\": \"%s\",\n", $2
                    printf "    \"category\": \"%s\"\n", $3
                    printf "  }"
                }
                END {print "\n]"} ' "$DB_FILE" > "$outfile"
            ;;
    esac
    
    echo -e "\n${COLOR_SUCCESS}${CHECK} Packages exported to ${COLOR_INFO}$outfile${COLOR_SUCCESS}!${COLOR_RESET}"
    sleep 2
}

# View package database
view_database() {
    display_header
    echo -e "${DIVIDER}"
    echo -e "  ${COLOR_OPTION}📋 Package Database${COLOR_RESET}"
    echo -e "${DIVIDER}"
    echo
    
    if [ ! -s "$DB_FILE" ]; then
        echo -e "${COLOR_INFO}Database is empty${COLOR_RESET}"
    else
        # Calculate column widths
        pkg_width=$(awk -F'\t' 'BEGIN {max=0} {if (length($1)>max) max=length($1)} END {print max+2}' "$DB_FILE")
        desc_width=$(awk -F'\t' 'BEGIN {max=0} {if (length($2)>max) max=length($2)} END {print max+2}' "$DB_FILE")
        cat_width=$(awk -F'\t' 'BEGIN {max=0} {if (length($3)>max) max=length($3)} END {print max+2}' "$DB_FILE")
        
        # Ensure minimum widths
        pkg_width=$(( pkg_width < 16 ? 16 : pkg_width ))
        desc_width=$(( desc_width < 20 ? 20 : desc_width ))
        cat_width=$(( cat_width < 16 ? 16 : cat_width ))
        
        # Print header
        printf "${COLOR_HEADER}%-${pkg_width}s %-${desc_width}s %-${cat_width}s${COLOR_RESET}\n" \
            "Package" "Description" "Category"
        echo -e "${COLOR_HEADER}$(printf '%*s' "$((pkg_width+desc_width+cat_width+2))" '' | tr ' ' '═')${COLOR_RESET}"
        
        # Print data
        awk -F'\t' -v pkg_width="$pkg_width" -v desc_width="$desc_width" -v cat_width="$cat_width" \
            -v color_success="$COLOR_SUCCESS" -v color_reset="$COLOR_RESET" \
            '{printf "%s%-"pkg_width"s %-"desc_width"s %-"cat_width"s%s\n", 
            color_success, $1, $2, $3, color_reset}' "$DB_FILE"
    fi
    
    echo
    read -p "$(echo -e "${COLOR_INPUT}${ARROW} Press Enter to continue...${COLOR_RESET}")"
}

# Backup packages
backup_packages() {
    display_header
    echo -e "${DIVIDER}"
    echo -e "  ${COLOR_OPTION}📦 Create Backup${COLOR_RESET}"
    echo -e "${DIVIDER}"
    echo
    
    timestamp=$(date +%Y%m%d_%H%M%S)
    backup_file="$BACKUP_DIR/package_db_$timestamp.bak"
    cp "$DB_FILE" "$backup_file"
    
    if [ $? -eq 0 ]; then
        echo -e "${COLOR_SUCCESS}${CHECK} Backup created:"
        echo -e "  ${COLOR_INFO}$backup_file${COLOR_RESET}"
    else
        echo -e "${COLOR_ERROR}✗ Backup failed!${COLOR_RESET}"
    fi
    sleep 2
}

# Restore from backup
restore_backup() {
    display_header
    echo -e "${DIVIDER}"
    echo -e "  ${COLOR_OPTION}🔄 Restore Backup${COLOR_RESET}"
    echo -e "${DIVIDER}"
    echo
    
    backups=($(ls -t "$BACKUP_DIR"/*.bak 2>/dev/null))
    if [ ${#backups[@]} -eq 0 ]; then
        echo -e "${COLOR_WARNING}No backups found${COLOR_RESET}"
        sleep 2
        return
    fi
    
    PS3=$'\n'"$(echo -e "${COLOR_INPUT}${ARROW} Select backup to restore: ${COLOR_RESET}")"
    select backup in "${backups[@]}" "Cancel"; do
        [ "$backup" = "Cancel" ] && return
        [ -n "$backup" ] && break
    done
    
    cp "$backup" "$DB_FILE"
    
    if [ $? -eq 0 ]; then
        echo -e "\n${COLOR_SUCCESS}${CHECK} Database restored from ${backup##*/}${COLOR_RESET}"
    else
        echo -e "\n${COLOR_ERROR}✗ Restore failed!${COLOR_RESET}"
    fi
    sleep 2
}

# Remove a package
remove_package() {
    display_header
    echo -e "${DIVIDER}"
    echo -e "  ${COLOR_OPTION}🗑️ Remove Package${COLOR_RESET}"
    echo -e "${DIVIDER}"
    echo
    
    mapfile -t packages < <(cut -f1 "$DB_FILE")
    if [ ${#packages[@]} -eq 0 ]; then
        echo -e "${COLOR_INFO}Database is empty${COLOR_RESET}"
        sleep 2
        return
    fi
    
    PS3=$'\n'"$(echo -e "${COLOR_INPUT}${ARROW} Select package to remove: ${COLOR_RESET}")"
    select pkg in "${packages[@]}" "Cancel"; do
        [ "$pkg" = "Cancel" ] && return
        [ -n "$pkg" ] && break
    done
    
    # Create temp file without the package
    grep -v "^$pkg"$'\t' "$DB_FILE" > "${DB_FILE}.tmp"
    mv "${DB_FILE}.tmp" "$DB_FILE"
    
    echo -e "\n${COLOR_SUCCESS}${CHECK} Package '$pkg' removed${COLOR_RESET}"
    sleep 2
}

# Search packages
search_packages() {
    display_header
    echo -e "${DIVIDER}"
    echo -e "  ${COLOR_OPTION}🔍 Search Packages${COLOR_RESET}"
    echo -e "${DIVIDER}"
    echo
    
    read -p "$(echo -e "${COLOR_INPUT}${ARROW} Search term: ${COLOR_RESET}")" term
    
    if [ -z "$term" ]; then
        echo -e "${COLOR_WARNING}⚠ No search term entered!${COLOR_RESET}"
        sleep 1
        return
    fi
    
    results=$(grep -i "$term" "$DB_FILE")
    
    if [ -z "$results" ]; then
        echo -e "${COLOR_INFO}No matching packages found${COLOR_RESET}"
    else
        # Calculate column widths
        pkg_width=$(echo "$results" | awk -F'\t' 'BEGIN {max=0} {if (length($1)>max) max=length($1)} END {print max+2}')
        desc_width=$(echo "$results" | awk -F'\t' 'BEGIN {max=0} {if (length($2)>max) max=length($2)} END {print max+2}')
        cat_width=$(echo "$results" | awk -F'\t' 'BEGIN {max=0} {if (length($3)>max) max=length($3)} END {print max+2}')
        
        # Ensure minimum widths
        pkg_width=$(( pkg_width < 16 ? 16 : pkg_width ))
        desc_width=$(( desc_width < 20 ? 20 : desc_width ))
        cat_width=$(( cat_width < 16 ? 16 : cat_width ))
        
        # Print header
        printf "${COLOR_HEADER}%-${pkg_width}s %-${desc_width}s %-${cat_width}s${COLOR_RESET}\n" \
            "Package" "Description" "Category"
        echo -e "${COLOR_HEADER}$(printf '%*s' "$((pkg_width+desc_width+cat_width+2))" '' | tr ' ' '═')${COLOR_RESET}"
        
        # Print results
        echo "$results" | awk -F'\t' -v pkg_width="$pkg_width" -v desc_width="$desc_width" -v cat_width="$cat_width" \
            -v color_success="$COLOR_SUCCESS" -v color_reset="$COLOR_RESET" \
            '{printf "%s%-"pkg_width"s %-"desc_width"s %-"cat_width"s%s\n", 
            color_success, $1, $2, $3, color_reset}'
    fi
    
    echo
    read -p "$(echo -e "${COLOR_INPUT}${ARROW} Press Enter to continue...${COLOR_RESET}")"
}

# Manage categories
manage_categories() {
    display_header
    echo -e "${DIVIDER}"
    echo -e "  ${COLOR_OPTION}📂 Manage Categories${COLOR_RESET}"
    echo -e "${DIVIDER}"
    echo
    
    categories=($(cut -f3 "$DB_FILE" | sort | uniq))
    
    if [ ${#categories[@]} -eq 0 ]; then
        echo -e "${COLOR_INFO}No categories found${COLOR_RESET}"
        sleep 2
        return
    fi
    
    PS3=$'\n'"$(echo -e "${COLOR_INPUT}${ARROW} Select operation: ${COLOR_RESET}")"
    options=(
        "List all categories"
        "Rename a category"
        "Delete a category"
        "Back to main menu"
    )
    
    select opt in "${options[@]}"; do
        case $opt in
            "List all categories")
                echo -e "\n${COLOR_HEADER}Existing Categories:${COLOR_RESET}"
                for cat in "${categories[@]}"; do
                    count=$(grep -c $'\t'"$cat"$ "$DB_FILE")
                    echo -e " • ${COLOR_SUCCESS}$cat${COLOR_RESET} (${count} packages)"
                done
                ;;
                
            "Rename a category")
                PS3=$'\n'"$(echo -e "${COLOR_INPUT}${ARROW} Select category to rename: ${COLOR_RESET}")"
                select old_cat in "${categories[@]}" "Cancel"; do
                    [ "$old_cat" = "Cancel" ] && break
                    [ -n "$old_cat" ] && break
                done
                
                read -p "$(echo -e "${COLOR_INPUT}${ARROW} New name for '$old_cat': ${COLOR_RESET}")" new_cat
                sed -i "s/\t$old_cat$/\t$new_cat/" "$DB_FILE"
                echo -e "\n${COLOR_SUCCESS}${CHECK} Category renamed${COLOR_RESET}"
                ;;
                
            "Delete a category")
                PS3=$'\n'"$(echo -e "${COLOR_INPUT}${ARROW} Select category to delete: ${COLOR_RESET}")"
                select cat in "${categories[@]}" "Cancel"; do
                    [ "$cat" = "Cancel" ] && break
                    [ -n "$cat" ] && break
                done
                
                # Remove all packages in category
                grep -v $'\t'"$cat"$ "$DB_FILE" > "${DB_FILE}.tmp"
                mv "${DB_FILE}.tmp" "$DB_FILE"
                echo -e "\n${COLOR_SUCCESS}${CHECK} Category '$cat' removed${COLOR_RESET}"
                ;;
                
            "Back to main menu")
                return
                ;;
        esac
        
        # Refresh categories after changes
        categories=($(cut -f3 "$DB_FILE" | sort | uniq))
    done
}

# Map menu options to commands
map_menu_option() {
    local input="$1"
    # Convert to lowercase for case insensitivity
    local lower_input=$(echo "$input" | tr '[:upper:]' '[:lower:]')
    
    case $lower_input in
        "1"|"add") echo "add" ;;
        "2"|"install") echo "install" ;;
        "3"|"view") echo "view" ;;
        "4"|"export") echo "export" ;;
        "5"|"backup") echo "backup" ;;
        "6"|"restore") echo "restore" ;;
        "7"|"remove") echo "remove" ;;
        "8"|"search") echo "search" ;;
        "9"|"manage") echo "manage" ;;
        "0"|"exit"|"quit") echo "exit" ;;
        *) echo "invalid" ;;
    esac
}

# Enhanced main menu
main_menu() {
    init_db
    check_for_updates
    
    while true; do
        display_header
        echo -e "${DIVIDER}"
        echo -e "  ${COLOR_HEADER}Main Menu${COLOR_RESET}"
        echo -e "${DIVIDER}"
        echo -e "  ${COLOR_OPTION}1${COLOR_RESET}  ${ARROW} Add package        ${COLOR_OPTION}[add]${COLOR_RESET}"
        echo -e "  ${COLOR_OPTION}2${COLOR_RESET}  ${ARROW} Install packages   ${COLOR_OPTION}[install]${COLOR_RESET}"
        echo -e "  ${COLOR_OPTION}3${COLOR_RESET}  ${ARROW} View package db    ${COLOR_OPTION}[view]${COLOR_RESET}"
        echo -e "  ${COLOR_OPTION}4${COLOR_RESET}  ${ARROW} Export packages    ${COLOR_OPTION}[export]${COLOR_RESET}"
        echo -e "${DIVIDER}"
        echo -e "  ${COLOR_OPTION}5${COLOR_RESET}  ${ARROW} Backup packages    ${COLOR_OPTION}[backup]${COLOR_RESET}"
        echo -e "  ${COLOR_OPTION}6${COLOR_RESET}  ${ARROW} Restore from backup ${COLOR_OPTION}[restore]${COLOR_RESET}"
        echo -e "  ${COLOR_OPTION}7${COLOR_RESET}  ${ARROW} Remove package     ${COLOR_OPTION}[remove]${COLOR_RESET}"
        echo -e "  ${COLOR_OPTION}8${COLOR_RESET}  ${ARROW} Search packages    ${COLOR_OPTION}[search]${COLOR_RESET}"
        echo -e "  ${COLOR_OPTION}9${COLOR_RESET}  ${ARROW} Manage categories  ${COLOR_OPTION}[manage]${COLOR_RESET}"
        echo -e "${DIVIDER}"
        echo -e "  ${COLOR_OPTION}0${COLOR_RESET}  ${ARROW} Exit              ${COLOR_OPTION}[exit]${COLOR_RESET}"
        echo -e "${DIVIDER}"
        echo
        
        read -p "$(echo -e "${COLOR_INPUT}${ARROW} Enter choice (number or text): ${COLOR_RESET}")" choice
        
        command=$(map_menu_option "$choice")
        
        case $command in
            "add") add_package ;;
            "install") install_packages ;;
            "view") view_database ;;
            "export") export_packages ;;
            "backup") backup_packages ;;
            "restore") restore_backup ;;
            "remove") remove_package ;;
            "search") search_packages ;;
            "manage") manage_categories ;;
            "exit")
                echo -e "\n${COLOR_SUCCESS}${CHECK} Exiting Package Manager. Goodbye!${COLOR_RESET}\n"
                exit 0
                ;;
            *)
                echo -e "\n${COLOR_ERROR}✗ Invalid option. Please try again.${COLOR_RESET}"
                sleep 1
                ;;
        esac
    done
}

# Start the application
main_menu

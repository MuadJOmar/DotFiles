#!/usr/bin/env bash

# ========================================================
# Ultimate Package Manager for Arch Linux
# ========================================================

DotFiles="${DotFiles:-$HOME/DotFiles}"
Scripts="${Scripts:-$HOME/Apps/Scripts}"
EXTRA_DIR="$DotFiles/Extra"
BACKUP_DIR="$EXTRA_DIR/Package-Manager-Backups"
DB_FILE="$EXTRA_DIR/.package_manager_db.tsv"
UPDATE_SCRIPT="$Scripts/update.sh"
TITLE="✨ Ultimate Package Manager"

COLOR_HEADER="\033[1;38;2;245;194;231m"
COLOR_OPTION="\033[1;38;2;148;226;213m"
COLOR_INPUT="\033[1;38;2;249;226;175m"
COLOR_SUCCESS="\033[1;38;2;166;227;161m"
COLOR_WARNING="\033[1;38;2;249;226;175m"
COLOR_ERROR="\033[1;38;2;243;139;168m"
COLOR_INFO="\033[1;38;2;137;180;250m"
COLOR_RESET="\033[0m"

DIVIDER="${COLOR_HEADER}════════════════════════════════════════════════════════${COLOR_RESET}"
ARROW="${COLOR_OPTION}➜${COLOR_RESET}"
CHECK="${COLOR_SUCCESS}✓${COLOR_RESET}"
WARN="${COLOR_WARNING}⚠${COLOR_RESET}"
DOT="${COLOR_OPTION}•${COLOR_RESET}"

PARU_REPO="https://aur.archlinux.org/paru.git"

ensure_paru_installed() {
    if command -v paru &>/dev/null; then
        return 0
    fi
    display_header
    echo -e "${COLOR_OPTION}🔧 Installing Paru (AUR Helper)${COLOR_RESET}"
    echo -e "${COLOR_INFO}This will take a few moments...${COLOR_RESET}"
    if ! sudo pacman -S --needed base-devel git --noconfirm; then
        echo -e "${COLOR_ERROR}✗ Failed to install dependencies!${COLOR_RESET}"
        return 1
    fi
    temp_dir=$(mktemp -d)
    if ! git clone "$PARU_REPO" "$temp_dir"; then
        echo -e "${COLOR_ERROR}✗ Failed to clone paru repository!${COLOR_RESET}"
        rm -rf "$temp_dir"
        return 1
    fi
    if ! (cd "$temp_dir" && makepkg -si --noconfirm); then
        echo -e "${COLOR_ERROR}✗ Failed to build and install paru!${COLOR_RESET}"
        rm -rf "$temp_dir"
        return 1
    fi
    rm -rf "$temp_dir"
    if ! command -v paru &>/dev/null; then
        echo -e "${COLOR_ERROR}✗ Paru installation failed! Please install manually.${COLOR_RESET}"
        return 1
    fi
    echo -e "${COLOR_SUCCESS}✓ Paru installed successfully!${COLOR_RESET}"
    sleep 2
    return 0
}

ensure_fzf_installed() {
    if command -v fzf &>/dev/null; then
        return 0
    fi
    display_header
    echo -e "${COLOR_OPTION}🔧 Installing fzf (Fuzzy Finder)${COLOR_RESET}"
    echo -e "${COLOR_INFO}This will take a few moments...${COLOR_RESET}"
    if ! sudo pacman -S --needed fzf --noconfirm; then
        echo -e "${COLOR_ERROR}✗ Failed to install fzf!${COLOR_RESET}"
        return 1
    fi
    if ! command -v fzf &>/dev/null; then
        echo -e "${COLOR_ERROR}✗ fzf installation failed! Please install manually.${COLOR_RESET}"
        return 1
    fi
    echo -e "${COLOR_SUCCESS}✓ fzf installed successfully!${COLOR_RESET}"
    sleep 2
    return 0
}

init_db() {
    mkdir -p "$EXTRA_DIR" "$BACKUP_DIR" || {
        echo -e "${COLOR_ERROR}✗ Failed to create directories${COLOR_RESET}" >&2
        exit 1
    }
    [ ! -f "$DB_FILE" ] && touch "$DB_FILE"
    touch ~/.package_manager_last_update 2>/dev/null
    validate_db
}

validate_db() {
    [ ! -f "$DB_FILE" ] && return
    local malformed=0
    local lineno=0
    while IFS= read -r line; do
        ((lineno++))
        [ -z "$line" ] && continue
        local fields
        fields=$(awk -F'\t' '{print NF}' <<< "$line")
        if [ "$fields" -ne 3 ]; then
            echo -e "${COLOR_WARNING}Warning: Malformed line $lineno in DB (should be 3 tab-separated fields):${COLOR_RESET}"
            echo "  $line"
            malformed=1
        fi
    done < "$DB_FILE"
    if [ "$malformed" -eq 1 ]; then
        echo -e "${COLOR_ERROR}Please fix or backup and recreate your package database.${COLOR_RESET}"
    fi
}

display_header() {
    clear
    echo -e "${COLOR_HEADER}${TITLE}${COLOR_RESET} ${COLOR_INFO}::${COLOR_RESET} ${COLOR_OPTION}$(date +'%Y-%m-%d %H:%M')${COLOR_RESET}"
    echo -e "${COLOR_INFO}Manage packages with elegance and efficiency${COLOR_RESET}"
    echo -e "${DIVIDER}\n"
}

add_package() {
    ensure_paru_installed || return
    while true; do
        display_header
        echo -e "${DIVIDER}"
        echo -e "  ${COLOR_HEADER}➕ Add New Package${COLOR_RESET}"
        echo -e "${DIVIDER}"
        echo -e "${COLOR_INFO}Leave package name empty or press Enter to cancel${COLOR_RESET}\n"
        if [ -s "$DB_FILE" ]; then
            echo -e "${COLOR_INFO}Existing categories:"
            cut -f3 "$DB_FILE" | sort | uniq | paste -sd, -
            echo -e "${COLOR_RESET}"
        fi
        read -e -p "$(echo -e "${COLOR_INPUT}${ARROW} Package name: ${COLOR_RESET}")" pkg || return
        [ -z "$pkg" ] && return
        echo -e "${COLOR_INFO}${ARROW} Validating package...${COLOR_RESET}"
        if ! paru -Ss "^${pkg}$" &>/dev/null; then
            echo -e "${COLOR_ERROR}✗ Package '$pkg' not found in repositories${COLOR_RESET}"
            sleep 2
            continue
        fi
        if grep -q "^$pkg"$'\t' "$DB_FILE"; then
            echo -e "${COLOR_WARNING}⚠ Package '$pkg' already exists in database${COLOR_RESET}"
        fi
        read -e -p "$(echo -e "${COLOR_INPUT}${ARROW} Description: ${COLOR_RESET}")" desc || return
        read -e -p "$(echo -e "${COLOR_INPUT}${ARROW} Category: ${COLOR_RESET}")" category || return
        echo -e "${pkg}\t${desc}\t${category}" >> "$DB_FILE"
        echo -e "\n${COLOR_SUCCESS}${CHECK} Package '$pkg' added successfully!${COLOR_RESET}"
        sleep 1
        return
    done
}

run_update_script() {
    if [ -x "$UPDATE_SCRIPT" ]; then
        echo -e "${COLOR_INFO}${ARROW} Running system update...${COLOR_RESET}"
        "$UPDATE_SCRIPT"
        return $?
    else
        echo -e "${COLOR_ERROR}✗ Update script not found at $UPDATE_SCRIPT${COLOR_RESET}"
        return 1
    fi
}

install_packages() {
    ensure_paru_installed || return
    ensure_fzf_installed || return
    if [ ! -s "$DB_FILE" ]; then
        display_header
        echo -e "${COLOR_WARNING}⚠ Package database is empty!${COLOR_RESET}"
        sleep 2
        return
    fi
    categories=("All" $(cut -f3 "$DB_FILE" | sort | uniq))
    selected_category=$(printf '%s\n' "${categories[@]}" | fzf --prompt="Select category: " --height=10 --border --ansi)
    [ -z "$selected_category" ] && return
    if [[ "$selected_category" == "All" ]]; then
        mapfile -t package_list < <(cut -f1 "$DB_FILE")
    else
        mapfile -t package_list < <(awk -F'\t' -v cat="$selected_category" '$3 == cat {print $1}' "$DB_FILE")
    fi
    if [ ${#package_list[@]} -eq 0 ]; then
        echo -e "${COLOR_WARNING}⚠ No packages found for category '$selected_category'${COLOR_RESET}"
        sleep 2
        return
    fi
    mapfile -t selected < <(printf '%s\n' "${package_list[@]}" | fzf --multi --prompt="Select package(s) to install: " --height=20 --border --ansi)
    if [ ${#selected[@]} -eq 0 ]; then
        echo -e "${COLOR_WARNING}⚠ No packages selected. Installation canceled.${COLOR_RESET}"
        sleep 1
        return
    fi
    display_header
    echo -e "${DIVIDER}"
    echo -e "  ${COLOR_OPTION}🚀 Installing Packages${COLOR_RESET}"
    echo -e "${DIVIDER}"
    echo -e "${COLOR_INFO}The following packages will be installed:"
    echo -e "${COLOR_SUCCESS}${selected[*]}${COLOR_RESET}"
    echo
    echo -e "${COLOR_INFO}${ARROW} Verifying packages...${COLOR_RESET}"
    valid_pkgs=()
    invalid_pkgs=()
    for pkg in "${selected[@]}"; do
        if paru -Ss "^${pkg}$" &>/dev/null; then
            valid_pkgs+=("$pkg")
        else
            invalid_pkgs+=("$pkg")
        fi
    done
    if [ ${#invalid_pkgs[@]} -gt 0 ]; then
        echo -e "${COLOR_ERROR}✗ The following packages are not available:"
        echo -e "  ${invalid_pkgs[*]}${COLOR_RESET}"
        echo
    fi
    if [ ${#valid_pkgs[@]} -eq 0 ]; then
        echo -e "${COLOR_ERROR}✗ No valid packages to install!${COLOR_RESET}"
        sleep 2
        return
    fi
    read -e -p "$(echo -e "${COLOR_INPUT}${ARROW} Proceed with installation? (y/N): ${COLOR_RESET}")" confirm
    [[ ! "$confirm" =~ ^[Yy]$ ]] && { echo -e "${COLOR_WARNING}⚠ Installation canceled${COLOR_RESET}"; sleep 1; return; }
    read -e -p "$(echo -e "${COLOR_INPUT}${ARROW} Run system update first? (y/N): ${COLOR_RESET}")" run_update
    if [[ "$run_update" =~ ^[Yy]$ ]]; then
        if run_update_script; then
            echo -e "${COLOR_SUCCESS}${CHECK} System updated successfully!${COLOR_RESET}"
        else
            echo -e "${COLOR_ERROR}✗ System update failed!${COLOR_RESET}"
        fi
        echo
    fi
    paru -S --needed --noconfirm "${valid_pkgs[@]}"
    echo -e "\n${COLOR_SUCCESS}${CHECK} Installation completed!${COLOR_RESET}"
    sleep 2
}

remove_package() {
    ensure_fzf_installed || return
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
    mapfile -t selected < <(printf '%s\n' "${packages[@]}" | fzf --multi --prompt="Select package(s) to remove: " --height=20 --border --ansi)
    if [ ${#selected[@]} -eq 0 ]; then
        echo -e "${COLOR_WARNING}⚠ No packages selected. Operation canceled.${COLOR_RESET}"
        sleep 1
        return
    fi
    for pkg in "${selected[@]}"; do
        grep -v "^$pkg"$'\t' "$DB_FILE" > "${DB_FILE}.tmp"
        mv "${DB_FILE}.tmp" "$DB_FILE"
        echo -e "${COLOR_SUCCESS}${CHECK} Package '$pkg' removed${COLOR_RESET}"
    done
    sleep 2
}

search_menu() {
    while true; do
        display_header
        echo -e "${DIVIDER}"
        echo -e "  ${COLOR_OPTION}🔍 Search Menu${COLOR_RESET}"
        echo -e "${DIVIDER}"
        echo -e "  ${DOT} ${COLOR_OPTION}Search Packages${COLOR_RESET}   [pkg]"
        echo -e "  ${DOT} ${COLOR_OPTION}Search Categories${COLOR_RESET} [cat]"
        echo -e "  ${DOT} ${COLOR_OPTION}Back${COLOR_RESET}             [back]"
        echo -e "${DIVIDER}\n"
        read -e -p "$(echo -e "${COLOR_INPUT}${ARROW} Enter choice: ${COLOR_RESET}")" search_choice
        case "$search_choice" in
            pkg) search_packages ;;
            cat) search_categories ;;
            back|"") return ;;
            *)
                echo -e "${COLOR_ERROR}✗ Invalid option.${COLOR_RESET}"
                sleep 1
                ;;
        esac
    done
}

search_packages() {
    ensure_fzf_installed || return
    display_header
    echo -e "${DIVIDER}"
    echo -e "  ${COLOR_OPTION}🔍 Search Packages${COLOR_RESET}"
    echo -e "${DIVIDER}"
    echo
    mapfile -t packages < <(awk -F'\t' '{printf "%-30s | %-40s | %-20s\n", $1, $2, $3}' "$DB_FILE")
    if [ ${#packages[@]} -eq 0 ]; then
        echo -e "${COLOR_INFO}Database is empty${COLOR_RESET}"
        read -e -p "$(echo -e "${COLOR_INPUT}${ARROW} Press Enter to continue...${COLOR_RESET}")"
        return
    fi
    result=$(printf '%s\n' "${packages[@]}" | fzf --prompt="Search packages: " --height=20 --border --ansi)
    if [ -z "$result" ]; then
        echo -e "${COLOR_WARNING}⚠ No selection made.${COLOR_RESET}"
        sleep 1
        return
    fi
    pkg_name=$(echo "$result" | awk -F '|' '{print $1}' | xargs)
    awk -F'\t' -v pkg="$pkg_name" '$1 == pkg { 
        print "\n'"${COLOR_HEADER}"'Package:'"${COLOR_RESET}"' " $1
        print "'"${COLOR_HEADER}"'Description:'"${COLOR_RESET}"' " $2
        print "'"${COLOR_HEADER}"'Category:'"${COLOR_RESET}"' " $3
    }' "$DB_FILE"
    echo
    read -e -p "$(echo -e "${COLOR_INPUT}${ARROW} Press Enter to continue...${COLOR_RESET}")"
}

search_categories() {
    ensure_fzf_installed || return
    display_header
    echo -e "${DIVIDER}"
    echo -e "  ${COLOR_OPTION}🔍 Search Categories${COLOR_RESET}"
    echo -e "${DIVIDER}"
    echo
    mapfile -t categories < <(cut -f3 "$DB_FILE" | sort | uniq)
    if [ ${#categories[@]} -eq 0 ]; then
        echo -e "${COLOR_INFO}No categories in database${COLOR_RESET}"
        read -e -p "$(echo -e "${COLOR_INPUT}${ARROW} Press Enter to continue...${COLOR_RESET}")"
        return
    fi
    result=$(printf '%s\n' "${categories[@]}" | fzf --prompt="Search categories: " --height=20 --border --ansi)
    if [ -z "$result" ]; then
        echo -e "${COLOR_WARNING}⚠ No category selected.${COLOR_RESET}"
        sleep 1
        return
    fi
    display_header
    echo -e "${COLOR_HEADER}Packages in category: $result${COLOR_RESET}"
    echo -e "${DIVIDER}"
    awk -F'\t' -v cat="$result" '{if ($3 == cat) printf "%-30s | %-40s\n", $1, $2}' "$DB_FILE"
    echo
    read -e -p "$(echo -e "${COLOR_INPUT}${ARROW} Press Enter to continue...${COLOR_RESET}")"
}

view_database() {
    display_header
    echo -e "${DIVIDER}"
    echo -e "  ${COLOR_OPTION}📋 Package Database${COLOR_RESET}"
    echo -e "${DIVIDER}"
    echo
    if [ ! -s "$DB_FILE" ]; then
        echo -e "${COLOR_INFO}Database is empty${COLOR_RESET}"
        read -e -p "$(echo -e "${COLOR_INPUT}${ARROW} Press Enter to continue...${COLOR_RESET}")"
        return
    fi
    pkg_width=$(awk -F'\t' 'BEGIN {max=0} {if (length($1)>max) max=length($1)} END {print max+2}' "$DB_FILE")
    desc_width=$(awk -F'\t' 'BEGIN {max=0} {if (length($2)>max) max=length($2)} END {print max+2}' "$DB_FILE")
    cat_width=$(awk -F'\t' 'BEGIN {max=0} {if (length($3)>max) max=length($3)} END {print max+2}' "$DB_FILE")
    pkg_width=$(( pkg_width < 16 ? 16 : pkg_width ))
    desc_width=$(( desc_width < 20 ? 20 : desc_width ))
    cat_width=$(( cat_width < 16 ? 16 : cat_width ))
    printf "${COLOR_HEADER}%-${pkg_width}s %-${desc_width}s %-${cat_width}s${COLOR_RESET}\n" "Package" "Description" "Category"
    separator_length=$((pkg_width + desc_width + cat_width + 2))
    printf "${COLOR_HEADER}%${separator_length}s${COLOR_RESET}\n" | tr ' ' '-'
    awk -F'\t' -v pkg_width="$pkg_width" -v desc_width="$desc_width" -v cat_width="$cat_width" \
        -v color_success="$COLOR_SUCCESS" -v color_reset="$COLOR_RESET" \
        '{printf "%s%-"pkg_width"s %-"desc_width"s %-"cat_width"s%s\n", color_success, $1, $2, $3, color_reset}' "$DB_FILE"
    echo
    read -e -p "$(echo -e "${COLOR_INPUT}${ARROW} Press Enter to continue...${COLOR_RESET}")"
}

export_packages() {
    display_header
    echo -e "${DIVIDER}"
    echo -e "  ${COLOR_OPTION}💾 Export Packages${COLOR_RESET}"
    echo -e "${DIVIDER}"
    echo
    if [ ! -s "$DB_FILE" ]; then
        echo -e "${COLOR_WARNING}⚠ Package database is empty!${COLOR_RESET}"
        sleep 2
        return
    fi
    echo "Export formats:"
    echo "- tsv"
    echo "- csv"
    echo "- json"
    echo "- cancel"
    echo
    read -e -p "$(echo -e "${COLOR_INPUT}${ARROW} Enter export format: ${COLOR_RESET}")" format
    case "$format" in
        tsv|TSV) format="tsv" ;;
        csv|CSV) format="csv" ;;
        json|JSON) format="json" ;;
        cancel|Cancel|"") return ;;
        *) echo -e "${COLOR_ERROR}Invalid selection${COLOR_RESET}"; sleep 1; return ;;
    esac
    local default_file="$EXTRA_DIR/packages_$(date +%Y%m%d_%H%M%S).$format"
    read -e -p "$(echo -e "${COLOR_INPUT}${ARROW} Output filename [${default_file}]: ${COLOR_RESET}")" outfile
    outfile="${outfile:-$default_file}"
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

backup_packages() {
    display_header
    echo -e "${DIVIDER}"
    echo -e "  ${COLOR_OPTION}📦 Create Backup${COLOR_RESET}"
    echo -e "${DIVIDER}"
    echo
    local default_file="backup_$(date +%Y%m%d_%H%M%S).tsv"
    read -e -p "$(echo -e "${COLOR_INPUT}${ARROW} Enter backup filename [${default_file}]: ${COLOR_RESET}")" backup_name
    backup_name="${backup_name:-$default_file}"
    backup_file="$BACKUP_DIR/$backup_name"
    cp "$DB_FILE" "$backup_file"
    if [ $? -eq 0 ]; then
        echo -e "${COLOR_SUCCESS}${CHECK} Backup created:"
        echo -e "  ${COLOR_INFO}$backup_file${COLOR_RESET}"
    else
        echo -e "${COLOR_ERROR}✗ Backup failed!${COLOR_RESET}"
    fi
    sleep 2
}

restore_backup() {
    display_header
    echo -e "${DIVIDER}"
    echo -e "  ${COLOR_OPTION}🔄 Restore Backup${COLOR_RESET}"
    echo -e "${DIVIDER}"
    echo
    mapfile -t backups < <(ls -t "$BACKUP_DIR"/* 2>/dev/null | grep -vF "$DB_FILE")

    if [ ${#backups[@]} -eq 0 ]; then
        echo -e "${COLOR_WARNING}No backups found in $BACKUP_DIR${COLOR_RESET}"
        sleep 2
        return
    fi

    echo -e "${COLOR_INFO}Available backups:${COLOR_RESET}"
    for i in "${!backups[@]}"; do
        echo "  $((i+1)). $(basename "${backups[$i]}")"
    done
    echo -e "${COLOR_INFO}Enter a number to restore that backup, or 'i' for interactive selection, or 0 to cancel.${COLOR_RESET}"
    read -e -p "$(echo -e "${COLOR_INPUT}${ARROW} Enter choice: ${COLOR_RESET}")" num
    local restore_file=""
    if [[ "$num" =~ ^[0-9]+$ ]]; then
        if [ "$num" -eq 0 ]; then
            echo -e "${COLOR_WARNING}⚠ Restore canceled${COLOR_RESET}"
            sleep 1
            return
        fi
        idx=$((num-1))
        if [ "$idx" -lt 0 ] || [ "$idx" -ge "${#backups[@]}" ]; then
            echo -e "${COLOR_ERROR}✗ Invalid selection${COLOR_RESET}"
            sleep 1
            return
        fi
        restore_file="${backups[$idx]}"
    elif [[ "$num" =~ ^[iI]$ ]]; then
        ensure_fzf_installed || return
        file=$(printf '%s\n' "${backups[@]}" | xargs -n1 basename | fzf --prompt="Select backup to restore: " --height=20 --border --ansi)
        [ -z "$file" ] && { echo -e "${COLOR_WARNING}⚠ Restore canceled${COLOR_RESET}"; sleep 1; return; }
        restore_file="$BACKUP_DIR/$file"
    else
        echo -e "${COLOR_ERROR}✗ Invalid input. Please try again.${COLOR_RESET}"
        sleep 1
        return
    fi
    echo -e "${COLOR_WARNING}Are you sure you want to restore '$(basename "$restore_file")'? This will overwrite your package database!${COLOR_RESET}"
    read -e -p "$(echo -e "${COLOR_INPUT}${ARROW} Confirm restore? (y/N): ${COLOR_RESET}")" confirm
    [[ ! "$confirm" =~ ^[Yy]$ ]] && { echo -e "${COLOR_WARNING}⚠ Restore canceled${COLOR_RESET}"; sleep 1; return; }
    cp "$restore_file" "$DB_FILE"
    if [ $? -eq 0 ]; then
        echo -e "\n${COLOR_SUCCESS}${CHECK} Database restored from $(basename "$restore_file")${COLOR_RESET}"
        validate_db
    else
        echo -e "\n${COLOR_ERROR}✗ Restore failed!${COLOR_RESET}"
    fi
    sleep 2
}

manage_categories() {
    ensure_fzf_installed || return
    while true; do
        display_header
        echo -e "${DIVIDER}"
        echo -e "  ${COLOR_OPTION}📂 Manage Categories${COLOR_RESET}"
        echo -e "${DIVIDER}"
        echo -e "${COLOR_INFO}Press Enter with no input to go back.${COLOR_RESET}"
        mapfile -t categories < <(cut -f3 "$DB_FILE" | sort | uniq)
        if [ ${#categories[@]} -eq 0 ]; then
            echo -e "${COLOR_INFO}No categories found${COLOR_RESET}"
            read -e -p "$(echo -e "${COLOR_INPUT}${ARROW} Press Enter to continue...${COLOR_RESET}")"
            return
        fi
        echo -e "${COLOR_OPTION}Available operations:${COLOR_RESET}"
        echo -e "  ${DOT} ${COLOR_OPTION}List all categories${COLOR_RESET}    [list]"
        echo -e "  ${DOT} ${COLOR_OPTION}Rename a category${COLOR_RESET}     [rename]"
        echo -e "  ${DOT} ${COLOR_OPTION}Delete a category${COLOR_RESET}     [delete]"
        echo -e "  ${DOT} ${COLOR_OPTION}Back to main menu${COLOR_RESET}     [back]"
        echo -e "${DIVIDER}"
        read -e -p "$(echo -e "${COLOR_INPUT}${ARROW} Select operation: ${COLOR_RESET}")" choice
        case "$choice" in
            list)
                echo -e "\n${COLOR_HEADER}Existing Categories:${COLOR_RESET}"
                for cat in "${categories[@]}"; do
                    count=$(grep -c $'\t'"$cat"$ "$DB_FILE")
                    echo -e " • ${COLOR_SUCCESS}$cat${COLOR_RESET} (${count} packages)"
                done
                read -e -p "$(echo -e "${COLOR_INPUT}${ARROW} Press Enter to continue...${COLOR_RESET}")"
                ;;
            rename)
                old_cat=$(printf '%s\n' "${categories[@]}" | fzf --prompt="Select category to rename: " --height=20 --border --ansi)
                [ -z "$old_cat" ] && continue
                read -e -p "$(echo -e "${COLOR_INPUT}${ARROW} New name for '$old_cat': ${COLOR_RESET}")" new_cat
                [ -z "$new_cat" ] && continue
                sed -i "s/\t$old_cat$/\t$new_cat/" "$DB_FILE"
                echo -e "\n${COLOR_SUCCESS}${CHECK} Category renamed${COLOR_RESET}"
                sleep 1
                ;;
            delete)
                del_cat=$(printf '%s\n' "${categories[@]}" | fzf --prompt="Select category to delete: " --height=20 --border --ansi)
                [ -z "$del_cat" ] && continue
                grep -v $'\t'"$del_cat"$ "$DB_FILE" > "${DB_FILE}.tmp"
                mv "${DB_FILE}.tmp" "$DB_FILE"
                echo -e "\n${COLOR_SUCCESS}${CHECK} Category '$del_cat' removed${COLOR_RESET}"
                sleep 1
                ;;
            back|"") return ;;
            *) echo -e "${COLOR_ERROR}✗ Invalid option. Please try again.${COLOR_RESET}"; sleep 1 ;;
        esac
    done
}

main_menu() {
    init_db
    while true; do
        display_header
        echo -e "  ${DOT} ${COLOR_OPTION}Add package${COLOR_RESET}        [add]"
        echo -e "  ${DOT} ${COLOR_OPTION}Install packages${COLOR_RESET}   [install]"
        echo -e "  ${DOT} ${COLOR_OPTION}View package db${COLOR_RESET}    [view]"
        echo -e "  ${DOT} ${COLOR_OPTION}Export packages${COLOR_RESET}    [export]"
        echo -e "${DIVIDER}"
        echo -e "  ${DOT} ${COLOR_OPTION}Backup packages${COLOR_RESET}    [backup]"
        echo -e "  ${DOT} ${COLOR_OPTION}Restore backup${COLOR_RESET}     [restore]"
        echo -e "  ${DOT} ${COLOR_OPTION}Remove package${COLOR_RESET}     [remove]"
        echo -e "  ${DOT} ${COLOR_OPTION}Search${COLOR_RESET}             [search]"
        echo -e "  ${DOT} ${COLOR_OPTION}Manage categories${COLOR_RESET}  [manage]"
        echo -e "${DIVIDER}"
        echo -e "  ${DOT} ${COLOR_OPTION}System update${COLOR_RESET}      [update]"
        echo -e "${DIVIDER}"
        echo -e "  ${DOT} ${COLOR_OPTION}Exit${COLOR_RESET}               [exit]"
        echo -e "${DIVIDER}\n"
        read -e -p "$(echo -e "${COLOR_INPUT}${ARROW} Enter choice (text): ${COLOR_RESET}")" choice
        case "$choice" in
            add) add_package ;;
            install) install_packages ;;
            view) view_database ;;
            export) export_packages ;;
            backup) backup_packages ;;
            restore) restore_backup ;;
            remove) remove_package ;;
            search) search_menu ;;
            manage) manage_categories ;;
            update) run_update_script ;;
            exit|quit)
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

main_menu
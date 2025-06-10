#!/usr/bin/env bash

# DotFiles Manage - Interactive GNU Stow manager with fzf and blacklist
# Theme: Catppuccin Mocha

# Catppuccin Mocha palette
MAUVE="\033[38;2;198;160;246m"
PINK="\033[38;2;245;194;231m"
RED="\033[38;2;243;139;168m"
GREEN="\033[38;2;166;227;161m"
YELLOW="\033[38;2;249;226;175m"
BLUE="\033[38;2;137;180;250m"
LAVENDER="\033[38;2;180;190;254m"
FLAMINGO="\033[38;2;242;205;205m"
SURFACE0="\033[48;2;30;30;46m"
TEXT="\033[38;2;205;214;244m"
RESET="\033[0m"

DOTFILES_ROOT="$(pwd)"
TARGET="$HOME"

BLACKLIST=("README.md" ".git" ".github" "scripts" "LICENSE")

term_width() {
  tput cols 2>/dev/null || echo 80
}

center_text() {
  local text="$1"
  local width=$(term_width)
  local text_length=${#text}
  local padding=$(( (width - text_length) / 2 ))
  printf "%*s%s\n" $padding "" "$text"
}

banner() {
  echo -e "${MAUVE}"
  echo
  center_text "╔══════════════════════════════════════════════╗"
  center_text "║          🗃️  DotFiles Manager  🗃️            ║"
  center_text "╚══════════════════════════════════════════════╝"
  echo -e "${RESET}"
}

menu_option() {
  # $1: hotkey, $2: label, $3: icon
  printf "  ${BLUE}%s${RESET} %s%s\n" "$1" "$2" "$3"
}

error() {
  echo -e "${RED}✗ $1${RESET}"
}

success() {
  echo -e "${GREEN}✓ $1${RESET}"
}

info() {
  echo -e "${LAVENDER}$1${RESET}"
}

# Install dependencies if missing, using pacman
check_dep() {
  if ! command -v "$1" &>/dev/null; then
    info "$1 not found. Installing..."
    sudo pacman -S --needed --noconfirm "$1" && success "$1 installed!" || { error "Could not install $1."; exit 1; }
  fi
}

# List stowable folders (not in blacklist)
list_stowable() {
  find "$DOTFILES_ROOT" -maxdepth 1 -mindepth 1 -type d \
    | sed "s|$DOTFILES_ROOT/||" \
    | while read -r dir; do
      [[ " ${BLACKLIST[*]} " =~ " $dir " ]] || echo "$dir"
    done
}

# Blacklist: Add
blacklist_add() {
  local available=()
  while IFS= read -r line; do
    available+=("$line")
  done < <(find "$DOTFILES_ROOT" -maxdepth 1 -mindepth 1 -type d | sed "s|$DOTFILES_ROOT/||" | while read -r dir; do
    [[ " ${BLACKLIST[*]} " =~ " $dir " ]] || echo "$dir"
  done)

  if [[ ${#available[@]} -eq 0 ]]; then
    error "No folders available to add to blacklist."
    return
  fi

  local selected=($(
    printf "%s\n" "${available[@]}" \
    | fzf --multi --header="Select folders to 🚫 blacklist (TAB to mark, Enter to confirm)" --preview="ls -a $DOTFILES_ROOT/{}"
  ))
  if [[ ${#selected[@]} -gt 0 ]]; then
    for folder in "${selected[@]}"; do
      # Only add if not already in blacklist
      [[ " ${BLACKLIST[*]} " =~ " $folder " ]] || BLACKLIST+=("$folder")
    done
    success "Blacklisted: ${selected[*]}"
  else
    info "No folders selected for blacklisting."
  fi
}

# Blacklist: Remove
blacklist_remove() {
  if [[ ${#BLACKLIST[@]} -eq 0 ]]; then
    error "Blacklist is already empty."
    return
  fi
  local selected=($(
    printf "%s\n" "${BLACKLIST[@]}" \
    | fzf --multi --header="Select folders to 🟢 remove from blacklist (TAB to mark, Enter to confirm)"
  ))
  if [[ ${#selected[@]} -gt 0 ]]; then
    for rem in "${selected[@]}"; do
      for i in "${!BLACKLIST[@]}"; do
        [[ "${BLACKLIST[i]}" == "$rem" ]] && unset 'BLACKLIST[i]'
      done
    done
    BLACKLIST=("${BLACKLIST[@]}")
    success "Removed from blacklist: ${selected[*]}"
  else
    info "No folders removed from blacklist."
  fi
}

# Blacklist submenu
edit_blacklist_menu() {
  while true; do
    clear
    banner
    info "🚫 Blacklist Wizard"
    menu_option "[A]" "Add to Blacklist" "  (🚫)"
    menu_option "[R]" "Remove from Blacklist" "  (🟢)"
    menu_option "[B]" "Back to Main Menu" ""
    echo
    read -n1 -rp "$(echo -e "${PINK}Choose [A/R/B]:${RESET} ")" blkey
    blkey="${blkey,,}"
    echo
    case "$blkey" in
      a)
        check_dep fzf
        blacklist_add
        ;;
      r)
        check_dep fzf
        blacklist_remove
        ;;
      b)
        break
        ;;
      *)
        error "Invalid option."
        ;;
    esac
    echo
    read -p "Press Enter to continue..."
  done
}

stow_selected() {
  local folders=("$@")
  for folder in "${folders[@]}"; do
    echo -e "${MAUVE}🔗 Linking ${LAVENDER}${folder}${RESET}..."
    stow -d "$DOTFILES_ROOT" -t "$TARGET" "$folder" && success "Linked $folder." || error "Failed to link $folder."
  done
}

unstow_selected() {
  local folders=("$@")
  for folder in "${folders[@]}"; do
    echo -e "${MAUVE}🪄 Unlinking ${LAVENDER}${folder}${RESET}..."
    stow -D -d "$DOTFILES_ROOT" -t "$TARGET" "$folder" && success "Unlinked $folder." || error "Failed to unlink $folder."
  done
}

show_blacklist() {
  echo -e "${YELLOW}Current Blacklist:${RESET}"
  if [[ ${#BLACKLIST[@]} -eq 0 ]]; then
    info "  (empty)"
    return
  fi
  for item in "${BLACKLIST[@]}"; do
    echo -e "  🚫 ${FLAMINGO}${item}${RESET}"
  done
}

# Stow menu
stow_menu() {
  while true; do
    clear
    banner
    info "✨ Link Dotfiles"
    menu_option "[A]" "Link All (except blacklisted)" "  (✨)"
    menu_option "[I]" "Interactive Select" "  (🧲 fzf)"
    menu_option "[B]" "Back" ""
    echo
    read -n1 -rp "$(echo -e "${PINK}Choose [A/I/B]:${RESET} ")" stowkey
    stowkey="${stowkey,,}"
    echo
    case "$stowkey" in
      a)
        folders=($(list_stowable))
        if [[ ${#folders[@]} -eq 0 ]]; then
          error "No folders to link."
        else
          stow_selected "${folders[@]}"
        fi
        ;;
      i)
        check_dep fzf
        folders=($(list_stowable | fzf --multi --header="Select folders to link (TAB to mark, Enter to confirm)" --preview="ls -a $DOTFILES_ROOT/{}"))
        if [[ ${#folders[@]} -eq 0 ]]; then
          info "No folders selected."
        else
          stow_selected "${folders[@]}"
        fi
        ;;
      b)
        break
        ;;
      *)
        error "Invalid option."
        ;;
    esac
    echo
    read -p "Press Enter to continue..."
  done
}

# Unstow menu
unstow_menu() {
  while true; do
    clear
    banner
    info "🪄 Unlink Dotfiles"
    menu_option "[A]" "Unlink All (except blacklisted)" "  (🪄)"
    menu_option "[I]" "Interactive Select" "  (🧲 fzf)"
    menu_option "[B]" "Back" ""
    echo
    read -n1 -rp "$(echo -e "${PINK}Choose [A/I/B]:${RESET} ")" unstowkey
    unstowkey="${unstowkey,,}"
    echo
    case "$unstowkey" in
      a)
        folders=($(list_stowable))
        if [[ ${#folders[@]} -eq 0 ]]; then
          error "No folders to unlink."
        else
          unstow_selected "${folders[@]}"
        fi
        ;;
      i)
        check_dep fzf
        folders=($(list_stowable | fzf --multi --header="Select folders to unlink (TAB to mark, Enter to confirm)" --preview="ls -a $DOTFILES_ROOT/{}"))
        if [[ ${#folders[@]} -eq 0 ]]; then
          info "No folders selected."
        else
          unstow_selected "${folders[@]}"
        fi
        ;;
      b)
        break
        ;;
      *)
        error "Invalid option."
        ;;
    esac
    echo
    read -p "Press Enter to continue..."
  done
}

main_menu() {
  while true; do
    clear
    banner
    info "Welcome, choose an action:"
    menu_option "[L]" "✨ Link Dotfiles" ""
    menu_option "[U]" "🪄 Unlink Dotfiles" ""
    menu_option "[B]" "🚫 Blacklist Wizard" ""
    menu_option "[S]" "👀 Show Blacklist" ""
    menu_option "[Q]" "❌ Quit" ""
    echo
    read -n1 -rp "$(echo -e "${PINK}Choose [L/U/B/S/Q]:${RESET} ")" key
    key="${key,,}"
    echo
    case "$key" in
      l)
        stow_menu
        ;;
      u)
        unstow_menu
        ;;
      b)
        edit_blacklist_menu
        ;;
      s)
        show_blacklist
        echo
        read -p "Press Enter to continue..."
        ;;
      q)
        echo -e "${GREEN}Bye!${RESET}"
        exit 0
        ;;
      *)
        error "Invalid option."
        sleep 1
        ;;
    esac
  done
}

# Entry point
check_dep stow
check_dep fzf
main_menu

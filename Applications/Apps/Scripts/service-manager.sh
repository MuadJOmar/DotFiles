#!/bin/bash

# Catppuccin Macchiato Palette
rosewater="\033[38;2;244;219;214m"
flamingo="\033[38;2;240;198;198m"
pink="\033[38;2;245;189;230m"
mauve="\033[38;2;198;160;246m"
red="\033[38;2;237;135;150m"
maroon="\033[38;2;238;153;160m"
peach="\033[38;2;245;169;127m"
yellow="\033[38;2;238;212;159m"
green="\033[38;2;166;218;149m"
teal="\033[38;2;139;213;202m"
sky="\033[38;2;145;215;227m"
sapphire="\033[38;2;125;196;228m"
blue="\033[38;2;138;173;244m"
lavender="\033[38;2;183;189;248m"
text="\033[38;2;202;211;245m"
subtext="\033[38;2;184;192;224m"
overlay="\033[38;2;165;173;203m"
surface="\033[38;2;36;39;58m"
base="\033[38;2;30;32;48m"
mantle="\033[38;2;24;25;38m"
crust="\033[38;2;22;19;32m"
reset="\033[0m"
bold="\033[1m"

OPERATIONS="start stop restart reload enable disable status is-active is-enabled list ls search"

# Show colorized usage/help
function usage() {
    echo -e "${overlay}${bold}"
    echo -e "╭─────────────────────────────────────────────────────────────╮"
    echo -e "│                       ${mauve}Service Manager${overlay}                         │"
    echo -e "╰─────────────────────────────────────────────────────────────╯${reset}"
    echo -e " ${yellow}Usage:${reset}"
    echo -e "   ${blue}Service Manager <service> <operation>${reset} ${subtext}"
    echo -e "   ${blue}Service Manager <service>${reset} ${subtext}(defaults to 'status')${reset}"
    echo -e "   ${blue}Service Manager <operation>${reset} ${subtext}(fzf to select service)${reset}"
    echo -e "   ${blue}Service Manager search${reset} ${subtext}(fzf to select service, then status)${reset}"
    echo -e "   ${blue}Service Manager list${reset} ${subtext}(lists all services)${reset}"
    echo -e ""
    echo -e " ${yellow}Examples:${reset}"
    echo -e "   ${green}Service Manager nginx restart${reset}"
    echo -e "   ${green}Service Manager restart nginx${reset}"
    echo -e "   ${green}Service Manager nginx${reset}"
    echo -e "   ${green}Service Manager restart${reset}"
    echo -e "   ${green}Service Manager search${reset}"
    echo -e "   ${green}Service Manager list${reset}"
    echo -e ""
    echo -e " ${yellow}Supported operations:${reset} ${pink}start${reset}, ${pink}stop${reset}, ${pink}restart${reset}, ${pink}reload${reset}, ${pink}enable${reset}, ${pink}disable${reset}, ${pink}status${reset}, ${pink}is-active${reset}, ${pink}is-enabled${reset}, ${pink}search${reset}"
    echo -e ""
    echo -e " ${subtext}Service Manager by Muad Omar${reset}"
}

# List all available services
function list_services() {
    echo -e "${mauve}Available systemd services:${reset}"
    systemctl list-units --type=service --all --no-pager --no-legend \
        | awk '{print $1 "\t" $4}' \
        | column -t \
        | sed "s/active/${green}&${reset}/g; s/inactive/${red}&${reset}/g"
}

# Use fzf to select a service
function fzf_select_service() {
    if ! command -v fzf >/dev/null 2>&1; then
        echo -e "${red}fzf not found! Please install fzf to use interactive search.${reset}"
        exit 2
    fi
    local svc
    svc=$(systemctl list-unit-files --type=service --no-legend | awk '{print $1}' | fzf --prompt="Select a service: ")
    if [[ -z "$svc" ]]; then
        echo -e "${red}No service selected.${reset}"
        exit 3
    fi
    echo "$svc"
}

# Detect operation and service name
service=""
operation=""

for arg in "$@"; do
    # Accept both list and ls as a command
    if [[ "${arg,,}" == "list" || "${arg,,}" == "ls" ]]; then
        operation="list"
    elif [[ "${arg,,}" == "search" ]]; then
        operation="search"
    elif [[ $OPERATIONS =~ (^|[[:space:]])$arg($|[[:space:]]) ]]; then
        operation="$arg"
    else
        service="$arg"
    fi
done

# No arguments: show help with Catppuccin colors
if [[ $# -eq 0 ]]; then
    usage
    exit 0
fi

# List mode
if [[ "${operation,,}" == "list" || "${operation,,}" == "ls" ]]; then
    list_services
    exit 0
fi

# Search mode: fzf for service, then status
if [[ "${operation,,}" == "search" ]]; then
    service=$(fzf_select_service)
    operation="status"
fi

# If only operation is provided, use fzf to pick service
if [[ -z "$service" && -n "$operation" && "$operation" != "search" && "$operation" != "list" ]]; then
    service=$(fzf_select_service)
fi

# If only one arg and it's not an operation: default to status
if [[ -z "$operation" && -n "$service" ]]; then
    operation="status"
fi

# Validate input
if [[ -z "$service" || -z "$operation" ]]; then
    usage
    exit 1
fi

# Add .service suffix if not present
if [[ "$service" != *.service ]]; then
    service="${service}.service"
fi

# Print the command being run (with color)
echo -e "${sapphire}→ sudo systemctl ${peach}${operation}${reset} ${lavender}${service}${reset}"

# Run the systemctl command
sudo systemctl $operation "$service"
exit_code=$?

if [[ $exit_code -ne 0 ]]; then
    echo -e "${red}✗ Operation failed. Check service name and permissions.${reset}"
    exit $exit_code
fi

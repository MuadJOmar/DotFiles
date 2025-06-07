#!/bin/bash
# Ultimate Service Manager with Visual Enhancements

# Catppuccin Mocha Colors
RED='\033[38;2;243;139;168m'
GREEN='\033[38;2;166;227;161m'
YELLOW='\033[1;38;2;249;226;175m'
BLUE='\033[38;2;137;180;250m'
PINK='\033[1;38;2;245;194;231m'
TEAL='\033[38;2;148;226;213m'
NC='\033[0m' # No Color

# UI Elements - Fixed box rendering
DIVIDER="${BLUE}══════════════════════════════════════════════════════════════${NC}"
BOX_TOP="${PINK}╔══════════════════════════════════════════════════════════════╗${NC}"
BOX_MID="${PINK}║${NC}"
BOX_BOT="${PINK}╚══════════════════════════════════════════════════════════════╝${NC}"
ARROW="${TEAL}➜${NC}"
CHECK="${GREEN}✓${NC}"
WARN="${YELLOW}⚠${NC}"

# Truncate long strings with ellipsis
truncate() {
    local str="$1"
    local max="$2"
    if [ ${#str} -gt $max ]; then
        echo "${str:0:$((max-3))}..."
    else
        echo "$str"
    fi
}

# Check systemd availability
if ! command -v systemctl &> /dev/null; then
    echo -e "${RED}Error: systemctl not found - requires systemd${NC}" >&2
    exit 1
fi

# Execute service action
execute_action() {
    local service_type="$1"
    local service_name="$2"
    local action="$3"
    
    echo -e "${YELLOW}Executing ${GREEN}$action ${YELLOW}on ${GREEN}$service_name${NC} (${BLUE}$service_type${NC})"
    
    # Handle system vs user services
    if [ "$service_type" = "system" ]; then
        case $action in
            status|start|stop|restart|enable|disable)
                sudo systemctl "$action" "$service_name"
                ;;
            logs)
                sudo journalctl -u "$service_name" -n 20 --no-pager
                ;;
            *)
                echo -e "${RED}Invalid action: $action${NC}" >&2
                return 1
                ;;
        esac
    else
        case $action in
            status|start|stop|restart|enable|disable)
                systemctl --user "$action" "$service_name"
                ;;
            logs)
                journalctl --user -u "$service_name" -n 20 --no-pager
                ;;
            *)
                echo -e "${RED}Invalid action: $action${NC}" >&2
                return 1
                ;;
        esac
    fi
    
    # Show status after modification actions
    if [[ $action =~ ^(start|stop|restart|enable|disable)$ ]]; then
        echo -e "\n${BLUE}Updated status:${NC}"
        if [ "$service_type" = "system" ]; then
            systemctl status "$service_name" --no-pager -l | head -n 10
        else
            systemctl --user status "$service_name" --no-pager -l | head -n 10
        fi
    fi
}

# Find service matches
find_service_matches() {
    local service_type="$1"
    local pattern="$2"
    
    if [ "$service_type" = "system" ]; then
        systemctl list-units --all --type=service --no-legend | \
            awk '{print $1}' | \
            sed 's/\.service$//' | \
            grep -i "$pattern" | \
            sort
    else
        systemctl --user list-units --all --type=service --no-legend | \
            awk '{print $1}' | \
            sed 's/\.service$//' | \
            grep -i "$pattern" | \
            sort
    fi
}

# Interactive service selection
select_service_interactive() {
    local service_type="$1"
    
    while true; do
        clear
        echo -e "${BOX_TOP}"
        echo -e "${BOX_MID}    ${PINK}S E R V I C E   S E L E C T I O N${NC}              ${BOX_MID}"
        echo -e "${PINK}╠${DIVIDER}╣${NC}"
        echo -e "${BOX_MID}  Service type: ${BLUE}$service_type${NC}                     ${BOX_MID}"
        echo -e "${BOX_MID}                                              ${BOX_MID}"
        echo -e "${BOX_MID}  Enter service name (partial match OK)        ${BOX_MID}"
        echo -e "${BOX_MID}  Type 'list' to see all services              ${BOX_MID}"
        echo -e "${BOX_MID}  Type 'back' to return                        ${BOX_MID}"
        echo -e "${BOX_MID}  Type 'exit' to quit                          ${BOX_MID}"
        echo -e "${BOX_BOT}"
        
        # Make input prompt visually distinct
        echo -en "${YELLOW}${ARROW} Search: ${NC}"
        read -r input
        
        # Handle special commands
        case $input in
            list)
                list_services_interactive "$service_type"
                continue
                ;;
            back)
                return 1
                ;;
            exit)
                exit 0
                ;;
        esac
        
        # Find matching services
        matches=$(find_service_matches "$service_type" "$input")
        
        if [ -z "$matches" ]; then
            echo -e "${RED}No services found matching '$input'${NC}"
            sleep 1
            continue
        fi
        
        # Handle single match
        if [ $(echo "$matches" | wc -l) -eq 1 ]; then
            SERVICE_NAME=$(echo "$matches" | head -1)
            return 0
        fi
        
        # Multiple matches - show selection menu
        clear
        echo -e "${BOX_TOP}"
        echo -e "${BOX_MID}    ${PINK}M A T C H I N G   S E R V I C E S${NC}            ${BOX_MID}"
        echo -e "${PINK}╠${DIVIDER}╣${NC}"
        echo -e "${BOX_MID}  Found multiple services:                     ${BOX_MID}"
        
        # Show services with numbers - fixed alignment for 3-digit numbers
        COUNT=1
        while IFS= read -r service; do
            # Truncate long service names
            service_display=$(truncate "$service" 55)
            # Format numbers to 3 digits for alignment
            printf -v count_padded "%3d" $COUNT
            echo -e "${BOX_MID}  ${BLUE}$count_padded${NC}) $service_display"
            ((COUNT++))
        done <<< "$matches"
        
        echo -e "${BOX_MID}                                              ${BOX_MID}"
        echo -e "${BOX_MID}  0) Back to search                           ${BOX_MID}"
        echo -e "${BOX_BOT}"
        
        # Make input prompt visually distinct
        echo -en "${YELLOW}${ARROW} Select service (number or name): ${NC}"
        read -r choice
        
        # Handle back option
        if [[ "$choice" == "0" || "$choice" =~ [Bb]ack ]]; then
            continue
        fi
        
        # Handle exit
        if [[ "$choice" =~ [Ee]xit ]]; then
            exit 0
        fi
        
        # Try numeric selection
        if [[ "$choice" =~ ^[0-9]+$ ]]; then
            if [ "$choice" -ge 1 ] && [ "$choice" -lt $COUNT ]; then
                SERVICE_NAME=$(echo "$matches" | sed -n "${choice}p")
                return 0
            fi
        fi
        
        # Try name selection
        if echo "$matches" | grep -iqw "$choice"; then
            SERVICE_NAME=$(echo "$matches" | grep -iw "$choice" | head -1)
            return 0
        fi
        
        echo -e "${RED}Invalid selection: '$choice'${NC}"
        sleep 1
    done
}

# List all services (interactive mode)
list_services_interactive() {
    local service_type="$1"
    
    clear
    echo -e "${BOX_TOP}"
    echo -e "${BOX_MID}    ${PINK}A L L   S E R V I C E S${NC}                   ${BOX_MID}"
    echo -e "${PINK}╠${DIVIDER}╣${NC}"
    
    # Get services
    services=$(find_service_matches "$service_type" ".*")
    
    # Show services with numbers - fixed alignment for 3-digit numbers
    COUNT=1
    while IFS= read -r service; do
        # Truncate long service names
        service_display=$(truncate "$service" 50)
        # Format numbers to 3 digits for alignment
        printf -v count_padded "%3d" $COUNT
        printf "${BOX_MID}  ${BLUE}%s${NC}) %-50s ${BOX_MID}\n" "$count_padded" "$service_display"
        ((COUNT++))
    done <<< "$services"
    
    echo -e "${BOX_MID}                                              ${BOX_MID}"
    echo -e "${BOX_MID}  0) Back to search                           ${BOX_MID}"
    echo -e "${BOX_BOT}"
    
    # Make input prompt visually distinct
    echo -en "${YELLOW}${ARROW} Select service (number or name): ${NC}"
    read -r choice
    
    # Handle back option
    if [[ "$choice" == "0" || "$choice" =~ [Bb]ack ]]; then
        return
    fi
    
    # Handle exit
    if [[ "$choice" =~ [Ee]xit ]]; then
        exit 0
    fi
    
    # Try numeric selection
    if [[ "$choice" =~ ^[0-9]+$ ]]; then
        if [ "$choice" -ge 1 ] && [ "$choice" -lt $COUNT ]; then
            SERVICE_NAME=$(echo "$services" | sed -n "${choice}p")
            return 0
        fi
    fi
    
    # Try name selection
    if echo "$services" | grep -iqw "$choice"; then
        SERVICE_NAME=$(echo "$services" | grep -iw "$choice" | head -1)
        return 0
    fi
    
    echo -e "${RED}Invalid selection: '$choice'${NC}"
    sleep 1
    list_services_interactive "$service_type"
}

# Enhanced action menu
action_menu_interactive() {
    local service_type="$1"
    local service_name="$2"
    
    # Truncate long service names
    local display_name
    display_name=$(truncate "$service_name" 30)
    
    while true; do
        clear
        echo -e "${BOX_TOP}"
        echo -e "${BOX_MID}    ${PINK}S E R V I C E   A C T I O N S${NC} [${TEAL}${display_name}${NC}] ${BOX_MID}"
        echo -e "${PINK}╠${DIVIDER}╣${NC}"
        echo -e "${BOX_MID}  ${BLUE}1${NC}  ${ARROW} Status        ${BLUE}5${NC}  ${ARROW} Enable       ${BOX_MID}"
        echo -e "${BOX_MID}  ${BLUE}2${NC}  ${ARROW} Start         ${BLUE}6${NC}  ${ARROW} Disable      ${BOX_MID}"
        echo -e "${BOX_MID}  ${BLUE}3${NC}  ${ARROW} Stop          ${BLUE}7${NC}  ${ARROW} Logs         ${BOX_MID}"
        echo -e "${BOX_MID}  ${BLUE}4${NC}  ${ARROW} Restart       ${BLUE}8${NC}  ${ARROW} Back         ${BOX_MID}"
        echo -e "${BOX_MID}                     ${BLUE}9${NC}  ${ARROW} Main Menu    ${BOX_MID}"
        echo -e "${BOX_BOT}"
        echo
        
        # Make input prompt visually distinct
        echo -en "${YELLOW}${ARROW} Select action [1-9 or name]: ${NC}"
        read -r input
        
        # Convert to lowercase for matching
        input_lower=$(echo "$input" | tr '[:upper:]' '[:lower:]')
        
        case $input_lower in
            1|status|stat)
                execute_action "$service_type" "$service_name" "status"
                ;;
            2|start|sta)
                execute_action "$service_type" "$service_name" "start"
                ;;
            3|stop|sto)
                execute_action "$service_type" "$service_name" "stop"
                ;;
            4|restart|res)
                execute_action "$service_type" "$service_name" "restart"
                ;;
            5|enable|ena)
                execute_action "$service_type" "$service_name" "enable"
                ;;
            6|disable|dis)
                execute_action "$service_type" "$service_name" "disable"
                ;;
            7|logs|log)
                execute_action "$service_type" "$service_name" "logs"
                ;;
            8|back|bac)
                return 0
                ;;
            9|menu|main)
                return 1
                ;;
            *) 
                echo -e "\n${RED}✗ Invalid action!${NC}"
                sleep 1 
                ;;
        esac
        
        [[ ! $input_lower =~ ^(8|9|back|bac|menu|main)$ ]] && read -rp $'\n'"$(echo -e "${YELLOW}${ARROW} Press Enter to continue...${NC}")"
    done
}

# Enhanced interactive mode - FIXED MAIN MENU RENDERING
interactive_mode() {
    while true; do
        clear
        # FIXED: Apply box elements to main menu
        echo -e "${BOX_TOP}"
        echo -e "${BOX_MID}    ${PINK}S E R V I C E   M A N A G E R${NC}               ${BOX_MID}"
        echo -e "${PINK}╠${DIVIDER}╣${NC}"
        echo -e "${BOX_MID}  ${BLUE}1${NC}  ${ARROW} System services (sudo)             ${BOX_MID}"
        echo -e "${BOX_MID}  ${BLUE}2${NC}  ${ARROW} User services                      ${BOX_MID}"
        echo -e "${BOX_MID}  ${BLUE}3${NC}  ${ARROW} Exit                               ${BOX_MID}"
        echo -e "${BOX_BOT}"
        echo
        
        # Make input prompt visually distinct
        echo -en "${YELLOW}${ARROW} Enter choice [1-3 or name]: ${NC}"
        read -r choice
        
        # Convert to lowercase for matching
        choice_lower=$(echo "$choice" | tr '[:upper:]' '[:lower:]')
        
        case $choice_lower in
            1|system|sys)
                SERVICE_TYPE="system" 
                ;;
            2|user|usr)
                SERVICE_TYPE="user" 
                ;;
            3|exit|exi)
                echo -e "\n${GREEN}${CHECK} Exiting. Goodbye!${NC}\n"
                exit 0 
                ;;
            *) 
                echo -e "\n${RED}✗ Invalid selection!${NC}"
                sleep 1
                continue 
                ;;
        esac
        
        if select_service_interactive "$SERVICE_TYPE"; then
            if action_menu_interactive "$SERVICE_TYPE" "$SERVICE_NAME"; then
                continue
            else
                continue
            fi
        else
            continue
        fi
    done
}

# Fixed non-interactive mode with flexible ordering
non_interactive_mode() {
    local service_type="system"  # Default to system services
    local action=""
    local service_name=""
    
    # Valid actions list
    local valid_actions=("status" "start" "stop" "restart" "enable" "disable" "logs")
    
    # Parse arguments with flexible ordering
    while [[ $# -gt 0 ]]; do
        case "$1" in
            --system|-s)
                service_type="system"
                shift
                ;;
            --user|-u)
                service_type="user"
                shift
                ;;
            *)
                # Check if argument is a valid action
                arg_lower=$(echo "$1" | tr '[:upper:]' '[:lower:]')
                
                if [[ " ${valid_actions[@]} " =~ " ${arg_lower} " ]]; then
                    # If we already have an action, it's an error
                    if [ -n "$action" ]; then
                        echo -e "${RED}Error: Multiple actions specified${NC}" >&2
                        exit 1
                    fi
                    action="$arg_lower"
                else
                    # If we already have a service name, it's an error
                    if [ -n "$service_name" ]; then
                        echo -e "${RED}Error: Multiple services specified${NC}" >&2
                        exit 1
                    fi
                    service_name="$1"
                fi
                shift
                ;;
        esac
    done
    
    # Validation
    if [ -z "$action" ]; then
        echo -e "${RED}Error: No action specified${NC}" >&2
        echo "Usage: $0 [--system|--user] [service] [action]"
        echo "       $0 [--system|--user] [action] [service]"
        exit 1
    fi
    
    if [ -z "$service_name" ]; then
        echo -e "${RED}Error: No service specified${NC}" >&2
        echo "Usage: $0 [--system|--user] [service] [action]"
        echo "       $0 [--system|--user] [action] [service]"
        exit 1
    fi
    
    # Execute the action
    execute_action "$service_type" "$service_name" "$action"
}

# Main script logic
if [ $# -gt 0 ]; then
    non_interactive_mode "$@"
else
    interactive_mode
fi
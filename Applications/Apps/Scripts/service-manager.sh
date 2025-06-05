#!/bin/bash
# Ultimate Service Manager with Fixed Non-Interactive Mode
# Supports flexible argument ordering in command-line mode

# Colors for better UX
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

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
        echo -e "${YELLOW}╔═══════════════════════════╗"
        echo -e "║    ${BLUE}SERVICE SELECTION${YELLOW}    ║"
        echo -e "╚═══════════════════════════╝${NC}"
        echo -e "Service type: ${BLUE}$service_type${NC}"
        echo -e "\nEnter service name (partial match OK)"
        echo -e "Type 'list' to see all services"
        echo -e "Type 'back' to return"
        echo -e "Type 'exit' to quit"
        
        read -rp "Search: " input
        
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
        echo -e "${YELLOW}╔═══════════════════════════╗"
        echo -e "║    ${BLUE}MATCHING SERVICES${YELLOW}   ║"
        echo -e "╚═══════════════════════════╝${NC}"
        echo -e "Found multiple services:"
        
        # Show services with numbers
        COUNT=1
        while IFS= read -r service; do
            printf "%2d) %s\n" $COUNT "$service"
            ((COUNT++))
        done <<< "$matches"
        
        echo -e "\n0) Back to search"
        
        read -rp "Select service (number or name): " choice
        
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
    echo -e "${YELLOW}╔═══════════════════════════╗"
    echo -e "║    ${BLUE}ALL SERVICES${YELLOW}        ║"
    echo -e "╚═══════════════════════════╝${NC}"
    
    # Get services
    services=$(find_service_matches "$service_type" ".*")
    
    # Show services with numbers
    COUNT=1
    while IFS= read -r service; do
        printf "%3d) %s\n" $COUNT "$service"
        ((COUNT++))
    done <<< "$services"
    
    echo -e "\n0) Back to search"
    
    read -rp "Select service (number or name): " choice
    
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

# Interactive action menu
action_menu_interactive() {
    local service_type="$1"
    local service_name="$2"
    
    while true; do
        clear
        echo -e "${YELLOW}╔═══════════════════════════╗"
        echo -e "║     ${BLUE}SERVICE ACTIONS${YELLOW}     ║"
        echo -e "╚═══════════════════════════╝${NC}"
        echo -e "Service: ${GREEN}$service_name${NC} (${BLUE}$service_type${NC})"
        echo -e "\nActions:"
        echo -e "  [1] Status    [5] Enable"
        echo -e "  [2] Start     [6] Disable"
        echo -e "  [3] Stop      [7] Logs"
        echo -e "  [4] Restart   [8] Back"
        echo -e "               [9] Main Menu"
        
        echo -e "\n${CYAN}Enter number or action name${NC}"
        echo -e "Examples: 'status', 'start', 'logs', 'back'"
        
        read -rp "Action: " input
        
        # Convert to lowercase for matching
        action_input=$(echo "$input" | tr '[:upper:]' '[:lower:]')
        
        # Handle input
        case $action_input in
            1|status|s)
                execute_action "$service_type" "$service_name" "status"
                read -rp $'\n'"Press Enter to continue..."
                ;;
            2|start|st)
                execute_action "$service_type" "$service_name" "start"
                read -rp $'\n'"Press Enter to continue..."
                ;;
            3|stop|sp)
                execute_action "$service_type" "$service_name" "stop"
                read -rp $'\n'"Press Enter to continue..."
                ;;
            4|restart|r)
                execute_action "$service_type" "$service_name" "restart"
                read -rp $'\n'"Press Enter to continue..."
                ;;
            5|enable|e)
                execute_action "$service_type" "$service_name" "enable"
                read -rp $'\n'"Press Enter to continue..."
                ;;
            6|disable|d)
                execute_action "$service_type" "$service_name" "disable"
                read -rp $'\n'"Press Enter to continue..."
                ;;
            7|logs|l|log)
                execute_action "$service_type" "$service_name" "logs"
                read -rp $'\n'"Press Enter to continue..."
                ;;
            8|back|b)
                return 0
                ;;
            9|menu|m)
                return 1
                ;;
            exit)
                exit 0
                ;;
            *)
                echo -e "${RED}Invalid action: '$input'${NC}"
                sleep 1
                ;;
        esac
    done
}

# Main interactive menu
interactive_mode() {
    while true; do
        clear
        echo -e "${YELLOW}╔═══════════════════════════╗"
        echo -e "║    ${BLUE}SERVICE MANAGER${YELLOW}    ║"
        echo -e "╚═══════════════════════════╝${NC}"
        echo -e "1) System services (sudo)"
        echo -e "2) User services"
        echo -e "3) Exit"
        echo -e "\n${CYAN}Enter number or name${NC}"
        echo -e "Examples: 'system', 'user', 'exit'"
        
        read -rp "Choice: " choice
        
        # Convert to lowercase for matching
        choice_input=$(echo "$choice" | tr '[:upper:]' '[:lower:]')
        
        case $choice_input in
            1|system|sys)
                SERVICE_TYPE="system"
                ;;
            2|user|usr)
                SERVICE_TYPE="user"
                ;;
            3|exit|quit|q)
                exit 0
                ;;
            *)
                echo -e "${RED}Invalid option: '$choice'${NC}"
                sleep 1
                continue
                ;;
        esac
        
        # Service selection
        if select_service_interactive "$SERVICE_TYPE"; then
            # Action menu
            if action_menu_interactive "$SERVICE_TYPE" "$SERVICE_NAME"; then
                # Back to service selection
                continue
            else
                # Back to main menu
                continue
            fi
        else
            # Back to main menu
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
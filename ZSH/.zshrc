export ZSH="$HOME/.zsh"

export STARSHIP_CONFIG=~/.config/starship/starship.toml
export EDITOR="micro"
export HISTCONTROL=ignoreboth:erasedups
export PATH="$PATH:/home/muadjomar/.local/bin" # Created by `pipx` on 2024-12-08 13:18:06

source $ZSH/.aliases
source $ZSH/.functions
source $ZSH/.plugins

eval "$(starship init zsh)"

fastfetch

HISTFILE=~/.zsh_history
HISTSIZE=10000
SAVEHIST=10000
#setopt appendhistory

export ZSH="$HOME/.zsh"

export STARSHIP_CONFIG=~/.config/starship/starship.toml
export EDITOR="nvim"
export HISTCONTROL=ignoreboth:erasedups

source $ZSH/.aliases
source $ZSH/.functions

eval "$(starship init zsh)"
eval "$(sheldon source)"

fastfetch

HISTFILE=~/.zsh_history
HISTSIZE=10000
SAVEHIST=10000
#setopt appendhistory

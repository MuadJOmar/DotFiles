export ZSH="$HOME/.zsh"
export CONF="$HOME/.config"

export STARSHIP_CONFIG=$CONF/starship/starship.toml
export EDITOR="nvim"
export HISTCONTROL=ignoreboth:erasedups

for file in $ZSH/*; do
  source "$file"
done

eval "$(starship init zsh)"
eval "$(sheldon source)"

fastfetch

HISTFILE=~/.zsh_history
HISTSIZE=10000
SAVEHIST=10000
#setopt appendhistory

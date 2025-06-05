export CONF="$HOME/.config"
export ZSH="$CONF/zsh"
export Scripts="$HOME/Apps/Scripts"

export STARSHIP_CONFIG=$CONF/starship/starship.toml
export EDITOR="nvim"
export HISTCONTROL=ignoreboth:erasedups

for file in $ZSH/*; do
  source "$file"
done

for file in $Scripts/*; do
  sudo chmod +x "$file"
done

eval "$(starship init zsh)"
eval "$(sheldon source)"

fastfetch

HISTFILE=$HOME/.zsh_history
HISTSIZE=10000
SAVEHIST=10000
#setopt appendhistory

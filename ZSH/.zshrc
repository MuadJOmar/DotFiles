export ZSH="$HOME/.oh-my-zsh"
source $ZSH/oh-my-zsh.sh

source $HOME/.zsh/.aliases
source $HOME/.zsh/.functions
source $HOME/.zsh/.plugins

export EDITOR="micro"
export HISTCONTROL=ignoreboth:erasedups

ZSH_THEME="dstufft"

fastfetch

HISTFILE=~/.zsh_history
HISTSIZE=10000
SAVEHIST=10000
#setopt appendhistory

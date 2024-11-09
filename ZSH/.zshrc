source $ZSH/oh-my-zsh.sh

export ZSH="$HOME/.oh-my-zsh"
export EDITOR="micro"
export HISTCONTROL=ignoreboth:erasedups

ZSH_THEME="dstufft"

plugins=(
    	git
    	vscode
    	archlinux
    	systemd
    	eza
    	zoxide
    	fzf
    	themes
           zsh-autosuggestions 
           zsh-syntax-highlighting 
           fast-syntax-highlighting
)


alias zshconfig="micro ~/.zshrc"
alias toipe="~/Apps/Toipe/toipe -w top5000 -n"
alias rm='trash'
alias pik='pikaur'
alias grub-update='pikaur'
alias ls="eza -a --color=always --long --git --no-filesize --icons=always --no-time --no-user --no-permissions"

eval "$(zoxide init --cmd cd zsh)"

function y() {
        local tmp="$(mktemp -t "yazi-cwd.XXXXXX")"
        yazi "$@" --cwd-file="$tmp"
        if cwd="$(cat -- "$tmp")" && [ -n "$cwd" ] && [ "$cwd" != "$PWD" ]; then
                builtin cd -- "$cwd"
        fi
        rm -f -- "$tmp"
}

fastfetch

HISTFILE=~/.zsh_history
HISTSIZE=10000
SAVEHIST=10000
setopt appendhistory

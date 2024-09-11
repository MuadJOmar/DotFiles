fastfetch

export ZSH="$HOME/.oh-my-zsh"

ZSH_THEME="dstufft"

plugins=(
    git
    archlinux
    zsh-autosuggestions
    zsh-syntax-highlighting
)

source $ZSH/oh-my-zsh.sh
export EDITOR=/usr/bin/micro
export EDITOR="micro"

alias zshconfig="micro ~/.zshrc"
alias ls="eza -a --color=always --long --git --no-filesize --icons=always --no-time --no-user --no-permissions"
#alias code="codium"
alias toipe="~/Apps/Toipe/toipe -w top5000 -n"
alias whats="tldr"
alias rm='trash -v'

eval "$(zoxide init --cmd cd zsh)"
eval "$(fzf --zsh)"
eval $(thefuck --alias wtf)

function yy() {
        local tmp="$(mktemp -t "yazi-cwd.XXXXXX")"
        yazi "$@" --cwd-file="$tmp"
        if cwd="$(cat -- "$tmp")" && [ -n "$cwd" ] && [ "$cwd" != "$PWD" ]; then
                builtin cd -- "$cwd"
        fi
        rm -f -- "$tmp"
}

HISTFILE=~/.zsh_history
HISTSIZE=10000
SAVEHIST=10000
setopt appendhistory

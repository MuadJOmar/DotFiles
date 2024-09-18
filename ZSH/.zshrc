fastfetch

export ZSH="$HOME/.oh-my-zsh"

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
)

source $ZSH/oh-my-zsh.sh
export EDITOR="micro"
export HISTCONTROL=ignoreboth:erasedups

alias zshconfig="micro ~/.zshrc"
alias ls="eza -a --color=always --long --git --no-filesize --icons=always --no-time --no-user --no-permissions"
alias toipe="~/Apps/Toipe/toipe -w top5000 -n"
alias rm='trash'

eval "$(zoxide init --cmd cd zsh)"

function y() {
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

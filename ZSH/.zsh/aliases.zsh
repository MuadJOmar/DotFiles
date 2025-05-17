alias toipe="~/Apps/Toipe/toipe -w top5000 -n"
alias ls="eza -a --color=always --long --git --no-filesize --icons=always --no-time --no-user --no-permissions"
alias mkinitcpio="sudo mkinitcpio -p linux"
alias grub-update="sudo grub-mkconfig -o /boot/grub/grub.cfg"
alias plymouth-list="sudo plymouth-set-default-theme -l"
alias plymouth-set="sudo plymouth-set-default-theme -R"
alias wine="flatpak run --command=winetricks org.winehq.Wine"

what() {
    tldr "$(fc -ln -1)"
}

eval "$(zoxide init --cmd cd zsh)"

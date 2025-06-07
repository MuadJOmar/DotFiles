alias alias-add="$Scripts/make-alias.sh"
alias toipe="~/Apps/Toipe/toipe -w top5000 -n"
alias ls="eza -a --color=always --long --git --no-filesize --icons=always --no-time --no-user --no-permissions --group-directories-first"
alias mkinitcpio="sudo mkinitcpio -p linux"
alias grub-update="sudo grub-mkconfig -o /boot/grub/grub.cfg"
alias plymouth-list="sudo plymouth-set-default-theme -l"
alias plymouth-set="sudo plymouth-set-default-theme -R"
alias winecfg="flatpak run --command=winetricks org.winehq.Wine"
alias update="$Scripts/update.sh"
alias add-vm="$Scripts/qemu-image.sh"
alias gcp="$Scripts/git-commit-push.sh"
alias sm='$Scripts/service-manager.sh'

what() {
    tldr "$(fc -ln -1)"
}

eval "$(zoxide init --cmd cd zsh)"


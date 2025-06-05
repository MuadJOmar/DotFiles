#!/bin/bash
# Create permanent Zsh aliases
read -rp "⌨️ Enter new command name: " cmdname
read -rp "💻 Enter full command: " fullcmd

echo "alias $cmdname='$fullcmd'" >> ~/.config/zsh/aliases.zsh
source ~/.config/zsh/aliases.zsh
echo "✅ Alias '$cmdname' created! Restart shell to make permanent."

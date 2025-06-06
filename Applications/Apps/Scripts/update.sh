#!/bin/bash
# Full system update with cleanup
set -e

echo "🚀 Starting a system update..."
sudo pacman -Syu --noconfirm
paru -Sua --noconfirm
echo "✅ Updates installed"

echo -e "\n🧹 Cleaning up..."
sudo pacman -Sc --noconfirm
sudo pacman -Rns $(pacman -Qtdq) --noconfirm 2>/dev/null || echo "No orphans found"
echo "✨ System clean!"

echo -e "\n🚀 Starting a flatpak update..."
flatpak update
echo "✅ Updates installed"

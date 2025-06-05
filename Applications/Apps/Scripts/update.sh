#!/bin/bash
# Full system update with cleanup
set -e

echo "🚀 Starting system update..."
sudo pacman -Syu --noconfirm
paru -Sua --noconfirm
echo "✅ Updates installed"

echo "🧹 Cleaning up..."
sudo pacman -Sc --noconfirm
sudo pacman -Rns $(pacman -Qtdq) --noconfirm 2>/dev/null || echo "No orphans found"
echo "✨ System clean!"

echo "🚀 Starting  a flatpak update..."
flatpak update
echo "✅ Updates installed"

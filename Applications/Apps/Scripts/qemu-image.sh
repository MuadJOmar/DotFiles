#!/bin/sh

# Prompt for disk size
read -p "Enter the disk size (e.g., '80G'): " size
while [[ -z "$size" ]]; do
    read -p "Size cannot be empty! Enter disk size: " size
done

# Prompt for filename
read -p "Enter output filename (without extension): " filename
while [[ -z "$filename" ]]; do
    read -p "Filename cannot be empty! Enter filename: " filename
done

# Create the disk image
qemu-img create -f qcow2 -o preallocation=off "${filename}.qcow2" "$size"

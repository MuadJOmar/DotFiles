--General Setup
local opts = { noremap = true, silent = true }

vim.g.mapleader = " "
vim.g.maplocalleader = " "

--Line Movement & Indentation
vim.keymap.set("v", "J", ":m '>+1<CR>gv=gv", { desc = "moves lines down in visual selection" })
vim.keymap.set("v", "K", ":m '<-2<CR>gv=gv", { desc = "moves lines up in visual selection" })
vim.keymap.set("v", "<", "<gv", { noremap = true, silent = true })
vim.keymap.set("v", ">", ">gv", { noremap = true, silent = true })

--Navigation Enhancements
vim.keymap.set("n", "<leader>e", vim.cmd.Neotree)
vim.keymap.set("n", "<C-d>", "<C-d>zz", { desc = "move down in buffer with cursor centered" })
vim.keymap.set("n", "<C-u>", "<C-u>zz", { desc = "move up in buffer with cursor centered" })
vim.keymap.set("n", "n", "nzzzv")
vim.keymap.set("n", "N", "Nzzzv")

--Clipboard & Paste Behavior
vim.keymap.set("x", "<leader>p", [["_dP]])
vim.keymap.set("v", "p", '"_dp', { noremap = true, silent = true })
vim.keymap.set("n", "<leader>Y", [["+Y]], { noremap = true, silent = true })
vim.keymap.set({ "n", "v" }, "<leader>d", [["_d]])
vim.keymap.set("n", "x", '"_x', { noremap = true, silent = true })

--Search Utilities
vim.keymap.set("n", "<C-c>", ":nohl<CR>", { desc = "Clear search hl", silent = true })

--General Editor Behavior
vim.keymap.set("n", "Q", "<nop>")

--File Permissions
vim.keymap.set("n", "<leader>x", "<cmd>!chmod +x %<CR>", { silent = true, desc = "makes file executable" })

--Editing & Formatting
vim.keymap.set("n", "<leader>f", vim.lsp.buf.format)
vim.keymap.set("n", "<leader>s", [[:%s/\<<C-r><C-w>\>/<C-r><C-w>/gI<Left><Left><Left>]],
    { desc = "Replace word cursor is on globally" })

--Visual Feedback (Highlight on Yank)
vim.api.nvim_create_autocmd("TextYankPost", {
    desc = "Highlight when yanking (copying) text",
    group = vim.api.nvim_create_augroup("kickstart-highlight-yank", { clear = true }),
    callback = function()
        vim.hl.on_yank()
    end,
})

--Tab Management
vim.keymap.set("n", "<leader>to", "<cmd>tabnew<CR>")   -- open new tab
vim.keymap.set("n", "<leader>tx", "<cmd>tabclose<CR>") -- close current tab
vim.keymap.set("n", "<leader>tn", "<cmd>tabn<CR>")     -- go to next
vim.keymap.set("n", "<leader>tp", "<cmd>tabp<CR>")     -- go to previous
vim.keymap.set("n", "<leader>tf", "<cmd>tabnew %<CR>") -- open current file in new tab

--Split Window Management
vim.keymap.set("n", "<leader>o", vim.cmd.only, { desc = "Close all other splits" })
vim.keymap.set("n", "<leader>sv", "<C-w>v", { desc = "Split window vertically" })
vim.keymap.set("n", "<leader>sh", "<C-w>s", { desc = "Split window horizontally" })
vim.keymap.set("n", "<leader>se", "<C-w>=", { desc = "Make splits equal size" })
vim.keymap.set("n", "<leader>sx", "<cmd>close<CR>", { desc = "Close current split" })

--File Utilities
vim.keymap.set("n", "<leader>fp", function()
    local filePath = vim.fn.expand("%:~")                -- Gets the file path relative to the home directory
    vim.fn.setreg("+", filePath)                         -- Copy the file path to the clipboard register
    print("File path copied to clipboard: " .. filePath) -- Optional: print message to confirm
end, { desc = "Copy file path to clipboard" })

--Netrw (File Explorer) Settings
vim.cmd("let g:netrw_banner = 0 ")

--Cursor & Line Numbering
vim.opt.guicursor = ""
vim.opt.nu = true
vim.opt.relativenumber = true

--Tabs & Indentation
vim.opt.tabstop = 4
vim.opt.softtabstop = 4
vim.opt.shiftwidth = 4
vim.opt.expandtab = true
vim.opt.autoindent = true
vim.opt.smartindent = true

--Line Wrapping
vim.opt.wrap = false

--Backups, Swap, Undo
vim.opt.swapfile = false
vim.opt.backup = false
vim.opt.undodir = os.getenv("HOME") .. "/.vim/undodir"
vim.opt.undofile = true

--Search
vim.opt.incsearch = true
vim.opt.inccommand = "split"
vim.opt.ignorecase = true
vim.opt.smartcase = true

--Colors & Appearance
vim.opt.termguicolors = true
vim.opt.background = "dark"
vim.opt.scrolloff = 8
vim.opt.signcolumn = "yes"
vim.opt.colorcolumn = "80"

--Backspace Behavior
vim.opt.backspace = { "start", "eol", "indent" }

--Splitting Windows
vim.opt.splitright = true
vim.opt.splitbelow = true

--File Names & Performance
vim.opt.isfname:append("@-@")
vim.opt.updatetime = 50

--Clipboard & Search Highlighting
vim.opt.clipboard:append("unnamedplus")
vim.opt.hlsearch = true

--Mouse Support
vim.opt.mouse = "a"

--EditorConfig
vim.g.editorconfig = true

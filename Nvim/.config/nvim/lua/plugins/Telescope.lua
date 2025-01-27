return {
	"nvim-telescope/telescope.nvim",
	tag = '0.1.8',
	dependencies = { 'nvim-lua/plenary.nvim' },
	config = function()
		local builtin = require('telescope.builtin')
		vim.keymap.set('n', '\\', builtin.find_files, { desc = 'Telescope find files' })
	end
    }

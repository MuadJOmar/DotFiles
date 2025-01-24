return {
	"nvim-treesitter/nvim-treesitter",
	build = ":TSUpdate",
	config = function()
		require'nvim-treesitter.configs'.setup {
		ensure_installed = {"bash", "c", "cpp", "css", "html", "javascript", "lua", "python", "rust"},
		highlight = { enable = true },
		indent = { enable = true }
		}
	end
}

local function enable_transparency()
    vim.api.nvim_set_hl(0, "Normal", { bg = "none"})
end
return {
  {
    "catppuccin/nvim",
    name = "catppuccin",
    config = function()
      vim.cmd("colorscheme catppuccin")
      enable_transparency()
    end,
  },
  {
      "nvim-lualine/lualine.nvim",
      dependencies = {
          "nvim-tree/nvim-web-devicons",
      },
      opts = {
          theme = 'catppuccin',
      }
  }
}

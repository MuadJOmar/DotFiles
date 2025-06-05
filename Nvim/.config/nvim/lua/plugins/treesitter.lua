return {

    "nvim-treesitter/nvim-treesitter",
    build = ":TSUpdate",
    config = function () 
      local configs = require("nvim-treesitter.configs")
      configs.setup({
          sync_install = false,
          highlight = { enable = true },
          indent = { enable = true },  
          autotag = { enable = true },
          ensure_installed = { "bash", "c", "cpp", "css", "javascript", "json", "html", "lua" },
      })
    end
 }

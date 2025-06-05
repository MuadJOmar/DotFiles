return {
    "nvim-neo-tree/neo-tree.nvim", -- Fixed repository name
    branch = "v3.x",
    dependencies = {
        "nvim-lua/plenary.nvim",       -- Fixed dependency
        "nvim-tree/nvim-web-devicons", -- Fixed dependency
        "MunifTanjim/nui.nvim",        -- Fixed dependency
        -- Uncomment if needed:
        -- { "3rd/image.nvim", opts = {} }  -- Optional image support
    },
    lazy = false,
    config = function()
        require("neo-tree").setup({ -- Fixed module name (hyphenated)
            filesystem = {
                filtered_items = {
                    visible = true,        -- Corrected option
                    hide_dotfiles = false, -- Corrected option
                    hide_gitignored = false,
                }
            }
        })
    end
}

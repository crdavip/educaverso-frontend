"use client";

import { useState } from "react";
import {
  Box,
  IconButton,
  Menu,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  MenuItem,
  Typography,
} from "@mui/material";
import { Sort, ExpandLess, ExpandMore } from "@mui/icons-material";
import { Logo } from "../logo/Logo";

interface Props {
  categories: string[];
}

export const MenuMobile = ({ categories }: Props) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Box sx={{ flexGrow: 1, alignItems: "center", display: { xs: "flex", md: "none" } }}>
      <Box>
        <IconButton
          size="small"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <Sort />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <List component="nav">
            <ListItemButton onClick={handleClick}>
              <ListItemText primary="Categorías" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {categories.map((category) => (
                  <ListItemButton key={category} onClick={handleCloseNavMenu} sx={{ pl: 4 }}>
                    <ListItemText primary={category} />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          </List>
          <MenuItem onClick={handleCloseNavMenu}>
            <Typography sx={{ textAlign: "center" }}>Explorar</Typography>
          </MenuItem>
        </Menu>
      </Box>
      <Box sx={{ ml: 2, display: "inline-flex" }}>
        <Logo />
      </Box>
    </Box>
  );
};

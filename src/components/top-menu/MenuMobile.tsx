"use client";

import { useState } from "react";
import Link from "next/link";
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
import { ProfessionalCategories } from "@/interfaces/category.interface";


interface Props {
  categories: ProfessionalCategories[];
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
              <ListItemText primary="Categorías" sx={{fontSize: "10px"}} />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {categories.map((category) => (
                  <Link key={category.slug} href={`/categoria/${category.slug}`}>
                    <ListItemButton onClick={handleCloseNavMenu} sx={{ pl: 4, paddingBlock: 0.5 }}>
                      <ListItemText secondary={category.name} />
                    </ListItemButton>
                  </Link>
                ))}
              </List>
            </Collapse>
          </List>
          <Link href="/explorar">
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography color="secondary" sx={{ textAlign: "center" }}>Explorar</Typography>
            </MenuItem>
          </Link>
          <Link href={`${process.env.NEXT_PUBLIC_FRONT_COURSES_URL}`}>
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography color="secondary" sx={{ textAlign: "center" }}>Cursos</Typography>
            </MenuItem>
          </Link>
        </Menu>
      </Box>
      <Box sx={{ ml: 2, display: "inline-flex" }}>
        <Logo />
      </Box>
    </Box>
  );
};

"use client";

import { useState } from "react";
import Link from "next/link";
import { KeyboardArrowDown } from "@mui/icons-material";
import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import { Logo } from "../logo/Logo";
import { ProfessionalCategories } from "@/interfaces/category.interface";

interface Props {
  categories: ProfessionalCategories[];
}

export const MenuPC = ({ categories }: Props) => {
  const [anchorElCategory, setAnchorElCategory] = useState<null | HTMLElement>(null);

  const handleOpenCategory = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElCategory(event.currentTarget);
  };

  const handleCloseCategory = () => {
    setAnchorElCategory(null);
  };

  const openCategory = Boolean(anchorElCategory);

  return (
    <Box sx={{ display: { xs: "none", md: "flex" } }}>
      <Box sx={{ mr: 4, display: "inline-flex" }}>
        <Logo />
      </Box>
      <Box sx={{ display: "flex" }}>
        <Button
          id="category-button"
          aria-controls="category-menu"
          aria-haspopup="true"
          aria-expanded="true"
          color="secondary"
          onClick={handleOpenCategory}
        >
          Categorías <KeyboardArrowDown />
        </Button>
        <Menu id="category-menu" anchorEl={anchorElCategory} open={openCategory} onClose={handleCloseCategory} disableScrollLock>
          {categories.map((category) => (
            <Link key={category.slug} href={`/categoria/${category.slug}`}>
              <MenuItem onClick={handleCloseCategory}>
                <Typography component="div" variant="body2" color="secondary">{category.name}</Typography>
              </MenuItem>
            </Link>
          ))}
        </Menu>
        <Link href="/explorar">
          <Button color="secondary" sx={{ my: 2, display: "block" }}>
            Explorar
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

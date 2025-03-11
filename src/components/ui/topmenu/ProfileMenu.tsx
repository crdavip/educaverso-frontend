"use client";

import { useState } from "react";
import { IconButton, Avatar, Menu, MenuItem, Typography } from "@mui/material";
import { Settings } from "@/interfaces";

interface Props {
  settings: Settings[];
}

export const ProfileMenu = ({ settings }: Props) => {

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        <Avatar alt="Remy Sharp" src="/avatar-default.jpg" />
      </IconButton>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem key={setting.title} onClick={handleCloseUserMenu}>
            <Typography component="div" variant="body2" sx={{ display: "flex", alignItems: "center", gap: 1 }}>{setting.icon} {setting.title}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

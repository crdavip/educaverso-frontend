"use client";

import { useState } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { IconButton, Avatar, Menu, MenuItem, Typography, Divider, Box } from "@mui/material";
import {
  DriveFolderUploadOutlined,
  LibraryBooksOutlined,
  PersonOutlined,
  PowerSettingsNewOutlined,
} from "@mui/icons-material";
import { logoutAction } from "@/data";
import styles from "./topmenu.module.scss";
import { UserDetail } from "@/interfaces";

interface Props {
  user: UserDetail;
}

export const ProfileMenu = ({ user }: Props) => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const onRedirectToProfile = (username: string) => {
    handleCloseUserMenu();
    redirect(`/${username}`);
  };

  const onLogout = () => {
    logoutAction();
    handleCloseUserMenu();
  };

  const profileImage = user.profileImage ? user.profileImage.url : "/avatar-default.jpg";

  return (
    <>
      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        <Avatar alt={user.user.username} src={profileImage} />
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
        disableScrollLock
      >
        <MenuItem onClick={() => onRedirectToProfile(user.user.username)} sx={{ gap: 2 }}>
          <Avatar alt={user.user.username} src={profileImage} />
          <Box>
            <Typography component="div" variant="body2" color="secondary">
              {`${user.firstname} ${user.lastname}`}
            </Typography>
            <Typography component="div" variant="caption" color="secondary">
              {`@${user.user.username}`}
            </Typography>
          </Box>
        </MenuItem>
        <Divider />
        <Link href="/perfil" className={styles.link}>
          <MenuItem onClick={handleCloseUserMenu}>
            <Typography component="div" variant="body2" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <PersonOutlined /> Perfil
            </Typography>
          </MenuItem>
        </Link>
        <Link href={`/admin-redirect`} className={styles.link} target="_blank">
          <MenuItem onClick={handleCloseUserMenu}>
            <Typography component="div" variant="body2" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <DriveFolderUploadOutlined /> Contenidos
            </Typography>
          </MenuItem>
        </Link>
        <Link href={`/course-redirect`} className={styles.link} target="_blank">
          <MenuItem onClick={handleCloseUserMenu}>
            <Typography component="div" variant="body2" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <LibraryBooksOutlined /> Cursos
            </Typography>
          </MenuItem>
        </Link>
        <MenuItem onClick={onLogout}>
          <Typography
            component="div"
            variant="body2"
            color="secondary"
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <PowerSettingsNewOutlined /> Cerrar Sesión
          </Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

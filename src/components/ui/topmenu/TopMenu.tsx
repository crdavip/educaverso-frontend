// import Link from "next/link";
import { AppBar, Box, Toolbar } from "@mui/material";
import { Logout, Person } from "@mui/icons-material";
import { MenuMobile } from "./MenuMobile";
import { MenuPC } from "./MenuPC";
import { ProfileMenu } from "./ProfileMenu";
import { ButtonsMenu } from "./ButtonsMenu";
import styles from "./topmenu.module.scss";

const categories = ["Programación", "Diseño", "Alimentación", "Fitness"];
const settings = [
  {
    title: "Perfil",
    icon: <Person />,
  },
  {
    title: "Cerrar Sesión",
    icon: <Logout />,
  },
];

export const TopMenu = () => {
  const isAuth = true;

  return (
    <AppBar component="header" className={styles.appBar} position="static">
      <Toolbar className={styles.toolbar}>
        {/* Menu PC */}
        <MenuPC categories={categories} />
        {/* Menu Movil */}
        <MenuMobile categories={categories} />
        {/* Perfil y Botones */}
        <Box sx={{ flexGrow: 0, display: "flex" }}>
          {!isAuth ? <ButtonsMenu /> : <ProfileMenu settings={settings} />}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

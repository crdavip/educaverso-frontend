import { AppBar, Toolbar } from "@mui/material";
import { MenuMobile, MenuPC, AuthMenu } from "../";
import { getCategories } from "@/data";
import styles from "./topmenu.module.scss";


export const TopMenu = async () => {
  const categories = await getCategories();

  return (
    <AppBar component="header" className={styles.appBar} position="static">
      <Toolbar className={styles.toolbar}>
        {/* Menu PC */}
        <MenuPC categories={categories} />

        {/* Menu Movil */}
        <MenuMobile categories={categories} />

        {/* Perfil y Botones */}
        <AuthMenu />
      </Toolbar>
    </AppBar>
  );
};

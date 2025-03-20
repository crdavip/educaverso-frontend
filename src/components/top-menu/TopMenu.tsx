import { AppBar, Box, Toolbar } from "@mui/material";
import { DriveFolderUploadOutlined, PersonOutlined, PowerSettingsNewOutlined } from "@mui/icons-material";
import { MenuMobile, MenuPC, ProfileMenu, ButtonsMenu} from '../';
import { getCategories } from "@/lib";
import styles from "./topmenu.module.scss";

const settings = [
  {
    title: "Perfil",
    icon: <PersonOutlined />,
  },
  {
    title: "Mi Contenido",
    icon: <DriveFolderUploadOutlined/>,
  },
  {
    title: "Cerrar Sesión",
    icon: <PowerSettingsNewOutlined />,
  },
];

export const TopMenu = async () => {

  const categories = await getCategories();

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

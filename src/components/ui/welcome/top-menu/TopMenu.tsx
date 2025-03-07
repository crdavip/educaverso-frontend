import { AppBar, Box, Button, Toolbar } from "@mui/material";
import styles from "./topmenu.module.scss";
import { Logo } from "../../educaverso/Logo";

export const TopMenu = () => {
  return (
    <nav>
      <AppBar className={styles.appBar} position="relative">
        <Toolbar className={styles.toolbar}>     
          <Logo />
          <Box className={styles.buttons}>
            <Button variant="contained" color="secondary">Ingresar</Button>
            <Button variant="contained" >
              Registrarse
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </nav>
  );
};

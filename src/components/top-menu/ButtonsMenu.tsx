import Link from "next/link";
import { Box, Button } from "@mui/material";
import styles from "./topmenu.module.scss";

export const ButtonsMenu = () => {
  return (
    <Box component="nav" className={styles.buttonGroup}>
      <Link href={"/auth/ingreso"}>
        <Button variant="contained" color="secondary">
          Ingresar
        </Button>
      </Link>
      <Link href={"/auth/registro"}>
        <Button variant="contained" className={styles.btnAlt}>
          Registrarse
        </Button>
      </Link>
    </Box>
  );
};

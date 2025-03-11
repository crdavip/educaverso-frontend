import Image from "next/image";
import { Grid2 as Grid, Typography } from "@mui/material";
import { Logo } from "@/components";
import styles from "./auth.module.scss";

interface Props {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: Props) {
  return (
    <Grid className={styles.main}>
      <Image src="/LogoImg.svg" alt="LogoImg" width={1024} height={1024} className={styles.mainBg} />
      <Grid component="header" className={styles.header}>
        <Logo />
      </Grid>
      <Grid component="main" container className={styles.wrapper}>
        {children}
      </Grid>
      <Grid component="footer" className={styles.footer}>
        <Typography variant="body2" textAlign="center" sx={{ mt: 2 }}>
          © {new Date().getFullYear()} Educaverso, Todos los derechos reservados
        </Typography>
      </Grid>
    </Grid>
  );
}

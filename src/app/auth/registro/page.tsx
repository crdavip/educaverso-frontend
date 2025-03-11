import { Box, Card, Grid2 as Grid, Typography } from "@mui/material";
import Link from "next/link";
import styles from "../auth.module.scss";
import { AuthAlternative, RegisterForm } from "@/components";

export default function RegistroPage() {
  return (
    <Grid className={styles.authWrapper}>
      <Card className={styles.authCard}>
        <Box className={styles.authCardTitle}>
          <Typography variant="h4">Registro</Typography>
          <Link href="/auth/ingreso">
            <Typography>¿Tienes una cuenta?</Typography>
          </Link>
        </Box>
        <RegisterForm />
      </Card>
      <AuthAlternative />
    </Grid>
  );
}

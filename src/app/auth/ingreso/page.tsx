import Link from "next/link";
import { Box, Card, Grid2 as Grid, Typography } from "@mui/material";
import { AuthAlternative, LoginForm } from "@/components";
import styles from "../auth.module.scss";

export default function IngresoPage() {
  return (
    <Grid className={styles.authWrapper}>
      <Card className={styles.authCard}>
        <Box className={styles.authCardTitle}>
          <Typography variant="h4">Ingreso</Typography>
          <Link href="/auth/registro">
            <Typography>¿No tienes cuenta?</Typography>
          </Link>
        </Box>
        <LoginForm />
      </Card>
      <AuthAlternative />
    </Grid>
  );
}

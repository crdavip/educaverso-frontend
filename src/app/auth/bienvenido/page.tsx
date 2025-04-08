import { Grid2 as Grid, Card, Box, Typography } from "@mui/material";
import { WelcomeForm } from "@/components";
import { getCategories, getUserMeLoader } from "@/data";
import styles from "../auth.module.scss";

export default async function WelcomePage() {
  const categories = await getCategories();
    const { data } = await getUserMeLoader();
    console.log(data);
  return (
    <Grid className={styles.welcomeWrapper}>
      <Card className={styles.authCard}>
        <Box sx={{mb: 2}}>
          <Typography variant="h4">Bienvenido</Typography>
          <Typography variant="body1">Por favor, completa tu perfil para continuar.</Typography>
        </Box>
        <WelcomeForm categories={categories} userId={data.id}/>
      </Card>
    </Grid>
  );
}

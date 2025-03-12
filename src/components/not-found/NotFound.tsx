import { Button, Container, Grid2 as Grid, Typography } from "@mui/material";
import styles from "./notfound.module.scss";
import Link from "next/link";
import Image from "next/image";

export const NotFound = () => {
  return (
    <Container
      className={styles.container}
      sx={{
        flexDirection: { xs: "column-reverse", md: "row" },
      }}
    >
      <Grid container columnSpacing={6} className={styles.wrapper}>
        <Grid size={{ xs: 12, md: 4 }} className={styles.wrapperTxt}>
          <Typography component="h2" variant="h1">
            404
          </Typography>
          <Typography>
            ¡Ooops! Lo sentimos, no hemos podido encontrar la página que buscas.
          </Typography>
          <Link href="/">
            <Button variant="contained" sx={{mt: 4}}>Regresar</Button>
          </Link>
        </Grid>
        <Grid size={{ xs: 12, md: 8 }} className={styles.wrapperImg}>
          <Image src="/404.svg" alt="404 Not Found" width={500} height={500}/>
        </Grid>
      </Grid>
    </Container>
  );
};

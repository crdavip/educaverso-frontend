import Image from "next/image"
import { Button, Container, Grid2 as Grid, Typography } from "@mui/material"

import styles from "./hero.module.scss";
import Link from "next/link";

export const Hero = () => {
  return (
    <Container component="section" className={styles.container} maxWidth={false}>
    <Grid className={styles.slider} container>
      <Grid className={styles.sliderTxt} size={{xs: 12, md: 6}}>
        <Typography component="h2" variant="h2">
          Impulsa tu marca
        </Typography>
        <Typography component="h3" variant="h3">con nuestra plataforma</Typography>
        <Typography fontSize={20}>
          Únete a nuestra comunidad de profesionales y muestra tu talento. Comparte tu experiencia y vende tus cursos
          para alcanzar nuevas oportunidades.
        </Typography>
        <Link href="/explorar">
          <Button variant="contained" color="secondary">
            Explorar
          </Button>
        </Link>
      </Grid>
      <Grid className={styles.sliderImg} size={{xs: 12, md: 6}}>
        <Image src="/hero-img-00.png" alt="Hero Img" width={1024} height={1024} priority />
      </Grid>
    </Grid>
  </Container>
  )
}
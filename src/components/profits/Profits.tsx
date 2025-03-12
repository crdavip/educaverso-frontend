import Image from "next/image";
import { Container, Grid2 as Grid, Typography } from "@mui/material";
import styles from "./profits.module.scss";

const profits = [
  {
    title: "Muestra tu perfil de manera efectiva",
    image: "swipe-profiles.svg",
    subtitle: "Crea un perfil que resalte tus habilidades.",
  },
  {
    title: "Exhibe tu portafolio y testimonios",
    image: "portfolio-feedback.svg",
    subtitle: "Comparte tus trabajos y lo que dicen de ti.",
  },
  {
    title: "Vende tus cursos y comparte tu conocimiento",
    image: "business-deal.svg",
    subtitle: "Ofrece tus cursos a una audiencia interesada.",
  },
];

export function Profits() {
  return (
    <Container component="section" className={styles.container}>
      <Grid container spacing={4} sx={{mb: "min(2rem, 4%)"}}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography>Conecta con otros</Typography>
          <Typography variant="h2" fontWeight={700} fontSize={30}>
            Descubre las características de nuestra plataforma
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography align="justify">
            Nuestra plataforma permite a los profesionales independientes mostrar su perfil de manera efectiva. Aquí,
            puedes exhibir tu portafolio y recibir testimonios que resalten tus habilidades. Además, tendrás la
            oportunidad de vender tus cursos y compartir tu conocimiento con otros.
          </Typography>
        </Grid>
      </Grid>
      <Grid container columnSpacing={8}>
        {profits.map((profit) => {
          return (
            <Grid key={profit.title} className={styles.profitCard} size={{ xs: 12, sm: 4 }}>
              <Image src={`/${profit.image}`} alt="Profit Image" width={500} height={500} className={styles.cardImg} />
              <Typography variant="h5" component="h3">
                {profit.title}
              </Typography>
              <Typography>{profit.subtitle}</Typography>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

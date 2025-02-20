import Image from 'next/image';
import { Container, Grid, Typography } from '@mui/material';
import styles from './profits.module.scss';

const profits = [
  {
    title: 'Muestra tu perfil de manera efectiva',
    image: 'swipe-profiles.svg',
    subtitle: 'Crea un perfil que resalte tus habilidades.',
  },
  {
    title: 'Exhibe tu portafolio y testimonios',
    image: 'portfolio-feedback.svg',
    subtitle: 'Comparte tus trabajos y lo que dicen de ti.',
  },
  {
    title: 'Vende tus cursos y comparte tu conocimiento',
    image: 'business-deal.svg',
    subtitle: 'Ofrece tus cursos a una audiencia interesada.',
  },
];

function Profits() {
  return (
    <Container component="section" className="section">
      <Grid container columnSpacing={3}>
        {profits.map((profit) => {
          return (
            <Grid item key={profit.title} className={styles.profitCard} md={4}>
              <Image src={`/${profit.image}`} alt="Profit Image" width={376} height={200} />
              <Typography variant="h4" fontWeight={700} fontSize={28}>
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

export default Profits;

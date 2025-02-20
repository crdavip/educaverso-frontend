import Image from 'next/image';
import {
  Box, Container, Grid, Typography,
} from '@mui/material';
import styles from './hero.module.scss';
import Button from '../Button';

function Hero() {
  return (
    <Container component="section" className={styles.hero} maxWidth={false}>
      <Box className={styles.heroContent} display="flex">
        <Grid className="heroText">
          <Typography variant="h2" fontWeight={700} fontSize={40}>
            Impulsa tu marca personal con nuestra plataforma
          </Typography>
          <Typography>
            Únete a nuestra comunidad de profesionales y muestra tu talento. Comparte tu experiencia y vende tus cursos
            para alcanzar nuevas oportunidades.
          </Typography>
          <Box display="flex" gap={2} marginTop={3}>
            <Button text="Unirse" url="#" alt />
            <Button text="Explorar" url="#" alt />
          </Box>
        </Grid>
        <Image src="/hero-img.png" alt="Hero Image" width={553} height={470} />
      </Box>
    </Container>
  );
}

export default Hero;

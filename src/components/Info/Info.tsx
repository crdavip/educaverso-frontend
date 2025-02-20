import { Container, Grid, Typography } from '@mui/material';

function Info() {
  return (
    <Container component="section" className="section">
      <Grid container spacing={4}>
        <Grid item lg={6}>
          <Typography>Conecta con otros</Typography>
          <Typography variant="h2" fontWeight={700} fontSize={30}>
            Descubre las características de nuestra plataforma
          </Typography>
        </Grid>
        <Grid item lg={6}>
          <Typography align="justify">
            Nuestra plataforma permite a los profesionales desempleados mostrar su perfil de manera efectiva. Aquí,
            puedes exhibir tu portafolio y recibir testimonios que resalten tus habilidades. Además, tendrás la
            oportunidad de vender tus cursos y compartir tu conocimiento con otros.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Info;

import { Container, Divider, Grid2 as Grid, Typography } from "@mui/material";
import { Logo } from "../logo/Logo";
import { ContactForm } from "@/components/forms/ContactForm";
import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <Container component="footer" className={styles.footer}>
      <Grid container component="section" className={styles.container}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Logo />
          <Typography variant="subtitle1" sx={{ marginBlock: 2 }}>
            Impulsa tu marca
          </Typography>
          <Typography variant="body2">
            Únete a nuestra comunidad de profesionales y muestra tu talento. Comparte tu experiencia y vende tus cursos
            para alcanzar nuevas oportunidades.
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }} className={styles.contactColumn}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
            Contacto
          </Typography>
          <Typography>¿Necesitas ayuda? Contáctanos:</Typography>
          <ContactForm />
        </Grid>
      </Grid>
      <Divider sx={{ mt: 4 }} />

      <Typography variant="body2" sx={{ mt: 2 }}>
        © {new Date().getFullYear()} Educaverso, Todos los derechos reservados
      </Typography>
    </Container>
  );
};

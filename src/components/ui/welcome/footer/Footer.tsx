import { Button, Container, Divider, FormControl, Grid2 as Grid, InputAdornment, TextField, Typography } from "@mui/material";
import { Logo } from "../../educaverso/Logo";
import styles from "./footer.module.scss";
import { AccountBox, EmailRounded, Phone } from "@mui/icons-material";

export const Footer = () => {
  return (
    <Container component="footer" className={styles.footer}>
        <Grid container component="section" className={styles.container}>
            <Grid size={{xs:12, md:4}}>
                <Logo />
                <Typography variant="subtitle1" sx={{marginBlock: 2}}>Impulsa tu marca</Typography>
                <Typography variant="body2">Únete a nuestra comunidad de profesionales y muestra tu talento.
                Comparte tu experiencia y vende tus cursos para alcanzar nuevas oportunidades.</Typography>
            </Grid>
            <Grid size={{xs:12, md:4}} className={styles.contactColumn}>
                <Typography variant="h5" sx={{fontWeight: 700, mb: 3}}>Contacto</Typography>
                <Typography>¿Necesitas ayuda? Contáctanos:</Typography>
                <form>
                    <FormControl fullWidth>
                        <TextField
                            id="fullname"
                            label="Nombre completo"
                            slotProps={{
                            input: {
                                startAdornment: (
                                <InputAdornment position="start">
                                    <AccountBox />
                                </InputAdornment>
                                ),
                            },
                            }}
                            variant="outlined"
                            margin="normal"
                        />
                        <TextField
                            id="email"
                            label="Correo"
                            slotProps={{
                            input: {
                                startAdornment: (
                                <InputAdornment position="start">
                                    <EmailRounded />
                                </InputAdornment>
                                ),
                            },
                            }}
                            variant="outlined"
                            margin="normal"
                        />
                        <TextField
                            id="phone"
                            label="Teléfono"
                            slotProps={{
                            input: {
                                startAdornment: (
                                <InputAdornment position="start">
                                    <Phone />
                                </InputAdornment>
                                ),
                            },
                            }}
                            variant="outlined"
                            margin="normal"
                        />
                        <Button type="submit" variant="contained" sx={{width: 200, mt: 2}}>Enviar</Button>
                    </FormControl>
                </form>
                
            </Grid>
        </Grid>
        <Divider sx={{mt: 4}}/>

      <Typography variant="body2" sx={{mt: 2}}>© {new Date().getFullYear()} Educaverso, Todos los derechos reservados</Typography>
    </Container>
  );
};

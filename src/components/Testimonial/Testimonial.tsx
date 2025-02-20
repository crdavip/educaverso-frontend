import { Star } from "@mui/icons-material";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./testimonial.module.scss";
import Divider from "../Divider";

const testimonials = [
  {
    rating: "5.0",
    text: '"Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec."',
    image: "avatar.png",
    name: "Independiente 1",
    role: "Ocupación del independiente",
  },
  {
    rating: "5.0",
    text: '"Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec."',
    image: "avatar-2.png",
    name: "Independiente 2",
    role: "Ocupación del independiente",
  },
];

function Testimonial() {
  return (
    <Container component="section" className="section">
      <Divider />
      <Typography variant="h2" fontWeight={700} fontSize={30} marginTop={6}>
        Testimonios de independientes
      </Typography>
      <Typography marginBottom={3}>He encontrado oportunidades increíbles gracias a esta plataforma.</Typography>
      <Grid container spacing={3}>
        {testimonials.map((testimonial) => {
          return (
            <Grid key={testimonial.name} item md={6} display="flex" direction="column" gap={2}>
              <Box display="flex" alignItems="center">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
                <Typography fontWeight={700} fontSize={18} lineHeight={0.5} paddingLeft={1.5}>
                  {testimonial.rating}
                </Typography>
              </Box>
              <Typography component="i">{testimonial.text}</Typography>
              <Grid container columnGap={3}>
                <Grid item className={styles.userTestimony}>
                  <Image src={`/${testimonial.image}`} alt="Avatar" width={100} height={100} />
                </Grid>
                <Grid item display="flex" direction="column" justifyContent="center" alignItems="flex-start">
                  <Typography fontWeight={700}>{testimonial.name}</Typography>
                  <Typography>{testimonial.role}</Typography>
                </Grid>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default Testimonial;

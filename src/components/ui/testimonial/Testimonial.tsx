import Image from "next/image";
import { Avatar, Box, Card, CardContent, CardHeader, Divider, Grid2 as Grid, Rating, Typography } from "@mui/material";
import styles from "./testimonial.module.scss";
import { initialDataTestimonial } from "@/seed/seedTestimonial";

const testimonials = initialDataTestimonial.testimonials;

export function Testimonial() {
  return (
    <Grid container component="section" className={styles.container}>
      <Grid container className={styles.wrapperTitle}>
        <Typography>&quot;He encontrado oportunidades increíbles gracias a esta plataforma.&quot;</Typography>
        <Typography variant="h2" fontWeight={700} fontSize={30} mb={3}>
          Testimonios de profesionales
        </Typography>
      </Grid>
      <Grid container spacing={3}>
        {testimonials.map((testimonial) => {
          return (
            <Grid key={testimonial.name_client} size={{xs: 12, md: 6}}>
              <Card>
                <CardContent className={styles.cardContent}>
                  <Typography variant="body1">{testimonial.description}</Typography>
                  <Box className={styles.starsTestimonial}>
                    <Rating defaultValue={testimonial.rating} precision={0.5} size="medium" readOnly />
                    <Typography fontWeight={700} fontSize={18} lineHeight={0.5} paddingLeft={1.5}>
                      {(testimonial.rating).toFixed(1)}
                    </Typography>
                 </Box>
                </CardContent>
                <Divider />
                <CardHeader
                  avatar={
                    <Avatar sx={{ width: 60, height: 60 }} className={styles.avatar}>
                      <Image src={`/${testimonial.image_client}`} alt={testimonial.name_client} width={100} height={100} />
                    </Avatar>
                  }
                  title={testimonial.name_client}
                  subheader={testimonial.profession_client[0]}
                />
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}

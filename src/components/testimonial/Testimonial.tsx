import { Grid2 as Grid, Typography } from "@mui/material";
import { TestimonialCard } from "./TestimonialCard";
import styles from "./testimonial.module.scss";
import { Testimonial as TestimonialInterface } from "@/interfaces";

const testimonials: TestimonialInterface[] = [
  {
    description:
      "Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec.",
    name_client: "Alex Rendón",
    profession_client: ["Programador"],
    image_client: "avatar-default.jpg",
  },
  {
    description:
      "Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec.",
    name_client: "Héctor Paniagua",
    profession_client: ["Cantante"],
    image_client: "avatar-default.jpg",
  },
];

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
            <Grid key={testimonial.name_client} size={{ xs: 12, md: 6 }}>
              <TestimonialCard testimonial={testimonial} />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}

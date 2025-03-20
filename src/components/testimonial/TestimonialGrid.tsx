import { Grid2 as Grid } from "@mui/material";
import { Testimonial } from "@/interfaces";
import { TestimonialCard } from "./TestimonialCard";
import styles from "./testimonial.module.scss";

interface Props {
  testimonials: Testimonial[];
}

export const TestimonialGrid = ({ testimonials }: Props) => {
  return (
    <Grid container spacing={3} className={styles.testimonials}>
      {testimonials.map((testimonial) => (
        <Grid key={testimonial.documentId} size={{ xs: 12, sm: 6 }}>
          <TestimonialCard testimonial={testimonial} />
        </Grid>
      ))}
    </Grid>
  );
};

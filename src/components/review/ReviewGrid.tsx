import { Grid2 as Grid } from "@mui/material";
import { Review } from "@/interfaces";
import { ReviewCard } from "./ReviewCard";
import styles from "./review.module.scss";

interface Props {
  reviews: Review[];
}

export const ReviewGrid = ({ reviews }: Props) => {
  return (
    <Grid container spacing={3} className={styles.testimonials}>
      {reviews.map((review) => (
        <Grid key={review.documentId} size={{ xs: 12, sm: 6 }}>
          <ReviewCard review={review} />
        </Grid>
      ))}
    </Grid>
  );
};

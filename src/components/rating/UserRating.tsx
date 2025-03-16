import { Box, Rating, Typography } from "@mui/material";
import styles from "./rating.module.scss";

interface Props {
  rating: number;
}

export const UserRating = ({ rating }: Props) => {
  return (
    <Box className={styles.rating}>
      <Rating defaultValue={rating} precision={0.5} size="small" readOnly />
      <Typography fontWeight={700} fontSize={18} lineHeight={0.5} paddingLeft={1.5}>
        {rating.toFixed(1)}
      </Typography>
    </Box>
  );
};

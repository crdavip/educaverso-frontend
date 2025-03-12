import { Container, Grid2 as Grid, Typography } from "@mui/material";
import styles from "./titlepg.module.scss";

interface Props {
  title: string;
  subtitle?: string;
}

export const TitlePg = ({ title, subtitle }: Props) => {
  return (
    <Container className={styles.container} maxWidth={false}>
      <Grid className={styles.wrapper}>
        <Typography>{subtitle}</Typography>
        <Typography component="h2" variant="h3">
          {title}
        </Typography>
      </Grid>
    </Container>
  );
};

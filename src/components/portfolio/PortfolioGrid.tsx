import { Grid2 as Grid } from "@mui/material";
import { Portfolio } from "@/interfaces";
import { PortfolioCard } from "./PortfolioCard";
import styles from "./portfolio.module.scss";

interface Props {
  portfolios: Portfolio[];
}

export const PortfolioGrid = ({ portfolios }: Props) => {
  return (
    <Grid container spacing={3} className={styles.portfolios}>
      {portfolios.map((portfolio) => (
        <Grid key={portfolio.documentId} size={{ xs: 12, sm: 6 }}>
          <PortfolioCard portfolio={portfolio} />
        </Grid>
      ))}
    </Grid>
  );
};

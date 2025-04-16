import { Grid2 as Grid } from "@mui/material";
import { Portfolio } from "@/interfaces";

import { PortfolioCard } from "./PortfolioCard";
import styles from "./portfolio.module.scss";

interface Props {
  portfolios: Portfolio[];
  alt?: boolean;
}

export const PortfolioGrid = ({ portfolios, alt = false }: Props) => {
  return (
    <Grid container spacing={3} className={styles.portfolios}>
      {portfolios.map((portfolio) => (
        <Grid key={portfolio.documentId} size={!alt ? { xs: 12, sm: 6 } : { xs: 12, sm: 6, lg: 4 }}>
          <PortfolioCard portfolio={portfolio} />
        </Grid>
      ))}
    </Grid>
  );
};

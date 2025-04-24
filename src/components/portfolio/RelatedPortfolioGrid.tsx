import { Grid2 as Grid } from "@mui/material";
import { PortfolioCard } from "./PortfolioCard";

import { getPortfoliosRelatedByCategory } from "@/data";
import { Portfolio } from "@/interfaces";
import { EmptyContent } from "../user/user-content/EmptyContent";

interface Props {
  category: string;
  idPortfolio: string;
}

export const RelatedPortfolioGrid = async ({ category, idPortfolio }: Props) => {
  const { data } = await getPortfoliosRelatedByCategory(category, idPortfolio);
  const portfolios: Portfolio[] = data;

  return (
    <Grid container spacing={2}>
      {portfolios.length === 0 && <EmptyContent text="No hay portafolios relacionados a esta categoría" />}
      {portfolios.length > 0 && portfolios.map((portfolio) => (
        <Grid key={portfolio.documentId} size={{ xs: 12 }}>
          <PortfolioCard portfolio={portfolio} />
        </Grid>
      ))}
    </Grid>
  );
};

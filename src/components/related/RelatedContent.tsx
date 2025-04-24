import { Typography, Divider } from "@mui/material";
import { RelatedBlogGrid } from "../blog/RelatedBlogGrid";
import { RelatedPortfolioGrid } from "../portfolio/RelatedPortfolioGrid";
import { RelatedUserGrid } from "../user/related-users/RelatedUserGrid";

interface Props {
  category: string;
  idContent: string;
}

export const RelatedContent = ({ category, idContent }: Props) => {
  return (
    <>
      <Typography variant="body1" fontWeight={700}>
        Profesionales Relacionados
      </Typography>
      <Divider sx={{ marginBottom: 3 }} />
      <RelatedUserGrid category={category} idUser={idContent} />
      <Typography variant="body1" fontWeight={700} mt={4}>
        Portafolios Relacionados
      </Typography>
      <Divider sx={{ marginBottom: 3 }} />
      <RelatedPortfolioGrid category={category} idPortfolio={idContent} />
      <Typography variant="body1" fontWeight={700} mt={4}>
        Blogs Relacionados
      </Typography>
      <Divider sx={{ marginBottom: 3 }} />
      <RelatedBlogGrid category={category} idBlog={idContent} />
    </>
  );
};

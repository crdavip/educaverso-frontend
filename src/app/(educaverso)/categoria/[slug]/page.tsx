import { notFound } from "next/navigation";
import { Container, Typography } from "@mui/material";
import { TitlePg, UserGrid } from "@/components";

import { ProfessionalCategories } from "@/interfaces/category.interface";
import { getCategoriesBySlug, getUsersByCategory } from "@/data";
import { UserDetail } from "@/interfaces";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;

  const categories: ProfessionalCategories[] = await getCategoriesBySlug(slug);
  if (categories.length === 0) notFound();
  
  const { name } = categories[0];
  const {data} = await getUsersByCategory(slug);
  const users: UserDetail[] = data;

  return (
    <>
      <TitlePg title={name} subtitle="Categoría" />
      <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center", paddingBlock: 10 }}>
        {
          users.length === 0
            ? <Typography variant="h4" sx={{marginBlock: 10}}>No hay profesionales para esta categoría.</Typography>
            : <UserGrid users={users} />
        }        
      </Container>
    </>
  );
}

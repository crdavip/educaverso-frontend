import { Container, Typography } from "@mui/material";
import { TitlePg, UserGrid } from "@/components";
import { initialDataCategory } from "@/seed/seedCategory";
import { notFound } from "next/navigation";
import { initialDataUser } from "@/seed/seedUser";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;

  const professionalCategories = (initialDataCategory.categories).find((category) => category.slug === slug)

  if (!professionalCategories) {
    notFound();
  }

  const { name } = professionalCategories;
  const users = initialDataUser.users.filter((user) => user.category.includes(name));

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

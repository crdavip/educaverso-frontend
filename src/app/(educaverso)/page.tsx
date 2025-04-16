import { Container, Divider, Grid2 as Grid, Typography } from "@mui/material";
import { Hero, Profits, UserGrid, Testimonial, PortfolioGrid, BlogGrid } from "@/components";
import styles from "./home.module.scss";

import { getBlogs, getPortfolios, getUsers } from "@/data";
import { Blog, Portfolio, UserDetail } from "@/interfaces";

export default async function HomePage() {
  const { data } = await getUsers();
  const users: UserDetail[] = data;
  const dataPortfolios = await getPortfolios();
  const portfolios: Portfolio[] = dataPortfolios;
  const dataBlogs = await getBlogs();
  const blogs: Blog[] = dataBlogs;

  return (
    <Grid component="main" className={styles.main}>
      <Hero />
      <Container component="section">
        <Profits />
      </Container>
      <Container component="section" maxWidth={false} className={styles.container}>
        <Grid container className={styles.subContainer}>
          <Typography lineHeight={0.1}>Perfiles que lideran con innovación y experiencia</Typography>
          <Typography variant="h2" fontWeight={700} fontSize={30}>
            Profesionales que Inspiran
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <UserGrid users={users} />
        </Grid>
        <Grid container className={styles.subContainer}>
          <Typography lineHeight={0.1}>Portafolios que vale la pena explorar</Typography>
          <Typography variant="h2" fontWeight={700} fontSize={30}>
            Galería de Ideas Brillantes
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <PortfolioGrid portfolios={portfolios} alt />
        </Grid>
        <Grid container className={styles.subContainer}>
          <Typography lineHeight={0.1}>Blogs que desafían y enriquecen</Typography>
          <Typography variant="h2" fontWeight={700} fontSize={30}>
            Inspiración en Palabras
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <BlogGrid blogs={blogs} />
        </Grid>
      </Container>
      <Container component="section">
        <Testimonial />
      </Container>
    </Grid>
  );
}

import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container, Grid2 as Grid, Box, Typography, Chip, Avatar, Divider, Card } from "@mui/material";
import { GridViewOutlined, CalendarMonthOutlined } from "@mui/icons-material";
import { PortfolioSlideShow, RelatedContent } from "@/components";
import styles from "./portfolio.module.scss";

import { getPortfolioBySlug } from "@/data";
import { Portfolio } from "@/interfaces";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function PortafolioPage({ params }: Props) {
  const { slug } = await params;

  const data = await getPortfolioBySlug(slug);
  const portfolio: Portfolio = data[0];
  if (!portfolio) notFound();

  const profileImage = portfolio.userDetail.profileImage
    ? portfolio.userDetail.profileImage.url
    : "/avatar-default.jpg";

  return (
    <>
      <Container className={styles.mainContainer} maxWidth={false} />
      <Container className={styles.portfolioContainer}>
        <Grid container columnSpacing={5}>
          <Grid className={styles.headerContainer} size={{ xs: 12, md: 9 }} container>
            <Grid className={styles.portfolioWrapper} size={12}>
              <Box className={styles.wrapperPortfolioImg}>
                <Image src={portfolio.images[0].url} alt={portfolio.title} width={500} height={500} />
              </Box>
              <Grid container className={styles.wrapperPortfolioTxt}>
                <Grid size={12} className={styles.portfolioWrapperInfo}>
                  <Typography variant="h4" fontWeight={700}>
                    {portfolio.title}
                  </Typography>
                  <Box className={styles.portfolioElements}>
                    <Link href={`/${portfolio.userDetail.user.username}`}>
                      <Chip
                        color="primary"
                        avatar={<Avatar alt={portfolio.userDetail.user.username} src={profileImage} />}
                        label={`@${portfolio.userDetail.user.username}`}
                      />
                    </Link>
                    <Link href={`/categoria/${portfolio.userDetail.category.slug}`}>
                      <Chip
                        color="secondary"
                        icon={<GridViewOutlined fontSize="small" />}
                        label={`${portfolio.userDetail.category.name}`}
                      />
                    </Link>
                    <Typography variant="body1" className={styles.portfolioDate}>
                      <CalendarMonthOutlined />{" "}
                      {new Date(portfolio.createdAt).toLocaleString("es-ES", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </Typography>
                  </Box>
                  <Divider sx={{ marginBlock: 3 }} />
                  <Typography
                    variant="body1"
                    className={styles.contentDescription}
                    sx={{ width: { xs: "100%", md: "90%" } }}
                  >
                    {portfolio.description}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid className={styles.contentWrapper} size={12}>
              <Card className={styles.contentCard}>
                <PortfolioSlideShow images={portfolio.images} />
              </Card>
            </Grid>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }} className={styles.relatedGrid}>
            <RelatedContent category={portfolio.userDetail.category.slug} idContent={portfolio.documentId} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

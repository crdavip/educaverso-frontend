import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container, Grid2 as Grid, Box, Typography, Chip, Divider, Avatar, Card } from "@mui/material";
import { CalendarMonthOutlined, GridViewOutlined } from "@mui/icons-material";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { RelatedContent } from "@/components";
import styles from "./blogpage.module.scss";

import { getBlogBySlug } from "@/data";
import { Blog } from "@/interfaces";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPage({ params }: Props) {
  const { slug } = await params;

  const data = await getBlogBySlug(slug);
  const blog: Blog = data[0];
  if (!blog) notFound();

  const profileImage = blog.userDetail.profileImage ? blog.userDetail.profileImage.url : "/avatar-default.jpg";

  return (
    <>
      <Container className={styles.mainContainer} maxWidth={false} />
      <Container className={styles.blogContainer}>
        <Grid container columnSpacing={5}>
          <Grid className={styles.headerContainer} size={{ xs: 12, md: 9 }} container>
            <Grid className={styles.blogWrapper} size={12}>
              <Box className={styles.wrapperBlogImg}>
                <Image src={blog.image.url} alt={blog.title} width={500} height={500} />
              </Box>
              <Grid container className={styles.wrapperBlogTxt}>
                <Grid size={12} className={styles.blogWrapperInfo}>
                  <Typography variant="h4" fontWeight={700}>
                    {blog.title}
                  </Typography>
                  <Box className={styles.blogElements}>
                    <Link href={`/${blog.userDetail.user.username}`}>
                      <Chip
                        color="primary"
                        avatar={<Avatar alt={blog.userDetail.user.username} src={profileImage} />}
                        label={`@${blog.userDetail.user.username}`}
                      />
                    </Link>
                    <Link href={`/categoria/${blog.userDetail.category.slug}`}>
                      <Chip
                        color="secondary"
                        icon={<GridViewOutlined fontSize="small" />}
                        label={`${blog.userDetail.category.name}`}
                      />
                    </Link>
                    <Typography variant="body1" className={styles.blogDate}>
                      <CalendarMonthOutlined />{" "}
                      {new Date(blog.createdAt).toLocaleString("es-ES", {
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
                    {blog.description}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid className={styles.contentWrapper} size={12}>
              <Card className={styles.contentCard}>
                <BlocksRenderer content={blog.content} />
              </Card>
            </Grid>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }} className={styles.relatedGrid}>
            <RelatedContent category={blog.userDetail.category.slug} idContent={blog.documentId} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

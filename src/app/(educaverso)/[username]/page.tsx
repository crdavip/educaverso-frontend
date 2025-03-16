import Image from "next/image";
import { notFound } from "next/navigation";
import { Box, Chip, Container, Divider, Grid2 as Grid, Typography } from "@mui/material";
import { RelatedGrid, ReviewForm, SocialIcons, UserContent, UserRating } from "@/components";
import { initialDataUser } from "@/seed/seedUser";
import { initialDataCourse } from "@/seed/seedCourse";
import { initialDataPortfolio } from "@/seed/seedPortfolio";
import { initialDataTestimonial } from "@/seed/seedTestimonial";
import { initialDataBlog } from "@/seed/seedBlog";
import { initialDataCertificate } from "@/seed/seedCertification";
import styles from "./profile.module.scss";

interface Props {
  params: Promise<{
    username: string;
  }>;
}

const courses = initialDataCourse.courses;

export default async function UserNamePage({ params }: Props) {
  const { username } = await params;

  const user = initialDataUser.users.find((user) => user.username === username);

  if (!user) {
    notFound();
  }

  const users = initialDataUser.users;
  const portfolios = initialDataPortfolio.portfolios;
  const blogs = initialDataBlog.blogs;
  const testimonials = initialDataTestimonial.testimonials;
  const certifications = initialDataCertificate.certifications;

  return (
    <>
      <Container className={styles.mainContainer} maxWidth={false} />
      <Container className={styles.profileContainer}>
        <Grid container columnSpacing={5}>
          <Grid className={styles.userContainer} size={{ xs: 12, md: 9 }} container>
            <Grid className={styles.userWrapper} size={12}>
              <Box className={styles.wrapperProfileImg}>
                <Image src={`/users/${user.profileImage}`} alt={user.username} width={500} height={500} />
              </Box>
              <Grid container className={styles.wrapperProfileTxt}>
                <Grid size={{ xs: 12, md: 10 }} className={styles.userWrapperInfo}>
                  <Typography variant="h4" fontWeight={700}>
                    {user.fullname}
                  </Typography>
                  <Box className={styles.userElements}>
                    <Chip color="primary" size="small" label={`@${user.username}`} />
                    <SocialIcons socials={user.socials} />
                  </Box>
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <Typography variant="h6">{user.profession[0]}</Typography>
                    <UserRating rating={user.rating} />
                  </Box>
                  <Typography variant="body1" sx={{ width: { xs: "100%", md: "90%" } }}>
                    {user.description}
                  </Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 2 }} className={styles.userWrapperStats}>
                  <Box className={styles.userStats}>
                    <Typography variant="h4">{user.totalContents.toLocaleString()}</Typography>
                    <Typography variant="h6">Contenidos</Typography>
                  </Box>
                  <Box className={styles.userStats}>
                    <Typography variant="h4">{user.profileViews.toLocaleString()}</Typography>
                    <Typography variant="h6">Vistas</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid className={styles.contentWrapper} size={12}>
              <UserContent
                courses={courses}
                portfolios={portfolios}
                blogs={blogs}
                testimonials={testimonials}
                certifications={certifications}
              />
            </Grid>
            <Grid className={styles.reviewsWrapper} >
              <Typography variant="h5" fontWeight={700}>
                  Crear testimonio
                </Typography>
                <Divider sx={{ marginBottom: 3 }} />
                <ReviewForm />
            </Grid>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }} className={styles.relatedGrid}>
            <Typography variant="h5" fontWeight={700}>
              Relacionados
            </Typography>
            <Divider sx={{ marginBottom: 3 }} />
            <RelatedGrid users={users} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Box, Chip, Container, Divider, Grid2 as Grid, Typography } from "@mui/material";
import { RelatedGrid, ReviewForm, SocialIcons, TotalContent, UserContent, UserRating } from "@/components";
import styles from "./profile.module.scss";

import { getUserByUserName } from "@/data";
import { UserDetail } from "@/interfaces";

interface Props {
  params: Promise<{
    username: string;
  }>;
}

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {

  const { username } = await params
 
  const { data } = await getUserByUserName(username);
  const user: UserDetail = data[0];
 
  return {
    title: `${user.user.username} | Educaverso`,
    description: user.description,
    openGraph: {
      title: `${user.user.username} | Educaverso`,
      description: user.description,
      images: [`${process.env.API_BASE_URL}${user.profileImage?.url ?? "/avatar-default.jpg"}`],
    },
  }
}

export default async function UserNamePage({ params }: Props) {
  const { username } = await params;

  const { data } = await getUserByUserName(username);
  const user: UserDetail = data[0];
  if (!user) notFound();
  
  const totalRating = user.reviews.reduce((acumulador, review) => acumulador + review.rating, 0);
  const ratingProm = user.reviews.length > 0 ? totalRating / user.reviews.length : 0;

  const profileImage = user.profileImage
    ? `${process.env.API_BASE_URL}${user.profileImage.url}`
    : "/avatar-default.jpg";

  return (
    <>
      <Container className={styles.mainContainer} maxWidth={false} />
      <Container className={styles.profileContainer}>
        <Grid container columnSpacing={5}>
          <Grid className={styles.userContainer} size={{ xs: 12, md: 9 }} container>
            <Grid className={styles.userWrapper} size={12}>
              <Box className={styles.wrapperProfileImg}>
                <Image src={profileImage} alt={user.user.username} width={500} height={500} />
              </Box>
              <Grid container className={styles.wrapperProfileTxt}>
                <Grid size={{ xs: 12, md: 10 }} className={styles.userWrapperInfo}>
                  <Typography variant="h4" fontWeight={700}>
                    {`${user.firstname} ${user.lastname}`}
                  </Typography>
                  <Box className={styles.userElements}>
                    <Chip color="primary" size="small" label={`@${user.user.username}`} />
                    <SocialIcons socials={user.socials} />
                  </Box>
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <Typography variant="h6">{user.profession}</Typography>
                    <UserRating rating={ratingProm} />
                  </Box>
                  <Typography variant="body1" sx={{ width: { xs: "100%", md: "90%" } }}>
                    {user.description}
                  </Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 2 }} className={styles.userWrapperStats}>
                  <Box className={styles.userStats}>
                    <TotalContent idUser={user.documentId}/>
                  </Box>
                  <Box className={styles.userStats}>
                    {/* <Typography variant="h4">{user.profileViews.toLocaleString()}</Typography> */}
                    <Typography variant="h4">{(Math.floor(Math.random() * (2000000 - 1 + 1)) + 1).toLocaleString()}</Typography>
                    <Typography variant="h6">Vistas</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid className={styles.contentWrapper} size={12}>
              <UserContent idUser={user.documentId} />
            </Grid>
            <Grid className={styles.reviewsWrapper}>
              <Typography variant="h5" fontWeight={700}>
                Crear testimonio
              </Typography>
              <Divider sx={{ marginBottom: 3 }} />
              <ReviewForm reviewed={user.user.username} />
            </Grid>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }} className={styles.relatedGrid}>
            <Typography variant="h5" fontWeight={700}>
              Relacionados
            </Typography>
            <Divider sx={{ marginBottom: 3 }} />
            <RelatedGrid category={user.category.slug} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

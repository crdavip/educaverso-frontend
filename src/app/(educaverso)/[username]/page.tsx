import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Box, Chip, Container, Divider, Grid2 as Grid, Typography } from "@mui/material";
import {
  ButtonsMenu,
  RelatedContent,
  ReviewForm,
  SocialIcons,
  TotalContent,
  UserContent,
  UserRating,
} from "@/components";
import styles from "./profile.module.scss";

import { getUserByUserName, getUserMeLoader, updateProfileViews } from "@/data";
import { UserDetail } from "@/interfaces";

interface Props {
  params: Promise<{
    username: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { username } = await params;

  const { data } = await getUserByUserName(username);
  const user: UserDetail = data[0];

  return {
    title: `${user.user.username} | Educaverso`,
    description: user.description,
    openGraph: {
      title: `${user.user.username} | Educaverso`,
      description: user.description,
      images: [`${user.profileImage?.url ?? "/avatar-default.jpg"}`],
    },
  };
}

export default async function UserNamePage({ params }: Props) {
  const { username } = await params;

  const { data } = await getUserByUserName(username);
  const user: UserDetail = data[0];
  if (!user) notFound();

  const isUser = await getUserMeLoader();

  if (user.user.documentId !== isUser.data?.documentId) {
    await updateProfileViews(user.documentId, user.profileViews);
  }

  const totalRating = user.reviews.reduce((acumulador, review) => acumulador + review.rating, 0);
  const ratingProm = user.reviews.length > 0 ? totalRating / user.reviews.length : 0;

  const profileImage = user.profileImage ? user.profileImage?.url : "/avatar-default.jpg";

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
                    <TotalContent idUser={user.documentId} />
                  </Box>
                  <Box className={styles.userStats}>
                    <Typography variant="h4">{user.profileViews.toLocaleString()}</Typography>
                    <Typography variant="h6">Vistas</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid className={styles.contentWrapper} size={12}>
              <UserContent idUser={user.documentId} />
            </Grid>
            {user.user.documentId !== isUser.data?.documentId && (
              <Grid className={styles.reviewsWrapper}>
                <Typography variant="h5" fontWeight={700}>
                  Crear testimonio
                </Typography>
                <Divider sx={{ marginBottom: 3 }} />
                {isUser.ok ? <ReviewForm reviewed={user.documentId} /> : <ButtonsMenu />}
              </Grid>
            )}
          </Grid>

          <Grid size={{ xs: 12, md: 3 }} className={styles.relatedGrid}>
            <RelatedContent category={user.category.slug} idContent={user.user.documentId} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

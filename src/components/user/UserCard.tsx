import Image from "next/image";
import Link from "next/link";
import { Box, Card, CardContent, Chip, Typography } from "@mui/material";
import { UserDetail } from "@/interfaces";
import { SocialIcons } from "../social-icons/SocialIcons";
import { formatNumber } from "@/helpers";
import { UserRating } from "../rating/UserRating";
import styles from "./usergrid.module.scss";

interface Props {
  user: UserDetail;
}

export const UserCard = ({ user }: Props) => {
  const totalRating = user.reviews.reduce((acumulador, review) => acumulador + review.rating, 0);
  const ratingProm = user.reviews.length > 0 ? totalRating / user.reviews.length : 0;
  
  const profileImage = user.profileImage
    ? `${process.env.API_BASE_URL}${user.profileImage.url}`
    : "/avatar-default.jpg";

  return (
    <Card className={styles.userCard}>
      <CardContent className={styles.userCardHeader}>
        <Link href={`/${user.username}`}>
          <Image src={profileImage} alt={user.username} width={300} height={300} />
          <Box className={styles.userCardHeaderBg}>
            <Typography variant="h5" fontWeight={700}>
              {user.user.username}
            </Typography>
            <Chip color="primary" size="small" label={`@${user.username}`} />
          </Box>
        </Link>
      </CardContent>
      <CardContent className={styles.userCardContent}>
        <Box className={styles.userCardContentLeft}>
          <UserRating rating={ratingProm} />
          <Typography variant="subtitle1" sx={{ mb: 1 }}>
            {user.profession}
          </Typography>
          <SocialIcons socials={user.socials} />
        </Box>
        <Box className={styles.userCardContentRight}>
          <Box className={styles.userCardStats}>
            {/* <Typography variant="h4">{formatNumber(totalContent)}</Typography> */}
            <Typography variant="h4">{formatNumber(Math.floor(Math.random() * (100 - 1 + 1)) + 1)}</Typography>
            <Typography variant="caption">Contenidos</Typography>
          </Box>
          <Box className={styles.userCardStats}>
            {/* <Typography variant="h4">{formatNumber(user.profileViews)}</Typography> */}
            <Typography variant="h4">{formatNumber(Math.floor(Math.random() * (2000000 - 1 + 1)) + 1)}</Typography>
            <Typography variant="caption">Vistas</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

import Image from "next/image";
import Link from "next/link";
import { Box, Card, CardContent, Chip, Typography } from "@mui/material";
import { UserDetail } from "@/interfaces";
import { SocialIcons } from "../social-icons/SocialIcons";
import { formatNumber } from "@/helpers";
import { UserRating } from "../rating/UserRating";
import { TotalContent } from "./total-content/TotalContent";
import styles from "./usergrid.module.scss";

interface Props {
  user: UserDetail;
}

export const UserCard = ({ user }: Props) => {
  const totalRating = user.reviewsReceived.reduce((acumulador, review) => acumulador + review.rating, 0);
  const ratingProm = user.reviewsReceived.length > 0 ? totalRating / user.reviewsReceived.length : 0;

  const profileImage = user.profileImage ? user.profileImage.url : "/avatar-default.jpg";

  return (
    <Card className={styles.userCard}>
      <CardContent className={styles.userCardHeader}>
        <Link href={`/${user.user.username}`}>
          <Image src={`http://localhost:1337${profileImage}`} alt={user.user.username} width={300} height={300} />
          <Box className={styles.userCardHeaderBg}>
            <Typography variant="h5" fontWeight={700}>
              {`${user.firstname} ${user.lastname}`}
            </Typography>
            <Chip color="primary" size="small" label={`@${user.user.username}`} />
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
            <TotalContent idUser={user.documentId} />
          </Box>
          <Box className={styles.userCardStats}>
            <Typography variant="h4">{formatNumber(user.profileViews)}</Typography>
            <Typography variant="caption">Vistas</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

import Image from "next/image";
import Link from "next/link";
import { Box, Card, CardContent, Chip, Typography } from "@mui/material";
import { User } from "@/interfaces";
import { SocialIcons } from "../social-icons/SocialIcons";
import { formatNumber } from "@/helpers";
import { UserRating } from "../rating/UserRating";
import styles from "./usergrid.module.scss";

interface Props {
  user: User;
}

export const UserCard = ({ user }: Props) => {
  return (
    <Card className={styles.userCard}>
      <CardContent className={styles.userCardHeader}>
        <Link href={`/${user.username}`}>
          <Image src={`/users/${user.username}.jpg`} alt={user.username} width={300} height={300} />
          <Box className={styles.userCardHeaderBg}>
            <Typography variant="h5" fontWeight={700}>
              {user.fullname}
            </Typography>
            <Chip color="primary" size="small" label={`@${user.username}`} />
          </Box>
        </Link>
      </CardContent>
      <CardContent className={styles.userCardContent}>
        <Box className={styles.userCardContentLeft}>
          <UserRating rating={user.rating} />
          <Typography variant="subtitle1" sx={{ mb: 1 }}>
            {user.profession[0]}
          </Typography>
          <SocialIcons socials={user.socials} />
        </Box>
        <Box className={styles.userCardContentRight}>
          <Box className={styles.userCardStats}>
            <Typography variant="h4">{formatNumber(user.totalContents)}</Typography>
            <Typography variant="caption">Contenidos</Typography>
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

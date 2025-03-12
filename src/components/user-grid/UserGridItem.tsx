import Image from "next/image";
import Link from "next/link";
import { Box, Card, CardContent, Grid2 as Grid, Rating, Typography } from "@mui/material";
import { User } from "@/interfaces";
import styles from "./usergrid.module.scss";
import { SocialIcons } from "../social-icons/SocialIcons";
import { formatNumber } from "@/helpers";

interface Props {
  user: User;
}

export const UserGridItem = ({ user }: Props) => {
  return (
    <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
      <Card className={styles.userCard}>
        <CardContent className={styles.userCardHeader}>
            <Link href={`/${user.username}`}>
          <Image src={`/users/${user.username}.jpg`} alt={user.username} width={300} height={300} />
          <Box className={styles.userCardHeaderBg}>
              <Typography variant="h5">{user.fullname}</Typography>
              <Typography variant="subtitle1">@{user.username}</Typography>
          </Box>
            </Link>
        </CardContent>
        <CardContent className={styles.userCardContent}>
          <Box className={styles.userCardContentLeft}>
            <Box className={styles.userCardContentRating}>
              <Rating defaultValue={user.rating} precision={0.1} size="small" readOnly />
              <Typography fontWeight={700} fontSize={18} lineHeight={0.5} paddingLeft={1.5}>
                {user.rating.toFixed(1)}
              </Typography>
            </Box>
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
    </Grid>
  );
};

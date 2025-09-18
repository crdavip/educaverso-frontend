import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, Box, Chip } from "@mui/material";
import { UserDetail } from "@/interfaces";
import styles from "./related.module.scss";

interface Props {
  user: UserDetail;
}

export const RelatedUserCard = ({ user }: Props) => {
  const profileImage = user.profileImage ? user.profileImage.url : "/avatar-default.jpg";

  return (
    <Card key={user.documentId} className={styles.userCard}>
      <CardContent className={styles.userCardHeader}>
        <Link href={`/${user.user.username}`}>
          <Image src={`${process.env.API_BASE_URL}${profileImage}`} alt={user.user.username} width={300} height={300} />
          <Box className={styles.userCardHeaderBg}>
            <Chip color="primary" size="small" label={`@${user.user.username}`} />
          </Box>
        </Link>
      </CardContent>
    </Card>
  );
};

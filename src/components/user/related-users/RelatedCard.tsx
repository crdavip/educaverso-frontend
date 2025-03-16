import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, Box, Chip } from "@mui/material";
import { User } from "@/interfaces";
import styles from "./related.module.scss";

interface Props {
  user: User;
}

export const RelatedCard = ({ user }: Props) => {
  return (
    <Card key={user.username} className={styles.userCard}>
      <CardContent className={styles.userCardHeader}>
        <Link href={`/${user.username}`}>
          <Image src={`/users/${user.username}.jpg`} alt={user.username} width={300} height={300} />
          <Box className={styles.userCardHeaderBg}>
            <Chip color="primary" size="small" label={`@${user.username}`} />
          </Box>
        </Link>
      </CardContent>
    </Card>
  );
};

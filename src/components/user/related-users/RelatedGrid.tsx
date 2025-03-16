import { Grid2 as Grid } from "@mui/material";
import { User } from "@/interfaces";
import styles from "./related.module.scss";
import { RelatedCard } from "./RelatedCard";

interface Props {
  users: User[];
}

export const RelatedGrid = ({ users }: Props) => {
  return (
    <Grid container spacing={2} className={styles.users}>
      {users.map((user) => (
        <Grid key={user.username} size={{xs: 6, sm: 3, md: 6}}>
          <RelatedCard user={user} />
        </Grid>
      ))}
    </Grid>
  );
};

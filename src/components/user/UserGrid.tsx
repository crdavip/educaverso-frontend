import { Grid2 as Grid } from "@mui/material";
import { UserDetail } from "@/interfaces";

import { UserCard } from "./UserCard";
import styles from "./usergrid.module.scss";

interface Props {
  users: UserDetail[];
}

export const UserGrid = ({ users }: Props) => {
  return (
    <Grid container spacing={3} className={styles.users}>
      {users.map((user) => (
        <Grid key={user.documentId} size={{ xs: 12, sm: 6, lg: 3 }}>
          <UserCard user={user} />
        </Grid>
      ))}
    </Grid>
  );
};

import { User } from "@/interfaces";
import { Grid2 as Grid } from "@mui/material";

import { UserGridItem } from "./UserGridItem";
import styles from "./usergrid.module.scss";

interface Props {
  users: User[];
}

export const UserGrid = ({ users }: Props) => {
  return (
    <Grid container spacing={3} className={styles.users}>
      {users.map((user) => (
        <UserGridItem key={user.username} user={user} />
      ))}
    </Grid>
  );
};

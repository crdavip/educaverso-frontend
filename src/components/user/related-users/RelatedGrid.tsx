import { Grid2 as Grid } from "@mui/material";
import { RelatedCard } from "./RelatedCard";
import styles from "./related.module.scss";

import { getUsersByCategory } from "@/data";
import { UserDetail } from "@/interfaces";

interface Props {
  category: string;
}

export const RelatedGrid = async ({ category }: Props) => {

    const {data} = await getUsersByCategory(category);
    // const {data} = await getUsers();
    const users: UserDetail[] = data;

  return (
    <Grid container spacing={2} className={styles.users}>
      {users.map((user) => (
        <Grid key={user.documentId} size={{xs: 6, sm: 3, md: 6}}>
          <RelatedCard user={user} />
        </Grid>
      ))}
    </Grid>
  );
};

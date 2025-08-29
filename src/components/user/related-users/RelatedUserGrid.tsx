import { Grid2 as Grid } from "@mui/material";
import { RelatedUserCard } from "./RelatedUserCard";
import styles from "./related.module.scss";

import { getUsersRelatedByCategory } from "@/data";
import { UserDetail } from "@/interfaces";
import { EmptyContent } from "../user-content/EmptyContent";

interface Props {
  category: string;
  idUser: string;
}

export const RelatedUserGrid = async ({ category, idUser }: Props) => {
  const { data } = await getUsersRelatedByCategory(category, idUser);
  const users: UserDetail[] = data;

  return (
    <Grid container spacing={2} className={styles.users}>
      {users.length === 0 && <EmptyContent text="No hay usuarios relacionados a esta categoría" />}
      {users.map((user) => (
        <Grid key={user.documentId} size={{ xs: 6, sm: 3, md: 6 }}>
          <RelatedUserCard user={user} />
        </Grid>
      ))}
    </Grid>
  );
};

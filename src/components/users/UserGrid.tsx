import { User } from "@/interfaces"
import { Container, Grid2 as Grid } from "@mui/material";

import { UserGridItem } from "./UserGridItem";
import styles from './usergrid.module.scss';

interface Props {
    users: User[];
}

export const UserGrid = ({users}: Props) => {
  return (
    <Container component="section" maxWidth={false} className={styles.container}>
        <Grid container spacing={3} className={styles.users}>
            {
                users.map(user => (
                    <UserGridItem key={user.username} user={user}/>
                ))
            }
        </Grid>
    </Container>
  )
}
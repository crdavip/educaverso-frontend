import { Container, Grid2 as Grid } from "@mui/material";
import { Hero, Profits, UserGrid, Testimonial } from "@/components";
import { initialDataUser } from "@/seed/seedUser";
import styles from "./home.module.scss";

const users = initialDataUser.users;

export default function HomePage() {
  return (
    <Grid component="main" className={styles.main}>
      <Hero />
      <Container component="section">
        <Profits />
      </Container>
      <Container component="section" maxWidth={false} className={styles.container}>
        <UserGrid users={users} />
      </Container>
      <Container component="section">
        <Testimonial />
      </Container>
    </Grid>
  );
}

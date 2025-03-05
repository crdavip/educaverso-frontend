import { Typography } from "@mui/material";
import styles from "./home.module.scss";

export default function HomePage() {
  return (
    <div>
      <Typography variant="h1" className={styles.titleFont}>
        Pagina Educaverso
      </Typography>
    </div>
  );
}

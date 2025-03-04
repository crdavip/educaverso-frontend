import { Typography } from "@mui/material";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div>
      <main>
        <Typography variant="h1" className={styles.titleFont}>Hola Mundo</Typography>
      </main>
    </div>
  );
}

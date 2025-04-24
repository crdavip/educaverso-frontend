import { Box, Grid2 as Grid, Typography } from "@mui/material";
import { SentimentDissatisfiedOutlined } from "@mui/icons-material";
import styles from "./usercontent.module.scss";

interface Props {
  title?: string;
  text?: string;
}

export const EmptyContent = ({ title = "", text = "" }: Props) => {
  return (
    <Grid container className={styles.emptyContainer}>
      <Box className={styles.emptyTxt}>
        <SentimentDissatisfiedOutlined sx={{ fontSize: 50 }} />
        <Typography variant="h6" component="h5" fontWeight={700}>
          {title ? `¡Vacío temporal en ${title}!` : `Sin resultados`}
        </Typography>
        <Typography variant="body1">
          {text ? `${text}` : `No hay contenido aquí, pero tranqui, ¡hay más secciones que explorar!`}
        </Typography>
      </Box>
    </Grid>
  );
};

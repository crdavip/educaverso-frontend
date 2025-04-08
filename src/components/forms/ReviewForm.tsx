"use client";

import { useState } from "react";
import { Box, Rating, Typography, TextField, Button, IconButton } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

import styles from "./forms.module.scss";

interface Props {
  reviewed: string;
}

export const ReviewForm = ({reviewed}: Props) => {
  const [reviewValue, setReviewValue] = useState<number>(Number(5));

  const onIncrease = () => {
    setReviewValue(Number(reviewValue + 0.5));
  };

  const onDecrease = () => {
    setReviewValue(Number(reviewValue - 0.5));
  };

  return (
    <form>
      <Typography fontWeight={500}>Calificación</Typography>
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: 4 }}>
        <Rating
          name="rating"
          value={reviewValue}
          precision={0.5}
          size="large"
          onChange={(event, newValue) => {
            setReviewValue(Number(newValue));
          }}
        />
        <Box className={styles.ratingControl}>
          <IconButton aria-label="Reducir calificación" onClick={onDecrease} className={styles.ratingButtons} disabled={reviewValue <= 0}>
            <Remove />
          </IconButton>
          <Typography className={styles.ratingText}>{reviewValue.toFixed(1)}</Typography>
          <IconButton aria-label="Aumentar calificación" onClick={onIncrease} className={styles.ratingButtons} disabled={reviewValue >= 5}>
            <Add />
          </IconButton>
        </Box>
      </Box>
      <input type="hidden" name="reviewed" value={reviewed} />
      <TextField
        type="text"
        name="description"
        label="Descripción"
        placeholder="Añade un comentario..."
        multiline
        rows={4}
        fullWidth
      />
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Enviar
      </Button>
    </form>
  );
};

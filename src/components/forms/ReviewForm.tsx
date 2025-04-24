"use client";

import { useActionState, useState } from "react";
import { Box, Rating, Typography, TextField, Button, IconButton, Chip } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

import styles from "./forms.module.scss";
import { reviewAction } from "@/data";

interface Props {
  reviewed: string;
}

const INITIAL_STATE = {
  zodErrors: null,
  strapiErrors: null,
  data: null,
  message: null,
};

export const ReviewForm = ({ reviewed }: Props) => {
  const [formState, formAction] = useActionState(reviewAction, INITIAL_STATE);
  const [isSuccess, setIsSuccess] = useState(formState?.message);
  const [reviewValue, setReviewValue] = useState<number>(Number(5));

  const onIncrease = () => {
    setReviewValue(Number(reviewValue + 0.5));
  };

  const onDecrease = () => {
    setReviewValue(Number(reviewValue - 0.5));
  };

  const handleDelete = () => {
    setIsSuccess(true);
  };

  return (
    <form action={formAction}>
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
          <IconButton
            aria-label="Reducir calificación"
            onClick={onDecrease}
            className={styles.ratingButtons}
            disabled={reviewValue <= 0}
          >
            <Remove />
          </IconButton>
          <Typography className={styles.ratingText}>{reviewValue.toFixed(1)}</Typography>
          <IconButton
            aria-label="Aumentar calificación"
            onClick={onIncrease}
            className={styles.ratingButtons}
            disabled={reviewValue >= 5}
          >
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
        error={formState?.zodErrors?.description}
        helperText={formState?.zodErrors?.description}
      />
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Enviar
      </Button>
      <Chip
        label={formState?.message}
        variant="filled"
        color="secondary"
        onDelete={handleDelete}
        sx={{ display: !isSuccess && formState?.message ? "" : "none", mt: 3, ml: 2, width: "200px" }}
      />
    </form>
  );
};

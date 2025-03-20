"use client";

import { Box, Rating, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";

export const ReviewForm = () => {
  const [reviewValue, setReviewValue] = useState<number>(Number(5));

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
        <Typography fontWeight={700} fontSize={22} lineHeight={0.5} paddingLeft={1.5}>
          {reviewValue?.toFixed(1)}
        </Typography>
      </Box>
      <TextField
        id="description"
        label="Descripción"
        fullWidth
        multiline
        rows={4}
        placeholder="Añade un comentario..."
      />
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Enviar
      </Button>
    </form>
  );
};

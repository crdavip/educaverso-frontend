"use client";

import { useActionState, useState } from "react";
import { AccountBoxOutlined, EmailOutlined, PhoneOutlined } from "@mui/icons-material";
import { Button, Chip, FormControl, InputAdornment, TextField } from "@mui/material";
import { contactAction } from "@/data";

const INITIAL_STATE = {
  zodErrors: null,
  strapiErrors: null,
  data: null,
  message: null,
};

export const ContactForm = () => {
  const [formState, formAction] = useActionState(contactAction, INITIAL_STATE);
  const [isSuccess, setIsSuccess] = useState(formState?.message);

  const handleDelete = () => {
    setIsSuccess(true);
  };

  return (
    <form action={formAction}>
      <FormControl fullWidth sx={{ mt: 2 }}>
        <TextField
          name="fullname"
          type="text"
          label="Nombre completo"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <AccountBoxOutlined />
                </InputAdornment>
              ),
            },
          }}
          variant="outlined"
          margin="dense"
          error={formState?.zodErrors?.fullname}
          helperText={formState?.zodErrors?.fullname}
        />
        <TextField
          name="email"
          type="email"
          label="Correo"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <EmailOutlined />
                </InputAdornment>
              ),
            },
          }}
          variant="outlined"
          margin="dense"
          error={formState?.zodErrors?.email}
          helperText={formState?.zodErrors?.email}
        />
        <TextField
          name="phone"
          type="number"
          label="Teléfono"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneOutlined />
                </InputAdornment>
              ),
            },
          }}
          variant="outlined"
          margin="dense"
          error={formState?.zodErrors?.phone}
          helperText={formState?.zodErrors?.phone}
        />
        <Button type="submit" variant="contained" sx={{ width: 200, mt: 2 }}>
          Enviar
        </Button>
        <Chip
          label={formState?.message}
          variant="filled"
          color="secondary"
          onDelete={handleDelete}
          sx={{ display: !isSuccess && formState?.message ? "" : "none", mt: 3, width: "200px" }}
        />
      </FormControl>
    </form>
  );
};

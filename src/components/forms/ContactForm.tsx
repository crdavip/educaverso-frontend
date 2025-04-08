"use client";

import { AccountBoxOutlined, EmailOutlined, PhoneOutlined } from "@mui/icons-material";
import { Button, FormControl, InputAdornment, TextField } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormInputs {
  fullname: string;
  email: string;
  phone: number;
}

export const ContactForm = () => {
  const { register, handleSubmit } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    const { fullname, email, phone } = data;
    console.log({fullname, email, phone})
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl fullWidth sx={{mt: 2}}>
        <TextField
          {...register("fullname", { required: true })}
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
        />
        <TextField
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
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
        />
        <TextField
          {...register("phone", { required: true })}
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
        />
        <Button type="submit" variant="contained" sx={{ width: 200, mt: 2 }}>
          Enviar
        </Button>
      </FormControl>
    </form>
  );
};

"use client";

import { useActionState, useState } from "react";
import { EmailOutlined, LockOutlined, VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";
import { FormControl, TextField, InputAdornment, Button } from "@mui/material";
import { loginUserAction } from "@/data";
import { StrapiErrors } from "../custom/StrapiErrors";

const INITIAL_STATE = {
  zodErrors: null,
  strapiErrors: null,
  data: null,
  message: null,
};

export const LoginForm = () => {
  const [formState, formAction] = useActionState(loginUserAction, INITIAL_STATE);
  const [showPass, setShowPass] = useState(false);

  const onShowPass = () => {
    setShowPass(!showPass);
  };

  return (
    <form action={formAction}>
      <FormControl fullWidth>
        <TextField
          name="identifier"
          type="email"
          label="Correo Electrónico"
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
          placeholder="johndoe@correo.com"
          error={formState?.zodErrors?.identifier}
          helperText={formState?.zodErrors?.identifier}
        />
        <TextField
          name="password"
          type={showPass ? "text" : "password"}
          label="Contraseña"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlined />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end" onClick={onShowPass} sx={{ cursor: "pointer" }}>
                  {!showPass ? <VisibilityOutlined /> : <VisibilityOffOutlined />}
                </InputAdornment>
              ),
            },
          }}
          variant="outlined"
          margin="dense"
          placeholder="Ingresa tu contraseña"
          error={formState?.zodErrors?.password}
          helperText={formState?.zodErrors?.password}
          autoComplete="off"
        />
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Iniciar Sesión
        </Button>
        <StrapiErrors error={formState?.strapiErrors} />
      </FormControl>
    </form>
  );
};

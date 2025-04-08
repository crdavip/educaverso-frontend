"use client";

import { useActionState, useState } from "react";
import {
  AccountBoxOutlined,
  EmailOutlined,
  LockOutlined,
  VisibilityOffOutlined,
  VisibilityOutlined,
} from "@mui/icons-material";
import { FormControl, TextField, InputAdornment, Button } from "@mui/material";
import { registerUserAction } from "@/data";
import { StrapiErrors } from "../custom/StrapiErrors";

const INITIAL_STATE = {
  data: null,
};

export const RegisterForm = () => {
  const [formState, formAction] = useActionState(registerUserAction, INITIAL_STATE);
  const [showPass, setShowPass] = useState(false);
  const [showRepeatPass, setShowRepeatPass] = useState(false);

  const onShowPass = () => {
    setShowPass(!showPass);
  };

  const onShowRepeatPass = () => {
    setShowRepeatPass(!showRepeatPass);
  };

  return (
    <form action={formAction}>
      <FormControl fullWidth>
        <TextField
          name="username"
          type="text"
          label="Usuario"
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
          placeholder="johnDoe"
          error={formState?.zodErrors?.username}
          helperText={formState?.zodErrors?.username}
        />
        <TextField
          name="email"
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
          error={formState?.zodErrors?.email}
          helperText={formState?.zodErrors?.email}
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
        <TextField
          name="repeatPassword"
          type={showRepeatPass ? "text" : "password"}
          label="Confirmar Contraseña"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlined />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end" onClick={onShowRepeatPass} sx={{ cursor: "pointer" }}>
                  {!showRepeatPass ? <VisibilityOutlined /> : <VisibilityOffOutlined />}
                </InputAdornment>
              ),
            },
          }}
          variant="outlined"
          margin="dense"
          placeholder="Repite tu contraseña"
          error={formState?.zodErrors?.repeatPassword}
          helperText={formState?.zodErrors?.repeatPassword}
          autoComplete="off"
        />
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Crear Cuenta
        </Button>
        <StrapiErrors error={formState?.strapiErrors} />
      </FormControl>
    </form>
  );
};

import { AccountBox, EmailRounded, Lock } from "@mui/icons-material";
import { FormControl, TextField, InputAdornment, Button } from "@mui/material";

export const RegisterForm = () => {
  return (
    <form>
      <FormControl fullWidth>
        <TextField
          id="fullname"
          type="text"
          label="Nombre Completo"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <AccountBox />
                </InputAdornment>
              ),
            },
          }}
          variant="outlined"
          margin="normal"
          required
        />
        <TextField
          id="email"
          type="email"
          label="Correo Electrónico"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <EmailRounded />
                </InputAdornment>
              ),
            },
          }}
          variant="outlined"
          margin="normal"
          required
        />
        <TextField
          id="password"
          type="password"
          label="Contraseña"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              ),
            },
          }}
          variant="outlined"
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Crear Cuenta
        </Button>
      </FormControl>
    </form>
  );
};

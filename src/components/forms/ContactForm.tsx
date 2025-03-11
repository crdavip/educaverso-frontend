import { AccountBox, EmailRounded, Phone } from "@mui/icons-material";
import { Button, FormControl, InputAdornment, TextField } from "@mui/material";

export const ContactForm = () => {
  return (
    <form>
      <FormControl fullWidth>
        <TextField
          id="fullname"
          label="Nombre completo"
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
        />
        <TextField
          id="email"
          label="Correo"
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
        />
        <TextField
          id="phone"
          label="Teléfono"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <Phone />
                </InputAdornment>
              ),
            },
          }}
          variant="outlined"
          margin="normal"
        />
        <Button type="submit" variant="contained" sx={{ width: 200, mt: 2 }}>
          Enviar
        </Button>
      </FormControl>
    </form>
  );
};

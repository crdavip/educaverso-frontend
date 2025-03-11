import { Google, Apple } from "@mui/icons-material";
import { Divider, Typography, Box, Button } from "@mui/material";

export const AuthAlternative = () => {
  return (
    <>
      <Divider sx={{ marginBlock: 4 }}>
        <Typography variant="subtitle2">Otras alternativas rapidas</Typography>
      </Divider>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        <Button
          variant="contained"
          color="secondary"
          sx={{ width: 120, display: "flex", alignItems: "center", gap: 1 }}
        >
          <Google />
          Google
        </Button>
        <Button
          variant="contained"
          color="secondary"
          sx={{ width: 120, display: "flex", alignItems: "center", gap: 1 }}
        >
          <Apple />
          Apple
        </Button>
      </Box>
    </>
  );
};

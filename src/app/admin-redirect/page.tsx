"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CircularProgress, Box, Typography } from "@mui/material";

export default function AdminRedirectPage() {
  const router = useRouter();
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const jwtMatch = document.cookie.match(/(^|;\s*)jwtToken=([^;]*)/);
    const jwt = jwtMatch?.[2] ?? null;

    if (jwt) {
      if (localStorage.getItem("isLoggedIn") !== "true") {
        localStorage.setItem("isLoggedIn", "true");
      }

      window.location.href = "http://localhost:1337/admin";
    } else {
      router.push("/auth/ingreso");
    }

    setCheckingAuth(false);
  }, [router]);

  return checkingAuth ? (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh" flexDirection="column">
      <CircularProgress size={48} />
      <Typography variant="h6" mt={2}>
        Redirigiendo al panel de administración...
      </Typography>
    </Box>
  ) : null;
}

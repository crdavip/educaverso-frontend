"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CircularProgress, Box, Typography } from "@mui/material";

export default function CourseRedirectPage() {
  const router = useRouter();
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const jwtMatch = document.cookie.match(/(^|;\s*)courseToken=([^;]*)/);
    const jwt = jwtMatch?.[2] ?? null;

    const persistedMatch = document.cookie.match(/(^|;\s*)persistedState=([^;]*)/);
    const persistedRaw = persistedMatch?.[2] ?? null;

    if (jwt && persistedRaw) {
      const encoded = encodeURIComponent(persistedRaw);
      window.location.href = `${process.env.NEXT_PUBLIC_FRONT_COURSES_URL}/authentication/callback?persistedState=${encoded}`;
    } else {
      router.push("/auth/ingreso");
    }

    setCheckingAuth(false);
  }, [router]);

  return checkingAuth ? (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh" flexDirection="column">
      <CircularProgress size={48} />
      <Typography variant="h6" mt={2}>
        Redirigiendo al sitio de cursos...
      </Typography>
    </Box>
  ) : null;
}

import type { Metadata } from "next";
import AppMui from "@/config/AppMui";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Educaverso",
  description: "Impulsa tu marca personal",
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="es">
      <AppMui>
        <body>{children}</body>
      </AppMui>
    </html>
  );
}

import type { Metadata } from "next";
import AppMui from "@/config/AppMui";
import { appFont } from "@/config/fonts";
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
        <body className={appFont.className}>{children}</body>
      </AppMui>
    </html>
  );
}

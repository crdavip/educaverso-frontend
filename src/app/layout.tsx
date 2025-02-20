import React, { ReactNode } from 'react';
import '@fontsource-variable/quicksand';
import './globals.scss';
import type { Metadata } from 'next';
import { CssBaseline } from '@mui/material';
import Providers from '@/app/Providers';
import Navbar from '@/components/Navbar/Navbar.tsx';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Educaverso',
  description: 'Impulsa tu marca personal',
};

type Props = {
  children: ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="es">
      <body>
        <Providers>
          <CssBaseline />
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

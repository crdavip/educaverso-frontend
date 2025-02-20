'use client';

import React, { ReactNode } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import muiTheme from '@/mui-theme';
import { ThemeProvider } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import setYupLocale from '@/lib/yup-locale';
import { SWRConfig, SWRConfiguration } from 'swr';
import ClientFetch from '@/lib/client-fetch.ts';
import useSWRCache from '@/hooks/useSWRCache.ts';

setYupLocale();

type Props = {
  children: ReactNode
}

function Providers({ children }: Props) {
  useSWRCache();

  const swrConfig: SWRConfiguration = {
    fetcher: ClientFetch.useSWRFetcher,
  };

  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <SWRConfig value={swrConfig}>
        <ThemeProvider theme={muiTheme}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            {children}
          </LocalizationProvider>
        </ThemeProvider>
      </SWRConfig>
    </AppRouterCacheProvider>
  );
}

export default Providers;

'use client';

import { ThemeOptions } from '@mui/material/styles';
import { createTheme } from '@mui/material';
import theme from '../theme.module.scss';

const muiTheme: ThemeOptions = createTheme({
  typography: {
    button: {
      textTransform: 'none',
      fontWeight: 'bold',
      fontSize: '1rem',
    },
    fontFamily: [
      'Quicksand Variable',
      'sans-serif',
    ].join(','),
  },
  spacing: Number(theme.spacingBase),
  palette: {
    mode: 'light',
    primary: { main: theme.primaryColor },
    secondary: { main: theme.secondaryColor },
    warning: { main: theme.orangeColor },
    success: { main: theme.greenColor },
    error: { main: theme.redColor },
  },
});

export default muiTheme;

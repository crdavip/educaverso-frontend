'use client';
import { createTheme, ThemeOptions } from '@mui/material/styles';
import theme from '../../theme.module.scss';

const muiTheme: ThemeOptions = createTheme({
  typography: {
    button: {
      textTransform: 'none',
      fontWeight: 'bold',
      fontSize: '1rem',
    },
    fontFamily: [
      'Quicksand',
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
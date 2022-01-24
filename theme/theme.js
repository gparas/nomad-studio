import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import typography from './typography';

let theme = createTheme({
  typography,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        a: {
          textDecoration: 'none',
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
    },
  },
});

theme = responsiveFontSizes(theme);

if (typeof window !== 'undefined') {
  window.theme = theme;
}

export default theme;

import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import typography from './typography';

let theme = createTheme({
  typography,
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

theme = responsiveFontSizes(theme);

if (typeof window !== 'undefined') {
  window.theme = theme;
}

export default theme;

import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {primary: {main:red.A700}},
  typography: {
    fontFamily: "Noto Sans JP"
  },
});

export default theme;
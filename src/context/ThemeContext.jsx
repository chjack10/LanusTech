import { createTheme, ThemeProvider } from '@mui/material/styles';

const lightTheme = createTheme({ palette: { mode: 'light' } });
const darkTheme = createTheme({ palette: { mode: 'dark' } });

const ThemeContext = ({ children, dark }) => (
  <ThemeProvider theme={dark ? darkTheme : lightTheme}>
    {children}
  </ThemeProvider>
);

export default ThemeContext;

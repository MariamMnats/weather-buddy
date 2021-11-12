import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import GlobalStyles from '@mui/material/GlobalStyles';
import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useEffect } from "react";
import logo from '../logo.svg';
import { theme } from '../styles/theme';
import PlacePicker from "./PlacePicker";
import Weather from "./Weather";

function App() {
  useEffect(() => {
  }, []);
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />  {/* Hero unit */}
        <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', verticalAlign: 'middle' }}>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary."
              gutterBottom>
              <CardMedia
                component="img"
                sx={{ width: 100, display: { xs: 'none', sm: 'block' } }}
                image={logo}
                alt='buddy'
              /></Typography>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.dark"
              gutterBottom>
              Weather Buddy</Typography>
          </Box>
          <PlacePicker />
        </Container>
        <Weather />
      </ThemeProvider>
    </div>
  );
}

export default App;

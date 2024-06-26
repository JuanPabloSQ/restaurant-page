import { Route, Routes} from 'react-router';
import Reserve from './ReservePage/ReservePage';
import MainPage from './MainPage/MainPage';
import Menu from "./MenuPage/MenuPage";
import Blog from "./BlogPage/BlogPage";
import ContactPage from './ContactPage/ContactPage';
import '@fontsource/noto-sans-jp/300.css';
import '@fontsource/noto-sans-jp/400.css';
import '@fontsource/noto-sans-jp/500.css';
import '@fontsource/noto-sans-jp/700.css';
import {ThemeProvider} from "@mui/material"
import theme from "./utils/theme";
import { SnackbarContextProvider } from "./utils/SnackBarContext"

function App() {
  return (
      <div>
        <ThemeProvider theme={theme}>
          <SnackbarContextProvider>
            <Routes>
              <Route path="/restaurant-page/" element={<MainPage />} /> 
              <Route path="/restaurant-page/inicio" element={<MainPage />} /> 
              <Route path="/restaurant-page/reserva" element={<Reserve />} />
              <Route path="/restaurant-page/menú" element={<Menu />} />
              <Route path="/restaurant-page/conocenos" element={<Blog />} />
              <Route path="/restaurant-page/contáctanos" element={<ContactPage/>} /> 
            </Routes>
          </SnackbarContextProvider>
        </ThemeProvider>
      </div>
    
  );
}

export default App;

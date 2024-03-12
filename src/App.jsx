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
              <Route path="/Proyecto-4/" element={<MainPage />} /> 
              <Route path="/Proyecto-4/inicio" element={<MainPage />} /> 
              <Route path="/Proyecto-4/reserva" element={<Reserve />} />
              <Route path="/Proyecto-4/menu" element={<Menu />} />
              <Route path="/Proyecto-4/conocenos" element={<Blog />} />
              <Route path="/Proyecto-4/contactanos" element={<ContactPage/>} /> 
            </Routes>
          </SnackbarContextProvider>
        </ThemeProvider>
      </div>
    
  );
}

export default App;

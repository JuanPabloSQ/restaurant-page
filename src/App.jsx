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
import theme from "../src/utils/theme";
import { SnackbarContextProvider } from "../src/utils/SnackBarContext"

function App() {
  return (
      <div>
        <ThemeProvider theme={theme}>
          <SnackbarContextProvider>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/Zutto" element={<MainPage />} />
              <Route path="/reserva" element={<Reserve />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/conocenos" element={<Blog />} />
              <Route path="/contactanos" element={<ContactPage/>} />
            </Routes>
          </SnackbarContextProvider>
        </ThemeProvider>
      </div>
    
  );
}

export default App;

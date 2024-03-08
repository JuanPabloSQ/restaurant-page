import { Route, Routes} from 'react-router';
import Reserve from './ReservePage/Reserve';
import MainPage from './MainPage/MainPage';
import Menu from "./MenuPage/MenuPage";
import Blog from "./BlogPage/BlogPage";

function App() {
  return (
      <div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/reserva" element={<Reserve />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    
  );
}

export default App;

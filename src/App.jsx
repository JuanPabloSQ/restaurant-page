import { Route, Routes} from 'react-router';
import Reserve from './ReservePage/Reserve';
import MainPage from './MainPage/MainPage';

function App() {
  return (
    
      <div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/reserva" element={<Reserve />} />
        </Routes>
      </div>
    
  );
}

export default App;

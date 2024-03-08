import './App.css';
import NavBar from '../src/header/navbar';
import Carousel from '../src/bodypage/carousel';
import BasicCard from './bodypage/BasicCard';
import Box from '@mui/material/Box';

function App() {
  return (
    <div>
      <NavBar />
      <Box display="flex" justifyContent="space-between" p={2}>
        <BasicCard />
        <Carousel />
      </Box>
    </div>
  );
}

export default App;
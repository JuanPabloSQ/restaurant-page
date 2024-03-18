import NavBar from '../utils/NavBar';
import BasicCard from './BasicCard';
import Box from '@mui/material/Box';
import BoxFooter from '../utils/BoxFooter';
import { useMediaQuery } from '@mui/material';

const MainPage = () => {
  const imageUrl = 'https://c4.wallpaperflare.com/wallpaper/70/192/37/greens-fish-figure-black-background-wallpaper-preview.jpg';
  const isMobile = useMediaQuery('(max-width:600px)'); // Define el ancho máximo para dispositivos móviles

  return (
    <Box sx={{ backgroundColor: 'black'}}>
      <NavBar />
      <Box display="flex" justifyContent="space-between" alignItems="center" marginTop={10} p={2}>
        <BasicCard />
        {!isMobile && <img src={imageUrl} alt="Fish" style={{ width: '50%', marginRight: '20px' }} />}
      </Box>
      {!isMobile && <BoxFooter />}
    </Box>
  );
};

export default MainPage;
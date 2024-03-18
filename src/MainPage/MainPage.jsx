import NavBar from '../utils/NavBar';
import BasicCard from './BasicCard';
import Box from '@mui/material/Box';
import BoxFooter from '../utils/BoxFooter';

const MainPage = () => {
  const imageUrl = 'https://c4.wallpaperflare.com/wallpaper/70/192/37/greens-fish-figure-black-background-wallpaper-preview.jpg';

  return (
    <Box sx={{ backgroundColor: 'black'}}>
      <NavBar />
      <Box display="flex" justifyContent="space-between" alignItems="center" marginTop={10} p={2}>
        <BasicCard />
        <img src={imageUrl} alt="Fish" style={{ width: '50%', marginRight: '20px' }} />
      </Box>
      <BoxFooter />
    </Box>
  );
};

export default MainPage;
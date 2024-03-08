import NavBar from './navbar';
import Carousel from './carousel';
import BasicCard from './BasicCard';
import Box from '@mui/material/Box';
import BoxFooter from './BoxFooter';

const MainPage = () => {
  return (
    <Box>
      <NavBar />
      <Box display="flex" justifyContent="space-between" p={2}>
        <BasicCard />
        <Carousel />
      </Box>
      <BoxFooter />
    </Box>
  );
};

export default MainPage;
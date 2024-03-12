import NavBar from '../utils/NavBar';
import BasicCard from './BasicCard';
import Box from '@mui/material/Box';
import BoxFooter from '../utils/BoxFooter';

const MainPage = () => {
  return (
    <Box >
      <NavBar />
      <Box display="flex" justifyContent="space-between" marginTop={10} p={2} >
        <BasicCard  />
      </Box>
      <BoxFooter />
    </Box>
  );
};

export default MainPage;
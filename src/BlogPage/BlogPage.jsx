import ImageCard from '../utils/ImageCard';
import NavBar from '../utils/NavBar';
import Box from '@mui/material/Box';
import BodyText from '../BlogPage/BodyText';
import BoxFooter from "../utils/BoxFooter";
import { useMediaQuery } from '@mui/material';

const Blog = () => {
  const isMobile = useMediaQuery('(max-width:600px)'); 

  return (
    <div>
      <Box sx={{ backgroundColor: 'black'}}>
        <Box width="100%">
          <NavBar />
        </Box>
        <Box
          maxWidth="100%"
          display="flex"
          justifyContent="center"
          flexDirection={isMobile ? 'column' : 'row'}
          alignItems="center"
          marginTop={10}
          flex="1"
          p={2}
        >
          <ImageCard
            textColor="white"
            bgc="black"
            p={2}
            maxWidth="100%"
            imageWidth={isMobile ? 500 : 1400} 
            imageHeight={300}
            titleText="ZUTTO Restaurant - Un Viaje a Japón en Cada Bocado"
            colorText="white"
            bodyText={<BodyText />}
            image="https://tofuu.getjusto.com/orioneat-prod/fjzscSzZyeC5FWPvg-56%20mix.jpeg"
          />
          {!isMobile && <BoxFooter />} 
        </Box>
      </Box>
    </div>
  );
};

export default Blog;
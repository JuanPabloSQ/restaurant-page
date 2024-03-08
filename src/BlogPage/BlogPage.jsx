import ImageCard from '../utils/ImageCard';
import NavBar from '../utils/navbar';
import Box from '@mui/material/Box';
import BodyText from '../BlogPage/BodyText';

const Blog = () => {
  return (
    <div>
      <Box width="100%">
        <NavBar />
      </Box>
      <Box
        maxWidth="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flex="1"
        p={2}
      >
        <ImageCard 
          p={2}
          maxWidth="100%" 
          imageWidth={1400}
          imageHeight={300} 
          titleText="Descubre Nuestra Esencia Culinary: [Nombre del Restaurante] - Un Viaje a Japón en Cada Bocado"
          bodyText={<BodyText />}
          image="https://play-lh.googleusercontent.com/F8F_52NqhrMtlQF1Rwdxr68QO1qHzvHH2BWQjQ1LDUXChst0fOqKnRNmvaM9b6UrZIc=w526-h296-rw"
        />
      </Box>
    </div>
  );
};

export default Blog;
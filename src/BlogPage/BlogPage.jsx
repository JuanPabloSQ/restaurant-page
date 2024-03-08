import ImageCard from '../utils/ImageCard';
import NavBar from '../utils/navbar';
import Box from '@mui/material/Box';

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
        maxWidth="100%" 
        imageWidth={1400}
        imageHeight={500} 
        titleText="TITULO" 
        bodyText="MUCHO TEXTO" 
        image="https://play-lh.googleusercontent.com/F8F_52NqhrMtlQF1Rwdxr68QO1qHzvHH2BWQjQ1LDUXChst0fOqKnRNmvaM9b6UrZIc=w526-h296-rw"
        />
      </Box>
    </div>
  );
};

export default Blog;

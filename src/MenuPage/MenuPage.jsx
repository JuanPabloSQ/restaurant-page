import ImageCard from '../utils/ImageCard';
import NavBar from '../utils/NavBar';
import { db } from "../firebase";
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import BoxFooter from '../utils/BoxFooter';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useMediaQuery } from '@mui/material';

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const isMobile = useMediaQuery('(max-width:600px)');

  const menuCollectionRef = collection(db, "menu");

  const getMenu = async () => {
    try {
      const dataMenu = await getDocs(menuCollectionRef);
      console.log(dataMenu.docs);
      setMenu(dataMenu.docs.map(doc => ({  
        titleText: doc.data().name,
        bodyText: `Precio: ${doc.data().value}`,  
        image: doc.data().image,
        category: doc.data().category,
      })));
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  useEffect(() => {
    getMenu();
  }, []);

  const renderCategorySection = (categoryTitle, categoryMenu) => {
    return (
      <div key={categoryTitle}>
        <Box sx={{ backgroundColor: 'black'}} >
          <Typography variant="h4" color="primary" style={{ marginTop: '100px', marginBottom: '10px' }}>
            {categoryTitle}
          </Typography>
          <Grid 
            display="flex" 
            justifyContent="center" 
            alignItems="center"
            container 
            spacing={2} 
            style={{ marginLeft: '10px', marginBottom: "50px" }} 
          >
            {categoryMenu.map((menuItem, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <ImageCard
                  maxWidth={400}
                  imageHeight={200}
                  image={menuItem.image}
                  titleText={menuItem.titleText}
                  bodyText={menuItem.bodyText}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    );
  };

  const ramenMenu = menu.filter(item => item.category === 'ramen');
  const sushiMenu = menu.filter(item => item.category === 'sushi');
  const bebidaMenu = menu.filter(item => item.category === 'bebida');
  const otrosPlatosMenu = menu.filter(item => item.category === 'otros platos');

  return (
    <Box>
      <Grid>
        <NavBar />
      </Grid>

      {ramenMenu.length > 0 && renderCategorySection('Ramen:', ramenMenu)}
      {sushiMenu.length > 0 && renderCategorySection('Sushi:', sushiMenu)}
      {bebidaMenu.length > 0 && renderCategorySection('Bebidas:', bebidaMenu)}
      {otrosPlatosMenu.length > 0 && renderCategorySection('Otros Platos:', otrosPlatosMenu)}

      {!isMobile && <BoxFooter />}
    </Box>
  );
};

export default Menu;
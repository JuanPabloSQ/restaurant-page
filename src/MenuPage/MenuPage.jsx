import ImageCard from '../utils/ImageCard';
import NavBar from '../utils/navbar';
import { db } from "../firebase";
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import BoxFooter from '../utils/BoxFooter';

const Menu = () => {
  const [menu, setMenu] = useState([]);

  const menuCollectionRef = collection(db, "menu");

  const getMenu = async () => {
    try {
      const dataMenu = await getDocs(menuCollectionRef);
      console.log(dataMenu.docs);
      setMenu(dataMenu.docs.map(doc => ({  
        titleText: doc.data().name,
        bodyText: `Precio: ${doc.data().value}`,  
        image: "/path/to/your/image.jpg",  
      })));
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <div>
      <Grid>
        <NavBar />
      </Grid>
      <Grid 
        display="flex" 
        justifyContent="center" 
        alignItems="center"
        container 
        spacing={2} 
        style={{ marginLeft: '10px', marginTop: "80px", marginBottom: "20px" }} 
      >
        {menu.map((menuItem, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <ImageCard
              maxWidth={400}
              imageHeight={200}
              imagePath={menuItem.image}
              titleText={menuItem.titleText}
              bodyText={menuItem.bodyText}
            />
          </Grid>
        ))}
      </Grid>
      <BoxFooter />
    </div>
  );
};

export default Menu;

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275, width: '700px', height: '578px', borderRadius: 0 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14, mb: 6, fontFamily: "'Noto Sans Japanese', sans-serif" }} color="text.secondary" gutterBottom>
          Sumérgete en la Esencia Culinary del Sol Naciente
        </Typography>
        <Typography variant="h3" component="div" sx={{ mb: 2,  fontFamily: "'Noto Sans Japanese', sans-serif"}}>
          ZUTTO
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, fontFamily: "'Noto Sans Japanese', sans-serif"   }}>
          Bienvenidos a nuestro rincón gastronómico, donde cada bocado es una travesía hacia la auténtica experiencia japonesa. Te invitamos a explorar más allá de los platillos exquisitos y descubrir los secretos culinarios que dan vida a nuestro restaurante de comida japonesa. Desde las tradiciones centenarias hasta las innovadoras fusiones, cada artículo te sumergirá en la riqueza de sabores, la elegancia de la presentación y la pasión que infunde nuestro local. Prepárate para un viaje sensorial a través de la cocina japonesa, donde la frescura se encuentra con la creatividad en cada plato. ¡Acompáñanos en esta travesía culinaria única!
        </Typography>
      </CardContent>
      <CardActions>
        <Link to="/reserva" style={{ textDecoration: 'none' }}>
          <Button variant="contained">Haz tu reserva</Button>
        </Link>
      </CardActions>
    </Card>
  );
}

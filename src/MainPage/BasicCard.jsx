import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275, width: '700px', height: '578px', borderRadius: 0 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14, mb: 6 }} color="text.secondary" gutterBottom>
          Sumérgete en la Esencia Culinary del Sol Naciente
        </Typography>
        <Typography variant="h5" component="div" sx={{ mb: 2 }}>
          Zutto
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}> {/* Aumento en el margen inferior */}
          Bienvenidos a nuestro rincón gastronómico, donde cada bocado es una travesía hacia la auténtica experiencia japonesa. Te invitamos a explorar más allá de los platillos exquisitos y descubrir los secretos culinarios que dan vida a nuestro restaurante de comida japonesa. Desde las tradiciones centenarias hasta las innovadoras fusiones, cada artículo te sumergirá en la riqueza de sabores, la elegancia de la presentación y la pasión que infunde nuestro local. Prepárate para un viaje sensorial a través de la cocina japonesa, donde la frescura se encuentra con la creatividad en cada plato. ¡Acompáñanos en esta travesía culinaria única!
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained">Haz tu reserva</Button>
      </CardActions>
    </Card>
  );
}

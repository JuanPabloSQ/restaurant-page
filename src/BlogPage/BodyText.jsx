import Typography from '@mui/material/Typography';

const BodyText = () => {
  const text = `
    Bienvenidos a ZUTTO Restaurant, un oasis gastronómico que va más allá de la comida japonesa para ofrecerte una experiencia única e inolvidable. Aquí, en el corazón de Concepcion, nos enorgullece ser más que un restaurante; somos narradores de historias culinarias, embajadores de la tradición y guardianes de la autenticidad.

    Sumérgete en nuestra identidad culinaria, donde cada plato es una expresión de nuestra pasión por la frescura y la creatividad. Desde los ingredientes cuidadosamente seleccionados hasta la meticulosa preparación, cada detalle está imbuido con el espíritu japonés que nos inspira. En ZUTTO Restaurant, no solo celebramos la cocina japonesa, sino que te invitamos a ser parte de nuestro viaje culinario.

    Descubre quiénes somos desde adentro, conoce a nuestro talentoso equipo y déjate llevar por la historia que se cuenta a través de nuestros sabores. En cada bocado, encontrarás la autenticidad, la dedicación y la tradición que nos definen. Bienvenido a ZUTTO Restaurant, donde cada experiencia es un viaje a Japón, y cada plato cuenta una historia de sabor.
  `;

  return (
    <Typography variant="body1" color="white">
      {text}
    </Typography>
  );
};

export default BodyText;
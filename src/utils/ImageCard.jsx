import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const ImageCard = ({ maxWidth, imageHeight, imagePath, title, description }) => {
  return (
    <Card sx={{ maxWidth: maxWidth || 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height={imageHeight || "140"}
          image={imagePath || "/static/images/cards/contemplative-reptile.jpg"}
          alt="card-image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title || "Default Title"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description || "Default description"}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

ImageCard.propTypes = {
  maxWidth: PropTypes.number,
  imageHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  imagePath: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default ImageCard;

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ImageCard({ maxWidth, imageWidth, imageHeight, image, bodyText, titleText }) {
  return (
    <Card sx={{ maxWidth: maxWidth }}>
      <CardActionArea>
        <CardMedia
          component="img"
          style={{ width: imageWidth, height: imageHeight }}
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {titleText}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {bodyText} 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
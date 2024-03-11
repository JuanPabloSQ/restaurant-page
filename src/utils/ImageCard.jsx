import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ImageCard({ maxWidth, imageWidth, imageHeight, image, bodyText, titleText, bgc, colorText }) {
  return (
    <Card sx={{ maxWidth: maxWidth, backgroundColor: bgc }}>
      <CardActionArea>
        <CardMedia
          component="img"
          style={{ width: imageWidth, height: imageHeight }}
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color={colorText}>
            {titleText}
          </Typography>
          <Typography variant="body2" color="text.secondary" component="div">
            {bodyText}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

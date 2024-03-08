import ImageCard from '../utils/ImageCard';

const Menu = () => {
  return (
    <div>
      <ImageCard
        maxWidth={400}
        imageHeight={200}
        imagePath="/path/to/your/image.jpg"
        title="Custom Title"
        description="Custom description for the card."
      />
    </div>
  );
};

export default Menu;

import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views-react-18-fix';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'Plato 1',
    imgPath:
      'https://c4.wallpaperflare.com/wallpaper/70/192/37/greens-fish-figure-black-background-wallpaper-preview.jpg',
  },
  {
    label: 'Plato 2',
    imgPath:
      'https://assets3.thrillist.com/v1/image/3043780/750x500/flatten;crop;webp=auto;jpeg_quality=50.jpg',
  },
  {
    label: 'Plato 3',
    imgPath:
      'https://img-us.didaudo.net/us-locations/US/000/002/2139/top-7-sushi-restaurants-in-brooklyn-heights-new-york-city.jpg',
  },
  {
    label: 'Plato 4',
    imgPath:
      'https://www.foodadvisor.my/attachments/6c71b37c7c9139472b6e9c4ce07ac8fd169c9a1a/store/fill/800/500/69a25ed154ed335532cc5a8c9ec1501840e617a59a941113a95a6c0f92eb/featured_image.jpg',
  },
];

function Carousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 702, height: '60vh', flexGrow: 1, }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '20%', 
          bgcolor: 'black',
        }}
      >
   
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <Box
            key={step.label}
            sx={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {Math.abs(activeStep - index) <= 2 && (
              <img
                src={step.imgPath}
                alt={step.label}
                style={{
                  width: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                }}
              />
            )}
          </Box>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        sx={{backgroundColor: 'black' }}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft  />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
    </Box>
  );
}

export default Carousel;



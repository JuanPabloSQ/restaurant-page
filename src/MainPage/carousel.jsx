import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views-react-18-fix';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'Ramen 1',
    imgPath:
      'https://www.foodadvisor.my/attachments/6c71b37c7c9139472b6e9c4ce07ac8fd169c9a1a/store/fill/800/500/69a25ed154ed335532cc5a8c9ec1501840e617a59a941113a95a6c0f92eb/featured_image.jpg',
  },
  {
    label: 'Sushi 1',
    imgPath:
      'https://img-us.didaudo.net/us-locations/US/000/002/2139/top-7-sushi-restaurants-in-brooklyn-heights-new-york-city.jpg',
  },
  {
    label: 'Sushi 2',
    imgPath:
      'https://thehootleeds.com/wp-content/uploads/2021/10/Screenshot-2021-10-21-at-11.05.18-800x500.png',
  },
  {
    label: 'Ramen 2',
    imgPath:
      'https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/8acbeec7-ece8-4e66-9ac5-d1a10a4369ba/test1-clientside/Singapore/Menya%20Aoi/Jan2024/festive-family-set-reward.jpg',
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
    <Box sx={{ maxWidth: 702, height: '60vh', flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '20%', 
          bgcolor: 'background.default',
        }}
      >
        <Typography variant="h5" sx={{fontFamily: "'Noto Sans Japanese', sans-serif"}}>{images[activeStep].label}</Typography>
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
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
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
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default Carousel;

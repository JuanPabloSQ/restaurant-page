import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export default function BoxFooter() {
  return (
    <Box
      position="fixed"
      left={0}
      right={0}
      bottom={0}
      padding={1}
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="flex-end"
      backgroundColor="#333"
    >
      <Box display="flex" alignItems="center" mr={2}>
        <EmailIcon />
        <Typography variant="body1" ml={1}>
          sushi@mail.com
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" mr={2}>
        <LocalPhoneIcon />
        <Typography variant="body1" ml={1}>
          +123 456 789
        </Typography>
      </Box>
      <Box display="flex" alignItems="center">
        <LocationOnIcon />
        <Typography variant="body1" ml={1}>
          123 Calle, Ciudad
        </Typography>
      </Box>
    </Box>
  );
}
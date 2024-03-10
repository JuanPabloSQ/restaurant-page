import NavBar from "../utils/navbar";
import BoxFooter from "../utils/BoxFooter";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PeopleSelect from "../ReservePage/PeopleSelect";
import TimeSelect from "../ReservePage/TimeSelect";
import SmokeSelect from "./SmokeSelect";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react';

const Reserve = () => {
  const [selectedPeople, setSelectedPeople] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedSmoke, setSelectedSmoke] = useState('');

  const handlePeopleChange = (event) => {
    setSelectedPeople(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleSmokeChange = (event) => {
    setSelectedSmoke(event.target.value);
  };

  return (
    <div>
      <NavBar />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ paddingLeft: '200px', paddingRight: '200px', marginTop: '100px' }} 
      >
        <Grid 
          container 
          component="form"
          spacing={2} 
          sx={{
            backgroundColor: '#333',
            borderRadius: '8px',
            padding: '16px',
            '& input': {
              color: 'white',
              '&:-webkit-autofill': {
                '-webkit-text-fill-color': 'white',
                '-webkit-box-shadow': '0 0 0px 1000px #333 inset',
              },
            },
            '& label': {
              color: 'white',
            },
            '& fieldset': {
              borderColor: 'white',
            },
          }}
        > 
          <Grid item xs={12} sx={{ marginBottom: '10px' }}>
            <Typography variant="h5" color="white" align="center">
              Reserva con nosotros
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth id="ConactName" label="Tu nombre" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth id="ConactLastName" label="Tu apellido" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth id="ConactMail" label="Email" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth id="ConactPhone" label="Teléfono" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <PeopleSelect value={selectedPeople} onChange={handlePeopleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SmokeSelect value={selectedSmoke} onChange={handleSmokeChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker label="Fecha" style={{ width: '100%' }} />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TimeSelect value={selectedTime} onChange={handleTimeChange}/>
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
            <Button variant="contained">Enviar</Button>
          </Grid>
        </Grid>
      </Box>
      <BoxFooter />
    </div>
  );
};

export default Reserve;
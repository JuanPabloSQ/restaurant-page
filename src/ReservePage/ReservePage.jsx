import NavBar from "../utils/navbar";
import BoxFooter from "../utils/BoxFooter";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import BasicDatePicker from "./BasicDatePicker";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PeopleSelect from "../ReservePage/PeopleSelect";
import { useState } from 'react';

const Reserve = () => {
  const [selectedPeople, setSelectedPeople] = useState('');

  const handlePeopleChange = (event) => {
    setSelectedPeople(event.target.value);
  };

  return (
    <div>
      <NavBar />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ paddingLeft: '200px', paddingRight: '200px', marginTop: '150px' }} 
      >
        <Grid 
          container 
          component="form"
          spacing={1} 
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
          <Grid item xs={12} sx={{ marginBottom: '16px' }}>
            <Typography variant="h5" color="white" align="center">
              Contáctanos
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth id="ConactName" label="Tu nombre" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth id="ConactLastName" label="Tu apellido" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth id="ConactMail" label="Email" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth id="ConactPhone" label="Teléfono" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <PeopleSelect value={selectedPeople} onChange={handlePeopleChange} />
          </Grid>
          <Grid item xs={12}>
            <BasicDatePicker/>
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

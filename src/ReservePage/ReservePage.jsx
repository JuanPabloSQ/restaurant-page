import { useState } from 'react';
import dayjs from 'dayjs';
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
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

const Reserve = () => {
  const [selectedPeople, setSelectedPeople] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedSmoke, setSelectedSmoke] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mail, setMail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);

  const handlePeopleChange = (event) => {
    setSelectedPeople(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleSmokeChange = (event) => {
    setSelectedSmoke(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleMailChange = (event) => {
    setMail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleReservationSubmit = async () => {

    if (!selectedDate) {
      console.error("Seleccione una fecha antes de enviar la reserva.");
      return;
    }
  
   
    const formattedDate = dayjs(selectedDate).format('DD-MM-YYYY');

    const reservationData = {
      name,
      lastName,
      mail,
      phone,
      people: selectedPeople,
      schedule: selectedTime,
      smoke: selectedSmoke,
      date: formattedDate, 
    };

    try {
      
      const reservationsCollection = collection(db, 'reservations');
      const docRef = await addDoc(reservationsCollection, reservationData);

      console.log("Reserva exitosa. Documento ID:", docRef.id);
      
    } catch (error) {
      console.error("Error al realizar la reserva:", error);
    }
  };

  return (
    <div>
      <NavBar />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ paddingLeft: '200px', paddingRight: '200px', marginTop: '120px' }} 
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
            <TextField fullWidth id="name" label="Tu nombre" variant="outlined" onChange={handleNameChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth id="lastName" label="Tu apellido" variant="outlined" onChange={handleLastNameChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth id="mail" label="Email" variant="outlined" onChange={handleMailChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth id="phone" label="Teléfono" variant="outlined" onChange={handlePhoneChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <PeopleSelect value={selectedPeople} onChange={handlePeopleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SmokeSelect value={selectedSmoke} onChange={handleSmokeChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
           <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='es-cl'>
            <DatePicker
            label="Fecha"
            format="DD-MM-YYYY"
            value={selectedDate}
            onChange={(date) => handleDateChange(date)}
            sx={{ width: '100%' }}
            />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TimeSelect value={selectedTime} onChange={handleTimeChange}/>
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px', marginBottom: "10px" }}>
            <Button variant="contained" onClick={handleReservationSubmit}>
              Enviar
            </Button>
          </Grid>
        </Grid>
      </Box>
      <BoxFooter />
    </div>
  );
};

export default Reserve;
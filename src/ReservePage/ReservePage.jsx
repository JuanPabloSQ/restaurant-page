import { useState } from 'react';
import dayjs from 'dayjs';
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import NavBar from "../utils/NavBar";
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
import * as yup from 'yup';

const Reserve = () => {
  const [selectedPeople, setSelectedPeople] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedSmoke, setSelectedSmoke] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mail, setMail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});

  const validationSchema = yup.object({
    name: yup.string().required('El nombre es obligatorio'),
    lastName: yup.string().required('El apellido es obligatorio'),
    mail: yup.string().email('Ingrese un correo electrónico válido').required('El correo electrónico es obligatorio'),
    phone: yup.string().matches(/^\d+$/, 'Ingrese solo números').required('El teléfono es obligatorio'),
    selectedPeople: yup.string().required('Seleccione el número de personas'),
    selectedSmoke: yup.string().required('Seleccione la preferencia'),
    selectedTime: yup.string().required('Seleccione la hora de la reserva'),
  });

  const validateField = async (fieldName, value) => {
    try {
      await yup.reach(validationSchema, fieldName).validate(value);
      setValidationErrors((prevErrors) => ({ ...prevErrors, [fieldName]: '' }));
    } catch (error) {
      setValidationErrors((prevErrors) => ({ ...prevErrors, [fieldName]: error.message }));
    }
  };

  const handleInputChange = (fieldName, value) => {
    validateField(fieldName, value);
    switch (fieldName) {
      case 'name':
        setName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'mail':
        setMail(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      case 'selectedPeople':
        setSelectedPeople(value);
        break;
      case 'selectedSmoke':
        setSelectedSmoke(value);
        break;
      case 'selectedTime':
        setSelectedTime(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async () => {
    try {
      await validationSchema.validate(
        { name, lastName, mail, phone, selectedPeople, selectedSmoke, selectedTime },
        { abortEarly: false }
      );

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

      const reservationsCollection = collection(db, 'reservations');
      const docRef = await addDoc(reservationsCollection, reservationData);
      console.log("Reserva exitosa. Documento ID:", docRef.id);
    } catch (error) {
      if (error.name === 'ValidationError') {
        console.error("Error de validación:", error.errors);
        const errors = {};
        error.inner.forEach((err) => {
          errors[err.path] = err.message;
        });
        setValidationErrors(errors);
      } else {
        console.error("Error al realizar la reserva:", error);
      }
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
            <TextField
              fullWidth
              id="name"
              label="Tu nombre"
              variant="outlined"
              value={name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              error={Boolean(validationErrors.name)}
              helperText={validationErrors.name}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="lastName"
              label="Tu apellido"
              variant="outlined"
              value={lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              error={Boolean(validationErrors.lastName)}
              helperText={validationErrors.lastName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="mail"
              label="Email"
              variant="outlined"
              value={mail}
              onChange={(e) => handleInputChange('mail', e.target.value)}
              error={Boolean(validationErrors.mail)}
              helperText={validationErrors.mail}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="phone"
              label="Teléfono"
              variant="outlined"
              value={phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              error={Boolean(validationErrors.phone)}
              helperText={validationErrors.phone}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <PeopleSelect
              value={selectedPeople}
              onChange={(event) => handleInputChange('selectedPeople', event.target.value)}
              error={Boolean(validationErrors.selectedPeople)}
              helperText={validationErrors.selectedPeople}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SmokeSelect
              value={selectedSmoke}
              onChange={(event) => handleInputChange('selectedSmoke', event.target.value)}
              error={Boolean(validationErrors.selectedSmoke)}
              helperText={validationErrors.selectedSmoke}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='es-cl'>
              <DatePicker
                label="Fecha"
                format="DD-MM-YYYY"
                value={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                sx={{ width: '100%' }}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TimeSelect
              value={selectedTime}
              onChange={(event) => handleInputChange('selectedTime', event.target.value)}
              error={Boolean(validationErrors.selectedTime)}
              helperText={validationErrors.selectedTime}
            />
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px', marginBottom: "10px" }}>
            <Button variant="contained" type="button" onClick={handleSubmit}>
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

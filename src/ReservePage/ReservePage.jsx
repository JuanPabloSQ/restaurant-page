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
import { useSnackbar } from "../utils/SnackBarContext";
import * as yup from 'yup';

const validationSchema = {
  name: yup.string().required('El nombre es obligatorio'),
  lastName: yup.string().required('El apellido es obligatorio'),
  mail: yup.string().email('Ingrese un correo electrónico válido').required('El correo electrónico es obligatorio'),
  phone: yup.number().typeError('Ingrese un número').required('El teléfono es obligatorio'),
  selectedPeople: yup.number().typeError('Seleccione el número de personas').required('Seleccione el número de personas'),
  selectedSmoke: yup.number().typeError('Seleccione la preferencia').required('Seleccione la preferencia'),
  selectedTime: yup.number().typeError('Seleccione la hora de la reserva').required('Seleccione la hora de la reserva'),
  selectedDate: yup.date().required('La fecha de nacimiento es obligatoria'),
};

const Reserve = () => {
  const [selectedPeople, setSelectedPeople] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedSmoke, setSelectedSmoke] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mail, setMail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);

  const [formErrors, setFormErrors] = useState({
    name: '',
    lastName: '',
    mail: '',
    phone: '',
    selectedPeople: '',
    selectedSmoke: '',
    selectedTime: '',
    selectedDate: '',
  });

  const validateField = (fieldName, value) => {
    try {
      yup.reach(yup.object(validationSchema), fieldName).validateSync(value, { abortEarly: false });
      console.log(`Validación exitosa para ${fieldName}`);
      setFormErrors((prevErrors) => ({ ...prevErrors, [fieldName]: '' }));
    } catch (error) {
      console.error(`Validación fallida para ${fieldName}:`, error);
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [fieldName]: error.errors[0],
      }));
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
      case 'selectedDate':
        setSelectedDate(value);
        break;
      default:
        break;
    }
  };

  const { errorSnackbar } = useSnackbar();
  const { successSnackbar } = useSnackbar();

  const clearForm = () => {
    setName('');
    setLastName('');
    setMail('');
    setPhone('');
    setSelectedPeople('');
    setSelectedSmoke('');
    setSelectedTime('');
    setSelectedDate(null);
  };

  const handleSubmit = async () => {
    try {
      Object.keys(validationSchema).forEach(fieldName => {
        validateField(fieldName, eval(fieldName));
      });

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
      successSnackbar('Reserva realizada con éxito ');
      console.log("Reserva exitosa. Documento ID:", docRef.id);

      clearForm();
    } catch (error) {
      if (error.name === 'ValidationError') {
        errorSnackbar('Error con el servidor');
        console.error("Error de validación:", error.errors);
        const errors = {};
        error.inner.forEach((err) => {
          errors[err.path] = err.message;
        });
        applyFormErrors(errors);
      } else {
        console.error("Error al realizar la reserva:", error);
      }
    }
  };

  const applyFormErrors = (error) => {
    setFormErrors(
      error.inner.reduce((acc, curr) => {
        return { ...acc, [curr.path]: curr.errors[0] };
      }, {}),
    );
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
              error={Boolean(formErrors.name)}
              helperText={formErrors.name}
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
              error={Boolean(formErrors.lastName)}
              helperText={formErrors.lastName}
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
              error={Boolean(formErrors.mail)}
              helperText={formErrors.mail}
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
              error={Boolean(formErrors.phone)}
              helperText={formErrors.phone}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <PeopleSelect
              value={selectedPeople}
              onChange={(event) => handleInputChange('selectedPeople', event.target.value)}
              error={Boolean(formErrors.selectedPeople)}
              helperText={formErrors.selectedPeople}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SmokeSelect
              value={selectedSmoke}
              onChange={(event) => handleInputChange('selectedSmoke', event.target.value)}
              error={Boolean(formErrors.selectedSmoke)}
              helperText={formErrors.selectedSmoke}
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
                disablePast
                slotProps={{
                  textField: {
                    error: Boolean(formErrors.selectedDate),
                    helperText: formErrors.selectedDate,
                  },
                }}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TimeSelect
              value={selectedTime}
              onChange={(event) => handleInputChange('selectedTime', event.target.value)}
              error={Boolean(formErrors.selectedTime)}
              helperText={formErrors.selectedTime}
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

import { useState } from 'react';
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import NavBar from "../utils/NavBar";
import BoxFooter from "../utils/BoxFooter";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSnackbar } from "../utils/SnackBarContext";
import * as yup from 'yup';

const validationSchema = {
  name: yup.string().required('El nombre es obligatorio'),
  lastName: yup.string().required('El apellido es obligatorio'),
  email: yup.string().email('Ingrese un correo electrónico válido').required('El correo electrónico es obligatorio'),
  phone: yup.number().typeError('Ingrese un número').required('El teléfono es obligatorio'),
  comments: yup.string().required('Ingrese sus comentarios').max(1000, 'Los comentarios deben tener como máximo 1000 caracteres'),
};

const ContactPage = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [comments, setComments] = useState('');

  const [formErrors, setFormErrors] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    comments: '',
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

  const handleFieldChange = (setter) => (event) => {
    const fieldName = event.target.id;
    const value = event.target.value;
    validateField(fieldName, value);
    setter(value);
  };

  const { errorSnackbar } = useSnackbar();
  const { successSnackbar } = useSnackbar();

  const handleFormSubmit = async () => {
    try {
      Object.keys(validationSchema).forEach(fieldName => {
        validateField(fieldName, eval(fieldName));
      });

      const formData = {
        name,
        lastName,
        email,
        phone,
        comments,
      };

      const contactsCollection = collection(db, 'contacts');
      const docRef = await addDoc(contactsCollection, formData);
      successSnackbar('Mensaje enviado con éxito ');
      console.log("Formulario de contacto enviado. Documento ID:", docRef.id);

      setName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setComments('');
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
        console.error("Error al enviar el formulario de contacto:", error);
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
          <Grid item xs={6}>
            <TextField
              fullWidth
              id="name"
              label="Tu nombre"
              variant="outlined"
              value={name}
              onChange={handleFieldChange(setName)}
              error={Boolean(formErrors.name)}
              helperText={formErrors.name}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id="lastName"
              label="Tu apellido"
              variant="outlined"
              value={lastName}
              onChange={handleFieldChange(setLastName)}
              error={Boolean(formErrors.lastName)}
              helperText={formErrors.lastName}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id="email"
              label="Email"
              variant="outlined"
              value={email}
              onChange={handleFieldChange(setEmail)}
              error={Boolean(formErrors.email)}
              helperText={formErrors.email}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id="phone"
              label="Teléfono"
              variant="outlined"
              value={phone}
              onChange={handleFieldChange(setPhone)}
              error={Boolean(formErrors.phone)}
              helperText={formErrors.phone}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="comments"
              label="Mensaje y comentarios"
              multiline
              maxRows={4}
              variant="outlined"
              value={comments}
              onChange={handleFieldChange(setComments)}
              error={Boolean(formErrors.comments)}
              helperText={formErrors.comments}
            />
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
            <Button variant="contained" onClick={handleFormSubmit}>
              Enviar
            </Button>
          </Grid>
        </Grid>
      </Box>
      <BoxFooter />
    </div>
  );
};

export default ContactPage;

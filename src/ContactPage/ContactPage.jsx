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

const ContactPage = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [comments, setComments] = useState('');

  const handleFieldChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const handleFormSubmit = async () => {
    const formData = {
      name,
      lastName,
      email,
      phone,
      comments,
    };

    try {
      const contactsCollection = collection(db, 'contacts');

      const docRef = await addDoc(contactsCollection, formData);
      console.log("Formulario de contacto enviado. Documento ID:", docRef.id);
    
      setName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setComments('');
    } catch (error) {
      console.error("Error al enviar el formulario de contacto:", error);
      
    }
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

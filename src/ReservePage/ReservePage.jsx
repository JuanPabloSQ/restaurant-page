import NavBar from "../utils/navbar";
import BoxFooter from "../utils/BoxFooter";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import BasicDatePicker from "./BasicDatePicker"
import BasicTimePicker from "./BasicTimePicker"
import BoardSelect from "./BoardSelect";

const Reserve = () => {
  return (
    <div>
      <NavBar />
      <Grid 
        container 
        component="form"
        spacing={1} 
        sx={{
          display="flex" ,
          justifyContent="space-between",
           marginTop={10}, 
           p={2},
          backgroundColor: '#333',  // Cambiado a gris oscuro
          borderRadius: '8px',      // Bordes redondos
          padding: '16px',          // Espaciado interno
          '& input': {
            color: 'white',
            '&:-webkit-autofill': {
              '-webkit-text-fill-color': 'white',
              '-webkit-box-shadow': '0 0 0px 1000px #333 inset',  // Cambiado a gris oscuro
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
        <Grid item xs={12}>
          <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined" />
        </Grid>
        <Grid item xs={12}>
          <BasicDatePicker/>
        </Grid>
        <Grid item xs={12}>
          <BasicTimePicker />
        </Grid>
        <Grid item xs={12}>
          <BoardSelect/>
        </Grid>
      </Grid>
      <BoxFooter />
    </div>
  );
};

export default Reserve;

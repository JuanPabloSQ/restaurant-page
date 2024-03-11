import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';

const currencies = [
  {
    value: 1,
    label: 'Si',
  },
  {
    value: 2,
    label: "No",
  }
];

const SmokeSelect = ({ value, onChange, error, helperText }) => {
  return (
    <FormControl fullWidth error={error}>
      <InputLabel id='smoke'> Sector fumador </InputLabel>
      <Select
        labelId='smoke'
        label='Sector fumador'
        value={value || ''}
        onChange={onChange}
        sx={{ color: 'white' }}
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};

export default SmokeSelect;

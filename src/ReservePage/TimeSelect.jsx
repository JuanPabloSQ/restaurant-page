import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';

const currencies = [
  {
    value: 1,
    label: '15:00',
  },
  {
    value: 2,
    label: "16:00",
  },
  {
    value: 3,
    label: '17:00',
  },
  {
    value: 4,
    label: '18:00',
  },
  {
    value: 5,
    label: '19:00',
  },
];

const TimeSelect = ({ value, onChange, error, helperText }) => {
  return (
    <FormControl fullWidth error={error}>
      <InputLabel id='schedule'> Horario</InputLabel>
      <Select
        labelId='schedule'
        label='Horario'
        value={value || ''}
        onChange={onChange}
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

export default TimeSelect;

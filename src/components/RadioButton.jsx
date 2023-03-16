import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const RadioButton = () => {

  return (
    <FormControl>
    <FormLabel id="demo-radio-buttons-group-label">Género</FormLabel>
    <RadioGroup
      aria-labelledby="demo-radio-buttons-group-label"
      defaultValue="Femenino"
      name="radio-buttons-group"
    >
      <FormControlLabel value="femenino" control={<Radio />} label="Femenino" />
      <FormControlLabel value="masculino" control={<Radio />} label="Masculino" />
      <FormControlLabel value="otro" control={<Radio />} label="Otro" />
    </RadioGroup>
  </FormControl>
  )
}

export default RadioButton



import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


const CheckBox = () => {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox  />} label="Recibir noticias de nuestro newsletter diariamente" />
    </FormGroup>
  )
}

export default CheckBox
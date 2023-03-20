import {FormControl, InputLabel, Select, MenuItem} from '@mui/material'
import { useState } from 'react';

const SelectStyle = () => {
    const [value, setValue] = useState('');
    const handleChange = (event) => {
        setValue(event.target.value);
      };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Stack</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label="Stack"
        onChange={handleChange}
        
      >
        <MenuItem value={"Front-end"}> Front-end</MenuItem>
        <MenuItem value={"Back-end"}> Back-end</MenuItem>
        <MenuItem value={"Full-stack"}>Full-stack</MenuItem>
      </Select>
    </FormControl>
  );
};


export default SelectStyle;
import * as React from "react";
import {
  Typography,
  Button,
  TextField,
  Box,
  Paper,
  Grid,
  Container,
} from "@mui/material";
import SelectStyle from "../src/components/Select";
import RadioButton from "../src/components/RadioButton";
import CheckBox from "../src/components/CheckBox";
import BasicModal from "../src/components/Modal.jsx";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const Home = () => {
  return (
      <Box sx={{ maxWidth: 800 }}>
        <Paper
          elevation={1}
          sx={{  p: "32px", display: "flex", flexDirection: "column", gap: 3}}
        >
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Nombre"
              variant="outlined"
              sx={{ width: 1 }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Apellido"
              variant="outlined"
              sx={{ width: 1 }}
            />
          </Grid>
          <SelectStyle />
          <RadioButton />
          <CheckBox />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <BasicModal />
          </Box>
        </Paper>
     
      {/* <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Apellido</TableCell>
              <TableCell>Género</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Barbi</TableCell>
              <TableCell>Torres</TableCell>
              <TableCell>Femenino</TableCell>
              <TableCell>barbi@gmail.com</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Barbi</TableCell>
              <TableCell>Torres</TableCell>
              <TableCell>Femenino</TableCell>
              <TableCell>barbi@gmail.com</TableCell>
            </TableRow>
            
          </TableBody>
        </Table>
      </TableContainer> */}
  </Box>
  );
};

export default Home;

import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 20 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 100,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 100,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 150,
    editable: true,
    valueGetter: (params) =>
    `${params.row.firstName + "@gmail.com"}`,
  },
  {
    field: 'stack',
    headerName: 'Stack',
    sortable: false,
    width: 90,
  },
  {
    field: 'genre',
    headerName: 'Genre',
    width: 90,
    editable: true,
  },
  {
    field: 'registration_date',
    headerName: 'Registration Date',
    width: 150,
    editable: true,
  }
];

const rows = [
 {
    id: 1,
    firstName: 'bar',
    lastName: 'mar',
 
    stack: 'Front-end',
    genre:'Female',
    registration_date: '2/3/23'

 },
 {
    id: 2,
    firstName: 'foo',
    lastName: 'lol',

    stack: 'Front-end',
    genre:'Male',
    registration_date:  '2/3/23'

 },
 {
    id: 3,
    firstName: 'All',
    lastName: 'mar',
    stack: 'Back-end',
    genre:'Male',
    registration_date:  '2/3/23'

 },

];

export default function GridData() {
  return (
    <Box sx={{ height: 300, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        disableRowSelectionOnClick
        sx={{'&.MuiDataGrid-columnHeaderTitle': {color: 'secondary'} }}
    
      />
    </Box>
  );
}
import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(fullname, occupation, email, date) {
  return { fullname, occupation, email, date };
}




let rows=[]

export default function BasicTable() {

    // State to hold the data
const [data, setData] = useState(null);
// State to handle loading state
const [loading, setLoading] = useState(true);
// State to handle error
const [error, setError] = useState(null);

// useEffect to preload information when component mounts
useEffect(() => {
  // Function to fetch data from the API
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5006/lastLogin');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);

      }
      const result = await response.json();
      rows = result.map((element)=>element)
      console.log('rows',rows)
      setData(result);
      setLoading(false); // Set loading to false after data is fetched
    } catch (err) {
      setError(err.message);
      setLoading(false); // Set loading to false after error
    }
  };

  // Call the fetchData function
  fetchData();
}, []); // Empty dependency array to run the effect only once on mount

// Conditional rendering based on loading and error state
    if (loading) {
        return <div>Loading...</div>;
      }
      
      if (error) {
        return <div>Error: {error}</div>;
      }
      
  return (<>
  <div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">User</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">LastSeen</TableCell>
            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.email}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{row.full_name} {row.occupation}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.created_at}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </>
  );
}
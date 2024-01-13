import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EmployeeView.css';
import { Grid, Card, Typography } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import NavbarEmp from './NavbarEmp';

const EmployeeView = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('/emp')
      .then(response => {
        setEmployees(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  return (
    <>
      <NavbarEmp />
      <Grid container className='employee-container'>
        {employees.map((employee) => (
          <Grid item xs={12} sm={12} md={12} lg={12} key={employee._id}>
            <Card sx={{ minWidth: 400 }} className='employeelist'>
              <CardContent>
                <Typography variant="h5" component="div">
                  {employee.name}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  {employee.email}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {employee.designation}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Employee ID: {employee.id}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default EmployeeView;

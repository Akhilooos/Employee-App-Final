import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EmployeeList.css';
import { Link } from 'react-router-dom';
import { Grid, Button, Card, Typography } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import NavbarAdmin from './NavbarAdmin';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios.get('/emp')
            .then(response => {
                const sortedEmployees = response.data.sort((a, b) => a.id - b.id);
                setEmployees(sortedEmployees);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);

    const handleDelete = (id) => {
        axios.delete(`/emp/delete/${id}`)
            .then(response => {
                setEmployees(employees.filter(employee => employee._id !== id));
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    };

    return (
        <>
            <NavbarAdmin />
            <div className='employee-container'>
                <Grid container spacing={2} className='employee-grid'>
                    {employees.map((employee) => (
                        <Grid item xs={12} sm={12} md={12} lg={12} key={employee._id}>
                            <Card sx={{ maxWidth: 400 }} className='employeelist'>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {employee.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Employee id: {employee.id}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {employee.designation}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {employee.email}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Link to={`/edit/${employee._id}`}>
                                        <Button size="small" variant="contained" color="primary">
                                            Update
                                        </Button>
                                    </Link>
                                    <Button
                                        size="small"
                                        variant="contained"
                                        color="secondary"
                                        onClick={() => handleDelete(employee._id)}
                                    >
                                        Delete
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </>
    );
};

export default EmployeeList;





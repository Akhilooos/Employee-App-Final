import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button } from '@mui/material';
import './EmployeeForm.css';
import NavbarAdmin from './NavbarAdmin';

const EmployeeForm = () => {
  const [employee, setEmployee] = useState({
    id: '',
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    designation: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/emp/add', employee)
      .then(response => {
        console.log(response);
        setIsSubmitted(true);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  useEffect(() => {
    if (isSubmitted) {
      setEmployee({
        id: '',
        name: '',
        email: '',
        phoneNumber: '',
        password: '',
        designation: ''
      });
      setIsSubmitted(false);
    }
  }, [isSubmitted]);

  return (
    <>
      <NavbarAdmin />
      <form className='employeeform' noValidate autoComplete="off" onSubmit={handleSubmit}>
        <div className="form-field">
          <TextField id="id" label="Employee ID" variant="outlined" fullWidth className="custom-textfield" onChange={handleChange} value={employee.id} />
        </div>
        <div className="form-field">
          <TextField id="name" label="Employee Name" variant="outlined" fullWidth className="custom-textfield" onChange={handleChange} value={employee.name} />
        </div>
        <div className="form-field">
          <TextField id="email" label="Email" variant="outlined" fullWidth className="custom-textfield" onChange={handleChange} value={employee.email} />
        </div>
        <div className="form-field">
          <TextField id="phoneNumber" label="Phone number" variant="outlined" fullWidth className="custom-textfield" onChange={handleChange} value={employee.phoneNumber} />
        </div>
        <div className="form-field">
          <TextField id="password" label="Password" type="password" variant="outlined" fullWidth className="custom-textfield" onChange={handleChange} value={employee.password} />
        </div>
        <div className="form-field">
          <TextField id="designation" label="Designation" variant="outlined" fullWidth className="custom-textfield" onChange={handleChange} value={employee.designation} />
        </div>
        <div className="form-field">
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </>
  );
};

export default EmployeeForm;


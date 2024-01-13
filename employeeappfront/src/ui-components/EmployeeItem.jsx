import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TextField, Button, IconButton, InputAdornment } from '@mui/material';
import { useParams } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './EmployeeItem.css'
import NavbarAdmin from './NavbarAdmin'

const EmployeeItem = () => {
    const { id } = useParams();
    const [employee, setEmployee] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        axios.get(`/emp/${id}`)
            .then(response => {
                setEmployee(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, [id]);

    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put(`/emp/edit/${id}`, employee)
            .then(response => {
                console.log('Update Successful');
                alert('Data updated successfully');
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    };

    const handleChange = (event) => {
        setEmployee({ ...employee, [event.target.id]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div>
            <NavbarAdmin/>
            <form className='employeeform' noValidate autoComplete="off" onSubmit={handleUpdate}>
                <div className="form-field">
                    <TextField id="id" label="Employee ID" variant="outlined" fullWidth className="custom-textfield" value={employee.id || ''} onChange={handleChange}/>
                </div>
                <div className="form-field">
                    <TextField id="name" label="Employee Name" variant="outlined" fullWidth className="custom-textfield" value={employee.name || ''} onChange={handleChange}/>
                </div>
                <div className="form-field">
                    <TextField id="email" label="Email" variant="outlined" fullWidth className="custom-textfield" value={employee.email || ''} onChange={handleChange}/>
                </div>
                <div className="form-field">
                    <TextField id="phone" label="Phone number" variant="outlined" fullWidth className="custom-textfield" value={employee.phoneNumber || ''} onChange={handleChange}/>
                </div>
                <div className="form-field">
                    <TextField 
                        id="password" 
                        label="Password" 
                        type={showPassword ? 'text' : 'password'} 
                        variant="outlined" 
                        fullWidth 
                        className="custom-textfield" 
                        value={employee.password || ''}
                        onChange={handleChange}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={handleClickShowPassword}
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </div>
                <div className="form-field">
                    <TextField id="designation" label="Designation" variant="outlined" fullWidth className="custom-textfield" value={employee.designation || ''} onChange={handleChange}/>
                </div>
                <div className="form-field">
                    <Button variant="contained" style={{ backgroundColor: 'green' }} type="submit">
                        Update
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default EmployeeItem;

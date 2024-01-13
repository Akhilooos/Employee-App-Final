import React, { useState } from 'react';
import { Button, TextField, Grid, Container } from '@mui/material';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/user/login', { email, password });
      if (response.data === 'admin') {
        login();
        navigate('/admin');
      } else if (response.data === 'employee') {
        login();
        navigate('/employee');
      } else {
        console.error('Invalid email or password');
      }
    } catch (error) {
      console.error('There was an error!', error);
      console.error(error.response);
    }
  };

  return (
    <div className='login-container'>
      <Container maxWidth="xs">
        <h1>Log In</h1>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              Sign In
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;

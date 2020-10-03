import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
  Button,
  Grid,
  Typography,
  InputAdornment,
} from '@material-ui/core';
import InputIcon from '@material-ui/icons/Input';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import './styles.scss';

const Login = (props) => {
  const onClick = () => {
    console.log('da clock');
  };

  return (
    <div className='login'>
      <form className='login__form' autoComplete='off'>
        <img
          className='login__logo'
          src='/images/doctors.png'
          alt='doctors'
          width='250px'
          height='210px'
        />
        <h1 className='login__title'>Member Login</h1>
        <Grid container spacing={3} alignItems='flex-end'>
          <Grid item xs={12}>
            <TextField
              className='login__email'
              required
              id='email'
              label='Email'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <EmailOutlinedIcon style={{ color: '#004d40' }} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className='login__password'
              required
              id='password'
              type='password'
              label='Password'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <LockOutlinedIcon style={{ color: '#004d40' }} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              className='login__login-button'
              variant='contained'
              endIcon={<InputIcon />}
              onClick={onClick}
              color='primary'>
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Login;

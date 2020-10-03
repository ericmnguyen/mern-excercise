import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
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
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './styles.scss';

const Login = (props) => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const router = useRouter();

  const SigninSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .required('Required')
      .max(50, 'Too Long!')
      .min(8, 'Too Short!'),
  });

  const handleLogin = (props) => {
    console.log('login submit', props);
    router.push('/home');
  };

  return (
    <div className='login'>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={SigninSchema}
        onSubmit={handleLogin}>
        {(props) => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
          } = props;
          return (
            <Form
              className='login__form'
              onSubmit={handleSubmit}
              autoComplete='off'>
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
                    // onChange={onChangeEmail}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    id='email'
                    name='email'
                    label='Email'
                    error={errors.email && touched.email}
                    helperText={errors.email}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <EmailOutlinedIcon style={{ color: '#004d40' }} />
                        </InputAdornment>
                      ),
                    }}
                    variant='outlined'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    className='login__password'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    id='password'
                    name='password'
                    type='password'
                    label='Password'
                    error={errors.password && touched.password}
                    helperText={errors.password}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <LockOutlinedIcon style={{ color: '#004d40' }} />
                        </InputAdornment>
                      ),
                    }}
                    variant='outlined'
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type='submit'
                    className='login__login-button'
                    variant='contained'
                    endIcon={<InputIcon />}
                    // onClick={onClick}
                    color='primary'>
                    Login
                  </Button>
                </Grid>
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Login;

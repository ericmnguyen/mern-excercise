import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { TextField, Button, Grid, InputAdornment } from '@material-ui/core';
import InputIcon from '@material-ui/icons/Input';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import './styles.scss';

export const Register = (props) => {
  const router = useRouter();

  useEffect(() => {
    props.cleanUp();
  }, []);

  const RegisterSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .required('Required')
      .max(50, 'Too Long!')
      .min(8, 'Too Short!'),
    passwordConfirmation: Yup.string().oneOf(
      [Yup.ref('password'), null],
      'Passwords must match'
    ),
  });

  const handleRegister = (value) => {
    const { userRegister } = props;
    userRegister(value);
    console.log(value);
  };

  const handleCancel = () => {
    router.replace('/');
  };

  const handleRedirect = () => {
    router.replace('/');
  };

  return (
    <div className='register'>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={RegisterSchema}
        onSubmit={handleRegister}>
        {(formikProps) => {
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
          } = formikProps;
          return (
            <Form
              className='register__form'
              onSubmit={handleSubmit}
              autoComplete='off'>
              <img
                className='register__logo'
                src='/images/doctors.png'
                alt='doctors'
                width='250px'
                height='210px'
              />
              <h1 className='register__title'>Member Register</h1>
              <Grid container spacing={3} alignItems='flex-end'>
                <Grid item xs={12}>
                  <TextField
                    className='register__email'
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
                    className='register__password'
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
                  <TextField
                    className='register__password'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    id='passwordConfirmation'
                    name='passwordConfirmation'
                    type='password'
                    label='Password Confirmation'
                    error={
                      errors.passwordConfirmation &&
                      touched.passwordConfirmation
                    }
                    helperText={errors.passwordConfirmation}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <LockOutlinedIcon style={{ color: '#004d40' }} />
                        </InputAdornment>
                      ),
                    }}
                    variant='outlined'
                  />
                  {!props.registerSuccess && props.registerMessage && (
                    <p className='register__fail'>{props.registerMessage}</p>
                  )}
                </Grid>
                {props.registerSuccess ? (
                  <Grid item xs={12}>
                    <Button
                      onClick={handleRedirect}
                      type='submit'
                      className='login__login-button'
                      variant='contained'
                      startIcon={<ArrowBackIcon />}
                      color='primary'>
                      Redirect to Login
                    </Button>
                    <p className='register__success'>You're now our member!</p>
                  </Grid>
                ) : (
                  <>
                    <Grid item xs={6}>
                      <Button
                        className='register__cancel-button'
                        variant='contained'
                        onClick={handleCancel}
                        startIcon={<ArrowBackIcon />}
                        color='primary'>
                        Cancel
                      </Button>
                    </Grid>
                    <Grid item xs={6}>
                      <Button
                        type='submit'
                        className='register__register-button'
                        variant='contained'
                        endIcon={<InputIcon />}
                        disabled={props.loadingRegister}
                        color='primary'>
                        Register
                      </Button>
                    </Grid>
                  </>
                )}
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

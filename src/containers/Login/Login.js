import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { TextField, Button, Grid, InputAdornment } from '@material-ui/core';
import InputIcon from '@material-ui/icons/Input';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import SendIcon from '@material-ui/icons/Send';
import { WaveTopBottomLoading } from 'react-loadingg';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import './styles.scss';

export const Login = (props) => {
  const router = useRouter();

  useEffect(() => {
    props.cleanUp();
  }, []);

  useEffect(() => {
    if (props.userInfo?.token) {
      localStorage.setItem('token', props.userInfo.token);
      router.push('/home');
    }
  }, [props.userInfo]);

  const SigninSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .required('Required')
      .max(50, 'Too Long!')
      .min(8, 'Too Short!'),
  });

  const handleLogin = (value) => {
    const { getUserInfo } = props;
    getUserInfo(value);
  };

  const wrongPasswordTxt = 'Email/password is incorrect. Please try again.';
  return (
    <div className='login'>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={SigninSchema}
        onSubmit={handleLogin}>
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
                  {!props.isVerify && (
                    <p className='login__verify'>{wrongPasswordTxt}</p>
                  )}
                </Grid>
                <Grid item xs={12}>
                  {props.isLoading ? (
                    <WaveTopBottomLoading style={{ margin: 'auto' }} />
                  ) : (
                    <>
                      <Button
                        type='submit'
                        className='login__login-button'
                        variant='contained'
                        endIcon={<SendIcon />}
                        disabled={props.loadingLogin}
                        color='primary'>
                        Login
                      </Button>
                      <p>
                        <Link href='/register'>
                          <a>You don't have an account?</a>
                        </Link>
                      </p>
                    </>
                  )}
                </Grid>
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

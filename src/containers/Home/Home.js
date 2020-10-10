import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { useRouter } from 'next/router';
import {
  TextField,
  Button,
  Grid,
  Typography,
  InputAdornment,
  Paper,
  Card,
  CardContent,
  Container,
  Divider,
} from '@material-ui/core';
import InputIcon from '@material-ui/icons/Input';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Formik, Form, Field } from 'formik';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import * as Yup from 'yup';
import './styles.scss';

export const Home = (props) => {
  useEffect(() => {
    props.getSummary();
  }, []);

  return (
    <div className='home'>
      <Container>
        <h2 className='home__title home__title--center'>
          COVID-19 CORONAVIRUS PANDEMIC
        </h2>
        <div className='home__red-title'>
          Last updated: {props.summary?.Date}. Total:{' '}
          {props.summary?.Global?.TotalConfirmed}
        </div>
        <Divider variant='middle' />
        <div className='covid-worldwide-summary'>
          <Paper className='card-infected'>
            <Typography color='textSecondary' gutterBottom>
              Word of the Day
            </Typography>
          </Paper>
          <Paper className='card-dead'>
            <Typography color='textSecondary' gutterBottom>
              Word of the Day
            </Typography>
          </Paper>
        </div>
      </Container>
    </div>
  );
};

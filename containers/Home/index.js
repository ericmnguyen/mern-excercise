import React, { Component } from 'react';
import PropTypes from 'prop-types';
import enhancer from './withEnhance';
import { compose, onlyUpdateForPropTypes, setPropTypes } from 'recompose';

const Home = (props) => {
  return <div>Home page</div>;
};

export default enhancer(Home);
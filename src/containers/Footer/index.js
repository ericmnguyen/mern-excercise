import React, { Component } from 'react';
import './styles.scss';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';

const Footer = (props) => {
  return (
    <div className='footer'>
      <Typography variant='body2' color='textSecondary' align='center'>
        {'Designed by '}
        <MuiLink color='inherit' href='https://www.linkedin.com/in/nathanmng/'>
          Nhat Nguyen
        </MuiLink>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </div>
  );
};

export default Footer;

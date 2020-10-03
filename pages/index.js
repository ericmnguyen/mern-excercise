import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import App from '../src/App';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Footer from '../containers/Footer';

export default function Index() {
  return (
    <div className='classes.root'>
      <App />
      <Login />
      <Footer />
    </div>
  );
}

import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import App from '../src/App';
import Login from '../src/containers/Login';
import Footer from '../src/containers/Footer';

export default function Index() {
  return (
    <div className='classes.root'>
      <Login />
      <Footer />
    </div>
  );
}

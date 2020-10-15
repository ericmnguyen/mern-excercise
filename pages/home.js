import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from '../src/containers/Home';
import Footer from '../src/containers/Footer';

export default function Index() {
  return (
    <div className='classes.root'>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}>
        <CssBaseline />
        <Home />
        <Footer />
      </div>
    </div>
  );
}

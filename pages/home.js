import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Menu from '../src/containers/Menu';
import Home from '../src/containers/Home';

export default function Index() {
  return (
    <div className='classes.root'>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}>
        <CssBaseline />
        <Menu />
        <Home />
      </div>
    </div>
  );
}

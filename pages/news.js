import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Menu from '../src/containers/Menu';
import News from '../src/containers/News';

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
        <News />
      </div>
    </div>
  );
}

import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import BuildIcon from '@material-ui/icons/Build';
import './styles.scss';

export const News = (props) => {
  return (
    <div className='news'>
      <Container>
        <BuildIcon />
        <span style={{ marginLeft: '13px' }}>Coding in progress...</span>
      </Container>
    </div>
  );
};

import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import { useRouter } from 'next/router';
import BuildIcon from '@material-ui/icons/Build';
import './styles.scss';

export const News = (props) => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.replace('/');
    }
  }, []);

  return (
    <div className='news'>
      <Container>
        <BuildIcon />
        <span style={{ marginLeft: '13px' }}>Coding in progress...</span>
      </Container>
    </div>
  );
};

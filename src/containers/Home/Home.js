import React, { useEffect } from 'react';
import { Container, Divider, Box } from '@material-ui/core';
import './styles.scss';
import SummaryBoxes from '../SummaryBoxes';

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
        <SummaryBoxes {...props} />
        <Divider variant='middle' />
      </Container>
    </div>
  );
};

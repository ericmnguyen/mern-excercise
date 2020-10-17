import React, { useEffect } from 'react';
import { Container, Divider, Box } from '@material-ui/core';
import './styles.scss';
import SummaryBoxes from '../SummaryBoxes';
import SummaryCharts from '../SummaryCharts';
import CountriesList from '../CountriesList';
import * as dayjs from 'dayjs';

export const Home = (props) => {
  useEffect(() => {
    props.getSummary();
  }, []);

  return (
    <div className='home'>
      <div>{process.env.NODE_ENV}</div>
      <Container>
        <h2 className='home__title home__title--center'>
          COVID-19 CORONAVIRUS PANDEMIC
        </h2>
        <div className='home__red-title'>
          Last updated: {dayjs(props.summary?.Date).format('MMM-DD-YYYY HH:mm')}
          . Total: {props.summary?.Global?.TotalConfirmed}
        </div>
        <Divider variant='middle' />
        <SummaryBoxes summary={props.summary} />
        <Divider variant='middle' />
        <SummaryCharts summary={props.summary} />
        <Divider variant='middle' />
        <CountriesList countries={props.summary.Countries} />
      </Container>
    </div>
  );
};

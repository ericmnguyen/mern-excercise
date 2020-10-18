import React, { useEffect } from 'react';
import { Container, Divider, Box } from '@material-ui/core';
import { useRouter } from 'next/router';
import './styles.scss';
import SummaryBoxes from '../SummaryBoxes';
import SummaryCharts from '../SummaryCharts';
import CountriesList from '../CountriesList';
import * as dayjs from 'dayjs';

export const Home = (props) => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.replace('/');
    }
    props.getSummary();
  }, []);

  return (
    <div className='home'>
      <Container>
        <h2 className='home__title home__title--center'>
          COVID-19 CORONAVIRUS PANDEMIC SUMMARY
        </h2>
        <div className='home__red-title'>
          Last updated: {dayjs(props.summary?.Date).format('MMM-DD-YYYY HH:mm')}
          . Total: {props.summary?.Global?.TotalConfirmed?.toLocaleString()}
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

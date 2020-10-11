import React, { useState, useEffect } from 'react';
import * as dayjs from 'dayjs';
import { Grid, Divider, Box, TextField } from '@material-ui/core';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import Autocomplete from '@material-ui/lab/Autocomplete';
import './styles.scss';

function countryToFlag(isoCode) {
  return typeof String.fromCodePoint !== 'undefined'
    ? isoCode
        .toUpperCase()
        .replace(/./g, (char) =>
          String.fromCodePoint(char.charCodeAt(0) + 127397)
        )
    : isoCode;
}

const data = [
  {
    name: '3 days ago',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '2 days ago',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Yesterday',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Today',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
];

export const SummaryCharts = (props) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const jsfiddleUrl = 'https://jsfiddle.net/alidingling/c1rLyqj1/';

  useEffect(() => {
    console.log('dayjjss', dayjs().add(-14, 'day').format('YYYY-MM-DD'));
    props.getDailyTotals({ date: dayjs().format('YYYY-MM-DD') });
  }, []);

  const onChange = (e, newValue) => {
    console.log('setSelectedCountry', newValue);
    setSelectedCountry(newValue);
    if (newValue) {
      const params = {
        code: newValue.CountryCode,
        date: '2020-07-21',
      };
      props.getDailyCountry(params);
    } else {
      props.getDailyTotals({ date: dayjs().format('YYYY-MM-DD') });
    }
  };

  return (
    <div className='summary-charts'>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Autocomplete
            id='country-select-demo'
            style={{ width: 300 }}
            options={props.summary.Countries}
            onChange={onChange}
            autoHighlight
            getOptionLabel={(option) => option.Country}
            renderOption={(option) => (
              <>
                {option.Country} ({option.CountryCode})
              </>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label='Choose a country'
                variant='outlined'
                inputProps={{
                  ...params.inputProps,
                  autoComplete: 'new-password', // disable autocomplete and autofill
                }}
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <AreaChart
            width={600}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Area
              type='monotone'
              dataKey='uv'
              stackId='1'
              stroke='#8884d8'
              fill='#8884d8'
            />
            <Area
              type='monotone'
              dataKey='pv'
              stackId='1'
              stroke='#82ca9d'
              fill='#82ca9d'
            />
            <Area
              type='monotone'
              dataKey='amt'
              stackId='1'
              stroke='#ffc658'
              fill='#ffc658'
            />
          </AreaChart>
        </Grid>
      </Grid>
    </div>
  );
};

import React, { useEffect } from 'react';
import { Grid, Divider, Box } from '@material-ui/core';
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
  const jsfiddleUrl = 'https://jsfiddle.net/alidingling/c1rLyqj1/';

  return (
    <div className='summary-charts'>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          abc
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

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
  ResponsiveContainer,
} from 'recharts';
import { Chart } from 'react-google-charts';
import './styles.scss';

export const SummaryCharts = (props) => {
  const { categories, data: total } = props.dailyCasesInfo.graph;
  const { data: cured } = props.dailyCuredInfo.graph;
  const { data: death } = props.dailyDeathInfo.graph;
  let countryList = [['Country code', 'Country', 'Total cases']];
  if (props.summary?.Countries) {
    for (let i = 0; i < props.summary.Countries.length; i += 1) {
      const country = [
        props.summary.Countries[i].CountryCode,
        props.summary.Countries[i].Country,
        props.summary.Countries[i].TotalConfirmed,
      ];
      countryList.push(country);
    }
  }
  const dataChart = [
    {
      name: categories[categories.length - 6],
      death: death[death.length - 6],
      cured: cured[cured.length - 6],
      total: total[total.length - 6],
    },
    {
      name: categories[categories.length - 5],
      death: death[death.length - 5],
      cured: cured[cured.length - 5],
      total: total[total.length - 5],
    },
    {
      name: categories[categories.length - 4],
      death: death[death.length - 4],
      cured: cured[cured.length - 4],
      total: total[total.length - 4],
    },
    {
      name: categories[categories.length - 3],
      death: death[death.length - 3],
      cured: cured[cured.length - 3],
      total: total[total.length - 3],
    },
    {
      name: categories[categories.length - 2],
      death: death[death.length - 2],
      cured: cured[cured.length - 2],
      total: total[total.length - 2],
    },
    {
      name: categories[categories.length - 1],
      death: death[death.length - 1],
      cured: cured[cured.length - 1],
      total: total[total.length - 1],
    },
  ];

  useEffect(() => {
    props.getTotalCasesDaily();
  }, []);

  return (
    <div className='summary-charts'>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <h2>World Total Coronavirus Cases</h2>
          <div className={'geo-chart-container'}>
            {props.summary && (
              <Chart
                width={'100%'}
                height={'400px'}
                chartType='GeoChart'
                data={countryList}
                options={{
                  colorAxis: { colors: ['#8cf2cd', '#f8d694', '#e31b23'] },
                  backgroundColor: 'transparent',
                  datalessRegionColor: '#f8bbd0',
                  defaultColor: '#f5f5f5',
                }}
                // Note: you will need to get a mapsApiKey for your project.
                // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
                mapsApiKey='AIzaSyDKQikT64z9InVhNBfkmc2Ri0tLQwIEaAU'
                rootProps={{ 'data-testid': '1' }}
              />
            )}
          </div>
        </Grid>
        <Grid item xs={6}>
          <h2>Total Coronavirus Cases Daily</h2>
          <ResponsiveContainer width='100%' height={400}>
            <AreaChart
              data={dataChart}
              margin={{
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
              }}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Area
                type='monotone'
                dataKey='death'
                stackId='1'
                stroke='#8884d8'
                fill='#8884d8'
              />
              <Area
                type='monotone'
                dataKey='cured'
                stackId='1'
                stroke='#82ca9d'
                fill='#82ca9d'
              />
              <Area
                type='monotone'
                dataKey='total'
                stackId='1'
                stroke='#ffc658'
                fill='#ffc658'
              />
            </AreaChart>
          </ResponsiveContainer>
        </Grid>
      </Grid>
    </div>
  );
};

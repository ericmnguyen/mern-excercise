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
import './styles.scss';

export const SummaryCharts = (props) => {
  const { categories, data: total } = props.dailyCasesInfo.graph;
  const { data: cured } = props.dailyCuredInfo.graph;
  const { data: death } = props.dailyDeathInfo.graph;
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
          abc
        </Grid>
        <Grid item xs={6}>
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

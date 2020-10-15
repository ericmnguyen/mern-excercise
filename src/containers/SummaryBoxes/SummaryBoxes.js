import React, { useEffect } from 'react';
import { Container, Divider, Box } from '@material-ui/core';
import './styles.scss';

export const SummaryBoxes = (props) => {
  return (
    <div className='summary-boxes'>
      <Box
        display='flex'
        justifyContent='center'
        m={2}
        p={2}
        bgcolor='transparent'
        textAlign='center'>
        <div>
          <div className='summary-boxes--bold'>Coronavirus Cases</div>
          <Box
            p={2}
            m={2}
            width={200}
            bgcolor='#f3585b'
            fontFamily='Arial'
            borderRadius='10px'
            color='#fff'>
            <span className='summary-boxes--bold'>
              {props.summary?.Global?.TotalConfirmed}
            </span>
          </Box>
        </div>
        <div>
          <div className='summary-boxes--bold'>Deaths</div>
          <Box
            p={2}
            m={2}
            width={200}
            bgcolor='#222222'
            fontFamily='Arial'
            borderRadius='10px'
            color='#fff'>
            <span className='summary-boxes--bold'>
              {props.summary?.Global?.TotalDeaths}
            </span>
          </Box>
        </div>
        <div>
          <div className='summary-boxes--bold'>Recovered</div>
          <Box
            p={2}
            m={2}
            width={200}
            bgcolor='#8cf2cd'
            fontFamily='Arial'
            borderRadius='10px'
            color='#00945e'>
            <span className='summary-boxes--bold'>
              {props.summary?.Global?.TotalRecovered}
            </span>
          </Box>
        </div>
      </Box>
    </div>
  );
};

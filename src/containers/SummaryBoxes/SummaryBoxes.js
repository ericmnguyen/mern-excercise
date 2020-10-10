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
        bgcolor='background.paper'
        textAlign='center'>
        <div>
          <div>Coronavirus Cases</div>
          <Box
            p={2}
            m={2}
            width={200}
            bgcolor='#f3585b'
            fontFamily='Arial'
            borderRadius='10px'
            color='#fff'>
            <strong>Item 1</strong>
          </Box>
        </div>
        <div>
          <div>Deaths</div>
          <Box
            p={2}
            m={2}
            width={200}
            bgcolor='#222222'
            fontFamily='Arial'
            borderRadius='10px'
            color='#fff'>
            <strong>Item 2</strong>
          </Box>
        </div>
        <div>
          <div>Recovered</div>
          <Box
            p={2}
            m={2}
            width={200}
            bgcolor='#8cf2cd'
            fontFamily='Arial'
            borderRadius='10px'
            color='#fff'>
            <strong>Item 3</strong>
          </Box>
        </div>
      </Box>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import {
  Container,
  Divider,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@material-ui/core';
import './styles.scss';

export const CountriesList = (props) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const { Countries: countriesData } = props.summary;

  const columns = [
    { id: 'Country', label: 'Name', minWidth: 100 },
    { id: 'CountryCode', label: 'Code', minWidth: 50 },
    {
      id: 'NewConfirmed',
      label: 'NewConfirmed',
      minWidth: 170,
      align: 'right',
      // format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'NewDeaths',
      label: 'NewDeaths',
      minWidth: 170,
      align: 'right',
      // format: (value) => value.toFixed(2),
    },
    {
      id: 'NewRecovered',
      label: 'NewRecovered',
      minWidth: 170,
      align: 'right',
      // format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'TotalConfirmed',
      label: 'TotalConfirmed',
      minWidth: 170,
      align: 'right',
      // format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'TotalDeaths',
      label: 'TotalDeaths',
      minWidth: 170,
      align: 'right',
      // format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'TotalRecovered',
      label: 'TotalRecovered',
      minWidth: 170,
      align: 'right',
      // format: (value) => value.toLocaleString('en-US'),
    },
  ];

  const handleChangePage = (event, newPage) => {
    console.log('chay', newPage);
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className='countries-list'>
      <TableContainer className='countries-table'>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {countriesData
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role='checkbox' tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={countriesData?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

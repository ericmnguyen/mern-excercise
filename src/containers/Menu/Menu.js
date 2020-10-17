import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import {
  ListItemText,
  ListItemIcon,
  ListItem,
  Divider,
  List,
  SwipeableDrawer,
  IconButton,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
import './styles.scss';

export const Menu = (props) => {
  const [position, setPosition] = useState({
    left: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setPosition({ ...position, menu: open });
  };

  function ListItemLink(props) {
    return <ListItem button component='a' {...props} />;
  }

  const list = () => (
    <div
      role='presentation'
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}>
      <ListItemText style={{ marginLeft: '13px' }} primary={<h2>Hello</h2>} />
      <Divider />
      <List style={{ width: '250px' }}>
        <ListItemLink href='home'>
          <HomeIcon />
          <ListItemText style={{ marginLeft: '13px' }} primary='Home' />
        </ListItemLink>
        <ListItemLink href='/news'>
          <MenuBookIcon />
          <ListItemText style={{ marginLeft: '13px' }} primary='News' />
        </ListItemLink>
      </List>
      <Divider />
      <List style={{ width: '250px' }}>
        <ListItemLink href='/'>
          <ExitToAppIcon />
          <ListItemText style={{ marginLeft: '13px' }} primary='Sign out' />
        </ListItemLink>
      </List>
    </div>
  );

  return (
    <div className='menu'>
      <IconButton
        aria-label='open drawer'
        onClick={toggleDrawer(true)}
        // edge='start'
        className='iconMenu'>
        <MenuIcon />
      </IconButton>
      <React.Fragment key={'left'}>
        <SwipeableDrawer
          anchor={'left'}
          open={position['menu']}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}>
          {list()}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
};

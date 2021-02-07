import React from 'react';
import { useSelector } from 'react-redux';
import { AppBar, Toolbar } from '@material-ui/core';
import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';
import s from './AppBar.module.css';

import { authSelectors } from '../../redux/auth';

export default function AppBarComponent() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <AppBar position="static">
      <Toolbar className={s.container}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </AppBar>
  );
}

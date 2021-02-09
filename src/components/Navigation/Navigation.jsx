import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, ButtonGroup } from '@material-ui/core';
import s from './Navigation.module.css';
import authSelectors from 'redux/auth/auth-selectors';

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <ButtonGroup>
        <Button variant="contained" size="small">
          <NavLink
            to="/"
            exact
            className={s.link}
            activeClassName={s.activeLink}
          >
            Головна
          </NavLink>
        </Button>
        {isLoggedIn && (
          <Button variant="contained" size="small">
            <NavLink
              to="/contacts"
              exact
              className={s.link}
              activeClassName={s.activeLink}
            >
              Контакти
            </NavLink>
          </Button>
        )}
      </ButtonGroup>
    </nav>
  );
}

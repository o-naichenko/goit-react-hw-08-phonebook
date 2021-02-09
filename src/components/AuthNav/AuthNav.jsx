import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, ButtonGroup } from '@material-ui/core';
import s from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <ButtonGroup>
      <Button variant="contained" size="small">
        <NavLink
          to="/register"
          exact
          className={s.link}
          activeClassName={s.activeLink}
        >
          Реєстрація
        </NavLink>
      </Button>
      <Button variant="contained" size="small">
        <NavLink
          to="/login"
          exact
          className={s.link}
          activeClassName={s.activeLink}
        >
          Вхід
        </NavLink>
      </Button>
    </ButtonGroup>
  );
}

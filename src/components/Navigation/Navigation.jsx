import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import s from './Navigation.module.css';
import authSelectors from 'redux/auth/auth-selectors';

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink to="/" exact className={s.link} activeClassName={s.activeLink}>
        Головна
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          exact
          className={s.link}
          activeClassName={s.activeLink}
        >
          Контакти
        </NavLink>
      )}
    </nav>
  );
}

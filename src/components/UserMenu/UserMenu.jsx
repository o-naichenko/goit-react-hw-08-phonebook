import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import { authOperations, authSelectors } from '../../redux/auth';
import s from './UserMenu.module.css';
import userDefaultAvatar from '../../images/userDefaultAvatar.png';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const avatar = userDefaultAvatar;

  return (
    <div className={s.container}>
      <img className={s.avatar} src={avatar} alt="" width="32" />
      <span className={s.name}>Привіт, {name}</span>
      <Button
        type="button"
        variant="contained"
        size="small"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Вийти
      </Button>
    </div>
  );
}

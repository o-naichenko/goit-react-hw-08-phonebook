import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from '../../redux/auth';
import s from './UserMenu.module.css';
import userDefaultAvatar from '../../images/userDefaultAvatar.png';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const avatar = userDefaultAvatar;

  return (
    <div className={s.container}>
      <img src={avatar} alt="" width="32" className={s.avatar} />
      <span className={s.name}>Привіт, {name}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Вийти
      </button>
    </div>
  );
}

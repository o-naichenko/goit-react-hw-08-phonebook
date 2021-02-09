import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Button, Paper, TextField } from '@material-ui/core';
import authOperations from 'redux/auth/auth-operations';
import s from './SignUpForm.module.css';

export default function SignUpForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const clearState = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const onChangeHandler = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    const signupData = {
      name,
      email,
      password,
    };
    dispatch(authOperations.register(signupData));
    clearState();
  };
  return (
    <Container>
      <p>
        Для реєстрації нового користувача, будь ласка, вкажіть наступні дані:
      </p>
      <Paper elevation={3} className={s.paper}>
        <form onSubmit={onSubmitHandler} className={s.form}>
          <ul className={s.list}>
            <li className={s.item}>
              <TextField
                fullWidth={true}
                variant="outlined"
                size="small"
                label="Ім'я:"
                name="name"
                value={name}
                onChange={onChangeHandler}
              ></TextField>
            </li>
            <li className={s.item}>
              <TextField
                fullWidth={true}
                variant="outlined"
                size="small"
                name="email"
                label="Адреса електронної пошти:"
                value={email}
                onChange={onChangeHandler}
              ></TextField>
            </li>
            <li className={s.item}>
              <TextField
                fullWidth={true}
                variant="outlined"
                size="small"
                type="text"
                label="Код доступу:"
                name="password"
                value={password}
                onChange={onChangeHandler}
              ></TextField>
            </li>
          </ul>
          <Button type="submit" variant="contained" size="small">
            Add contact
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

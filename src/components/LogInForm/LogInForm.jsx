import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button, Paper } from '@material-ui/core';
import authOperations from 'redux/auth/auth-operations';
import s from './LogInForm.module.css';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const clearState = () => {
    setEmail('');
    setPassword('');
  };

  const onChangeHandler = e => {
    const { name, value } = e.target;
    switch (name) {
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
    const logInData = {
      email,
      password,
    };
    dispatch(authOperations.logIn(logInData));
    clearState();
  };
  return (
    <Paper elevation={3} className={s.paper}>
      <form onSubmit={onSubmitHandler} className={s.form}>
        <TextField
          className={s.input}
          variant="outlined"
          size="small"
          label="Email:"
          type="email"
          name="email"
          value={email}
          onChange={onChangeHandler}
        ></TextField>
        <TextField
          className={s.input}
          variant="outlined"
          size="small"
          label="Password:"
          type="text"
          name="password"
          value={password}
          onChange={onChangeHandler}
        ></TextField>

        <Button variant="contained" size="small" type="submit">
          Увійти
        </Button>
      </form>
    </Paper>
  );
}

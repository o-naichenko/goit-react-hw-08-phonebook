import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button, Paper } from '@material-ui/core';
import authOperations from 'redux/auth/auth-operations';
import tools from 'tools/tools';
import s from './LogInForm.module.css';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [formValid, setFormValid] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    password !== '' && email !== '' && passwordValid && emailValid
      ? setFormValid(true)
      : setFormValid(false);
  }, [email, emailValid, password, passwordValid]);

  const clearState = () => {
    setEmail('');
    setPassword('');
  };

  const onChangeHandler = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        setEmailValid(tools.validator(name, value));
        break;
      case 'password':
        setPassword(value);
        setPasswordValid(tools.validator(name, value));
        break;
      default:
        break;
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
          error={!emailValid}
          helperText={!emailValid && 'Введіть коректну адресу: user@mail.com'}
          variant="outlined"
          size="small"
          label="Адреса електронної пошти:"
          type="email"
          name="email"
          value={email}
          onChange={onChangeHandler}
        ></TextField>
        <TextField
          className={s.input}
          error={!passwordValid}
          helperText={!passwordValid && 'Має містити щонайменше 7 символів'}
          variant="outlined"
          size="small"
          label="Код доступу:"
          type="text"
          name="password"
          value={password}
          onChange={onChangeHandler}
        ></TextField>

        <Button
          disabled={!formValid}
          variant="contained"
          size="small"
          type="submit"
        >
          Увійти
        </Button>
      </form>
    </Paper>
  );
}

import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Container,
  Button,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';
import authOperations from 'redux/auth/auth-operations';
import s from './SignUpForm.module.css';
import tools from 'tools';

export default function SignUpForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameValid, setNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [formValid, setFormValid] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    name !== '' &&
    password !== '' &&
    email !== '' &&
    passwordValid &&
    nameValid &&
    emailValid
      ? setFormValid(true)
      : setFormValid(false);
  }, [email, emailValid, name, nameValid, password, passwordValid]);
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
        setNameValid(tools.validator(name, value));
        break;
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
      <Paper elevation={3} className={s.paper}>
        <Typography>
          Для реєстрації нового користувача, будь ласка, вкажіть наступні дані:
        </Typography>
        <form onSubmit={onSubmitHandler} className={s.form}>
          <ul className={s.list}>
            <li className={s.item}>
              <TextField
                error={!nameValid}
                helperText={!nameValid && 'Має містити щонайменше 4 символи'}
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
                error={!emailValid}
                helperText={
                  !emailValid && 'Введіть коректну адресу: user@mail.com'
                }
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
                error={!passwordValid}
                helperText={
                  !passwordValid && 'Має містити щонайменше 7 символів'
                }
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
          <Button
            disabled={!formValid}
            type="submit"
            variant="contained"
            size="small"
          >
            Додати користувача
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

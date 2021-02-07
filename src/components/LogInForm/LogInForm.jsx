import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const clearState = () => {
    setEmail('');
    setPassword('');
  };

  const onChangeHandler = e => {
    const { name, value } = e.currentTarget;
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
    <form onSubmit={onSubmitHandler}>
      <label>
        <span>Email:</span>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onChangeHandler}
        ></input>
      </label>
      <label>
        <span>Password:</span>
        <input
          type="text"
          placeholder="Password"
          name="password"
          value={password}
          onChange={onChangeHandler}
        ></input>
      </label>
      <button type="submit">Log in</button>
    </form>
  );
}

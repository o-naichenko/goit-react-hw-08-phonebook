import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';

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
    const { name, value } = e.currentTarget;
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
    <form onSubmit={onSubmitHandler}>
      <label>
        <span>Name:</span>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={onChangeHandler}
        ></input>
      </label>
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
      <button type="submit">Add contact</button>
    </form>
  );
}

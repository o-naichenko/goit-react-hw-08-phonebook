import { createAsyncThunk } from '@reduxjs/toolkit';
import { serverAPI } from '../../server-API';

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    console.log(credentials);
    const data = await serverAPI.signUp(credentials);
    return data;
  } catch (error) {
    alert(error.message);
  }
});

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const data = await serverAPI.logIn(credentials);
    return data;
  } catch (error) {
    alert(error.message);
  }
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await serverAPI.logOut();
  } catch (error) {
    alert(error.message);
  }
});

const current = createAsyncThunk('auth/current', async credentials => {
  try {
    const { data } = await serverAPI.current(credentials);
    return data;
  } catch (error) {
    alert(error.message);
  }
});
const authOperations = {
  register,
  logIn,
  logOut,
  current,
};
export default authOperations;

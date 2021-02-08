import { createAsyncThunk } from '@reduxjs/toolkit';
import { serverAPI } from '../../server-API';

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const data = await serverAPI.signUp(credentials);
    serverAPI.setToken(data.token);
    return data;
  } catch (error) {
    alert(error.message);
  }
});

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const data = await serverAPI.logIn(credentials);
    serverAPI.setToken(data.token);
    return data;
  } catch (error) {
    alert(error.message);
  }
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await serverAPI.logOut();
    serverAPI.unsetToken();
  } catch (error) {
    alert(error.message);
  }
});

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    serverAPI.setToken(persistedToken);
    try {
      const currentUser = await serverAPI.current();
      return currentUser;
    } catch (error) {
      alert(error.message);
    }
  },
);
const authOperations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
};
export default authOperations;

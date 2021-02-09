import { createAsyncThunk } from '@reduxjs/toolkit';
import { serverAPI } from '../../server-API';

const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const data = await serverAPI.signUp(credentials);
      serverAPI.setToken(data.token);
      return data;
    } catch (error) {
      alert(
        'Не вдалося зареєструвати користувача, перевірте правильність введених даних',
      );
      return thunkAPI.rejectWithValue(null);
    }
  },
);

const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const data = await serverAPI.logIn(credentials);
    serverAPI.setToken(data.token);

    return data;
  } catch (error) {
    alert(
      'Не вдалося авторизувати користувача, перевірте правильність введених даних',
    );
    return thunkAPI.rejectWithValue(null);
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
    if (!persistedToken) {
      return alert('no token');
    }
    serverAPI.setToken(persistedToken);
    try {
      const currentUser = await serverAPI.current();
      return currentUser;
    } catch (error) {
      alert(
        'Не вдалося отримати дані користувача від сервера, увійдіть повторно',
      );
      return thunkAPI.rejectWithValue(error);
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

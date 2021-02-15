import { createAsyncThunk } from '@reduxjs/toolkit';
import { serverAPI } from '../../server-API';

function errorHandler(error) {
  const status = error.response.status;
  return (
    status === 400 &&
    'Не вдалося авторизувати користувача, превірте коректність введених даних'
  );
}

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
      return error;
    }
  },
);

const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const data = await serverAPI.logIn(credentials);
    serverAPI.setToken(data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(errorHandler(error));
  }
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await serverAPI.logOut();
    serverAPI.unsetToken();
  } catch (error) {
    return error.message;
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
      currentUser === undefined &&
        thunkAPI.rejectWithValue(
          'Не вдалося отримати дані користувача від сервера, увійдіть повторно',
        );
      return currentUser;
    } catch (error) {
      // alert(
      //   'Не вдалося отримати дані користувача від сервера, увійдіть повторно',
      // );
      // return thunkAPI.rejectWithValue(error.message);
      return error.message;
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

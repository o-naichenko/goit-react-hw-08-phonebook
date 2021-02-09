import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    // register
    [authOperations.register.pending](state) {
      state.isLoading = true;
    },
    [authOperations.register.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [authOperations.register.rejected](state, { payload }) {
      state.isLoading = false;
    },
    // logIn
    [authOperations.logIn.pending](state) {
      state.isLoading = true;
    },
    [authOperations.logIn.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [authOperations.logIn.rejected](state) {
      state.isLoading = false;
    },
    // logOut
    [authOperations.logOut.pending](state) {
      state.isLoading = true;
    },
    [authOperations.logOut.fulfilled](state) {
      state.user = initialState.user;
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [authOperations.logOut.rejected](state, { payload }) {
      state.isLoading = false;
      alert(payload.message);
    },
    // fetchCurrentUser
    [authOperations.fetchCurrentUser.pending](state) {
      state.isLoading = true;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, { payload }) {
      state.user = payload;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [authOperations.fetchCurrentUser.rejected](state, action) {
      state.isLoading = false;
      alert('Не вдалося отримати дані користувача від сервера');
    },
  },
});

export default authSlice.reducer;

// import { createSelector } from '@reduxjs/toolkit';

const getIsLoggedIn = state => state.auth.isLoggedIn;
const getIsLoading = state => state.auth.getIsLoading;
const getUsername = state => state.auth.user.name;
const getToken = state => state.auth.token;
const getError = state => state.auth.error;

const authSelectors = {
  getIsLoggedIn,
  getIsLoading,
  getUsername,
  getToken,
  getError,
};

export default authSelectors;

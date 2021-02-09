// import { createSelector } from '@reduxjs/toolkit';

const getIsLoggedIn = state => state.auth.isLoggedIn;
const getIsLoading = state => state.auth.getIsLoading;
const getUsername = state => state.auth.user.name;
const getToken = state => state.auth.token;

const authSelectors = {
  getIsLoggedIn,
  getIsLoading,
  getUsername,
  getToken,
};

export default authSelectors;

import { createAction } from '@reduxjs/toolkit';

const resetError = createAction('auth/error');
const authActions = {
  resetError,
};

export default authActions;

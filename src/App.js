import React, { lazy, Suspense, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress, Box, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

import AppBarComponent from './components/AppBar';
import authOperations from './redux/auth/auth-operations';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { authSelectors } from 'redux/auth';
import s from './App.module.css';

const ContactsView = lazy(() => import('./views/ContactsView'));
const HomeView = lazy(() => import('./views/HomeView'));
const LogInView = lazy(() => import('./views/LogInView'));
const RegisterView = lazy(() => import('./views/RegisterView'));

function App() {
  const dispatch = useDispatch();
  const token = useSelector(authSelectors.getToken);
  const authError = useSelector(authSelectors.getError);

  useEffect(() => {
    token && dispatch(authOperations.fetchCurrentUser());
  }, [dispatch, token]);

  return (
    <div className={s.mainContainer}>
      <Snackbar
        open={authError && true}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Alert severity="error">{authError}</Alert>
      </Snackbar>
      <AppBarComponent />
      <Switch>
        <Suspense
          fallback={
            <Box className={s.box}>
              <CircularProgress disableShrink />
            </Box>
          }
        >
          <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>

          <PublicRoute exact path="/register" restricted>
            <RegisterView />
          </PublicRoute>

          <PublicRoute exact path="/login" restricted>
            <LogInView />
          </PublicRoute>

          <PrivateRoute path="/contacts">
            <ContactsView />
          </PrivateRoute>
        </Suspense>
      </Switch>
    </div>
  );
}

export default App;

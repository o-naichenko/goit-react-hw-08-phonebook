import React, { lazy, Suspense, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';

import AppBarComponent from './components/AppBar';
import authOperations from './redux/auth/auth-operations';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { authSelectors } from 'redux/auth';

const ContactsView = lazy(() => import('./views/ContactsView'));
const HomeView = lazy(() => import('./views/HomeView'));
const LogInView = lazy(() => import('./views/LogInView'));
const RegisterView = lazy(() => import('./views/RegisterView'));

function App() {
  const dispatch = useDispatch();
  const isAuthLoading = useSelector(authSelectors.getIsLoading);
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isAuthLoading && (
      <>
        <AppBarComponent />

        <Switch>
          <Suspense fallback={<CircularProgress disableShrink />}>
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
      </>
    )
  );
}

export default App;

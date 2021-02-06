import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ContactsView from './views/ContactsView';
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import AppBarComponent from './components/AppBar';

function App() {
  return (
    <>
      <AppBarComponent />
      <Switch>
        {/* <Route exact path="/" component={HomeView} />
        <Route path="register" component={RegisterView} />
        <Route path="login" component={LoginView} />
        <Route path="contacts" component={ContactsView} /> */}
      </Switch>
    </>
  );
}

export default App;

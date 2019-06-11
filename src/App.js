import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router';

import Login from './pages/login';
import Accounts from './pages/accounts';

import 'bulma/css/bulma.min.css';

function App() {
  return (
    <Router>
      <Route path="/login" component={Login} />
      <Route path="/accounts" component={Accounts} />
    </Router>
  );
}

export default App;

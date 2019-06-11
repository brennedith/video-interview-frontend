import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router';

import Index from './pages/index';
import Login from './pages/login';
import Accounts from './pages/accounts';
import Video from './pages/video';

import 'bulma/css/bulma.min.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/login" component={Login} />
        <Route path="/accounts" component={Accounts} />
        <Route component={Video} />
      </Switch>
    </Router>
  );
}

export default App;

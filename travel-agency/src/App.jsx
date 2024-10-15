// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './components/SignUp';
import Trips from './components/Trips';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/trips" component={Trips} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

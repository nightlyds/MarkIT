import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Error_404 } from './base/error_404/Error_404.jsx'
import { Main, Partners, MyProfile } from './pages/'

import "./base/css/base.css";
import "./base/css/media_base.css";
import "./base/css/normalize.css";
import "./base/css/animate.min.css";

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={ Main } />
      <Route exact path="/partners" component={ Partners } />
      <Route exact path="/myprofile" component={ MyProfile } />
      <Route component={ Error_404 } />
      </Switch>
    </Router>
  );
}

export default App;

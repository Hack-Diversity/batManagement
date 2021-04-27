import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

import './styles/App.css';
import bat from './assets/bat.svg';

import Dashboard from './components/dashboard/Dashboard';
import Preferences from './components/preferences/Preferences';
import Nav from './components/navbar/Navigation';
import Home from './pages/Home';
import Templates from './pages/Templates';
import Price from './pages/Price';
import Help from './pages/Help';
import Login from './pages/Login';
import CreateAccount from './pages/Account_Setup/CreateAccount';


class App extends Component{
  render(){
    return (
      <React.Fragment>
      <Nav />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/templates" component={Templates} />
          <Route path="/price" component={Price} />
          <Route path="/help" component={Help}> </Route>
          <Route path="/login" component={Login} />
          <Route path="/createAccount" component={CreateAccount} />

        </Switch>
      </Router>
      </React.Fragment>
    );
  };
};

export default App;

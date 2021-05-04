import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

import './App.css';

import Nav from './components/navbar/Navigation';
import Footer from './components/layouts/Footer';
import Home from './pages/Home';
import Templates from './pages/Templates';
import Price from './pages/Price';
import Mission from './pages/Mission';
import Login from './pages/Login';
import CreateAccount from './components/create_account/CreateAccount';
import Welcome from './components/welcome/Welcome';
import Layout from './components/layouts/Layout';

class App extends Component{
  render(){
    return (
      <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/templates" component={Templates} />
          <Route path="/price" component={Price} />
          <Route path="/help" component={Mission}> </Route>
          <Route path="/login" component={Login} />
          <Route path="/createAccount" component={CreateAccount} />
          <Route path="/welcome" component={Welcome} />
        </Switch>
      </Router>
      </React.Fragment>
    );
  };
};

export default App;

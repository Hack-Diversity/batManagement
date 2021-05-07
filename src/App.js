import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

import './App.css';

import Nav from './components/navbar';
import Home from './pages/Home';
import Templates from './pages/Templates';
import Price from './pages/Price';
import Mission from './pages/Mission';
import Login from './pages/Login';
import {
  CreateAccount,
  SocialMedia,
  SocialMediaLogin,
  Welcome,
  Language
} from './components/create_account';
import Layout from './components/layouts/Layout';

import Settings from './pages/Mission';

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
          <Route path="/Settings" component={Settings} />
          <Route path="/mission" component={Mission} />
          <Route path="/SocialMedia" component={SocialMedia} />
          <Route path="/Manage Social Media" component={SocialMediaLogin} />
          <Route path="/Translation Settings" component={Language} />

        </Switch>
      </Router>
      </React.Fragment>
    );
  };
};

export default App;

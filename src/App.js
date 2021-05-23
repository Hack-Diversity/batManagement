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
import {
  Home,
  Login,
  Mission,
  Price,
  Templates
} from './pages';


import {
  CreateAccount,
  SocialMedia,
  Welcome,
  Language,
  PersonalizeSite
} from './components/create_account';
import Layout from './components/layouts/Layout';

class App extends Component{
  render(){
    return (
      <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" exact component={() => <Home/>} />
          <Route path="/templates" exact component={() => <Templates />} />
          <Route path="/price" component={Price} />
          <Route path="/help" exact component={() => <Mission />} />
          <Route path="/login" exact component={() => <Login />} />
          <Route path="/createAccount" exact component={() => <CreateAccount />} />
          <Route path="/welcome" exact component={() => <Welcome />} />
          <Route path="/personal" exact component={() => <PersonalizeSite />} />
          <Route path="/mission" exact component={() => <Mission />} />
          <Route path="/welcome" exact component={() => <Welcome />} />
          <Route path="/SocialMedia" exact component={() => <SocialMedia />} />
          <Route path="/Manage Social Media" exact component={() => <Login />} />
          <Route path="/Translation Settings" exact component={() => <Language/>} />
          <Redirect from="/Translation" to="/Translation Settings" />
          <Route path="/Personalize" exact component={() => <PersonalizeSite />} />

        </Switch>
      </Router>
      </React.Fragment>
    );
  };
};

export default App;

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

class App extends Component{
  render(){
    return (
      <>
      <Nav />
      <Router>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
      </>
    )
  }
}

export default App;

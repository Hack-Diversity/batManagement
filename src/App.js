import {BrowserRouter, Route, Switch} from 'react-router-dom';
import logo from './assets/logo.svg';
import bat from './assets/bat.svg';

import './styles/App.css';

import Dashboard from './components/dashboard/Dashboard';
import Preferences from './components/preferences/Preferences';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={bat} className="App-logo" alt="logo" />
        <p>
          Bat Management
        </p>
        <a
          className="App-link"
          href="https://id.atlassian.com/login?continue=https%3A%2F%2Fteam-1612214064928.atlassian.net%2Flogin%3FredirectCount%3D1%26dest-url%3D%252Fprojects%252FBMP%26application%3Djira&application=jira"
          target="_blank"
          rel="noopener noreferrer"
        >
        Coming Soon!
        </a>
      </header>
    </div>
  );
}

export default App;

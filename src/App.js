import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import About from './modules/About'
import Contact from './modules/Contact'
import Home from './modules/Home'

const App = () => (
<MuiThemeProvider>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>MackWeb UI</h2>
        </div>
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>

          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
        </div>
      </Router>
      </div>
</MuiThemeProvider>
);

export default App;

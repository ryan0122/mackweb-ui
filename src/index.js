import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Needed for material-ui
// https://github.com/zilverline/react-tap-event-plugin
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

ReactDOM.render((
  <Router basename="/">
    <App/>
  </Router>
),document.getElementById('root'));

//ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

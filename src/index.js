import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js'
import card from './card.js';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import robots from './robots.js';

ReactDOM.render( <App/>, document.getElementById('root'));
registerServiceWorker();

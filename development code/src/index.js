import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';


//var task = [{start_date:null , end_date:null , title : null}];
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

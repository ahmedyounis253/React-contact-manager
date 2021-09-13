import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacts from './components/contacts'
import {Provider} from './context'
ReactDOM.render(

  <React.StrictMode>
    <Provider>
    <Header branding='contact manager'/>
    <div className='container'>
    <Contacts />
    </div>
    </Provider>
  </React.StrictMode>
,
  document.getElementById('root')
);

reportWebVitals();

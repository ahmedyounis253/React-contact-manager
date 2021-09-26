import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacts from './components/contacts/contacts'
import {Provider} from './context'
import AddContact from './components/contacts/AddContactUncontrolled'
ReactDOM.render(

  <React.StrictMode>
    <Provider>
    <Header branding='contact manager'/>
    <div className='container'>
      <AddContact/> 
    <Contacts />
    </div>
    </Provider>
  </React.StrictMode>
,
  document.getElementById('root')
);

reportWebVitals();

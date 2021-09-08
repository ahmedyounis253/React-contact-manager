import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Contact from './contact';
import reportWebVitals from './reportWebVitals';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.render(

  <React.StrictMode>
    <Header branding='contact manager'/>
    <div className='container'>
    <Contact name='ahmed' Email='younis@mail.com' phone='01098015491'/>
    <Contact name='rami' Email='rami@mail.com' phone='012435t342234'/>
    </div>
  </React.StrictMode>
,
  document.getElementById('root')
);

reportWebVitals();

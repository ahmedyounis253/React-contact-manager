import React, { Component } from 'react'
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

class Contact extends Component {
   static propTypes = {
    name: PropTypes.number.isRequired,




   };
    render() {
        const { name , Email , phone } = this.props;
        return React.createElement('div',{className:"card card-body mb-3 mr-3 ml-10 contact"},
               React.createElement('h2',{className:" mb-3 mr-3 ml-10  "},name,React.createElement('i',{className:"fas fa-sort-down"},),),
 
               React.createElement('ul',{className:"list-group mb-3 mr-3 ml-10 "},
               
               React.createElement('li',{className:" list-group-item mb-3 mr-3 ml-10 mt-2 "},'Email: '+Email),
               React.createElement('li',{className:" list-group-item mb-3 mr-3 ml-10 "},'Phone: '+phone),

               
               

               
               )
               
               
               
               )
    
        
    }
}

Contact.propTypes={
    name:PropTypes.string.isRequired,
    Email:PropTypes.string.isRequired,
    phone:PropTypes.string.isRequired,
}

export default Contact;

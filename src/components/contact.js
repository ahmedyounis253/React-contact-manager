import React, { Component } from 'react'
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

class Contact extends Component {
   static propTypes = {
    name: PropTypes.number.isRequired,




   };
   DeleteContact=()=>{
        this.props.onDelete();
   };
   showInfo=false;
state={
    showingContactInfo:true,
    current:'fad fa-sort-down'
};

    render() {
        const { name , Email , phone } = this.props.contact;
        return (
        <div className="card card-body mb-3 mr-3 ml-10 contact">
            <h1 className='mb-3 mr-3 ml-10  '>{name} 
            <i  style={{marginLeft: 10, cursor:'pointer'}} className= {this.state.current}
            onClick= {() =>{
             this.setState({ showingContactInfo: 
             !this.state.showingContactInfo})
             if (this.state.current === 'fad fa-caret-right'){
                this.setState({ current:'fad fa-sort-down' 
                    })
             }
             else{
                this.setState({ current:'fad fa-caret-right' 
            })
             }
             }} />
                  <i className='fad fa-times' style={{color:'red', float:'right',cursor:'pointer'}}
                  
                  onClick={
                    this.DeleteContact

                  }
                  ></i>

                  </h1>

               { this.state.showingContactInfo ? (            
                    <ul className='list-group'>

                   <li className='list-group-item ' >
                   Email : {Email}
                   </li>

                   <li className='list-group-item'>
                   Phone : {phone}
                   </li>
                    </ul>) : null }
   
 
 
 
               
               
               
            
        </div>
        )
    
        
    }
}

Contact.propTypes={
    contact:PropTypes.object.isRequired,
    onDelete:PropTypes.func.isRequired,
}

export default Contact;

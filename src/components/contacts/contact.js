import React, { Component } from 'react'
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Data } from '../../context';
class Contact extends Component {
   static propTypes = {
    name: PropTypes.number.isRequired,




   };
   DeleteContact=(id,dispatch)=>{
       dispatch({type:'DELETE_CONTACT',payload:id})
   };
   showInfo=false;
state={
    showingContactInfo:false,
    current:'fad fa-caret-right'
};

    render() {
        const { id,name , Email , phone } = this.props.contact;

        return (
            <Data>
                {value => { 
                    const {dispatch}=value;
                    return (
                        
                <div className="card card-body mb-3 mr-3 ml-10 contact">
                <h1 className='mb-3 mr-3 ml-10  '>{name} 
                <i  style={{marginLeft: 10, cursor:'pointer'}} className= {this.state.current}
                onClick= {() =>{
                 this.setState({ showingContactInfo: 
                 !this.state.showingContactInfo})
                 if (this.state.current === 'fad fa-sort-down'){
                    this.setState({ current:'fad fa-caret-right' 
                        })
                 }
                 else{
                    this.setState({ current:'fad fa-sort-down' 
                })
                 }
                 }} />
                      <i className='fad fa-times' style={{color:'red', float:'right',cursor:'pointer'}}
                      
                      onClick={
                        this.DeleteContact.bind(this,id,dispatch)
    
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

                }}
            </Data>
        
        )
    
        
    }
}

Contact.propTypes={
    contact:PropTypes.object.isRequired,
}

export default Contact;

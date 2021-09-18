import React, { Component } from 'react'
import Contact from './contact'
import { Data } from '../../context';
export default class Contacts extends Component {
 
    DeleteContact=(id)  =>{
    const contacts =this.state.contacts
    const newwcontacts= contacts.filter(contact => contact.id !== id);
    this.setState(
        {
        contacts:newwcontacts});
    };
    render() {
        
               return (


                <Data>

                    {value =>{
                        const contacts =value.contacts;
                        return (
                            <React.Fragment>

                            {contacts.map(contact=> (
                                <Contact 
                                key={contact.id} 
                                contact={contact} 
                                />
                               ))}
                            
                            </React.Fragment>

                                );
                    }}
                    
                </Data>



        );
    }
}


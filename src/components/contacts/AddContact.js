import { getQueriesForElement } from '@testing-library/dom';
import React, { Component } from 'react'

export default class AddContact extends Component {
    state={
            contact:{
            name:'',
            Email:'',
            phone:''},
        showForm:false
    };
    getForm= ()=>{

        this.setState(
            
                {showForm: ! this.state.showForm}
            
        )


};
Change =(typed)=>this.setState( {contact:{ ...this.state.contact, [typed.target.name] : typed.target.value}});
onSubmit=(e)=>{
    e.preventDefault();
    console.log(this.state);
};
show=()=>{console.log('name'+this.state.contact.name+'\n'+'Email '+this.state.contact.Email+'\nphone'+this.state.contact.phone)}    
    render() {
    
        const {name,Email,phone}=this.state.contact;
        return (
            <div className='card card-body container mb-3 '>

                <h1 style={{marginBottom:1,marginTop:1}}>Add Contact  <i className='fad fa-plus 'style={{color:'red', float:'right',cursor:'pointer'}} onClick={this.getForm}></i></h1>
                { this.state.showForm ? (
                    <div className="card-body">
                    <form className='form-group' onSubmit={this.onSubmit}>
                    <label htmlFor='name' >Name</label>
                        <input type='text' name='name' placeholder='Enter Name...' value={name} onChange={this.Change} className='form-control form-control-lg mb-3'/>
                    <label htmlFor='Email' >Email</label>
                        <input type='Email' name='Email' placeholder='Enter Email...' value={Email} onChange={this.Change} className='form-control form-control-lg mb-3'/>
                    <label htmlFor='phone' >phone</label>
                        <input type='text' name='phone' placeholder='Enter phone...' value={phone} onChange={this.Change} className='form-control form-control-lg mb-3'/>
                        <input type='submit'  value=' Add Contact' className=' container btn btn-light btn-block'  />
                    </form>

                    </div>  

                ):null }
                
                
            </div>
        )
    }
}

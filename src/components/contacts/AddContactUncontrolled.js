import React, { Component } from 'react';
import {Data} from '../../context';
import  {v1 as uuid} from 'uuid';
import InputGroup from '../layout/Input';
export default class AddContact extends Component {
    constructor(props){
        super(props);



        this.nameInput=React.createRef();
        this.EmailInput=React.createRef();
        this.phoneInput=React.createRef();


    }
    state={
            contact:{
            name:'',
            Email:'',
            phone:''},
        showForm:false,
        shape:'fad fa-plus',
        errors:{
            name:'',
            Email:'',
            phone:'',

        },
    };
    getForm= ()=>{

        this.setState({showForm: ! this.state.showForm,
            shape: (this.state.shape==='fad fa-minus'? 'fad fa-plus' : 'fad fa-minus')})
       
                
            
        


};
Change =(typed)=>this.setState( {contact:{ ...this.state.contact, [typed.target.name] : typed.target.value}});
onSubmit=(dispatch,e)=>{
    e.preventDefault();
    const contact={
            name:this.nameInput.current.value,
            Email:this.EmailInput.current.value,
            phone:this.phoneInput.current.value, }
        if (contact.name !== ''){
                this.setState(
                    {
                        errors:{                   
                               
                            name: 'Name is required'       
                        }

                })
                return;
            };   
            if (this.state.contact.Email !== ''){
                this.setState(
                    {errors:{
                    
                        Email:'Email is required'
                    }
                })
           return;
         }
            if (this.state.contact.phone === ''){
                this.setState(
                    {errors:{
                    
                        phone:'phone is required'
                    }
                })
           return ;
         }

    if (contact.name !== '' && contact.Email !== '' && contact.phone !==''){
    console.log(this.state.errors.name);
    const newcontact={
        id:uuid(),
        name:this.nameInput.current.value,
        Email:this.EmailInput.current.value,
        phone:this.phoneInput.current.value,
        }
    const action={type:'ADD_CONTACT',payload:newcontact};
    dispatch(action);
    this.nameInput.current.value='';
    this.EmailInput.current.value='';
    this.phoneInput.current.value='';

    }

};
show=()=>{console.log(' name:',this.state.contact.name,'\n','Email:',this.state.contact.Email,'\n phone:',this.state.contact.phone)};  
    render() {
    
        const {name,Email,phone}=this.state.contact;
        const {errors}=this.state;
        return (
            <Data>
                {value => {
                  
                    const {dispatch}=value;
                    return (
                        <div className='card card-body container mb-3 '>

                        <h1 style={{marginBottom:1,marginTop:1}}>Add Contact  <i className={this.state.shape} style={{color:'red', float:'right',cursor:'pointer'}} onClick={this.getForm.bind(this)}></i></h1>
                        { this.state.showForm ? (
                            <div className="card-body">
                            <form className='form-group' onSubmit={this.onSubmit.bind(this,dispatch)}>

                            <InputGroup name='name' label='Name' placeholder='Enter Name...' type='text' defaultValue={name} refpointer={this.nameInput} className='is-invalid form-control form-control-lg mb-3' error={errors.name}/>
                            <InputGroup label='Email' type='Email' name='Email' placeholder='Enter Email...' defaultValue={Email} refpointer={this.EmailInput} className='is-invalid form-control form-control-lg mb-3' error={errors.Email}/>
                            <InputGroup label='phone' name='phone' placeholder='Enter phone...' defaultValue={phone} refpointer={this.phoneInput} className='is-invalid form-control form-control-lg mb-3' error={errors.phone}/>
                            <input type='submit'  value=' Add Contact' className=' container btn btn-light btn-block'  />
                            </form>
        
                            </div>

                        ):null}
                    
                        </div>
 
                    );
                }}
            </Data>
           

               
                
                
        )
    };
}

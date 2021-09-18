import React, {Component} from "react";

const Context=React.createContext();
const reducer=(state,action) => {
        switch(action.type){

        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts:state.contacts.filter( contact => 
                    contact.id !== action.payload )
            }
        default : return state;


}}
export class Provider extends Component{
        state={
            contacts:[
                    {
                    id:1,
                    name:'ahmed younis',
                    Email:'Ahmed.M.Younis20@mail.com',
                    phone:'01098015491'},
                    {
                    id:2,
                    name:'Rami Zekri' ,
                    Email:'rami.Zekri99@mail.com',
                    phone:'01232567987'},
    
    
    
                    ],
            dispatch: action => 
                this.setState(state => reducer(state,action))
            
        };
    render(){

        return (


            <Context.Provider value={this.state} >
                {this.props.children}
            </Context.Provider>
        );

    }



}


export const Data = Context.Consumer;
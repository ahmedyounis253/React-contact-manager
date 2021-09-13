import React, {Component} from "react";

const Context=React.createContext();

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
    
    
    
                    ]
        }
    render(){

        return (


            <Context.Provider value={this.state} >
                {this.props.children}
            </Context.Provider>
        );

    }



}


export const Data = Context.Consumer;
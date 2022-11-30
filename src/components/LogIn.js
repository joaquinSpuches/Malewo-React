import React,{Component} from "react";
import '../css/LogIn.css'
export default class LogIn extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className="enterBox" >
            <a  className="hover" href="/logIn">Iniciar sesión</a>
            <a className="hover" href="/register">Registrarse</a>
            </div>
        )
    
    }
}
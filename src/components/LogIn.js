import React, {useState} from "react";
import '../css/LogIn.css'
export default function LogIn (props){
   
   
    
    
        return(
            <ul className={`enterBox ${props.clicked2 ? 'active':''}`  }>
            <li><a  className="hover" link="/logIn">Iniciar sesión</a></li>
            <li><a className="hover" link="/register">Registrarse</a></li>
            </ul>
        )
    
    }

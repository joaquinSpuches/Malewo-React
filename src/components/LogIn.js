import React, {useState} from "react";
import '../css/LogIn.css'
import { Link } from "react-router-dom";
export default function LogIn (props){
   
   
    
    
        return(
            <ul className={`enterBox ${props.clicked2 ? 'active':''}`  }>
            <li><Link  className="hover" to="/logIn">Iniciar sesión</Link></li>
            <li><Link className="hover" to="/register">Registrarse</Link></li>
            </ul>
        )
    
    }

import React, {useState} from "react";
import '../css/NavBar.css'
import BurgerMenu from './BurgerMenu' 

export default function NavBar(props) {
    
    return(
        <div>
            <BurgerMenu clicked ={props.clicked} clicked2={props.clicked2} handleClick={props.handleClick}/>
            <ul className={`links ${props.clicked ? 'active':''}`  }>
                {props.links.map(link => <li> <a href={link} key={link}> {link} </a></li>)}
            </ul>

        </div>
        )    
}

import React, {useState} from "react";
import '../css/NavBar.css'
import BurgerMenu from './BurgerMenu' 

export default function NavBar(props) {
    console.log(props.clicked)
    return(
        <div>
            <BurgerMenu clicked ={props.clicked} handleClick={props.handleClick}/>
            <ul className={`links ${props.clicked ? 'active':''}`  }>
                {props.links.map(link => <li> <a href={link} key={link}> {link} </a></li>)}
            </ul>

        </div>
        )    
}

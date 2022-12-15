import React, {useState} from "react";
import '../css/NavBar.css'
import BurgerMenu from './BurgerMenu' 

import Nav from './Nav'

export default function NavBar(props) {
    
    return(
        <div>
            <BurgerMenu clicked ={props.clicked} clicked2={props.clicked2} handleClick={props.handleClick}/>
            <Nav  clicked ={props.clicked} clicked2={props.clicked2} handleClick={props.handleClick} links={props.links} />

        </div>
        )    
}

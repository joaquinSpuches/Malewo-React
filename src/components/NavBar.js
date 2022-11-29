import React from "react";
import '../css/NavBar.css'

function NavBar(props) {
    return(
        <ul>
            {props.links.map(link => <li> {link} </li>)}
        </ul>
    )
    
}

export default NavBar
import React, {useState} from "react";
import '../css/NavBar.css'
import BurgerMenu from './BurgerMenu' 
function NavBar(props) {
    const [clicked, setClicked] = useState(false)
    const handleClick= ()=>
{
    setClicked(!clicked)
}
    return(
        <div>
            <BurgerMenu clicked ={clicked} handleClick={handleClick}/>
            <ul className={`links ${clicked ? 'active':''}`  }>
                {props.links.map(link => <a key={link}> {link} </a>)}
            </ul>

        </div>
        )    
}

export default NavBar
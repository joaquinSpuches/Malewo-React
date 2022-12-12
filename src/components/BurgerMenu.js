import React from "react"; 
import '../css/BurgerMenu.css'

 function BurgerMenu (props){
 

    
;

        return(
            <div onClick={props.handleClick} className={`icon nav-icon-5 ${props.clicked ? 'open':''} ${props.clicked2 ? 'shopButton':''}`} >
            <span></span>
            <span></span>
            <span></span>
          </div>
        )
    }

export default BurgerMenu

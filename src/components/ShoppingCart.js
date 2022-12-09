import React, {useState} from "react";
import LogIn from "./LogIn";
import ShopButton from './ShopButton'
import '../css/LogIn.css'
function ShoppingCart (props) {
    
    return(
        <div>
        <ShopButton handleClick2={props.handleClick2}/>
        <LogIn clicked2={props.clicked2} handleClick2={props.handleClick2} />
        </div>
       
        
    )
}

export default ShoppingCart
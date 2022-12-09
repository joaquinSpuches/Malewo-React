import React from "react";
import shoppingBag from '../img/shopping-bag.png'
import '../css/ShoppingBag.css'
export default function ShopButton(props) {
    
    return(
        <img onClick={props.handleClick2} className='' src= {shoppingBag} />

    )
    
}
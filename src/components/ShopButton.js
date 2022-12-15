import React from "react";
import shoppingBag from '../img/shopping-bag.png'
import '../css/ShoppingBag.css'
export default function ShopButton(props) {
    
    return(
        <div>
        <img onClick={props.handleClick2} className={`${props.clicked ? 'shopButton':''}`} src= {shoppingBag} />
        <img  className={`${props.clicked ? 'shopButton2':'shopButton3'}`} src= {shoppingBag} />
        </div>

    )
    
}
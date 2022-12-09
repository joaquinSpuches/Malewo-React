import React from "react";
import productImg from '../img/1.jpg';
import '../css/Product.css'


function Product(props) {



    return (
        <article>
            <img src={productImg}/>
            <h1 className="product">
                Maceta 1 
            </h1>
        </article>
    )
    
}
export default Product
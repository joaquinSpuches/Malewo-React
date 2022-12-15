import React,{useEffect,useState} from "react";

import { Link, Routes} 
        from "react-router-dom";
import productImg from '../img/0c0d6b0b4983ed5e9a759b99d96256a2.png'
import '../css/Product.css'
import productsLs from '../products.json'


function Product(props) {
    
    const [hover, setHover] = useState(true)
    const productHover = ()=>{

        setHover(!hover)
    }
    const [products,setProducts] = useState(productsLs)
    
    return (
        <article>
            
                 {/*   <img src={products[props.i].img}/> */ }{/* imagen especial para cada producto */}
            <Link className="a-product" to={`/Products/${products[props.i].name}`} >
                <img onMouseOver={productHover} onMouseOut={productHover} className ={`product-img `} src='/static/media/0c0d6b0b4983ed5e9a759b99d96256a2.5068343b86015cd12198.png'  />
                <h1  key={props.i} className= {`product ${hover ? '': 'active-product'} `}>  {products[props.i].name} </h1>
            </Link>
            
       
            
        </article>
    )
    
}
export default Product
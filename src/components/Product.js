import React,{useEffect,useState} from "react";
import productImg from '../img/1.jpg';
import '../css/Product.css'
import productsLs from '../products.json'


function Product(props) {
    
   
    const [products,setProducts] = useState(productsLs)

    return (
        <article>
            <img src={products[props.i].img}/>
           
            <h1  key={props.i} className="product">  {products[props.i].name} </h1>
            
        </article>
    )
    
}
export default Product
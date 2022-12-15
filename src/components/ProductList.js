import React, {useState} from 'react';
import Product from './Product';
import '../css/Product.css'
import productsLs from '../products.json'


export default function ProductList(props) {
    const [products,setProducts] = useState(productsLs)

    return (
        <section className='productList'>
            
            {products.map((title,i)=>{
                
                return <Product key={i} title={title} i={i}  />
            })} 
        </section>
    )
}
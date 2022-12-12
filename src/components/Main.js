import React, {useState} from "react";  
import Filter from './Filter'
import ProductList from './ProductList.js';
import '../css/Product.css'

export default function Main(){

    return(
        <main>
            <h2 className="title-line">PRODUCTOS</h2>
            <Filter />
            <ProductList />
        
        </main>
    )
}


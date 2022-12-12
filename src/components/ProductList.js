import React from 'react';
import Product from './Product';
import '../css/Product.css'

export default function ProductList(props) {
    return (
        <section className='productList'>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </section>
    )
}
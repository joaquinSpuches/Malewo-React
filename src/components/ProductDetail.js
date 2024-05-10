import React from "react";
import productsData from '../products.json'
import { useParams } from "react-router-dom";
import image from '../static/media/0c0d6b0b4983ed5e9a759b99d96256a2.5068343b86015cd12198.png'
import '../css/ProductDetail.css'


export default function ProductDetail(props){
    const productId = useParams()
    console.log(productId)
    
    const thisProduct = productsData.find(prod => prod.name === productId.id)
    return (

        <main>
            
            <h2> {thisProduct.name} </h2>
            <div>
            <img className="product-image" src={require(`../static/${thisProduct.img}`)} />
            <p>{thisProduct.description} </p>
            </div>
        </main>
    )
}
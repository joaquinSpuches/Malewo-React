import React, {useState} from "react";  
import Filter from './Filter'
import imagen from '../img/0c0d6b0b4983ed5e9a759b99d96256a2.png'
import ProductList from './ProductList.js';
import '../css/Home.css'

export default function Home(){

    return(
        <main>
            <h2 className="title-line">Home</h2>
            <img className='home-img'src={imagen} />
        
        </main>
    )
}


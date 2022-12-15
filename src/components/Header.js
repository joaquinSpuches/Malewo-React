import React, {useState} from "react";
import NavBar from "./NavBar";
import LogIn from './LogIn';
import logo from '../img/logo.jpg'
import ShoppingCart from './ShoppingCart'
import '../css/Header.css'

export default function Header() {
  const [clicked, setClicked] = useState(false)
    const handleClick= ()=>
{
    setClicked(!clicked)
}
const [clicked2, setClicked2 ] = useState(false)
const handleClick2 = ()=>{
 
    setClicked2(!clicked2)

  }
    return(
    <header className='header'>
        <ShoppingCart handleClick2={handleClick2} handleClick={handleClick} clicked={clicked}  clicked2={clicked2} />
        <a className='noHover' href='/'><img src={logo} /></a>
        <h1 className={`title ${clicked ? 'title-active':''}`}>CASA MALEWO</h1>
        <NavBar  handleClick={handleClick } handleClick2={handleClick2} clicked2={clicked2} clicked={clicked} links={['Home', 'Products','About Us', 'Contact'] }  /> 
       
        

      </header>
    )
}
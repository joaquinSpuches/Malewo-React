import React, {useState} from "react"; 
import '../css/Product.css' 
import filter from '../img/filterIcon.svg'

export default function Filter (){
    const [clicked, setClicked] = useState(false)
    const handleClick= ()=>
    {
    setClicked(!clicked)
    }   
    return(
    <section className="filter">
        <img onClick={handleClick} className='filterIcon' src={filter} />
        <h3>Filtros</h3>
        <ul className={`ulFilter ${clicked ? 'activeFilter'     :''}`  }>
            {/* <h1 className="span" onClick={handleClick}>x</h1> */}
            <h2 className="title-line-grey"></h2>
            <li className="liFilter"><a>MACETAS DE INTERIOR </a><a>+</a></li>
            <li className="liFilter"><a>MACETAS DE EXTERIOR</a> <a>+</a></li>
            <li className="liFilter"><a>ACCESORIOS</a> <a>+</a></li>
            <h2 className="title-line-grey"></h2>
            <li className="liFilter"><a>COLOR</a><a>+</a></li>
            <h2 className="title-line-grey"></h2>
            <li className="liFilter"><a>FILTRAR POR PRECIO</a><a>+</a></li>
        </ul>
    </section>
    )

}
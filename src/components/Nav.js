import React   from "react"
import { Link } from "react-router-dom";
export default function Nav(props){
    return(
        <ul className={`links ${props.clicked ? 'active':''}`  }>
        {props.links.map((link, i) => <li key={i}> <Link  to={link} > {link} </Link></li>)}
    </ul>
    )
}
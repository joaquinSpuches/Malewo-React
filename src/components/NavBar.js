import React, {Component} from "react";
import '../css/NavBar.css'

class NavBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            props: props
        }        
    }
    render(){

        return(
        <div>
            <h1>CASA MALEWO</h1>
            <ul>
                {this.props.links.map(link => <a  className="hover" key={link}> {link} </a>)}
            </ul>
        </div>
        )    
}
}
export default NavBar
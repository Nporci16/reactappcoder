import React from "react";
import ig from "./images/ig.png";
import face from "./images/face.png";
import tw from "./images/tw.png";



const Footer = ({redesSociales}) => {
    return(
        <div className="container col-md-6">
            <h5>{redesSociales}</h5>
            <img src= {ig} width="30"  alt="Instagram" />
            <img src= {face} width="30"  alt="Facebook" />
            <img src= {tw} width="30"  alt="Twitter" />
        </div>
    )
}

export default Footer;
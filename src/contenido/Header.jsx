import React from "react";
import logo from "./images/Logo_de_la_Copa_Mundial_de_fútbol_2022.svg.png";

const Header = () => {
    return(
        <div className="container fondo_header">
                    <ul className="nav d-flex align-items-center">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#"><img src= {logo} width="180"  alt="Mundial" /></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link_header" href="#">Fixture</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link_header" href="#">Jugadores</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link_header">Noticias</a>
                        </li>
                    </ul>
        </div>
    )
}

export default Header;
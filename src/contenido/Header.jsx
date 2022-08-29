import React from "react";
import logo from "./images/Logo_de_la_Copa_Mundial_de_fútbol_2022.svg.png";
import fixture from "./images/fixture.png";
import jugadores from "./images/jugadores.png";
import news from "./images/news.png";

const Header = () => {
    return(
        <div className="container col-md-6 fondo_header">
                    <ul className="nav d-flex align-items-center">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#"><img src= {logo} width="180"  alt="Mundial" /></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link_header" href="#"><img src= {fixture} width="30"  alt="fixture" />Fixture</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link_header" href="#"><img src= {jugadores} width="30"  alt="jugadores" />Jugadores</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link_header"><img src= {news} width="30"  alt="news" />Noticias</a>
                        </li>
                    </ul>
        </div>
    )
}

export default Header;
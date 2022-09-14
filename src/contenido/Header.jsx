import React from "react";
import logo from "./images/Logo_de_la_Copa_Mundial_de_fútbol_2022.svg.png";
import { Link } from "react-router-dom";
import news from "./images/news.png";
import CartWidget from "./CartWidget";

const Header = () => {
    return(
        <div className="container col-md-6 fondo_header">
                    <ul className="nav d-flex align-items-center">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#"><img src= {logo} width="180"  alt="Mundial" /></a>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to='/inicio'>Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/tienda'>Tienda</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link_header"><img src= {news} width="30"  alt="news" />Noticias</a>
                        </li>
                        <CartWidget />
                    </ul>
        </div>
    )
}

export default Header;
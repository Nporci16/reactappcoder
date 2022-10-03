import React from "react";
import Logo from "./images/Logo_de_la_Copa_Mundial_de_fútbol_2022.svg.png";

const Success = ({ id }) => {
    return (
        <div className="row">
        <div className="col-md-12 text-center p-5">
            <h1>Felicitaciones!</h1>
            <Logo />
            <p>La Orden de Compra de Compra se generó con el ID: <b>{id}</b></p>
        </div>
        </div>
    )
}

export default Success;
import React from "react";
import {Link} from "react-router-dom";


const Item = ({nombre, imagen, precio}) => {
    return (
        <div className="card container-col-md-6">
            <img src={imagen} className="card-img-top" alt={nombre} />
            <div className="card-body bg-dark text-white">
                <h5 className="card-title text-center"><b>{nombre}</b></h5>
                <p className="card-text text-center text-secondary">${precio}</p>
                <Link to='/detalle:id'><button type="button" className="btn btn-primary" >Ver mas</button></Link>
            </div>
        </div>
    )
}

export default Item;
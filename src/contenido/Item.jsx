import {Link} from "react-router-dom";
import React, { useContext } from 'react';



const Item = ({nombre, imagen, precio, id}) => {
    

    return (
        <div className="card container-col-md-6">
            <Link to={`/detalle/${id}`}><img src={imagen} className="card-img-top" alt={nombre} /> </Link>
            <div className="card-body bg-dark text-white">
                <h5 className="card-title text-center"><b>{nombre}</b></h5>
                <p className="card-text text-center text-secondary">${precio}</p>
                <Link to={`/detalle/${id}`}><button type="button" className="btn btn-primary col-md-12" >Ver mas</button></Link>
            </div>
        </div>
    )
}

export default Item;
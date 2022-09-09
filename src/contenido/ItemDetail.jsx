import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    return (
        <div className="container">
            <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <img src={item.imagen} className="card-img-top" alt={item.nombre} />
                    <p className="card-text text-center text-secondary">{item.descripcion}</p>
                    <h3 className="card-text text-center text-secondary">${item.precio}</h3>
                    <ItemCount stock={10} initial={1} onAdd={0}/>
            </div>
            </div>
        </div>
    )
}

export default ItemDetail;


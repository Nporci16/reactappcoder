import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import {CartContext} from "../context/CartContext";




const ItemDetail = ({item}) => {
    const { addItem } = useContext(CartContext);
    const [counter, setCounter] = useState(0);
    const [addedProduct, setAddedProduct] = useState(false)
    const onAdd = (item, counter) => {
        setCounter(counter);
        addItem(item, counter);
        setAddedProduct(true)
    }
    return (
        <div className="container">
            <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <img src={item.imagen} className="card-img-top" alt={item.nombre} />
                    <p className="card-text text-center text-secondary">{item.descripcion}</p>
                    <h3 className="card-text text-center text-secondary">${item.precio}</h3>
                    {
                    addedProduct 
                        ? <Link to='/cart'>Terminar compra</Link>
                        : <ItemCount stock={item.stock} initial={1} onAdd={onAdd} counter={counter} setCounter={setCounter} item={item} />
                    }       
                    
            </div>
            </div>
        </div>
    )
}

export default ItemDetail;


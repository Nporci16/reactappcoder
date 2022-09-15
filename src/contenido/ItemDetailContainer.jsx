import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { productos } from "./Productos";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
    const [item, setItems] = useState({});
    const {detalleId} = useParams();

    useEffect(()=>{
        const getProducto = new Promise(res=>{
            setTimeout(() => {
                res(productos);
            }, 500);
        });

        getProducto.then(res => setItems(res.find(producto => producto.id === parseInt(detalleId))));
        
        },[]);



    return(
        <div className="container">
            <h3>Detalle del Producto</h3>
            <ItemDetail item={item}/>  
        </div>
    )
}




export default ItemDetailContainer;
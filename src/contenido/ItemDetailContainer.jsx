import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { productos } from "./Productos";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItems] = useState({});

    useEffect(()=>{
        const getProducto = () =>
        new Promise((resolve, reject)=>{
            const producto = productos.find((produ)=> produ.id === 1);
            setTimeout(() => {
                resolve(producto);
            }, 500);
        });

        getProducto()
        .then((detalle)=>{
            setItems(detalle)
        })
        .catch((no)=>{
            console.log(no)
        })
        },[]);



    return(
        <div className="container">
            <h3>Detalle del Producto</h3>
            <ItemDetail item={item}/>   
        </div>
    )
}




export default ItemDetailContainer;
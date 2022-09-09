import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";
import { productos } from "./Productos";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);


    useEffect(() => {
        
        const getProductos = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos);
            }, 2000);
        });

        getProductos.then((respuesta) => {
            setItems(respuesta);
        });
    }, []);

    return (
        <div className="container">
            <h2>Tienda</h2>
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;
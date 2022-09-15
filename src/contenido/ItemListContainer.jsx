import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";
import { productos } from "./Productos";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {categoriaId} = useParams();


    useEffect(() => {
        const getProductos = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos);
            }, 1000);
        });
        if (categoriaId) {
            getProductos.then(res => setItems(res.filter(productos => productos.categoria === categoriaId)));  
        } else
        getProductos.then((respuesta) => {
            setItems(respuesta);
        });
    }, [categoriaId]);

    return (
        <div className="container">
            <h2>Tienda</h2>
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;
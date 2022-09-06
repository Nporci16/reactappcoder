import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);


    useEffect(() => {
        const productos = [
            {"id":1, "nombre":"Camiseta Argentina Titular ", "descripcion":"La camiseta titular de la Seleccion Argetina para el mundial Qatar 2022.", "imagen":"https://cloudfront-us-east-1.images.arcpublishing.com/infobae/5OPX6T233VEYTCNABXLGRVKR5I.jpg", "precio":16999},
            {"id":2, "nombre":"Camiseta Argentina Suplente ", "descripcion":"La camiseta suplente de la Seleccion Argetina para el mundial Qatar 2022.", "imagen":"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6843bdc18ddc41ff880eaef90100912d_9366/Camiseta_Alternativa_de_Juego_Argentina_22_Azul_HB9214_01_laydown.jpg", "precio":16999},
            {"id":3, "nombre":"Buzo Argentina Arquero ", "descripcion":"El buzo del arquero de la Seleccion Argetina para el mundial Qatar 2022.", "imagen":"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a5c2744ee95f4a6085eaaebc00e5958c_9366/Camiseta_Arquero_Argentina_22_Verde_HF1482_01_laydown.jpg", "precio":16999}
        ];

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
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ItemListContainer = () => {
    const productos = [
        {"id":1, "nombre":"Camiseta Argentina TIT", "descripcion":"Camiseta titular 2022", "image":"./images/argtitular.jpg"},
        {"id":2, "nombre":"Camiseta Argentina SUP", "descripcion":"Camiseta suplente 2022"}
    ];
    
    
    }

    return(
        <div>
            <ItemList />
        </div>
    )
;


export default ItemListContainer;
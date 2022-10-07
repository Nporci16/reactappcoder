import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, collection, doc, getDoc, query, where } from "firebase/firestore";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});

    useEffect(()=>{
        const db = getFirestore();
        const response = doc(db, "items", id);
        getDoc(response).then(snapshot => {
            setItem({ id: snapshot.id, ...snapshot.data() });
        })
    }, [id]);

    return(
        <div className="container">
            <h3>Detalle del Producto</h3>
            <ItemDetail item={item}/>  
        </div>
    )
}




export default ItemDetailContainer;
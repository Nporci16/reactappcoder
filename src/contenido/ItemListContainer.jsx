import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
    const { id } = useParams();
    const [items, setItems] = useState([]);


    useEffect(() => {
        const db = getFirestore();
        const productsCollection = collection(db, "items");
    
        const queryItems = id ? query(productsCollection, where("categoria", "==", id)) : productsCollection;
        getDocs(queryItems).then((snapShot) => {
            if (snapShot.size > 0) {
            setItems(snapShot.docs.map(item => ({ id: item.id, ...item.data() })));
    
        }
        });
    }, [id]);

    return (
        <div className="container">
            <h2>Tienda</h2>
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;
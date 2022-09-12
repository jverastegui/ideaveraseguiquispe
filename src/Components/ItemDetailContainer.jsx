import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../mock/products.jsx";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const {id} = useParams();

    useEffect(() => {
        const getProduct = () =>
            new Promise((res, rej) => {
                const product = products.find((prod) => prod.id === parseInt(id));
                setTimeout(() => {
                    res(product);
                }, 500);
            });

        getProduct()
            .then((info) => {
                setItem(info);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    return (
        <div style={{ minHeight: '70vh' }}>
            <ItemDetail item={item}></ItemDetail>
        </div>
    );
}

export default ItemDetailContainer;
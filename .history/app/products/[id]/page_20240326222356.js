"use client"

import ProductDetails from "@/components/ProductDetails";
import { findProduct } from "@/utils/findProduct";
import { useEffect, useState } from "react";
import data from "../../../public/data/data.json";

const ProductsDetails = ({ params: { id } }) => {
    const [selectedProduct, setSelectedProduct] = useState({})
    const productList = data.products;
    console.log(productList)

    useEffect(() => {
        const found = findProduct(productList, id)
        console.log(found)
    }, [id, productList])


    console.log("sdhjg", selectedProduct)
    return (
        <ProductDetails /* selectedProduct={selectedProduct} */ />
    );
};

export default ProductsDetails;
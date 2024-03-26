"use client"

import ProductDetails from "@/components/ProductDetails";
import { useEffect, useState } from "react";
import data from "../../../public/data/data.json";

const ProductsDetails = ({ params: { id } }) => {
    const [selectedProduct, setSelectedProduct] = useState({})
    const productList = data.products;
    console.log(productList)

    useEffect(() => {
        console.log("id", id)
        const matchedProduct = productList?.find((product) => product.id === id)
        console.log(matchedProduct)
    }, [id, productList])


    console.log("sdhjg", selectedProduct)
    return (
        <ProductDetails /* selectedProduct={selectedProduct} */ />
    );
};

export default ProductsDetails;
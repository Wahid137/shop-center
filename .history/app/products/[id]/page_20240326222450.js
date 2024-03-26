"use client"

import ProductDetails from "@/components/ProductDetails";
import { findProduct } from "@/utils/findProduct";
import { useState } from "react";
import data from "../../../public/data/data.json";

const ProductsDetails = ({ params: { id } }) => {
    const [selectedProduct, setSelectedProduct] = useState({})
    const productList = data.products;



    const found = findProduct(productList, id)
    console.log("a", found)




    return (
        <ProductDetails /* selectedProduct={selectedProduct} */ />
    );
};

export default ProductsDetails;
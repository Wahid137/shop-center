"use client"

import ProductDetails from "@/components/ProductDetails";
import { findProduct } from "@/utils/findProduct";
import { useState } from "react";

const ProductsDetails = ({ params: { id } }) => {
    const [selectedProduct, setSelectedProduct] = useState({})


    const found = findProduct(id)
    console.log("a", found)




    return (
        <ProductDetails /* selectedProduct={selectedProduct} */ />
    );
};

export default ProductsDetails;
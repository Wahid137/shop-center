"use client"

import ProductDetails from "@/components/ProductDetails";
import { findProduct } from "@/utils/findProduct";
import { useState } from "react";

const ProductsDetails = ({ params }) => {
    const [selectedProduct, setSelectedProduct] = useState({})

    console.log(params.id)
    const found = findProduct(params.id)
    console.log("a", found)




    return (
        <ProductDetails /* selectedProduct={selectedProduct} */ />
    );
};

export default ProductsDetails;
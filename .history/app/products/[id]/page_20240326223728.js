import ProductDetails from "@/components/ProductDetails";
import data from "../../../public/data/data.json";

const ProductsDetails = ({ params }) => {
    console.log("params:", params); // Check if params is defined and has the expected value

    const products = data.products;

    console.log("products:", products); // Check if products is defined and has the expected value

    // Find the product with the matching ID
    const selectedProduct = params && params.id && products.find(product => product.id === params.id);

    console.log("selectedProduct:", selectedProduct); // Check the selected product

    return (
        // Pass the selected product to ProductDetails component if it's found
        selectedProduct ? <ProductDetails selectedProduct={selectedProduct} /> : <div>Product not found</div>
    );
};

export default ProductsDetails;

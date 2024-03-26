import ProductDetails from "@/components/ProductDetails";
import data from "../../../public/data/data.json";

const ProductsDetails = ({ params }) => {
    const products = data.products;

    // Find the product with the matching ID
    const selectedProduct = params && params.id && products.find(product => product.id === parseInt(params.id));

    return (
        // Pass the selected product to ProductDetails component if it's found
        selectedProduct ? <ProductDetails selectedProduct={selectedProduct} /> : <div>Product not found</div>
    );
};

export default ProductsDetails;

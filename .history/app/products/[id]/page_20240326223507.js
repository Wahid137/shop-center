import ProductDetails from "@/components/ProductDetails";
import data from "../../../public/data/data.json";

const ProductsDetails = ({ params }) => {
    const products = data.products;

    // Find the product with the matching ID
    const selectedProduct = products.find(product => product.id === params.id);

    return (
        // Pass the selected product to ProductDetails component
        <ProductDetails selectedProduct={selectedProduct} />
    );
};

export default ProductsDetails;
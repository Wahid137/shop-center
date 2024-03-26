
const ProductsDetails = ({ params }) => {
    return (
        <h1>Product Details: {params.id}</h1>
        <ProductsDetails/>
    );
};

export default ProductsDetails;
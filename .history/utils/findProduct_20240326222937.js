import data from "../public/data/data.json";

const products = data.products

export const findProduct = (id) => {
    const matchedProduct = products.find(product => product.id === 2)

    return matchedProduct
}
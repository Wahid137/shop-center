
export const findProduct = (products, id) => {
    const matchedProduct = products.find(product => product.id === id)

    return matchedProduct
}
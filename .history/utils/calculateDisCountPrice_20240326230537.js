export default function calculateDiscountPrice(price, discountPercentage) {
    // Convert price and discount percentage to numbers
    const parsedPrice = parseFloat(price);
    const parsedDiscountPercentage = parseFloat(discountPercentage);

    // Validate the parsed numbers
    const finalPrice = isNaN(parsedPrice) ? 0 : parsedPrice;
    const finalDiscountPercentage = isNaN(parsedDiscountPercentage)
        ? 0
        : parsedDiscountPercentage;

    // Calculate discounted price
    const discountedPrice = finalPrice - finalPrice * (finalDiscountPercentage / 100);

    return discountedPrice;
}

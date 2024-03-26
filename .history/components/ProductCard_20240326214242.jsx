import Link from "next/link";
import "../app/globals.css";

const ProductCard = ({ product }) => {
  const { title, description, price, discountPercentage, category, thumbnail } =
    product;

  // Convert price and discount percentage to numbers
  const parsedPrice = parseFloat(price);
  const parsedDiscountPercentage = parseFloat(discountPercentage);

  // Validate the parsed numbers
  const finalPrice = isNaN(parsedPrice) ? 0 : parsedPrice;
  const finalDiscountPercentage = isNaN(parsedDiscountPercentage)
    ? 0
    : parsedDiscountPercentage;

  // Calculate discounted price
  const discountedPrice =
    finalPrice - finalPrice * (finalDiscountPercentage / 100);

  return (
    <div>
      <div
        className="relative delay-150 w-180px lg:w-[270px] h-[205px] lg:h-[310px] bg-[#f8f8f8] bg-cover bg-center transition-all duration-3000 ease-in-out transform"
        style={{ backgroundImage: `url(${thumbnail})` }}
      ></div>
      <h2 className="text-sm lg:text-base mt-2">
        <Link className="text-base font-bold" href="/">
          {title}
        </Link>
        <span className="text-[#919090]">
          <Link href="/">({category?.slice(0, 20)})</Link>
        </span>
      </h2>
      <p className="text-[#919090] text-sm ">{description?.slice(0, 80)}</p>

      <p className="text-rose-600 text-sm mt-4">
        <span className="text-[#919090] line-through">${price.toFixed(2)}</span>{" "}
        ${discountedPrice.toFixed(2)}
      </p>
    </div>
  );
};

export default ProductCard;

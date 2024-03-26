import calculateDiscountPrice from "@/utils/calculateDiscountPrice";
import Link from "next/link";
import "../app/globals.css";

const ProductCard = ({ product }) => {
  const {
    title,
    description,
    price,
    discountPercentage,
    category,
    thumbnail,
    id,
  } = product;

  const discountedPrice = calculateDiscountPrice(price, discountPercentage);

  return (
    <div>
      <div
        className="relative delay-150 w-180px lg:w-[270px] h-[205px] lg:h-[310px] bg-[#f8f8f8] bg-cover bg-center transition-all duration-3000 ease-in-out transform"
        style={{ backgroundImage: `url(${thumbnail})` }}
      ></div>
      <h2 className="text-sm lg:text-base mt-2">
        <Link className="text-base font-bold" href={`/products/${id}`}>
          {title}
        </Link>
        <span className="text-[#919090]">
          <Link href={`/category/${category}`}>({category?.slice(0, 20)})</Link>
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

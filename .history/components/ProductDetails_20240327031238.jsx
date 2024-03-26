import calculateDiscountPrice from "@/utils/calculateDisCountPrice";
import Image from "next/image";
import Link from "next/link";

const ProductDetails = ({ selectedProduct }) => {
  const {
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
    images,
  } = selectedProduct;

  const discountedPrice = calculateDiscountPrice(price, discountPercentage);

  // Function to render star images based on the rating
  const renderStars = (rating) => {
    const starComponents = [];

    // Render filled stars based on the rating
    for (let i = 0; i < rating; i++) {
      starComponents.push(
        <Image
          key={i}
          src="/assets/svg/star.svg"
          width={20}
          height={20}
          alt="Filled Star"
        />
      );
    }

    return starComponents;
  };

  return (
    <section className="bg-[#fafaf2] h-full py-20">
      <div className="w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row items-center justify-between">
        <div className="w-full lg:w-7/12 border border-slate-500/20 p-4">
          <Image
            src={thumbnail}
            className="w-[400px] h-[500px] mx-auto object-cover"
            width={400}
            height={500}
            alt="thumbnail"
          />

          <div className="flex gap-4 mt-4">
            {images?.map((img, i) => (
              <Image
                key={i}
                src={img}
                className="w-[100px] h-[100px] mx-auto border object-cover"
                width={100}
                height={100}
                alt=""
              />
            ))}
          </div>
        </div>
        <div className="w-full lg:w-5/12">
          <h1 className="italic text-xl lg:text-3xl font-serif font-semibold">
            {title}
          </h1>
          <Link>
            {" "}
            <span className="text-[#919090] my-3">{category}</span>
          </Link>
          <div className="mt-3 flex items-center justify-start gap-1">
            {renderStars(rating)} {/* Render stars */}
          </div>
          <hr className="my-5 bg-black" />

          <div>
            <p className="my-3">
              <span className="text-rose-600 opacity-60 line-through">
                ${price.toFixed(2)}
              </span>
              <span className="font-bold text-2xl">
                ${discountedPrice.toFixed(2)}
              </span>
            </p>
          </div>
          <div>
            <p className="leading-7">{description}</p>

            <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
              Add To Cart - ${discountedPrice.toFixed(2)}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;

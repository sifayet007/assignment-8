import React from "react";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  const { product_image, product_title, price, product_id } = product;

  return (
    <div className="p-5 shadow-xl rounded-3xl h-fit">
      <div className="flex justify-between">
        <h3 className="text-2xl font-bold">{product_title}</h3>
        <img
          className=" h-40  hover:scale-125 duration-300 overflow-hidden"
          src={product_image}
          alt=""
        />
      </div>
      <hr className="my-6" />
      <div className="flex justify-between ">
        <h3 className="text-xl font-semibold">${price}</h3>
        <Link
          to={`/card/${product_id}`}
          className="py-[13px] px-[22px] border-2 hover:border-[#9538E2] hover:text-[#9538E2] duration-300 rounded-full"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Card;

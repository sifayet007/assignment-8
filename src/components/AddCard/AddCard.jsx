import React from "react";
import { AiFillDelete } from "react-icons/ai";

const AddCard = ({ product, removeHandler: removeCardHandler }) => {
  const {
    product_image,
    description,
    product_title,
    price,
    product_id,
    rating,
  } = product;

  return (
    <div className="flex justify-center">
      <div className="flex justify-center w-fit">
        <div className="flex  gap-8 p-5 border-2 rounded-3xl w-fit mt-10 ">
          <img
            className="h-[150px]  rounded-2xl bg-[#D9D9D9] "
            src={product_image}
            alt=""
          />

          <div className="flex gap-64">
            <div className="space-y-1">
              <h3 className="text-2xl font-bold">{product_title}</h3>
              <p className="text-lg">{description}</p>
              <h4 className="font-bold">Price: ${price}</h4>
              <p className="font-bold">Rating: {rating}</p>
            </div>
            <div>
              <button
                onClick={() => removeCardHandler(product_id)}
                className="text-red-500 text-3xl hover:scale-110 duration-300"
              >
                <AiFillDelete />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCard;

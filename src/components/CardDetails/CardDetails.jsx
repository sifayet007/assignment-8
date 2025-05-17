import { useLoaderData, useParams } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GiSelfLove } from "react-icons/gi";
import {
  getAddToLocalStorage,
  getWishListAddToLocalstorage,
} from "../../Utility/AddToLS";

const CardDetails = () => {
  const { product_id } = useParams();
  const data = useLoaderData();
  console.log("product length", product_id.length);

  const products = data.find((product) => product.product_id === product_id);

  const {
    product_title,
    product_image,
    price,
    description,
    Specification,
    rating,
  } = products;

  const handleAddToCard = (product) => {
    console.log(product);
    getAddToLocalStorage(product);
  };

  const whishListHandler = (product) => {
    console.log("hello 1", product);

    getWishListAddToLocalstorage(product);
  };

  return (
    <section className="relative ">
      <div className="bg-[#9538E2] px-[209px]s pt-6 mb-36   text-center pb-[227px] ">
        <h1 className="text-[56px] font-bold text-[#ffffff] ">
          Product Details
        </h1>
        <p className="mt-6 text-white">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      <div className="border-2 p-6 border-white absolute w-fit bg-transparent rounded-3xl -bottom-[250px] right-[18rem] bg-white  ">
        <div className="flex p-5 gap-10 bg-white  rounded-3xl">
          <img
            className="h-[360px] rounded-3xl bg-[#ECECEC]"
            src={product_image}
            alt=""
          />
          <div>
            <h3 className="font-semibold text-3xl">{product_title}</h3>
            <p className="text-xl mt-3">Price: ${price}</p>
            <p className="text-lg text-[#7E7D81]">{description}</p>
            <div className="text-lg">
              <strong className="mb-3 mt-4">Specification</strong>
              {Specification.map((specific, idx) => (
                <ul key={idx} className="text-[#7E7D81]">
                  <li>{specific}</li>
                </ul>
              ))}
            </div>
            <p className="flex items-center gap-2 mt-4">
              Rating: {rating} <FaRegStar />
            </p>
            <div
              onClick={() => handleAddToCard(product_id)}
              className="flex items-center gap-5"
            >
              <button className="py-3 px-[22px] rounded-3xl font-semibold text-white bg-[#9538E2] mt-4 flex items-center gap-3">
                Add To Card <MdOutlineShoppingCart />
              </button>

              <button
                onClick={() => whishListHandler(product_id)}
                className=" mt-4 rounded-full border-2 p-3"
              >
                <GiSelfLove />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardDetails;

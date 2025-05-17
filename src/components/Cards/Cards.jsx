import React, { Fragment, useEffect, useState } from "react";
import Card from "../Card/Card";
import { FaU } from "react-icons/fa6";
// import { Link } from "react-router-dom";

const Cards = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("All Product");

  useEffect(() => {
    fetch("20_products_by_category.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleCategoryChange = (event) => {
    setCategory(event);
  };
  const filterProduct =
    category === "All Product"
      ? products
      : products.filter((product) => product.category === category);

  return (
    <Fragment>
      <section className="lg:px-[6rem] mt-[250px] flex gap-10">
        .
        <div
          className={`flex flex-col p-6 text-center gap-6 shadow-2xl h-fit rounded-2xl `}
        >
          <span
            onClick={() => handleCategoryChange("All Product")}
            className={`${
              category === "All Product"
                ? "bg-[#9538E2] text-white"
                : "bg-[#F3F3F3]"
            } cursor-pointer py-2 px-5 text-nowrap rounded-3xl hover:bg-[#9538E2] hover:text-white duration-150`}
          >
            All Product
          </span>
          <span
            onClick={() => handleCategoryChange("Laptops")}
            className={`${
              category === "Laptops"
                ? "bg-[#9538E2] text-white"
                : "bg-[#F3F3F3]"
            } cursor-pointer py-2 px-5 text-nowrap rounded-3xl hover:bg-[#9538E2] hover:text-white duration-150`}
          >
            Laptops
          </span>
          <span
            onClick={() => handleCategoryChange("Phones")}
            className={`${
              category === "Phones" ? "bg-[#9538E2] text-white" : "bg-[#F3F3F3]"
            } cursor-pointer py-2 px-5 text-nowrap rounded-3xl hover:bg-[#9538E2] hover:text-white duration-150 `}
          >
            Phones
          </span>
          <span
            onClick={() => handleCategoryChange("Accessories")}
            className={`${
              category === "Accessories"
                ? "bg-[#9538E2] text-white"
                : "bg-[#F3F3F3]"
            } cursor-pointer py-2 px-5 text-nowrap rounded-3xl hover:bg-[#9538E2] hover:text-white duration-150 `}
          >
            Accessories
          </span>
          <span
            onClick={() => handleCategoryChange("Smart Watches")}
            className={`${
              category === "Smart Watches"
                ? "bg-[#9538E2] text-white"
                : "bg-[#F3F3F3]"
            } cursor-pointer py-2 px-5 text-nowrap rounded-3xl hover:bg-[#9538E2] hover:text-white duration-150 `}
          >
            Smart Watches
          </span>
          <span
            onClick={() => handleCategoryChange("MacBook")}
            className={`${
              category === "MacBook"
                ? "bg-[#9538E2] text-white"
                : "bg-[#F3F3F3]"
            } cursor-pointer py-2 px-5 text-nowrap rounded-3xl hover:bg-[#9538E2] hover:text-white duration-150 b`}
          >
            MacBook
          </span>
          <span
            onClick={() => handleCategoryChange("Iphone")}
            className={`${
              category === "Iphone" ? "bg-[#9538E2] text-white" : "bg-[#F3F3F3]"
            } cursor-pointer py-2 px-5 text-nowrap rounded-3xl hover:bg-[#9538E2] hover:text-white duration-150 `}
          >
            Iphone
          </span>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-7">
          {filterProduct.map((product, idx) => (
            <Card key={idx} product={product}></Card>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default Cards;

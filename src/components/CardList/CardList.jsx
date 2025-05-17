import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  getLocalStorageToAdd,
  getWishlistAddProduct,
} from "../../Utility/AddToLS";
import AddCard from "../AddCard/AddCard";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Wishlist from "../WishList/Wishlist";
import { IoOptionsOutline } from "react-icons/io5";

const CardList = () => {
  const [addProduct, setAddProduct] = useState([]);
  const [products, setProducts] = useState([]);

  const data = useLoaderData();

  useEffect(() => {
    const storageAddCardList = getLocalStorageToAdd();
    const dataToFilter = data.filter((product) =>
      storageAddCardList.includes(product.product_id)
    );
    setAddProduct(dataToFilter);
  }, [data]);

  useEffect(() => {
    const whishListStorage = getWishlistAddProduct();
    const dataToFilter = data.filter((product) =>
      whishListStorage.includes(product.product_id)
    );
    setProducts(dataToFilter);
  }, [data]);
  // localstorage remove data useEffect hook

  // Card Remove handler function
  const removeCardHandler = (id) => {
    window.localStorage.removeItem(id);
    const filterLocalStorage = addProduct.filter(
      (product) => product.product_id !== id
    );
    setAddProduct(filterLocalStorage);
  };
  const whishListCardRemover = (id) => {
    const whishListRemove = products.filter(
      (product) => product.product_id !== id
    );
    setProducts(whishListRemove);
  };
  const setHeighToLow = () => {
    const heighToLow = addProduct.sort((a, b) => b.price - a.price);
    setAddProduct([...heighToLow]);
  };

  return (
    <div className="">
      <div>
        <Tabs>
          <div className="bg-[#9538E2]  pt-12 text-center pb-10 ">
            <h1 className="text-[56px] font-bold text-[#ffffff] ">Dashboard</h1>
            <p className="mt-6 text-white">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>

            <TabList className="flex  justify-center mt-10">
              <Tab className="bg-white border-none py-2 px-16 text-[#7723bc] font-semibold rounded-3xl">
                Card
              </Tab>
              <Tab className="bg-white py-2 px-16  text-[#7723bc] font-semibold rounded-3xl">
                Wishlist
              </Tab>
            </TabList>
          </div>
          <TabPanel>
            <div className="mt-12  flex justify-center">
              <button
                onClick={setHeighToLow}
                className="border-2 py-2 rounded-3xl text-[#732DAD]  border-t-[#8332C5] border-b-[#D755AD] px-5 border-l-[#8332C5] border-r-[#8332C5] flex items-center gap-3"
              >
                Sort By Price <IoOptionsOutline />
              </button>
              <button className="bg-gradient-to-b from-[#9538E2] to-[#d755ad]  text-white py-3 px-6 rounded-3xl">
                Purchase
              </button>
            </div>
            {addProduct.map((product) => (
              <AddCard
                key={product.product_id}
                product={product}
                removeHandler={removeCardHandler}
              ></AddCard>
            ))}
          </TabPanel>
          <TabPanel>
            {products.map((product) => (
              <Wishlist
                key={product.product_id}
                product={product}
                whishListCardRemover={whishListCardRemover}
              ></Wishlist>
            ))}
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default CardList;

import React from "react";
import Banners from "../Banners/Banners";
import Cards from "../Cards/Cards";
import Favicon from "react-favicon";

const Home = () => {
  return (
    <section className="">
      <div>
        <Favicon url="../../assets/favicon-16x16.png" />
      </div>
      <Banners></Banners>
      <Cards></Cards>
    </section>
  );
};

export default Home;

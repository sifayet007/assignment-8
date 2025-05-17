import React from "react";
import image from "../../assets/banner.jpg";

const Banner2 = () => {
  return (
    <section className="lg:px-[269px] md:px-[100px]">
      <div className="border-2 lg:p-6 md:p4 rounded-3xl border-white bg-white bg-opacity-20">
        <img
          className="lg:h-[380px] md:h-[200px] w-screen  rounded-3xl"
          src={image}
          alt=""
        />
      </div>
    </section>
  );
};

export default Banner2;

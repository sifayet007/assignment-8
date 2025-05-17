import React from "react";
import Banner2 from "../Banner2/Banner2";

const Banners = () => {
  return (
    <section className=" w-full  relative p-5">
      <div className="bg-[#9538E2] lg:px-[209px] md:[100px] pt-10  text-center lg:pb-[217px] md:pb-[7rem] rounded-[32px]">
        <h1 className="lg:text-5xl md:text-3xl font-bold text-[#ffffff] leading-snug">
          Upgrade Your Tech Accessorize with
          <br />
          Gadget Heaven Accessories
        </h1>
        <p className="mt-4 text-white">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <button className="bg-white mt-5 rounded-[32px] text-[#9538E2] py-[15px] px-[30px]">
          Shop Now
        </button>
      </div>
      <div className="absolute  lg:-bottom-[241px] -bottom-28">
        {<Banner2></Banner2>}
      </div>
    </section>
  );
};

export default Banners;

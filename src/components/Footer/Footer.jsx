import React from "react";

const Footer = () => {
  return (
    <section className="container mx-auto ">
      <footer className="py-24">
        <div className="text-center">
          <h2 className="text-[32px] font-bold">Gadget Heaven</h2>
          <p className="text-[#6C6B6F] mt-3">
            Leading the way in cutting technology and innovation
          </p>
        </div>
        <hr className="my-8" />
        <div className="flex gap-[166px] justify-center">
          <div className="text-center">
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <div className="text-[#6C6B6F]  space-y-1">
              <p>Product Support</p>
              <p>Order Tracking </p>
              <p>Shipping & Delivery</p>
              <p>Returns</p>
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-lg font-bold mb-4">Company</h2>
            <div className="text-[#6C6B6F] space-y-1">
              <p>About Us</p>
              <p>Careers</p>
              <p>contact</p>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-bold mb-4">legal</h3>
            <div className="text-[#6C6B6F] space-y-1">
              <p>Terms of service</p>
              <p>Privacy Policy</p>
              <p>Cookie Policy</p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;

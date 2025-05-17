import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <section className="relative">
      <Navbar />
      <Outlet />
      <Footer />
    </section>
  );
};

export default Root;

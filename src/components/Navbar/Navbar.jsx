import { NavLink } from "react-router-dom";
import { GiSelfLove } from "react-icons/gi";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  // const storedArrayString = localStorage.getItem("card-list");
  // const storedArray = JSON.parse(storedArrayString);
  // const localStorageLength = storedArray.length;

  return (
    <section className="lg:px-40 ">
      <nav className="flex items-center justify-between py-6  ">
        <h3 className="text-xl font-bold ">Gadget Heaven</h3>
        <div className="flex lg:gap-12 gap-5">
          <NavLink
            to="/"
            className={`font-medium  hover:text-[#8E0DF8] hover:scale-110 duration-200 
                `}
          >
            Home
          </NavLink>
          <NavLink
            to="/statistics"
            className={`font-medium hover:scale-110 duration-200 hover:text-[#8E0DF8] `}
          >
            Statistics
          </NavLink>
          <NavLink
            to="/dashboard"
            className={`font-medium hover:scale-110 duration-200 hover:text-[#8E0DF8] `}
          >
            Dashboard
          </NavLink>
        </div>
        <div className="flex gap-5 relative">
          <span className="absolute flex justify-center items-center right-[4.5rem] -top-[0.3rem] text-red-500 font-bold">
            {/* {localStorageLength ?? 0} */}
          </span>

          <NavLink className=" border-2 rounded-full p-3 cursor-pointer hover:text-[#8E0DF8]  bg-white">
            <FiShoppingCart className="w-5 h-5 hover:scale-125 duration-300" />
          </NavLink>
          <NavLink className=" border-2 rounded-full p-3  cursor-pointer hover:text-[#8E0DF8] bg-white">
            <GiSelfLove className="w-5 h-5 hover:scale-125 duration-300" />
            <span className="absolute flex justify-center items-center  top-0 right-0 text-red-500 font-bold">
              {}
            </span>
          </NavLink>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;

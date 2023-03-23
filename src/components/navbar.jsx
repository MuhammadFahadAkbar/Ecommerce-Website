import { Link } from "react-router-dom";
import SearchIcon from "../images/search.svg";

const Navbar = () => {
  return (
    <div className="w-full py-6 text-[#0D0E43]">
      <div className="custom-container m-auto flex justify-between items-center">
        <div className="flex items-center justify-start gap-16">
          <div>
            <Link to="/" className="text-4xl font-josefin font-bold">
              Hekto
            </Link>
          </div>
          <div className="flex font-lato">
            <Link
              to="/category"
              className="px-4 py-0 mx-2 text-lg hover:text-[#FB2E86] transition duration-300 ease-in-out"
            >
              Categories
            </Link>
            <Link
              to="/shop"
              className="px-4 py-0 mx-2 text-lg hover:text-[#FB2E86] transition duration-300 ease-in-out"
            >
              Shop
            </Link>

            <Link
              to="/about"
              className="px-4 py-0 mx-2 text-lg hover:text-[#FB2E86] transition duration-300 ease-in-out"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="px-4 py-0 mx-2 text-lg hover:text-[#FB2E86] transition duration-300 ease-in-out"
            >
              Contact
            </Link>

            <Link
              to="/faq"
              className="px-4 py-0 mx-2 text-lg hover:text-[#FB2E86] transition duration-300 ease-in-out"
            >
              Blog
            </Link>
          </div>
        </div>

        <form action="" className="flex">
          <input
            type="text"
            className="py-1 px-4 border border-[#0D0E43] font-light font-lato"
            placeholder="Search Products"
          />
          <button type="submit" className="bg-[#0D0E43] px-3">
            <img className="w-5" src={SearchIcon} alt="" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Navbar;

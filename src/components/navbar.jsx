import { Link } from "react-router-dom";
import Profile from "../images/profile.svg";
import CartIcon from "../images/cart.svg";

const Navbar = () => {
  return (
    <div className="w-full py-8 px-12 flex justify-between items-center border-b border-b-green-800 hover:transition-all">
      <div>
        {/* <img src="logo.png" alt="logo"/> */}
        <Link to="/" className="text-2xl font-bold">
          Ecommerce Store
        </Link>
      </div>
      <div className="flex">
        <Link
          to="/shop"
          className="px-4 py-0 mx-2 hover:border-b-2 hover:border-b-green-700 hover:text-green-700 text-lg"
        >
          Shop
        </Link>
        <Link
          to="/category"
          className="px-4 py-0 mx-2 hover:border-b-2 hover:border-b-green-700 hover:text-green-700 text-lg"
        >
          Categories
        </Link>
        <Link
          to="/about"
          className="px-4 py-0 mx-2 hover:border-b-2 hover:border-b-green-700 hover:text-green-700 text-lg"
        >
          About Us
        </Link>
        <Link
          to="/contact"
          className="px-4 py-0 mx-2 hover:border-b-2 hover:border-b-green-700 hover:text-green-700 text-lg"
        >
          Contact Us
        </Link>
        <Link
          to="/faq"
          className="px-4 py-0 mx-2 hover:border-b-2 hover:border-b-green-700 hover:text-green-700 text-lg"
        >
          Faq
        </Link>
        <Link to="/profile" className="mx-4">
          <img src={Profile} alt="" width="30px" />
        </Link>
        <Link to="/cart" className="mx-4">
          <img src={CartIcon} alt="" width="30px" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

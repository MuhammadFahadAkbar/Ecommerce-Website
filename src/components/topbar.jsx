import { Link } from "react-router-dom";
import EnvelopeIcon from "../images/envelope.svg";
import PhoneIcon from "../images/phone.svg";
import DropdownIcon from "../images/angledown.svg";
import ProfileIcon from "../images/profile.svg";
import HeartIcon from "../images/heart.svg";
import CartIcon from "../images/cart.svg";

const Topbar = () => {
  return (
    <div className="bg-violet-700 px-8 py-4 text-white font-lato text-lg">
      <div className="flex justify-between custom-container m-auto">
        <div className="flex justify-center items-center gap-12">
          <Link
            to="mailto:fahadakbar200@gmail.com"
            className="flex items-center gap-2"
          >
            <img className="w-5" src={EnvelopeIcon} alt="envelope-icon" />
            fahadakbar200@gmail.com
          </Link>
          <Link to="tel:+923143210968" className="flex items-center gap-2">
            <img className="w-5" src={PhoneIcon} alt="phone-icon" />
            (+92) 3143210968
          </Link>
        </div>

        <div className="flex justify-center items-center gap-6">
          <Link to="/" className="flex items-center">
            English
            <img className="w-6 mt-1" src={DropdownIcon} alt="arrow-down" />
          </Link>
          <Link to="/" className="flex items-center">
            USD
            <img className="w-6 mt-1" src={DropdownIcon} alt="arrow-down" />
          </Link>
          <Link to="/profile" className="flex items-center gap-1">
            Login
            <img className="w-5" src={ProfileIcon} alt="login-icon" />
          </Link>
          <Link to="/" className="flex items-center gap-1.5">
            Wishlist
            <img className="w-4" src={HeartIcon} alt="heart-icon" />
          </Link>
          <Link to="/cart" className="ml-6">
            <img className="w-7" src={CartIcon} alt="cart-icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

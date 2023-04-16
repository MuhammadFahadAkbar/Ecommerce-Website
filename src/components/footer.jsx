import { Link } from "react-router-dom";
import FbIcon from "../images/facebook-icon.svg";
import InstaIcon from "../images/instagram-icon.svg";
import TwitterIcon from "../images/twitter-icon.svg";

const Footer = () => {
  return (
    <div>
      <div className="w-full bg-[#EEEFFB]">
        <div className="custom-container m-auto pt-20 pb-14 flex justify-between items-start bg-[#EEEFFB]">
          <div>
            <Link to="/" className="text-4xl font-josefin font-bold">
              Hekto
            </Link>
            <form action="" className="flex mt-8">
              <input
                type="text"
                className="py-1 px-4  font-light font-lato"
                placeholder="Enter Email Address"
              />
              <button
                type="submit"
                className="bg-[#FB2E86] px-3 rounded-sm text-white"
              >
                Sign Up
              </button>
            </form>
            <p className="mt-8 font-light text-[#8A8FB9]">
              17 Princess Road, London, Greater London NW1 BJR, UK
            </p>
          </div>
          <div>
            <h1 className="text-xl font-semibold font-josefin">Catagories</h1>
            <ul className="mt-6">
              <li className="mb-3.5 font-light text-[#8A8FB9]">
                Laptops & Computers
              </li>
              <li className="mb-3.5 font-light text-[#8A8FB9]">
                Cameras & Photography
              </li>
              <li className="mb-3.5 font-light text-[#8A8FB9]">
                Smart Phones & Tablets
              </li>
              <li className="mb-3.5 font-light text-[#8A8FB9]">
                Video Games & Consoles
              </li>
              <li className="mb-3.5 font-light text-[#8A8FB9]">
                WaterProof Headphones
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-xl font-semibold font-josefin">
              Customer Care
            </h1>
            <ul className="mt-6">
              <li className="mb-3.5 font-light text-[#8A8FB9]">My Account</li>
              <li className="mb-3.5 font-light text-[#8A8FB9]">Discount</li>
              <li className="mb-3.5 font-light text-[#8A8FB9]">Returns</li>
              <li className="mb-3.5 font-light text-[#8A8FB9]">
                Orders History
              </li>
              <li className="mb-3.5 font-light text-[#8A8FB9]">
                Order Tracking
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-xl font-semibold font-josefin">Pages</h1>
            <ul className="mt-6">
              <li className="mb-3.5 font-light text-[#8A8FB9]">Blog</li>
              <li className="mb-3.5 font-light text-[#8A8FB9]">
                Browse the Shop
              </li>
              <li className="mb-3.5 font-light text-[#8A8FB9]">Category</li>
              <li className="mb-3.5 font-light text-[#8A8FB9]">
                Pre-Built Pages
              </li>
              <li className="mb-3.5 font-light text-[#8A8FB9]">
                Visual Composer Elements
              </li>
              <li className="mb-3.5 font-light text-[#8A8FB9]">
                WooCommerce Pages
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#E7E4F8]">
        <div className="custom-container m-auto pt-4 pb-3 flex justify-between items-center">
          <p className="font-light text-[#8A8FB9]">
            ©Hekto - All Rights Reserved
          </p>
          <div className="flex justify-center item-center">
            <div className="p-1.5 rounded-full bg-[#0D0E43] hover:cursor-pointer hover:bg-[#FB2E86] ml-3">
              <img width="15px" src={FbIcon} alt="facebook-icon" />
            </div>
            <div className="p-1.5 rounded-full bg-[#0D0E43] hover:cursor-pointer hover:bg-[#FB2E86] ml-3">
              <img width="15px" src={InstaIcon} alt="instagram-icon" />
            </div>
            <div className="p-1.5 rounded-full bg-[#0D0E43] hover:cursor-pointer hover:bg-[#FB2E86] ml-3">
              <img width="15px" src={TwitterIcon} alt="twitter-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

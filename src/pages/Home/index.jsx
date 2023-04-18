import Lamp from "../../images/lamp.png";
import Ellipse from "../../images/ellipse.png";
import Sofa from "../../images/sofa.png";
import Chair from "../../images/chair.png";
import SofaChair from "../../images/sofachair.png";
import FreeDelivery from "../../images/freedelivery.png";
import QaulityBadge from "../../images/qualitybadge.png";
import Cashback from "../../images/cashback.png";
import Support from "../../images/support.png";
import FirstBlog from "../../images/blog-1.png";
import SecondBlog from "../../images/blog-2.png";
import ThirdBlog from "../../images/blog-3.png";
import CalendarIcon from "../../images/calendar.png";
import PenIcon from "../../images/Pen.png";
import NewsletterBg from "../../images/newsletter.png";
import BrandsImage from "../../images/brands.png";
import TopChair from "../../images/topchair.png";
import DiscountedChair from "../../images/discountedchair.png";
import TickIcon from "../../images/Tick.png";
import UniqueSofa from "../../images/UniqueSofa.png";
import PinkEllipse from "../../images/pinkellipse.png";
import BlueEllipse from "../../images/blueellipse.png";
import GreenEllipse from "../../images/greenellipse.png";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="m-auto">
      {/*Hero Section */}
      <div className="bg-[#F2F0FF] h-[534px] w-full">
        <div className="custom-container m-auto flex justify-between items-center">
          <div style={{ flex: "1 0 14%" }}>
            <img
              src={Lamp}
              style={{ marginLeft: "-30px", marginTop: "-169px" }}
              alt="lamp"
            />
            <img className="w-3 mt-[8rem] ml-11" src={Ellipse} alt="ellipse" />
          </div>
          <div style={{ flex: "1 0 50%", paddingTop: "110px" }}>
            <p className="font-lato text-[#FB2E86] font-semibold mb-3.5 text-lg">
              Best Furniture For Your Castle....
            </p>
            <h1 className="font-josefin font-bold text-5xl leading-[55px] mb-4">
              New Furniture Collection Trends in 2020
            </h1>
            <p className="text-[#8A8FB9] font-medium font-lato mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing in phasellus non in justo.
            </p>
            <button className="px-8 py-4 bg-[#FB2E86] text-white">
              Shop Now
            </button>
          </div>
          <div className="pt-14">
            <img src={Sofa} alt="" />
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="custom-container m-auto pt-20 pb-14">
        <h1 className="font-josefin text-[#1A0B5B] text-center font-bold text-[40px] mb-6">
          Featured Products
        </h1>

        <div className="flex justify-center items-center">
          <div className="relative w-[25%] mx-4 group text-center shadow-md text-[#151875] hover:bg-[#2F1AC4] hover:cursor-pointer hover:text-white">
            <div className="absolute hidden group-hover:flex top-2 left-2">
              <button className="p-1.5 rounded-full hover:bg-blue-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2F1AC4"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </button>

              <button className="p-1.5 rounded-full hover:bg-blue-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2F1AC4"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>

              <button className="p-1.5 rounded-full hover:bg-blue-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2F1AC4"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
                  />
                </svg>
              </button>
            </div>
            <div className="bg-[#F6F7FB] py-8">
              <img src={Chair} className="m-auto" alt="chair" />
            </div>
            <button className="absolute left-[4.5rem] bottom-[9.5rem] font-lato px-4 py-2 bg-[#08D15F] text-white m-auto hidden group-hover:block">
              View Details
            </button>
            <div className="py-4">
              <h1 className="text-[#FB2E86] font-bold font-lato text-[20px]">
                Cantilever chair
              </h1>
              <div className="flex justify-center gap-2 items-center my-3">
                <span className="w-4 bg-[#05E6B7] h-1 rounded"></span>
                <span className="w-4 bg-[#F701A8] h-1 rounded"></span>
                <span className="w-4 bg-[#00009D] h-1 rounded"></span>
              </div>
              <p className="text-sm my-1 font-lato">Code - Y523201</p>
              <p className="text-sm my-1 font-lato">$42.00</p>
            </div>
          </div>
          <div className="relative w-[25%] mx-4 text-center group shadow-md text-[#151875] hover:bg-[#2F1AC4] hover:cursor-pointer hover:text-white">
            <div className="absolute hidden group-hover:flex top-2 left-2">
              <button className="p-1.5 rounded-full hover:bg-blue-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2F1AC4"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </button>

              <button className="p-1.5 rounded-full hover:bg-blue-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2F1AC4"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>

              <button className="p-1.5 rounded-full hover:bg-blue-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2F1AC4"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
                  />
                </svg>
              </button>
            </div>
            <div className="bg-[#F6F7FB] py-8">
              <img src={Chair} className="m-auto" alt="chair" />
            </div>
            <button className="absolute left-[4.5rem] bottom-[9.5rem] font-lato px-4 py-2 bg-[#08D15F] text-white m-auto hidden group-hover:block">
              View Details
            </button>
            <div className="py-4">
              <h1 className="text-[#FB2E86] font-bold font-lato text-[20px]">
                Cantilever chair
              </h1>
              <div className="flex justify-center gap-2 items-center my-3">
                <span className="w-4 bg-[#05E6B7] h-1 rounded"></span>
                <span className="w-4 bg-[#F701A8] h-1 rounded"></span>
                <span className="w-4 bg-[#FFEAC1] h-1 rounded"></span>
              </div>
              <p className="text-sm my-1 font-lato">Code - Y523201</p>
              <p className="text-sm my-1 font-lato">$42.00</p>
            </div>
          </div>
          <div className="relative w-[25%] mx-4 text-center group shadow-md text-[#151875] hover:bg-[#2F1AC4] hover:cursor-pointer hover:text-white">
            <div className="absolute hidden group-hover:flex top-2 left-2">
              <button className="p-1.5 rounded-full hover:bg-blue-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2F1AC4"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </button>

              <button className="p-1.5 rounded-full hover:bg-blue-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2F1AC4"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>

              <button className="p-1.5 rounded-full hover:bg-blue-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2F1AC4"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
                  />
                </svg>
              </button>
            </div>
            <div className="bg-[#F6F7FB] py-8">
              <img src={Chair} className="m-auto" alt="chair" />
            </div>
            <button className="absolute left-[4.5rem] bottom-[9.5rem] font-lato px-4 py-2 bg-[#08D15F] text-white m-auto hidden group-hover:block">
              View Details
            </button>
            <div className="py-4">
              <h1 className="text-[#FB2E86] font-bold font-lato text-[20px]">
                Cantilever chair
              </h1>
              <div className="flex justify-center gap-2 items-center my-3">
                <span className="w-4 bg-[#05E6B7] h-1 rounded"></span>
                <span className="w-4 bg-[#F701A8] h-1 rounded"></span>
                <span className="w-4 bg-[#00009D] h-1 rounded"></span>
              </div>
              <p className="text-sm my-1 font-lato">Code - Y523201</p>
              <p className="text-sm my-1 font-lato">$42.00</p>
            </div>
          </div>
          <div className="w-[25%] mx-4 text-center relative group shadow-md text-[#151875] hover:bg-[#2F1AC4] hover:cursor-pointer hover:text-white">
            <div className="absolute hidden group-hover:flex top-2 left-2">
              <button className="p-1.5 rounded-full hover:bg-blue-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2F1AC4"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </button>

              <button className="p-1.5 rounded-full hover:bg-blue-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2F1AC4"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>

              <button className="p-1.5 rounded-full hover:bg-blue-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2F1AC4"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
                  />
                </svg>
              </button>
            </div>
            <div className="bg-[#F6F7FB] py-8">
              <img src={Chair} className="m-auto" alt="chair" />
            </div>
            <button className="absolute left-[4.5rem] bottom-[9.5rem] font-lato px-4 py-2 bg-[#08D15F] text-white m-auto hidden group-hover:block">
              View Details
            </button>
            <div className="py-4">
              <h1 className="text-[#FB2E86] font-bold font-lato text-[20px]">
                Cantilever chair
              </h1>
              <div className="flex justify-center gap-2 items-center my-3">
                <span className="w-4 bg-[#05E6B7] h-1 rounded"></span>
                <span className="w-4 bg-[#F701A8] h-1 rounded"></span>
                <span className="w-4 bg-[#00009D] h-1 rounded"></span>
              </div>
              <p className="text-sm my-1 font-lato">Code - Y523201</p>
              <p className="text-sm my-1 font-lato">$42.00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Products */}
      <div className="custom-container m-auto pt-20 pb-14 ">
        <h1 className="font-josefin text-[#1A0B5B] text-center font-bold text-[40px] mb-6">
          Latest Products
        </h1>
        <div className="flex justify-center items-center gap-16">
          <Link className="text-[#151875] hover:text-[#FB4997] hover:border-b hover:border-b-[#FB4997] font-lato text-lg">
            New Arrival
          </Link>
          <Link className="text-[#151875] hover:text-[#FB4997] hover:border-b hover:border-b-[#FB4997] font-lato text-lg">
            Best Seller
          </Link>
          <Link className="text-[#151875] hover:text-[#FB4997] hover:border-b hover:border-b-[#FB4997] font-lato text-lg">
            Featured
          </Link>
          <Link className="text-[#151875] hover:text-[#FB4997] hover:border-b hover:border-b-[#FB4997] font-lato text-lg">
            Special Offer
          </Link>
        </div>
        <div className="flex justify-center items-center mt-16">
          <div className="group w-[33.3%] mx-4">
            <div className=" relative bg-[#F6F7FB] py-8">
              <img src={SofaChair} className="m-auto" alt="chair" />
              <div className="absolute hidden group-hover:block bottom-2 left-2">
                <button className="p-1.5 rounded-full hover:bg-blue-100 block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#2F1AC4"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </button>

                <button className="p-1.5 rounded-full hover:bg-blue-100 block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#2F1AC4"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </button>

                <button className="p-1.5 rounded-full hover:bg-blue-100 block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#2F1AC4"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center font-lato mt-2">
              <p className="text-md text-[#151875]">Comfort Handy Craft</p>
              <div className="flex gap-2 justify-center items-center">
                <p className="text-[#151875] text-xs">$42.00</p>
                <p className="text-[#FB2448] text-xs line-through">$65.00</p>
              </div>
            </div>
          </div>
          <div className="group w-[33.3%] mx-4">
            <div className=" relative bg-[#F6F7FB] py-8">
              <img src={SofaChair} className="m-auto" alt="chair" />
              <div className="absolute hidden group-hover:block bottom-2 left-2">
                <button className="p-1.5 rounded-full hover:bg-blue-100 block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#2F1AC4"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </button>

                <button className="p-1.5 rounded-full hover:bg-blue-100 block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#2F1AC4"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </button>

                <button className="p-1.5 rounded-full hover:bg-blue-100 block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#2F1AC4"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center font-lato mt-2">
              <p className="text-md text-[#151875]">Comfort Handy Craft</p>
              <div className="flex gap-2 justify-center items-center">
                <p className="text-[#151875] text-xs">$42.00</p>
                <p className="text-[#FB2448] text-xs line-through">$65.00</p>
              </div>
            </div>
          </div>
          <div className="group w-[33.3%] mx-4">
            <div className=" relative bg-[#F6F7FB] py-8">
              <img src={SofaChair} className="m-auto" alt="chair" />
              <div className="absolute hidden group-hover:block bottom-2 left-2">
                <button className="p-1.5 rounded-full hover:bg-blue-100 block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#2F1AC4"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </button>

                <button className="p-1.5 rounded-full hover:bg-blue-100 block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#2F1AC4"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </button>

                <button className="p-1.5 rounded-full hover:bg-blue-100 block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#2F1AC4"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center font-lato mt-2">
              <p className="text-md text-[#151875]">Comfort Handy Craft</p>
              <div className="flex gap-2 justify-center items-center">
                <p className="text-[#151875] text-xs">$42.00</p>
                <p className="text-[#FB2448] text-xs line-through">$65.00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-16">
          <div className="group w-[33.3%] mx-4">
            <div className=" relative bg-[#F6F7FB] py-8">
              <img src={SofaChair} className="m-auto" alt="chair" />
              <div className="absolute hidden group-hover:block bottom-2 left-2 ">
                <button className="p-1.5 rounded-full hover:bg-blue-100 block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#2F1AC4"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </button>

                <button className="p-1.5 rounded-full hover:bg-blue-100 block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#2F1AC4"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </button>

                <button className="p-1.5 rounded-full hover:bg-blue-100 block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#2F1AC4"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center font-lato mt-2">
              <p className="text-md text-[#151875]">Comfort Handy Craft</p>
              <div className="flex gap-2 justify-center items-center">
                <p className="text-[#151875] text-xs">$42.00</p>
                <p className="text-[#FB2448] text-xs line-through">$65.00</p>
              </div>
            </div>
          </div>
          <div className="group w-[33.3%] mx-4">
            <div className=" relative bg-[#F6F7FB] py-8">
              <img src={SofaChair} className="m-auto" alt="chair" />
              <div className="absolute hidden group-hover:block bottom-2 left-2">
                <button className="p-1.5 rounded-full hover:bg-blue-100 block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#2F1AC4"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </button>

                <button className="p-1.5 rounded-full hover:bg-blue-100 block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#2F1AC4"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </button>

                <button className="p-1.5 rounded-full hover:bg-blue-100 block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#2F1AC4"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center font-lato mt-2">
              <p className="text-md text-[#151875]">Comfort Handy Craft</p>
              <div className="flex gap-2 justify-center items-center">
                <p className="text-[#151875] text-xs">$42.00</p>
                <p className="text-[#FB2448] text-xs line-through">$65.00</p>
              </div>
            </div>
          </div>
          <div className="group w-[33.3%] mx-4">
            <div className=" relative bg-[#F6F7FB] py-8">
              <img src={SofaChair} className="m-auto" alt="chair" />
              <div className="absolute hidden group-hover:block bottom-2 left-2">
                <button className="p-1.5 rounded-full hover:bg-blue-100 block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#2F1AC4"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </button>

                <button className="p-1.5 rounded-full hover:bg-blue-100 block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#2F1AC4"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </button>

                <button className="p-1.5 rounded-full hover:bg-blue-100 block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#2F1AC4"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center font-lato mt-2">
              <p className="text-md text-[#151875]">Comfort Handy Craft</p>
              <div className="flex gap-2 justify-center items-center">
                <p className="text-[#151875] text-xs">$42.00</p>
                <p className="text-[#FB2448] text-xs line-through">$65.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What Hekto Offer! */}
      <div className="custom-container m-auto pt-32 pb-14">
        <h1 className="font-josefin text-[#1A0B5B] text-center font-bold text-[40px] mb-6">
          What Hekto Offer!
        </h1>
        <div className="flex justify-center items-center text-center mt-10">
          <div className="group w-[25%] mx-4 shadow-md py-12 px-4 ">
            <img src={FreeDelivery} className="m-auto" alt="chair" />
            <h1 className="my-4 text-2xl font-josefin text-[#151875]">
              Free Delivery
            </h1>
            <p className=" text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </div>
          <div className="group w-[25%] mx-4 shadow-md py-12 px-4">
            <img src={QaulityBadge} className="m-auto" alt="chair" />
            <h1 className="my-4 text-2xl font-josefin text-[#151875]">
              Premium Quality
            </h1>
            <p className=" text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </div>
          <div className="group w-[25%] mx-4 shadow-md py-12 px-4">
            <img src={Cashback} className="m-auto" alt="chair" />
            <h1 className="my-4 text-2xl font-josefin text-[#151875]">
              Full Cashback
            </h1>
            <p className=" text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </div>
          <div className="group w-[25%] mx-4 shadow-md py-12 px-4">
            <img src={Support} className="m-auto" alt="chair" />
            <h1 className="my-4 text-2xl font-josefin text-[#151875]">
              24/7 Support
            </h1>
            <p className=" text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </div>
        </div>
      </div>

      {/* Unique Features! */}
      <div className="w-full bg-[#F1F0FF]">
        <div className="custom-container m-auto ">
          <div className="flex justify-center items-center mt-10">
            <div className="custom-container m-auto flex justify-between items-center pl-10">
              <div className="pt-14">
                <img src={UniqueSofa} alt="" />
              </div>
              <div style={{ flex: "1 0 50%" }}>
                <h1 className="font-josefin font-bold text-4xl leading-[55px] mb-4 text-[#151875]">
                  Unique Features Of leatest & Trending Poducts
                </h1>
                <div className="flex gap-2">
                  <img src={PinkEllipse} className="h-5 pt-3" alt="" />
                  <p className="text-[#8A8FB9] text-lg font-medium font-lato mb-6">
                    All frames constructed with hardwood solids and laminates
                  </p>
                </div>

                <div className="flex gap-2">
                  <img src={GreenEllipse} className="h-5 pt-3" alt="" />
                  <p className="text-[#8A8FB9] text-lg font-medium font-lato mb-6">
                    Reinforced with double wood dowels, glue, screw - nails
                    corner blocks and machine nails
                  </p>
                </div>

                <div className="flex gap-2">
                  <img src={BlueEllipse} className="h-5 pt-3" alt="" />
                  <p className="text-[#8A8FB9] text-lg font-medium font-lato mb-12">
                    Arms, backs and seats are structurally reinforced
                  </p>
                </div>

                <button className="px-12 py-4 bg-[#FB2E86] text-white">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Discount Item! */}
      <div className="custom-container m-auto py-20">
        <h1 className="font-josefin text-[#1A0B5B] text-center font-bold text-[40px] mb-6">
          Discounted Items
        </h1>
        <div className="text-center font-lato flex gap-8 w-[28%] m-auto">
          <p className="text-[#FB2E86] hover:cursor-pointer">Wood Chair</p>
          <p className="text-[#151875] hover:text-[#FB2E86] hover:cursor-pointer">
            Plastic Chair
          </p>
          <p className="text-[#151875] hover:text-[#FB2E86] hover:cursor-pointer">
            Sofa Colletion
          </p>
        </div>
        <div className="flex justify-center items-center mt-10">
          <div className="custom-container m-auto flex justify-between items-center pl-10">
            <div style={{ flex: "1 0 50%", paddingTop: "40px" }}>
              <h1 className="font-josefin font-bold text-4xl leading-[55px] mb-4">
                20% Discount Of All Products
              </h1>
              <p className="font-lato text-[#FB2E86] font-semibold mb-6 text-lg">
                Eams Sofa Compact
              </p>
              <p className="text-[#8A8FB9] text-lg font-medium font-lato mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget{" "}
                <br /> feugiat habitasse nec, bibendum condimentum.
              </p>
              <div className="flex justify-start items-center gap-14 mb-4">
                <div>
                  <div className="flex">
                    <img src={TickIcon} className="h-6 pt-2 pr-2" alt="" />
                    <p className="text-[#8A8FB9] text-lg font-medium font-lato mb-6">
                      Material expose like metals
                    </p>
                  </div>
                  <div className="flex">
                    <img src={TickIcon} className="h-6 pt-2 pr-2" alt="" />
                    <p className="text-[#8A8FB9] text-lg font-medium font-lato mb-6">
                      Material expose like metals
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex">
                    <img src={TickIcon} className="h-6 pt-2 pr-2" alt="" />
                    <p className="text-[#8A8FB9] text-lg font-medium font-lato mb-6">
                      Material expose like metals
                    </p>
                  </div>
                  <div className="flex">
                    <img src={TickIcon} className="h-6 pt-2 pr-2" alt="" />
                    <p className="text-[#8A8FB9] text-lg font-medium font-lato mb-6">
                      Material expose like metals
                    </p>
                  </div>
                </div>
              </div>

              <button className="px-12 py-4 bg-[#FB2E86] text-white">
                Shop Now
              </button>
            </div>
            <div className="pt-14">
              <img src={DiscountedChair} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Top Categories */}
      <div className="custom-container m-auto py-20">
        <h1 className="font-josefin text-[#1A0B5B] text-center font-bold text-[40px] mb-6">
          Top Categories
        </h1>
        <div className="flex justify-center items-center mt-10">
          <div className="group w-[25%] mx-4 text-center">
            <div className="relative rounded-full hover:cursor-pointer text-center py-16 bg-[#F6F7FB] mb-4">
              <img className="w-[50%] m-auto" src={TopChair} alt="chair" />
              <button className="absolute left-[4.7rem] bottom-[2.5rem] font-lato px-4 py-2 bg-[#08D15F] text-white m-auto hidden group-hover:block">
                View Details
              </button>
            </div>
            <h1 className="text-xl font-josefin font-medium mb-1 text-[#151875]">
              Mini LCW Chair
            </h1>
            <p className="font-josefin mb-1 text-[#151875]">$56.00</p>
          </div>
          <div className="group w-[25%] mx-4 text-center">
            <div className="relative rounded-full hover:cursor-pointer text-center py-16 bg-[#F6F7FB] mb-4">
              <img className="w-[50%] m-auto" src={TopChair} alt="chair" />
              <button className="absolute left-[4.7rem] bottom-[2.5rem] font-lato px-4 py-2 bg-[#08D15F] text-white m-auto hidden group-hover:block">
                View Details
              </button>
            </div>
            <h1 className="text-xl font-josefin font-medium mb-1 text-[#151875]">
              Mini LCW Chair
            </h1>
            <p className="font-josefin mb-1 text-[#151875]">$56.00</p>
          </div>
          <div className="group w-[25%] mx-4 text-center">
            <div className="relative rounded-full hover:cursor-pointer text-center py-16 bg-[#F6F7FB] mb-4">
              <img className="w-[50%] m-auto" src={TopChair} alt="chair" />
              <button className="absolute left-[4.7rem] bottom-[2.5rem] font-lato px-4 py-2 bg-[#08D15F] text-white m-auto hidden group-hover:block">
                View Details
              </button>
            </div>
            <h1 className="text-xl font-josefin font-medium mb-1 text-[#151875]">
              Mini LCW Chair
            </h1>
            <p className="font-josefin mb-1 text-[#151875]">$56.00</p>
          </div>
          <div className="group w-[25%] mx-4 text-center">
            <div className="relative rounded-full hover:cursor-pointer text-center py-16 bg-[#F6F7FB] mb-4">
              <img className="w-[50%] m-auto" src={TopChair} alt="chair" />
              <button className="absolute left-[4.7rem] bottom-[2.5rem] font-lato px-4 py-2 bg-[#08D15F] text-white m-auto hidden group-hover:block">
                View Details
              </button>
            </div>
            <h1 className="text-xl font-josefin font-medium mb-1 text-[#151875]">
              Mini LCW Chair
            </h1>
            <p className="font-josefin mb-1 text-[#151875]">$56.00</p>
          </div>
        </div>
      </div>

      {/* NewsLetter */}
      <div
        className="w-full py-[8rem]"
        style={{
          backgroundImage: `url(${NewsletterBg})`,
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "cover",
        }}
      >
        <div className="custom-container m-auto">
          <h1 className="font-josefin text-[#1A0B5B] text-center font-bold text-[40px] mb-6">
            Get Latest Update By <br /> Subscribing 0ur Newsletter
          </h1>
          <div className="w-[15%] m-auto">
            <button className="px-12 py-4 bg-[#FB2E86] text-white">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Brands */}
      <div className="custom-container m-auto pt-20 pb-14">
        <img width="70%" className="m-auto" src={BrandsImage} alt="Brands" />
      </div>

      {/* Latest Blogs */}
      <div className="custom-container m-auto pt-20 pb-14">
        <h1 className="font-josefin text-[#1A0B5B] text-center font-bold text-[40px] mb-6">
          Latest Blogs
        </h1>
        <div className="flex justify-center items-center mt-10">
          <div className="group w-[33%] mx-4 shadow-md rounded-lg hover:cursor-pointer">
            <img src={FirstBlog} width="100%" alt="blog-1" />
            <div className="px-4 pb-8">
              <div className="flex justify-start gap-8 items-center mt-4">
                <div className="flex justify-start gap-1 items-center">
                  <img src={PenIcon} alt="PenIcon" />
                  <p className="text-[#151875] font-josefin">SaberAli</p>
                </div>
                <div className="flex justify-start gap-1 items-center">
                  <img src={CalendarIcon} alt="CalendarIcon" />
                  <p className="text-[#151875] font-josefin">21 August,2020</p>
                </div>
              </div>
              <h1 className="font-josefin text-xl font-bold text-[#151875] mt-5 group-hover:text-[#FB2E86]">
                Top esssential Trends in 2021
              </h1>
              <p className="text-[#72718F] font-lato text-lg mt-4">
                More off this less hello samlande lied much over tightly circa
                horse taped mightly
              </p>
              <p className="text-[#151875] font-lato text-lg mt-4 underline group-hover:text-[#FB2E86]">
                Read More
              </p>
            </div>
          </div>
          <div className="group w-[33%] mx-4 shadow-md rounded-lg hover:cursor-pointer">
            <img src={SecondBlog} width="100%" alt="blog-1" />
            <div className="px-4 pb-8">
              <div className="flex justify-start gap-8 items-center mt-4">
                <div className="flex justify-start gap-1 items-center">
                  <img src={PenIcon} alt="PenIcon" />
                  <p className="text-[#151875] font-josefin">SaberAli</p>
                </div>
                <div className="flex justify-start gap-1 items-center">
                  <img src={CalendarIcon} alt="CalendarIcon" />
                  <p className="text-[#151875] font-josefin">21 August,2020</p>
                </div>
              </div>
              <h1 className="font-josefin text-xl font-bold text-[#151875] mt-5 group-hover:text-[#FB2E86]">
                Top esssential Trends in 2021
              </h1>
              <p className="text-[#72718F] font-lato text-lg mt-4">
                More off this less hello samlande lied much over tightly circa
                horse taped mightly
              </p>
              <p className="text-[#151875] font-lato text-lg mt-4 underline group-hover:text-[#FB2E86]">
                Read More
              </p>
            </div>
          </div>
          <div className="group w-[33%] mx-4 shadow-md rounded-lg hover:cursor-pointer">
            <img src={ThirdBlog} width="100%" alt="blog-1" />
            <div className="px-4 pb-8">
              <div className="flex justify-start gap-8 items-center mt-4">
                <div className="flex justify-start gap-1 items-center">
                  <img src={PenIcon} alt="PenIcon" />
                  <p className="text-[#151875] font-josefin">SaberAli</p>
                </div>
                <div className="flex justify-start gap-1 items-center">
                  <img src={CalendarIcon} alt="CalendarIcon" />
                  <p className="text-[#151875] font-josefin">21 August,2020</p>
                </div>
              </div>
              <h1 className="font-josefin text-xl font-bold text-[#151875] mt-5 group-hover:text-[#FB2E86]">
                Top esssential Trends in 2021
              </h1>
              <p className="text-[#72718F] font-lato text-lg mt-4">
                More off this less hello samlande lied much over tightly circa
                horse taped mightly
              </p>
              <p className="text-[#151875] font-lato text-lg mt-4 underline group-hover:text-[#FB2E86]">
                Read More
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import Lamp from "../../images/lamp.png";
import Ellipse from "../../images/ellipse.png";
import Sofa from "../../images/sofa.png";
import Chair from "../../images/chair.png";

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
    </div>
  );
};

export default Home;

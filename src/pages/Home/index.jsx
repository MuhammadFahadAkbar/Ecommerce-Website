import Lamp from "../../images/lamp.png";
import Ellipse from "../../images/ellipse.png";
import Sofa from "../../images/sofa.png";

const Home = () => {
  return (
    <div className="m-auto">
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
    </div>
  );
};

export default Home;

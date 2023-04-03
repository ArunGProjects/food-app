import React from "react";
import { Link } from "react-router-dom";
import Delivery from "../img/delivery.png";
import Herobg from "../img/heroBg.png";
import { TbCurrencyRupee } from "react-icons/tb";
import { heroData } from "../utils/data";
import Sorry from "./sorry";

const date = new Date();
const currentTime = date.getHours();

const HomeContainer = () => {
  return currentTime < 22 ? (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
      <div className="py-2  flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-100 rounded-full px-4 py-1">
          <p className="text-base text-orange-500 font-semibold ">
            Fast Delivery
          </p>
          <div className=" w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              className="w-full h-full object-contain"
              alt="delivery"
            />
          </div>
        </div>
        <p className="text-[2.5rem] font-bold tracking-wide text-headingColor md:text-[4.5rem]">
          Tired enough and do not want to cook
          <span className="text-orange-600 text-[3rem] md:text-[5rem] ">
            ? Call us
          </span>
        </p>
        <p className="text-textColor text-center md:text-left md:w-[80%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor
          massa enim. Proin maximus, justo eu eleifend rhoncus, ex lorem
          elementum purus, a placerat urna sapien et nunc. Mauris commodo mauris
          eget convallis posuere. Integer a tincidunt arcu. Nunc euismod, mi sit
          amet euismod cursus, mauris odio blandit mi, at ullamcorper ex elit in
          sem.
        </p>
          <button
            type="button"
            className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all
       ease-in-out duration-100 text-white"
          >
            Order Now{" "}
          </button>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={Herobg}
          className="ml-auto h-420 w-full lg:h-650 lg:w-auto"
          alt="heroBg"
        />
        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32 py-4 gap-6 flex-wrap ">
          {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className="lg:w-190 p-2 bg-cardOverlay backdrop blur-xxsm rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
              >
                <img
                  src={n.imageSrc}
                  className="w-20 lg:w-40 -mt-10 lg:-mt-32 rounded-full"
                  alt="I1"
                />
                <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                  {n.name}
                </p>
                <p className=" text-[10px] lg:text-sm text-gray-400 font-semibold my-1 lg:my-3">
                  {n.decp}
                </p>
                <p className="text-sm font-semibold text-headingColor flex flex-row my-2">
                  <span>
                    <TbCurrencyRupee className="text-red-700" />
                  </span>
                  {n.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  ) : (
    <Sorry />
  );
};

export default HomeContainer;

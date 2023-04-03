import React, { useEffect, useRef, useState } from "react";
import {IoIosBasket} from 'react-icons/io';
import { motion } from "framer-motion";
import NotFound from "../img/NotFound.svg";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
const RowContainer = ({ flag, data, scrollValue }) => {
  const rowContainer = useRef();
  const [items, setItems] = useState([]);
  const [{ cartItems }, dispatch] = useStateValue();
  const addtocart = () => {
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: items,
    });
    localStorage.setItem("cartItems", JSON.stringify(items));
  };
  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);
  useEffect(() => {
    addtocart();
  }, [items]);
  return (
    <div ref={rowContainer} className={`w-full flex items-center gap-3  my-12 scroll-smooth scroll-orange  ${flag ? "overflow-x-scroll scrollbar-none" : "overflow-x-hidden flex-wrap justify-center" }`}>
      {data && data.length > 0 ? (
        data.map((item) => (
          <div key={item?.id} className="w-275 h-[175px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-card rounded-lg py-2 px-4  my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative">
            <div className="w-full flex items-center justify-between">
              <motion.div className="w-40 h-40 -mt-8 drop-shadow-4xl" whileHover={{ scale: 2.0 }}>
                <img src={item?.imageURL} alt="" className="w-[105px] h-full object-contain rounded-full" />
              </motion.div>
              <motion.div
                whileTap={{ scale: 1.2 }}
                className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover:shadow-lg -mt-8"
                onClick={() => setItems([...cartItems, item])}>
                <IoIosBasket className="text-brown text-3xl" />
              </motion.div>
            </div>
            <div className="w-full flex flex-col items-end justify-end -mt-8 text-headingColor">
              <p className=" font-semibold text-base md:text-lg">
                {item?.title}
              </p>
              <p className="mt-1 text-sm ">
                {item?.calories}
              </p>
              <div className="flex flex-row items-center gap-8">
                <p className="text-sm text-orange-500 font-semibold">
                  ₹{item?.price}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="w-full flex flex-col items-center justify-center">
          <img src={NotFound} className="h-340" />
          <p className="text-xl text-headingColor font-semibold my-2">
            Item Not Available
          </p>
        </div>
      )}
    </div>
  );
};
export default RowContainer;
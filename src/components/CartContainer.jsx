import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { Link } from "react-router-dom";
import { RiRefreshFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import EmptyCart from "../img/emptyCart.svg";
import CartItem from "./CartItem";
import HomeContainer from "./HomeContainer";
import { saveOrder } from "../utils/firebaseFunctions";
import FinalModal from "./FinalModal";
import { addDoc } from "firebase/firestore";

const CartContainer = () => {
  const [{ cartShow, cartItems, user }, dispatch] = useStateValue();
  const [flag, setFlag] = useState(1);
  const [tot, setTot] = useState(0);
  const [items, setItems] = useState("");
  const [cust, setCust] = useState("");
  const [Total] = useState("");
  const saveCart = () => {
        try {
        const Item = {
          id: `${Date.now()}`,
          items: cartItems,
          cust: user,
          Total: tot
        };
        saveOrder(Item);
        clearData();
    } catch (error) {
      console.log(error);
      setTimeout(() => {
      }, 4000);
    }
  };
  const clearData = () => {
    setItems("");
    setCust("");
  };

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };
  useEffect(() => {
    let totalPrice = cartItems.reduce(function (accumulator, item) {
      return accumulator + item.qty * item.price;
    }, 0);
    setTot(totalPrice);
    console.log(tot);
  }, [tot, flag]);
  const clearCart = () => {
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: [],
    });
    localStorage.setItem("cartItems", JSON.stringify([]));
  };
  return (
    <div>
      <HomeContainer />
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
        className="fixed top-0 right-0 w-full md:w-375 h-screen bg-white drop-shadow-md flex flex-col z-[101]"
      >
        <div className="w-full flex items-center justify-between p-4 cursor-pointer">
          <Link to={"/*"}>
            <motion.div whileTap={{ scale: 0.75 }} onClick={showCart}>
              <MdOutlineKeyboardBackspace className="text-orange-500 text-3xl" />
            </motion.div>
          </Link>
          <p className="text-orange-500 text-3xl font-italic">Order Cart</p>
          <motion.p
            whileTap={{ scale: 0.75 }}
            className="flex items-center gap-2 p-1 px-2 my-2 bg-orange-400 rounded-md hover:shadow-md  cursor-pointer text-white text-base"
            onClick={clearCart}
          >
            Clear <RiRefreshFill />
          </motion.p>
        </div>
        {cartItems && cartItems.length > 0 ? (
          <div className="w-full h-full bg-orange-400 rounded-t-[2rem] flex flex-col">
            <div className="w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
              {cartItems &&
                cartItems.length > 0 &&
                cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    setFlag={setFlag}
                    flag={flag}
                  />
                ))}
            </div>

            <div className="w-full flex-1 bg-brown rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2">
              <div className="w-full flex items-center justify-between">
                <p className="text-white text-lg">Sub Total</p>
                <p className="text-white text-lg">₹{tot}</p>
              </div>
              <div className="w-full flex items-center justify-between">
                <p className="text-white text-lg">Delivery</p>
                <p className="text-white text-lg">₹160</p>
              </div>
              <div className="w-full border-b border-white my-2"></div>
              <div className="w-full flex items-center justify-between">
                <p className="text-white text-xl font-semibold">Total</p>
                <p className="text-white text-xl font-semibold">₹{tot + 160}</p>
              </div>
              {user ? (
                <FinalModal/>
              ) : (
                <motion.button
                  whileTap={{ scale: 0.8 }}
                  type="button"
                  className="w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg"
                >
                  Login to place Order
                </motion.button>
              )}
            </div>
          </div>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-6">
            <img src={EmptyCart} className="w-300" alt="" />
            <p className="text-xl text-orange-500 font-semibold">
              Add some items to your cart
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
};
export default CartContainer;

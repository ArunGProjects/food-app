import React, { useState } from "react";
import { MdAdd, MdLogout } from "react-icons/md";
import { IoIosBasket } from "react-icons/io";
import { motion } from "framer-motion";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import Logo from "../img/download.jpeg";
import Avatar from "../img/avatar.png";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
const Header = () => {
  const date = new Date();
  const currentTime = date.getHours();
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [{ user, cartShow, cartItems }, dispatch] = useStateValue();
  const [isMenu, setIsMenu] = useState(false);
  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  };

  const logout = () => {
    setIsMenu(false);
    localStorage.clear();

    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

  return currentTime < 22 ? (
    <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary">
      {/* ############################################################desktop & tablet ############################################################*/}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to={"/"} className="flex items-center gap-2">
          <img
            src={Logo}
            className="w-12 rounded-full object-cover"
            alt="logo"
          />
          <p className="text-headingColor text-xl font-bold">
            <span className="text-orange-500 text-3xl">Oven</span>
          </p>
        </Link>
        <div className="flex items-center gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-24 "
          >
            <Link to="/*">
              <li
                className="text-lg text-textColor hover:text-orange-500 duration-100 transition-all ease-in-out cursor-pointer "
                onClick={() => setIsMenu(false)}
              >
                Home
              </li>
            </Link>
            <Link to={"/MenuContainer"}>
              <li
                className="text-lg text-textColor hover:text-orange-500 duration-100 transition-all ease-in-out cursor-pointer "
                onClick={() => setIsMenu(false)}
              >
                Menu
              </li>
            </Link>
            <Link to={"/About"}>
              <li
                className="text-lg text-textColor hover:text-orange-500 duration-100 transition-all ease-in-out cursor-pointer "
                onClick={() => setIsMenu(false)}
              >
                About Us
              </li>
            </Link>
            <Link to={"/About"}>
              <li
                className="text-lg text-textColor hover:text-orange-500 duration-100 transition-all ease-in-out cursor-pointer "
                onClick={() => setIsMenu(false)}
              >
                {" "}
                Service
              </li>
            </Link>
          </motion.ul>
          <Link to={"/Cart"}>
            <div
              className="relative flex items-center justify-center"
              onClick={showCart}
            >
              <IoIosBasket className="text-textColor text-2xl cursor-pointer hover:text-orange-500" />
              {cartItems && cartItems.length > 0 && (
                <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                  <p className="text-xs text-white font-semibold">
                    {cartItems.length}
                  </p>
                </div>
              )}
            </div>
          </Link>
          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : Avatar}
              className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
              alt="userprofile"
              onClick={login}
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
              >
                {user && user.email === "anuradhaey91@gmail.com" && (
                  <Link to={"/createItem"}>
                    <p
                      className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-orange-500 hover:text-white transition-all duration-100 ease-in-out text-textColor text-base"
                      onClick={() => setIsMenu(false)}
                    >
                      {" "}
                      New Dish
                      <MdAdd />
                    </p>
                  </Link>
                )}
                <p
                  className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-orange-500 hover:text-white transition-all duration-100 ease-in-out text-textColor text-base"
                  onClick={logout}
                >
                  Logout <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/*##################################################################### mobile############################################################# */}
      <div className="flex items-center justify-between md:hidden w-full h-full ">
        <div
          className="relative flex items-center justify-center"
          onClick={showCart}
        >
          <Link to={"/Cart"}>
            <IoIosBasket className="text-textColor text-2xl  cursor-pointer hover:text-orange-500" />
            {cartItems && cartItems.length > 0 && (
              <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                <p className="text-xs text-white font-semibold">
                  {cartItems.length}
                </p>
              </div>
            )}
          </Link>
        </div>

        <Link to={"/"} className="flex items-center gap-2">
          <img
            src={Logo}
            className="w-12 rounded-full object-cover"
            alt="logo"
          />
          <p className="text-xl font-bold">
            <span className="text-orange-500 text-3xl">Oven</span>
          </p>
        </Link>

        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : Avatar}
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
            alt="userprofile"
            onClick={login}
          />
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
            >
              {user && user.email === "anuradhaey91@gmail.com" && (
                <Link to={"/createItem"}>
                  <p className="px-4 py-2 flex items-center gap-3 cursor-pointer  transition-all  hover:text-white hover:bg-orange-500  duration-100 ease-in-out text-textColor text-base">
                    New Dish
                    <MdAdd />
                  </p>
                </Link>
              )}

              <ul className="flex flex-col ">
                <Link to={"/*"}>
                  <li
                    className="text-base text-textColor hover:text-white hover:bg-orange-500 duration-100 transition-all ease-in-out cursor-pointer px-4 py-2"
                    onClick={() => setIsMenu(false)}
                  >
                    Home
                  </li>
                </Link>
                <Link to={"/MenuContainer"}>
                  <li
                    className="text-base text-textColor hover:text-white hover:bg-orange-500 duration-100 transition-all ease-in-out cursor-pointer px-4 py-2"
                    onClick={() => setIsMenu(false)}
                  >
                    Menu
                  </li>
                </Link>
                <Link to={"/About"}>
                  <li
                    className="text-base text-textColor hover:text-white hover:bg-orange-500 duration-100 transition-all ease-in-out cursor-pointer px-4 py-2"
                    onClick={() => setIsMenu(false)}
                  >
                    About Us
                  </li>
                </Link>
                <Link to={"/About"}>
                  <li
                    className="text-base text-textColor hover:text-white hover:bg-orange-500 duration-100 transition-all ease-in-out cursor-pointer px-4 py-2"
                    onClick={() => setIsMenu(false)}
                  >
                    Service
                  </li>
                </Link>
              </ul>
              <p
                className="m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-gray-200 gap-3 cursor-pointer  hover:text-white hover:bg-orange-600  transition-all duration-100 ease-in-out text-textColor text-base"
                onClick={logout}
              >
                Logout <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  ) : null;
};

export default Header;

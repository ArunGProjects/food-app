import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import {
  CreateContainer,
  Header,
  MainContainer,
  MenuContainer,
  CartContainer,
  About,
  Customer,
  Pay,
} from "./components";
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";
import ThankYou from "./components/ThankYou";
const App = () => {
  const [{ foodItems }, dispatch] = useStateValue();
  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />
        <main className="mt-16 md:mt-24 p-8 w-full">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
            <Route path="/MenuContainer" element={<MenuContainer />} />
            <Route path="/Cart" element={<CartContainer />} />
            <Route path="/About" element={<About />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/pay" element={<Pay />} />
            <Route path="/ThankYou" element={<ThankYou />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
};
export default App;

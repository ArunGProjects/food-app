import React, { useState } from "react";
import { savePay } from "../utils/firebaseFunctions";
const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const [card, setCard] = useState("");
  const [exp, setExp] = useState("");
  const savePayment = () => {
        try {
        const Card = {
          id: `${Date.now()}`,
          card: card,
          exp: exp
        };
        savePay(Card);
        clearData();
    } catch (error) {
      console.log(error);
      setTimeout(() => {
      }, 4000);
    }
  };
  const clearData = () => {
    setCard("");
    setExp("");
  };
  return (
    <>
      <button type="button" onClick={() => setShowModal(true)}>
        Pay Now
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                    Please enter the details
                  </h1>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                    <label className="block text-black text-sm font-bold mb-1">
                      Credit Card Number
                    </label>
                    <input
                      type="number"
                      required
                      value={card}
                      onChange={(e) => setCard(e.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    />
                    <label className="block text-black text-sm font-bold mb-1">
                      Credit Card Expiry Date
                    </label>
                    <input
                      type="number"
                      required
                      value={exp}
                      onChange={(e) => setExp(e.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    />
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={savePayment}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;

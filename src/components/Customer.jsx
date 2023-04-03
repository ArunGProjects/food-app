import React, { useState } from "react";
import { motion } from "framer-motion";
import { useStateValue } from "../context/StateProvider";
import { FaUserAlt, FaLandmark } from "react-icons/fa";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { TfiAlarmClock } from "react-icons/tfi";
import { SiHomeassistant } from "react-icons/si";
import { GiRotaryPhone } from "react-icons/gi";
import { MdLocationOn } from "react-icons/md";
import res from "../img/signup.jpg";
import { saveData } from "../utils/firebaseFunctions";
import Pay from "./Pay";
import FormModal from "./formModal";

const Customer = () => {
  const [name, setName] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [SecondPhoneNumber, setSecondPhoneNumber] = useState("");
  const [Address, setAddress] = useState("");
  const [WorkAddress, setWorkAddress] = useState("");
  const [Pin, setPin] = useState("");
  const [WorkPin, setWorkPin] = useState("");
  const [Landmark, setLandmark] = useState("");
  const [Time, setTime] = useState("");
  const [fields, setFields] = useState(false);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [msg, setMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [{ Customer }] = useStateValue();
  const [showMYModal, setShowMyModal] = useState(false);

  const saveDetails = () => {
    setIsLoading(true);
    try {
      if (
        !name ||
        !PhoneNumber ||
        !SecondPhoneNumber ||
        !Address ||
        !WorkAddress ||
        !Pin ||
        !WorkPin ||
        !Landmark ||
        !Time
      ) {
        setFields(true);
        setMsg("Required fields can't be empty 🤷‍♂️");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
      } else {
        const details = {
          id: `${Date.now()}`,
          name: name,
          PhoneNumber: PhoneNumber,
          SecondPhoneNumber: SecondPhoneNumber,
          Address: Address,
          WorkAddress: WorkAddress,
          Pin: Pin,
          WorkPin: WorkPin,
          Landmark: Landmark,
          Time: Time,
        };
        saveData(details);
        setIsLoading(false);
        setFields(true);
        setMsg("Delivery will be shortly done 😊");
        setAlertStatus("success");
        setTimeout(() => {
          setFields(false);
        }, 4000);
        clearData();
      }
    } catch (error) {
      console.log(error);
      setFields(true);
      setMsg("Error while uploading : Try Again 🙇");
      setAlertStatus("danger");
      setTimeout(() => {
        setFields(false);
        setIsLoading(false);
      }, 4000);
    }
  };
  const clearData = () => {
    setName("");
    setPhoneNumber("");
    setAddress("");
    setSecondPhoneNumber("");
    setWorkAddress("");
    setPin("");
    setWorkPin("");
    setLandmark("");
    setTime("");
  };

  return (
    <div className=" flex-1 flex items-center absolute ">
      <img src={res} className="m-0 h-full w-full -mb-12" alt="res" />
      <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center py-12 flex-wrap -mt-12">
        <div className="w-full  flex items-center gap-2 ">
          <div className="w-full min-h-screen flex items-center justify-center gap-12 ">
            <div className="w-[90%] md:w-[75%] border  border-brown rounded-xl p-4 flex flex-col items-center justify-center h-full">
              <p className="text-2xl  font-serif text-white bg-brown rounded-xl items-center justify-center flex h-[100%] w-[50%] mb-12 lg:-mt-12 lg:text-7xl">
                {" "}
                Details
              </p>
              {fields && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={`w-full p-2 rounded-lg text-center text-2xl lg:text-4xl font-semibold ${
                    alertStatus === "danger"
                      ? "bg-white text-orange-500"
                      : "bg-white text-brown"
                  }`}
                >
                  {msg}
                </motion.p>
              )}
              <div className="w-full py-2 border-b border-brown flex items-center gap-8  lg:text-5xl">
                <FaUserAlt className="text-xl text-brown lg:text-5xl" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full h-full text-lg bg-transparent font-bold outline-none border-none placeholder:text-brown text-orange-500 lg:text-3xl"
                />
              </div>
              <div className="w-full flex flex-col md:flex-row items-center gap-3 lg:text-5xl">
                <div className="w-full py-2 border-b border-brown flex items-center gap-8 lg:text-5xl">
                  <GiRotaryPhone className="text-2xl  text-brown lg:text-5xl" />
                  <input
                    type="text"
                    required
                    value={PhoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Phone-Number"
                    className="w-full h-full text-lg bg-transparent font-bold outline-none border-none placeholder:text-brown text-orange-500 lg:text-3xl"
                  />
                </div>

                <div className="w-full py-2 border-b border-brown flex items-center gap-8">
                  <GiRotaryPhone className="text-2xl text-brown lg:text-5xl" />
                  <input
                    type="text"
                    required
                    value={SecondPhoneNumber}
                    onChange={(e) => setSecondPhoneNumber(e.target.value)}
                    placeholder="Secondary-PNo"
                    className="w-full h-full text-lg bg-transparent font-bold outline-none border-none placeholder:text-brown text-orange-500 lg:text-3xl"
                  />
                </div>
              </div>
              <div className="w-full flex flex-col md:flex-row items-center gap-3">
                <div className="w-full py-2 border-b border-brown flex items-center gap-8 lg:text-5xl">
                  <SiHomeassistant className="text-brown text-2xl lg:text-5xl" />
                  <input
                    type="text"
                    required
                    value={Address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Residency Address"
                    className="w-full h-full text-lg bg-transparent font-bold outline-none border-none placeholder:text-brown text-orange-500 lg:text-3xl"
                  />
                </div>

                <div className="w-full py-2 border-b border-brown flex items-center gap-8">
                  <MdLocationOn className="text-brown text-2xl lg:text-5xl" />
                  <input
                    type="text"
                    required
                    value={Pin}
                    onChange={(e) => setPin(e.target.value)}
                    placeholder="Pincode"
                    className="w-full h-full text-lg bg-transparent font-bold outline-none border-none placeholder:text-brown text-orange-500 lg:text-3xl"
                  />
                </div>
              </div>
              <div className="w-full flex flex-col md:flex-row items-center gap-3">
                <div className="w-full py-2 border-b border-brown flex items-center gap-8">
                  <SiHomeassistant className="text-brown text-2xl lg:text-5xl" />
                  <input
                    type="text"
                    required
                    value={WorkAddress}
                    onChange={(e) => setWorkAddress(e.target.value)}
                    placeholder="Work Address"
                    className="w-full h-full text-lg bg-transparent font-bold outline-none border-none placeholder:text-brown text-orange-500 lg:text-3xl"
                  />
                </div>

                <div className="w-full py-2 border-b border-brown flex items-center gap-8">
                  <HiBuildingOffice2 className="text-brown text-2xl lg:text-5xl" />
                  <input
                    type="text"
                    required
                    value={WorkPin}
                    onChange={(e) => setWorkPin(e.target.value)}
                    placeholder="Pincode"
                    className="w-full h-full text-lg bg-transparent font-bold outline-none border-none placeholder:text-brown text-orange-500 lg:text-3xl"
                  />
                </div>
              </div>
              <div className="w-full py-2 border-b border-brown flex items-center gap-8">
                <FaLandmark className="text-brown text-2xl lg:text-5xl" />
                <input
                  type="text"
                  required
                  value={Landmark}
                  onChange={(e) => setLandmark(e.target.value)}
                  placeholder="Significant-Landmark Near your location"
                  className="w-full h-full text-lg bg-transparent font-bold outline-none border-none placeholder:text-brown text-orange-500 lg:text-3xl"
                />
              </div>
              <div className="w-full py-2 border-b border-brown flex items-center gap-8">
                <TfiAlarmClock className="text-brown text-2xl lg:text-5xl" />
                <input
                  type="text"
                  required
                  value={Time}
                  onChange={(e) => setTime(e.target.value)}
                  placeholder="Prefered time for Delivery"
                  className="w-full h-full text-lg bg-transparent font-bold outline-none border-none placeholder:text-brown text-orange-500 lg:text-3xl"
                />
              </div>
              <div className=" items-center justify-center">
                <button
                  type="button"
                  className="bg-brown w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-2xl transition-all
ease-in-out duration-100 text-white font-bold mt-8 mb-8 md:mt-8 md:mr-12 lg:text-4xl"
                  onClick={saveDetails}
                >
                  Save Details
                </button>
                <button
                  type="button"
                  className="bg-brown w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-2xl transition-all
ease-in-out duration-100 text-white font-bold mb-8 md:mt-8 md:ml-12 lg:text-4xl"
                  onClick={() => setShowMyModal(true)}
                >
                  <FormModal />
                </button>
              </div>
            </div>
            <Pay />
          </div>
        </div>
        <Pay />
      </div>
    </div>
  );
};

export default Customer;

import React, { useEffect, useRef, useState } from "react";
import { useStateValue } from "../context/StateProvider";
import {motion} from 'framer-motion'
import {MdArrowLeft,MdArrowRight} from 'react-icons/md'
import RowContainer from './RowContainer'
import Menu from './Menu'
const MenuContainer = () => {
  const [{ foodItems, cartShow }, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);
  useEffect(() => {}, [scrollValue, cartShow]);
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <section className='w-full my-6'>
        <div className='w-full flex items-center justify-between'>
          <p className='text-3xl font-semibold relative before:absolute before:rounded-lg 
          before:content before:w-32 before:h-1 before:-bottom-2 before: left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration:100 text-brown'>
            Get Your<span className='text-3xl font-semibold text-emerald-500'> Sap ASAP</span>
          </p>
          <div className='hidden md:flex gap-3 items-center'>
              <motion.div whileTap=
              {{scale:0.75}} className='w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center' onClick={() => setScrollValue(-800)}><MdArrowLeft className='text-white items-center justify-center text-2xl'/></motion.div>
              <motion.div whileTap=
              {{scale:0.75}} className='w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center' onClick={() => setScrollValue(800)}><MdArrowRight className='text-white items-center justify-center text-2xl'/></motion.div>
          </div>
        </div>
        <RowContainer scrollValue={scrollValue}
          flag={true}
          data={foodItems?.filter((n) => n.category === "fruits")}/>
        <Menu/>
      </section>
    </div>
  )
}

export default MenuContainer
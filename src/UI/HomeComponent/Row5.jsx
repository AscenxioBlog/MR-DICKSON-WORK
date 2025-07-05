import React from 'react'
import { IoBagCheckSharp } from "react-icons/io5";
import { FaArrowTrendDown } from "react-icons/fa6";
import { FaShippingFast } from "react-icons/fa";

function Row5() {
  return (
    <div className='flex justify-around items-center bg-gray-100 p-4 shadow-md h-[40vh] text-gray-600 text-2xl'>
        <section className=' flex flex-col items-center gap-4 border-r border-gray-500 border-solid w-[30%]'>
            <IoBagCheckSharp className=' text-sky-500 text-4xl'/>
            <p className=' font-light'>Great Products</p>
        </section>
        <section className=' flex flex-col items-center border-r border-gray-500 border-solid gap-4 w-[30%]'>
            <FaArrowTrendDown className=' text-sky-500 text-4xl'/>
            <p>Low Price</p>
        </section>
        <section className=' flex flex-col items-center gap-4 w-[30%]'>
            <FaShippingFast className=' text-sky-500 text-4xl'/>
            <p>Fast Delivery</p>
        </section>
    </div>
  )
}

export default Row5
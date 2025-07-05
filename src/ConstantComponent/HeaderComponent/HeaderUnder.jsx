import React from 'react'
import { FaSearch } from "react-icons/fa";
import { GiRotaryPhone } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';


function HeaderUnder() {
  return (
    <header className="bg-[#EAE4D5] shadow-md text-black w-full fixed top-[60px] md:top-[60px] z-40   ">
        <div className="max-w-6xl mx-auto px-4  flex justify-between items-center">
            {/* <section className=' bg-sky-400 px-4 text-white h-[60px] grid place-items-center text-[13px] font-bold font-montserrat cursor-pointer'>
                <span>ALL CATEGORIES</span>
                <div className=' bg-lime-800 absolute min-h-[200px] top-[130px] px-[40px]'>
                    <ul>
                        <ol>
                            <li>
                                <Link>Hospital</Link>
                            </li>
                            <li>
                                <Link>Education</Link>
                            </li>
                            <li>
                                <Link>Lab</Link>
                            </li>
                            <li>
                                <Link>Surgical</Link>
                            </li>
                            <li>
                                <Link>Biology</Link>
                            </li>
                            <li>
                                <Link>Chemistry</Link>
                            </li>
                            <li>
                                <Link>Physics</Link>
                            </li>
                        </ol>
                    </ul>
                </div>
            </section> */}
            <section className=' relative flex'>
                <FaSearch className=' absolute text-black mt-3 ml-2'/>
                <input type="text" name="" placeholder='search product or category' className=' border-[1px] border-gray-500 bg-transparent w-[300px] pl-7 text-black placeholder:text-[14px] focus:outline-none'/>
                <button className=' relative px-6 py-2 rounded-tr-[5px] rounded-br-[5px] font-medium text-white bg-gradient-to-r from-[#213448] to-[#547792] shadow-lg shadow-sky-400/30 hover:shadow-sky-400/50 transition-all duration-300 hover:scale-[1.02]'>search</button>
            </section>
            <section className=' flex gap-2 items-center text-[0.9rem] font-semibold text-gray-700 cursor-pointer'>
                <GiRotaryPhone className=' text-blue-500 text-[1.3rem]'/>
                <span className=' flex flex-col'>
                    <span>
                        <a href="tel:+23443423844" className=' text-sky-500'>(+234) 7130392355</a>
                    </span>
                    <span>Need Help? Call Us</span>
                </span>
            </section>
            <section className=' flex gap-2 items-center text-[0.9rem] font-semibold text-gray-700 cursor-pointer'>
                <MdEmail  className=' text-blue-500 text-[1.3rem]'/>
                <span className=' flex flex-col'>
                    <span>
                        <a href='mailto:accon@gmail.com' className=' text-sky-500'>accon@gmail.com</a>
                    </span>
                    <span>Need Help? Mail Us</span>
                </span>
            </section>
            <section className=' flex gap-2 items-center text-[0.9rem] font-semibold text-gray-700 cursor-pointer'>
                <FaWhatsapp className=' text-blue-500 text-[1.3rem]'/> 
                <span>24/7 Online Chat</span>
            </section>
        </div>
    </header>
  )
}

export default HeaderUnder
import React, { useState } from 'react'
import { FaCaretDown } from 'react-icons/fa';
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom'

function HiddenNav({isOpen, toggleMenu}) {
    let [isShowing,setShowing] = useState(false)

  // Handler to stop click from bubbling to overlay
  const handleNavClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className={`h-screen ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} bg-[#0003] w-full z-[1000] fixed top-0 backdrop-blur-[2px] `}
      onClick={toggleMenu} // Click on overlay triggers toggleMenu
    >
        <nav
          className={` w-[60%] bg-[#EAE4D5] h-screen text-[1.4rem] text-[black] grid place-items-center relative ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}
          onClick={handleNavClick} // Prevent overlay click when clicking inside nav
        >
            <Link to='/' className=' absolute top-4 left-3  font-bold text-black font-playfair'>BABAKAZO</Link>
            <button className=' text-4xl absolute top-4 right-3 text-red-900' onClick={toggleMenu}><IoClose /></button>
            <ol className=' flex flex-col gap-[30px] text-center font-playfair'>
                <li>
                    <Link to='/'>home</Link>
                </li>
                <li>
                    <Link to='/about'>about</Link>
                </li>
                <li>
                    <Link to='/shop'>shop</Link>
                </li>
                <li>
                    <Link to='/contact'>contact</Link>
                </li>
                <li className=' relative'>
                    <span className=' cursor-pointer' onClick={()=> setShowing(!isShowing)}>categories <FaCaretDown className=' -ml-1 inline'/></span>
                    <div className={` ${isShowing ? " h-[150px]" : " h-0 overflow-hidden"} duration-150 transition-all absolute w-full`}>
                        <ol className=' flex gap-[1px] flex-col text-black text-[15px]'>
                            <li className=' bg-[#0003]'>
                                <Link>Hospital</Link>
                            </li>
                            <li className=' bg-[#0003]'>
                                <Link>Education</Link>
                            </li>
                            <li className=' bg-[#0003]'>
                                <Link>Lab</Link>
                            </li>
                            <li className=' bg-[#0003]'>
                                <Link>Surgical</Link>
                            </li>
                            <li className=' bg-[#0003]'>
                                <Link>Biology</Link>
                            </li>
                            <li className=' bg-[#0003]'>
                                <Link>Chemistry</Link>
                            </li>
                            <li className=' bg-[#0003]'>
                                <Link>Physics</Link>
                            </li>
                        </ol>
                    </div>
                </li>
            </ol>
        </nav>
    </div>
  )
}

export default HiddenNav
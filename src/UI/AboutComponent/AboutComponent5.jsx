import React from 'react'
import { GiMicroscope } from "react-icons/gi";
import { SiFastly } from "react-icons/si";
import { TbHours24 } from "react-icons/tb";
import { GiDarkSquad } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa";
import {motion} from "motion/react"


function AboutComponent5() {
  return (
    <div>
        <div className='min-h-[1500px] md:min-h-[850px] lg:min-h-[650px] w-full bg-boldtext'>
            <div className='min-h-[100px] flex flex-col items-center justify-center'>
                <h1 className='relative flex after:h-[2px] items-center gap-1 after:w-[30px] text-textc after:bg-textc font-custom text-[19px] before:h-[2px] before:w-[30px] before:bg-textc'>OUR SPECIALIST</h1>
                <h1 className='font-custom text-4xl font-semibold text-bodybg'>Why Choose Us</h1>
            </div>
            <div className='min-h-[400px] bg w-full text-bodybg '>
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 min-h-[200px] gap-4 lg:justify-center items-center lg:w-[95%] lg:translate-x-20 '>
                    <motion.div
                    initial={{ opacity:0, y:60 }}
                    whileInView={{ opacity: 1, y:0 }}
                    transition={{delay:0.5,type:'spring', stiffness:120}}
                    viewport={{ once: true }}
                     className='min-h-[200px] bg group p-[10px] flex flex-col items-center text-center'>
                        <div className='min-h-[100px] w-[100px] rounded-[50%] bg-[#0000ff89] flex items-center justify-center transition duration-500 ease-in group-hover:bg-[blue] text-[blue] group-hover:text-bodybg text-5xl'> 
                            <GiMicroscope />
                        </div>
                        <div className=' w-[60%] mt-[20px]'>
                            <h1 className='font-custom text-[2rem]  font-semibold'>High Quality Services</h1>
                            <p>We provide top-tier services with a strong commitment to excellence and attention to detail.</p>
                        </div>
                    </motion.div>
                    <motion.div 
                    initial={{ opacity:0, y:60 }}
                    whileInView={{ opacity: 1, y:0 }}
                    transition={{delay:0.6,type:'spring', stiffness:120}}
                    viewport={{ once: true }}
                    className='min-h-[200px] bg group p-[10px] flex flex-col items-center text-center'
                    >
                        <div className='min-h-[100px] w-[100px] rounded-[50%] bg-[#ff00007c] flex items-center justify-center transition duration-500 ease-in group-hover:bg-[red] text-[red] group-hover:text-bodybg text-5xl'>
                            <SiFastly />
                        </div>
                        <div className='w-[60%] mt-[20px] text-center'>
                            <h1 className='font-custom font-semibold text-[2rem]'>Fast Working Process</h1>
                            <p>Our workflow is efficient and streamlined to deliver results quickly without compromising quality.</p>
                        </div>
                    </motion.div>
                    <motion.div 
                    initial={{ opacity:0, y:60 }}
                    whileInView={{ opacity: 1, y:0 }}
                    transition={{delay:0.7,type:'spring', stiffness:120}}
                    viewport={{ once: true }}
                    className='min-h-[200px]  group p-[10px] flex flex-col items-center text-center'
                    >
                        <div className='min-h-[100px] w-[100px] rounded-[50%] bg-[#0080005d] flex items-center justify-center transition duration-500 ease-in group-hover:bg-[green] text-[green] group-hover:text-bodybg text-5xl'>
                         <TbHours24 />
                        </div>
                        <div className='w-[60%]  mt-[20px]'>
                            <h1 className='font-custom font-semibold text-[2rem]'>24/7 Cutomer Support</h1>
                            <p>We offer round-the-clock assistance to ensure our clients receive help whenever they need it.</p>
                        </div>
                    </motion.div>
                    <motion.div 
                    initial={{ opacity:0, y:60 }}
                    whileInView={{ opacity: 1, y:0 }}
                    transition={{delay:0.8,type:'spring', stiffness:120}}
                    viewport={{ once: true }}
                    className='group p-[10px] flex flex-col items-center text-center'>
                        <div className='min-h-[100px] w-[100px] rounded-[50%] bg-[#2c8cd07c] flex items-center justify-center transition duration-500 ease-in group-hover:bg-textc text-textc font-semibold group-hover:text-bodybg text-5xl'>
                         <GiDarkSquad />
                        </div>
                        <div className='w-[60%]  mt-[20px]'>
                            <h1 className='font-custom font-semibold text-[2rem]'>We have Expert Team</h1>
                            <p>Our team is made up of skilled professionals with deep knowledge and experience in their fields.</p>
                        </div>
                    </motion.div>

                </div>
            </div>
            <div className='  text-center md:hidden mt-[30px]'>
                <h1 className='text-[1rem] font-medium font-custom text-[#ffffff93]'>Laboratories Used For Scientific Resaerch: <span className='flex justify-center items-center font-custom font-semibold text-[1.3rem] hover:text-[red] cursor-pointer text-bodybg'>Take Many Forms <FaArrowRight className='hover:translate-x-2' /> </span></h1>
            </div>
            <div className='text-bodybg  text-center hidden mt-[50px] md:flex justify-center items-center gap-2'>
                <h1 className='text-[1rem] font-medium font-custom text-[#ffffff93]'>Laboratories Used For Scientific Resaerch : </h1>
                <h1 className='flex justify-center items-center font-custom font-semibold text-[1.3rem] hover:text-[red] cursor-pointer'>Take Many Forms <FaArrowRight className='hover:translate-x-2' /> </h1>
            </div>

        </div>
    </div>
  )
}

export default AboutComponent5
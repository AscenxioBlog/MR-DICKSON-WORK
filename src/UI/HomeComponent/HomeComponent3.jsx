import React from 'react'
// import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaMicroscope } from "react-icons/fa";
import { FaDna } from "react-icons/fa6";
import { GiCorkedTube } from "react-icons/gi";
import { MdOutlineScience } from "react-icons/md";
import { FaLungs } from "react-icons/fa";
import { FaBacterium } from "react-icons/fa";
import { LuDna } from "react-icons/lu";
import { GiStarSattelites } from "react-icons/gi";
import {motion} from "motion/react"



function HomeComponent3() {

  return (
    <div>
      <div className='min-h-[100px] dark:bg-white p-[20px] mt-[20px] bg-[url(assets/Frame2.png)]'>
            <div className='p-[10px] leading-[35px] box-border'>
              <div>
               <h2 className='before:h-[3px] before:w-[40px] before:bg-textc relative text-textc flex items-center font-custom font-medium text-2xl gap-2'>OUR SERVICES</h2>
                <h1 className='font-custom font-semibold text-boldtext text-4xl'>Service Area</h1>
              </div>
              <div>
                 <p className=' font-custom font-light text-[20px] md:text-[23px]'>We'll ensure you always get the best results: <span><Link to={'/Contact'}>CONTACT US <i class="fa-solid fa-arrow-right"></i> </Link></span> </p> 

              </div>
            </div>
            <div className='min-h-[500px]  grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6'>
              <motion.div  
                 initial={{ opacity:0, y:60 }}
                 whileInView={{ opacity: 1, y:0 }}
                 transition={{delay:0.4,type:'spring', stiffness:120}}
                 viewport={{ once: true }}
              className='p-[10px]'>
                <div className='min-h-[100px] w-[30%] translate-x-[40px]  '>
                    <div className='relative  bg-red-600 hexagon hover:bg-[blue] hover:transition duration-700 ease-in-out '> 
                      <div className='absolute left-[10px] mt-[30px] h-[10px] z-[5] text-6xl text-[#4d4d84] hover:text-bodybg hover:"transition duration-700 ease-in-out '>
                        <FaMicroscope />
                      </div>
                  </div>
                </div>                   
                  <div className='mt-[20px]'>
                   <h1 className='font-custom font-semibold text-3xl text-boldtext'>HEMOGLOBIN TEST</h1>
                   <h3 className='text-start'>Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla.</h3>
                 </div>
              </motion.div>
              <motion.div
                  initial={{ opacity:0, y:60 }}
                  whileInView={{ opacity: 1, y:0 }}
                  transition={{delay:0.5,type:'spring', stiffness:120}}
                  viewport={{ once: true }}
                className='p-[10px]'>
                <div className='min-h-[100px] w-[30%] translate-x-[40px]  '>
                  <div className='relative  hexagon hover:bg-[#e64040] hover:transition duration-700 ease-in-out'>                         
                    <div className='absolute left-[10px] mt-[30px] h-[10px] z-[5] text-6xl text-[red] hover:text-bodybg hover:"transition duration-700 ease-in-out  '>
                      <GiCorkedTube />
                     </div>
                  </div>
                </div>                                  
               <div className='mt-[20px]'>
                  <h1 className='font-custom font-semibold text-3xl text-boldtext'>BLOOD TESTING</h1>
                  <h3 className='text-start'>Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla.</h3>
                </div>
              </motion.div>
              <motion.div 
                 initial={{ opacity:0, y:60 }}
                 whileInView={{ opacity: 1, y:0 }}
                 transition={{delay:0.6,type:'spring', stiffness:120}}
                 viewport={{ once: true }}
                 className='p-[10px]'
              >    
              <div className='min-h-[100px] w-[30%] translate-x-[40px] '>
                  <div className='relative hexagon  hexagon hover:bg-[#2b2b9d] hover:transition duration-700 ease-in-out '>                         
                    <div className='absolute left-[10px] mt-[30px] h-[10px] z-[5] text-6xl text-[blue] hover:text-bodybg hover:"transition duration-700 ease-in-out '>
                     <FaBacterium />
                     </div>
                  </div>
                </div>                                
               <div className='mt-[20px]'>
                  <h1 className='font-custom font-semibold text-3xl text-boldtext'>BIOCHEMISTRY</h1>
                  <h3>Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla.</h3>

                </div>
              </motion.div>
              <motion.div 
                 initial={{ opacity:0, y:60 }}
                 whileInView={{ opacity: 1, y:0 }}
                 transition={{delay:0.7,type:'spring', stiffness:120}}
                 viewport={{ once: true }}
                className='p-[10px]'
              >
                <div className='min-h-[100px] w-[30%] translate-x-[40px] '>
                  <div className='relative hexagon hover:bg-[#9ee09e] hover:transition duration-700 ease-in-out'>                         
                    <div className='absolute left-[10px] mt-[30px] h-[10px] z-[5] text-6xl text-[green] hover:text-bodybg hover:"transition duration-700 ease-in-out '>
                     <FaBacterium />
                     </div>
                  </div>
                </div>                                 
               <div className='mt-[20px]'>
                  <h1 className='font-custom font-semibold text-3xl text-boldtext'>MICROBIOLOGY</h1>
                  <h3>Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla.</h3>

                </div>
              </motion.div>
              <motion.div
                   initial={{ opacity:0, y:60 }}
                   whileInView={{ opacity: 1, y:0 }}
                   transition={{delay:0.4,type:'spring', stiffness:120}}
                   viewport={{ once: true }}
                 className='p-[10px]'
              >
                <div className='min-h-[100px] w-[30%] translate-x-[40px]'>
                  <div className='relative hexagon hover:bg-[#9ee09e] hover:transition duration-700 ease-in-out'>                         
                    <div className='absolute left-[10px] mt-[30px] min-h-[10px] z-[5]  text-6xl text-[green] hover:text-bodybg hover:"transition duration-700 ease-in-out  '>
                      <FaLungs />
                     </div>
                  </div>
                </div>                                   
               <div className='mt-[20px]'>
                  <h1 className='font-custom font-semibold text-3xl text-boldtext'>HISTOPATOLOGY</h1>
                  <h3 className='text-start'>Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla.</h3>
                </div>
              </motion.div>
              <motion.div
                 initial={{ opacity:0, y:60 }}
                 whileInView={{ opacity: 1, y:0 }}
                 transition={{delay:0.5,type:'spring', stiffness:120}}
                 viewport={{ once: true }}
                 className='p-[10px]'
              >
               <div className='min-h-[100px] w-[30%] translate-x-[40px]  '>
                  <div className='relative hexagon hover:bg-[skyblue] hover:transition duration-700 ease-in-out'>                         
                    <div className='absolute left-[10px] mt-[30px] h-[10px] z-[5]  text-6xl text-[#1a485b] hover:text-bodybg hover:"transition duration-700 ease-in-out'>
                     <FaDna />
                     </div>
                  </div>
                </div>                                  
               <div className='mt-[20px]'>
                  <h1 className='font-custom font-semibold text-3xl text-boldtext'>BIOCHEMISTRY</h1>
                  <h3 className='text-start'>Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla.</h3>
                </div>
              </motion.div>
              <motion.div 
                 initial={{ opacity:0, y:60 }}
                 whileInView={{ opacity: 1, y:0 }}
                 transition={{delay:0.6,type:'spring', stiffness:120}}
                 viewport={{ once: true }}
                className='p-[10px]'>
                <div className='min-h-[100px] w-[30%] translate-x-[40px]   '>
                  <div className='relative  bg-red-600 hexagon hover:bg-[#272771] hover:transition duration-700 ease-in'>                         
                    <div className='absolute left-[10px] mt-[30px] h-[10px] z-[5] text-6xl text-[#29296c] hover:text-bodybg hover:"transition duration-700 ease-in-out  '>
                      <LuDna />
                     </div>
                  </div>
                </div>                                                                   
               <div className='mt-[20px]'>
                  <h1 className='font-custom font-semibold text-3xl text-boldtext'>GENETICS</h1>
                  <h3>Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla.</h3>
                </div>
              </motion.div>
              <motion.div  
                 initial={{ opacity:0, y:60 }}
                 whileInView={{ opacity: 1, y:0 }}
                 transition={{delay:0.7,type:'spring', stiffness:120}}
                 viewport={{ once: true }}
                className='p-[10px]'
              >
                <div className='min-h-[100px] w-[30%] translate-x-[40px] '>
                  <div className='relative  hexagon hover:bg-[#e64040] hover:transition duration-700 ease-in'>                         
                    <div className='absolute left-[10px] mt-[30px] h-[10px] z-[5] text-6xl  text-[red] hover:text-bodybg hover:"transition duration-700 ease-in-out'>
                     <GiStarSattelites />                   
                     </div>
                  </div>
                </div>                                 
               <div className='mt-[20px]'>
                  <h1 className='font-custom font-semibold text-3xl text-boldtext'>BLOOD TESTING</h1>
                  <h3>Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla.</h3>
                </div>
              </motion.div>                    
            </div>
        </div>
    </div>
  )
}

export default HomeComponent3
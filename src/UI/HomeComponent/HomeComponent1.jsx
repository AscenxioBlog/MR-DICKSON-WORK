import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import slider1 from './HomeEffectPictures/slider1.png'
import slider2 from './HomeEffectPictures/slider2.png'
import bgg from './HomePictures/bgg.png'
import {motion} from "motion/react"



function HomeComponent1() {
    const images = [slider1, slider2]
    const [num , setNum] =useState(0);
    useEffect(() => {
      let ss = setInterval(()=>{
        setNum((prevNum) => (prevNum + 1) % images.length);
      },3000)
    
      return () => {
        clearInterval(ss)
      }
    }, [images.lenght])

  
    
  return (
    <div>
        <div className='min-h-[600px] p-[20px] bg-white bg-[url(assets/Frame2.png)]  grid grid-cols-1 lg:grid-cols-2 lg:gap-20 items-center'>
            <div className=' lg:hidden relative' >
                <motion.div
                   initial={{ x: -30 , opacity:0}}
                   animate={{ x: 0, opacity:1 }}
                   transition={{delay:1, duration:3}}
                 className='min-h-[100px] w-[320px] '>
                 <img src={images[num]} alt="" />


            

                </motion.div>
                <motion.div
                   initial={{ x: 30 , opacity:0}}
                   animate={{ x: 0, opacity:1 }}
                   transition={{delay:1.5, duration:4}}
                className='hidden md:block min-h-[200px] w-[200px] absolute top-[70px] left-[300px]'>
                  <img src={bgg} alt="" />

                </motion.div>
                

            </div>
            <motion.div 
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{delay:1.5, duration:4}}
                className='min-h-[100px] lg:hidden '
            >
                <div>
                    <h1 className='font-custom text-textc font-semibold text-[20px]'>Our Passion is to Give you Better Service</h1>
                    <p className='font-custom text-[19px] font-medium text-start'>Your full service lab for clinical trials.Our mission is to ensure the generation of accurate and precise findings</p>
                </div>
                <div className='md:flex lg:flex items-center gap-2'>
                    <div className='min-h-[50px] w-[40%] md:w-[20%] bg-boldtext rounded-xl flex justify-center items-center text-bodybg font-custom text-[19px] cursor-pointer'>
                      <Link to={'/Contact'}>APPOINTMENT</Link>

                    </div>
                    <div className='min-h-[50px] w-[35%] md:w-[20%] bg-textc rounded-xl mt-[10px] flex justify-center items-center text-bodybg font-custom text-[19px] cursor-pointer'>
                      <Link to={'/About'}>ABOUT US</Link>

                    </div>
              
                </div>
            </motion.div>

              {/* FOR LARGE SCREEN  */}
              <div className='min-h-[100px] hidden lg:block '>
                <motion.div
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  transition={{delay:1.5, duration:4}}
                
                >
                    <h1 className='font-custom text-textc font-semibold text-[39px]'>Our Passion is to Give you Better Service</h1>
                    <p className='font-custom text-[25px] font-medium text-start'>Your full service lab for clinical trials.Our mission is to ensure the generation of accurate and precise findings</p>
                </motion.div>
                <motion.div 
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    transition={{delay:1.5, duration:4}}
                    className='md:flex items-center gap-2'
                >
                    <div className='min-h-[50px] w-[40%] md:w-[20%] bg-boldtext rounded-xl flex justify-center items-center text-bodybg font-custom text-[19px] cursor-pointer'>
                      <Link to={'/Contact'}>APPOINTMENT</Link>

                    </div>
                    <div className='min-h-[50px] w-[35%] md:w-[20%] bg-textc rounded-xl  flex justify-center items-center text-bodybg font-custom text-[19px] cursor-pointer'>
                      <Link to={'/About'}>ABOUT US</Link>

                    </div>
              
                </motion.div>
              </div>
            <div className=' hidden lg:block '>
                <motion.div 
                initial={{ x: -30 , opacity:0}}
                animate={{ x: 0, opacity:1 }}
                transition={{delay:1, duration:3}}
                className='min-h-[400px]  w-[400px] lg:min-h-[400px] lg:w-[400px]  relative  rounded-xl'>
                    <img src={images[num]} alt="" />
                    <motion.div 
                    initial={{ x: 30 , opacity:0}}
                    animate={{ x: 0, opacity:1 }}
                    transition={{delay:1, duration:3}}
                    className='hidden md:block min-h-[200px] w-[200px] absolute top-[100px] right-[-170px]'>
                       <img src={bgg} alt="" />
                    </motion.div>
                </motion.div>
           </div>
            


        </div>
    </div>
  )
}

export default HomeComponent1
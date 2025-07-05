import React, { useState, useEffect, useRef } from 'react'
import aboutbg from './AboutPictures/aboutbg1.jpg';
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineDone } from "react-icons/md";
import { Link } from 'react-router-dom';
import Button from '../../ReusableComponent/Button';

function AboutComponent2() {
 const [count, setCount] = useState(0)
 const [visible , setVisible] = useState(false)
 const sectionRef = useRef(null)


   useEffect(() => {
     const check = new IntersectionObserver ((entries)=>{
      if (entries[0].isIntersecting) {
        setVisible(true);
        
      }
     });
     if (sectionRef.current) {
      check.observe(sectionRef.current);
      }
   
     return () => {
      if (sectionRef.current) {
        check.unobserve(sectionRef.current);
    }
     }
   }, [])
   
  useEffect(() => {
    if (!visible) return; 

    let counter = setInterval(() => {
        setCount((prevcount) =>{
          if (prevcount < 12) {
             return prevcount + 1; 
          } else{
            clearInterval(counter)
            return prevcount;
          }
        })
     
        
    }, 600);
  
    return () => {
      clearInterval(counter)
    }
  }, [visible])
  
    
  return (
    <div>
        <div className='min-h-[600px] w-full  grid grid-cols-1 gap-[50px] p-[20px] box-border mt-[50px] md:hidden'>
            <div className=' w-full  relative' ref={sectionRef}>
                <div>
                     <img src={aboutbg} alt="" />
                </div>
                <div className='min-h-[200px] bg-[green] w-[50%] rounded-lg top-[260px] right-7 absolute flex flex-col items-center justify-center text-center text-bodybg'>
                    <h1 className='font-custom font-semibold text-7xl'>{count}</h1>
                    <h1 className='font-custom font-semibold text-3xl'>Years of Experience</h1>
                </div>
            </div>
            <div className='min-h-[100px] w-full'>
                <div className='leading-[70px]'>
                  <h1 className='font-custom font-medium text-4xl text-boldtext'>We'll Ensure You Always Get The Best Result. </h1>
                  <h1 className='flex items-center gap-1 text-[20px] text-boldtext font-semibold hover:text-teal-500 transition ease-in-out font-custom cursor-pointer'>Read our Mission & Vision <FaArrowRight   className='hover:translate-x-1'/> </h1> 
                </div>
                <div>
                 <p className='text-start dark:text-black font-custom font-medium'>
                 For over a decade, we’ve remained committed to delivering high-quality laboratory products and solutions to researchers, institutions, and healthcare facilities. Our platform ensures authenticity, consistency, and the innovation needed to empower your scientific discoveries.
                 </p>
                </div>
                <div className='mt-[40px]'>
                    <h1 className='flex items-center gap-3 font-custom text-2xl text-boldtext'><MdOutlineDone className='text-textc' />  Certified Lab Equipment</h1>
                    <h1 className='flex items-center gap-3 font-custom text-2xl text-boldtext'><MdOutlineDone className='text-textc' />  BISO-Standard Compliance</h1>
                    <h1 className='flex items-center gap-3 font-custom text-2xl text-boldtext'><MdOutlineDone className='text-textc' />  Fast & Reliable Delivery</h1>
                    <h1 className='flex items-center gap-3 font-custom text-2xl text-boldtext'><MdOutlineDone className='text-textc' />  Dedicated Customer Support</h1>
                </div>
                <div className='mt-[40px]'>
                 <Link to={'/About'}>
                 <Button
                    className='btn transition ease-in-out delay-150 bg-textc text-bodybg w-[140px] font-custom text-[19px] hover:bg-textc hover:opacity-75'
                    label ='ABOUT US'
                 
                 />
                 
                 </Link>
                </div>

            </div>

        </div>

    </div>
  )
}

export default AboutComponent2
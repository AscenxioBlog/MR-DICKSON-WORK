import React, { useState } from 'react'
import { MdOutlineLibraryBooks } from "react-icons/md";
import { ImLab } from "react-icons/im";
import { BiNotepad } from "react-icons/bi";
import about_tab1 from './AboutPictures/about_tab1.jpg'
import abouta from './AboutPictures/abouttab.jpg'
import aboutd1 from './AboutPictures/aboutd1.jpg'
import aboutd2 from './AboutPictures/aboutd2.jpg'


function AboutComponent6() {
  let [process , setProcess] = useState('block')
  let [mission, setMission] = useState('none') 
  let [value,setValue] = useState('none')
  let [activeborder, setActiveborder] = useState('process')
   function processview() {
      if (process === 'none') {
        setProcess('block')
        setMission('none')
        setValue('none')
        setActiveborder('process')

        
      } else {
        setProcess('block')
      }
    
   }

   function missionview() {
      if (mission === 'none') {
        setMission('block')
        setActiveborder('mission')
        setProcess('none')  
        setValue('none')
      }
    
   }
   function valueview() {
      if (value === 'none') {
        setValue('block')
        setActiveborder('value')
        setMission('none')
        setProcess('none')
        
      }
    
   }

  return (
    <div>
        <div className='min-h-[200px] w-full bg- md:block lg:hidden'>
          <div className='min-h-[200px] bg p-[20px] flex flex-col justify-center md:hidden '>
            <div className='flex  min-h-[50px] items-center '>
              <div className={`min-h-[60px] bg-bodybg w-[50%] flex items-center justify-center cursor-pointer ${
                activeborder === 'process' ? 'border-b-4 border-textc' : ''
              }`} onClick={processview}>
                  <h1 className='font-custom font-semibold text-boldtext hover:text-textc text-[1.4em]'>OUR PROCESS</h1>
              </div>
              <div className={`w-[50%] bg-bodybg min-h-[60px] flex justify-center items-center cursor-pointer ${activeborder === 'mission'? 'border-b-4 border-textc': ''}`} onClick={missionview}>
               <h1 className='font-custom font-semibold text-[1.4em] text-boldtext hover:text-textc'>OUR MISSION</h1>
              </div>
            </div>
            <div className={`min-h-[60px] w-[50%] bg-bodybg translate-x-24 flex justify-center items-center cursor-pointer ${activeborder === 'value' ? 'border-b-4 border-textc': ''}`} onClick={valueview}>
              <h1 className='font-custom font-semibold text-[1.4em] text-boldtext hover:text-textc'>OUR VALUE</h1>
            </div>
          </div>


                    {/* FOR MEDIUM SCREEN*/}

          <div className='min-h-[200px] p-[10px] hidden items-center justify-center md:flex '>
            <div className='flex w-[80%] min-h-[50px] items-center bg- '>
              <div className={`min-h-[70px] bg-bodybg w-[40%]  flex items-center justify-center cursor-pointer ${
                activeborder === 'process' ? 'border-b-4 border-textc' : ''
              }`} onClick={processview}>
                  <h1 className='font-custom font-semibold text-[1.4em] text-boldtext hover:text-textc'>OUR PROCESS</h1>
              </div>
              <div className={` bg-bodybg min-h-[70px] w-[40%] flex justify-center items-center cursor-pointer ${activeborder === 'mission'? 'border-b-4 border-textc': ''}`} onClick={missionview}>
               <h1 className='font-custom font-semibold text-[1.4em] text-boldtext hover:text-textc'>OUR MISSION</h1>
              </div>

              <div className={`min-h-[70px]  bg-bodybg w-[40%]  flex justify-center items-center cursor-pointer  ${activeborder === 'value' ? 'border-b-4 border-textc': ''}`} onClick={valueview}>
                <h1 className='font-custom font-semibold text-[1.4em] text-boldtext hover:text-textc'>OUR VALUE</h1>
              </div>
            </div>
           
          </div>



          <div className='min-h-[100px] bg p-[20px] ' style={{display:process}}>

            <section >
              <h1 className='text-center font-custom font-medium dark:text-boldtext text-[1.2rem] md:text-[1.4rem]'>Your full service lab for clinical trials. Our process is to ensure the generation of
              accurate and precise findings</h1>
            </section>

            <div className='min-h-[100px] bg- grid grid-cols-1 md:grid-cols-2 lg:hidden mt-10 gap-3'>
              <div className='flex flex-col justify-center items-center' >
                <div className='text-center'>
                 <MdOutlineLibraryBooks  className='font-semibold text-[5rem] text-green-300'/>
                </div>
                <div className='text-center'>
                  <h1 className='text-[2rem] font-custom font-semibold text-boldtext'>Generate Proposal</h1>
                  <p className='font-custom text-[1.3rem] dark:text-black'>Initial phase of planning and documentation.</p>
                </div>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <div className='text-center'>
                  <ImLab className='font-semibold text-[4.9rem] text-green-300' />
                </div>
                <div className='text-center '> 
                  <h1 className='text-[2rem] font-custom font-semibold text-boldtext'>Testing Begins</h1>
                  <p className='font-custom text-[1.3rem] dark:text-black'>Execution phase where trials are conducted.</p>
                </div>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <div className='text-center'>
                  <BiNotepad className='font-semibold text-[4.9rem] text-green-300' />
                </div>
                <div className='text-center'>
                  <h1 className='text-[2rem] font-custom font-semibold text-boldtext'>Reports Delivered</h1>
                    <p className='font-custom text-[1.3rem] dark:text-black'>Final phase involving reporting and delivering results.</p>
                </div>
              </div>

            </div>

          </div>


          <div className='min-h-[100px] bg p-[20px] ' style={{display:mission}}>
            <section >
                <h1 className='text-center font-custom font-medium dark:text-boldtext text-[1.2rem] md:text-[1.4rem]'>Your full service lab for clinical trials. Our process is to ensure the generation of
                accurate and precise findings</h1>
            </section>
            <div className='min-h-[100px] bg mt-10'>
              <div className='text-center leading-6'>
                <h1 className='font-custom font-semibold text-boldtext text-[1.9rem] md:text-[2.5rem]'>Our Mission is Give You Always Best Results.</h1>
                <p className=' dark:text-black text-[1.3rem] font-custom font-medium mt-5'>
                Our mission is to lead the advancement of medical and scientific knowledge by conducting reliable, ethical, and efficient clinical trials.
                </p>
                <p className=' dark:text-black text-[1.3rem] font-custom font-medium mt-5'>
                We strive to deliver precise results and support healthcare innovation through our commitment to quality, transparency, and collaboration.
                </p>
              </div>
              <div className='min-h-[100px] grid grid-cols-1 md:grid-cols-2 gap-7 mt-8 p-[10px]'>
                <div className='min-h-[100px]  w-full'>
                  <img src={abouta} height='100%' width='100%' loading='lazy' alt="" />

                </div>
               <div>
                  <img src={about_tab1} height='100%' width='100%' loading='lazy' alt="" />
               </div>

              </div>

            </div>

          </div>



          <div className='min-h-[100px] bg- p-[20px]' style={{display:value}}>
            <section >
                  <h1 className='text-center font-custom font-medium dark:text-boldtext text-[1.2rem] md:text-[1.4rem]'>Your full service lab for clinical trials. Our process is to ensure the generation of
                  accurate and precise findings</h1>
            </section>
            <div className='min-h-[100px] bg mt-10'>
             <div className='text-center leading-6'>
                <h1 className='font-custom font-semibold text-boldtext text-[1.9rem] md:text-[2.5rem]'>
                  We are Trusted by over 25000+ of customers.
                </h1>
                <p className=' dark:text-black text-[1.3rem] font-custom font-medium mt-5'>
                Trusted by over <span className="text-blue-700 font-semibold">25,000+</span> clients worldwide, our value lies in delivering excellence with integrity.
                </p>
                <p className=' dark:text-black text-[1.3rem] font-custom font-medium mt-5'>
                Every project we undertake is backed by a strong ethical foundation, scientific rigor, and a passion for driving meaningful outcomes in healthcare.
                </p>
              </div>
              <div className='min-h-[100px] grid grid-cols-1 md:grid-cols-2 gap-7 mt-8 p-[10px]'>
                <div className='min-h-[100px]  w-full'>
                  <img src={aboutd1} height='100%' width='100%' alt="" />

                </div>
               <div className='min-h-[100px]'>
                  <img src={aboutd2} height='100%' width='100%' alt="" />
               </div>

              </div>


            </div>

          </div>


         
       

        </div>
    </div>
  )
}

export default AboutComponent6
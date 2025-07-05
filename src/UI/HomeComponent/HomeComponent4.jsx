import React from 'react'
import first from './HomePictures/firstpic.jpg'
import second from './HomePictures/secondpic.jpg'
import third from './HomePictures/third.jpg'
import fourth from './HomePictures/fourth.jpg'
import fifth from './HomePictures/fifth.jpg'
import Button from '../../ReusableComponent/Button'
import { Link } from 'react-router-dom'


function HomeComponent4() {
  return (
    <div className='min-h-[200px] dark:bg-white md:min-h-[1400px]  mt-[50px] relative p-[10px]  lg:hidden  '>
        <div className='min-h-[300px] bg-blue-700 flex flex-col items-center '>
            <h1 className='before:h-[3px] before:w-[20px] before:bg-bodybg  after:h-[3px] after:w-[20px] after:bg-bodybg flex relative items-center text-[15px] font-light  text-bodybg font-custom leading-10'>WORK GALLERY</h1>
            <h1 className='text-4xl text-bodybg font-custom font-bold'>Accon Gallery</h1>
        </div>
        <div className='min-h-[200px] dark:bg-white grid grid-cols-1 md:grid-cols-2 mt-[-150px] translate-x-5  lg:mt-[-100px] w-[90%] md:translate-x-10  p-[10px] box-border top-[200px] gap-10 '>
            <div className='first min-h-10 w-full relative'>
                <img src={first} width='100%' height='100%' alt="" />
                <div className='galleryp1 absolute bottom-0 left-0 right-0 '>
                    <div className='flex flex-col items-center justify-end h-[inherit]'>
                        <h1 className='font-custom text-boldtext font-semibold text-2xl opacity-100'>COVID ANALYSIS</h1>
                        <h2 className='font-custom text-boldtext text-2xl opacity-100'>GENETICS</h2>
                    </div>
                
                </div>
            </div>
            <div className='wrap relative min-h-10 w-full' >
                <img src={third} width='100%' height='100%' alt="" />
                <div className='galleryp2 absolute bottom-0 left-0 right-0'>
                    <div className='flex flex-col items-center justify-end h-[inherit]'>
                        <h1 className='font-custom text-boldtext font-semibold text-2xl opacity-100'>ZYRTEC ANALYSIS</h1>
                        <h2 className='font-custom text-boldtext text-2xl opacity-100'>GENETICS</h2>
                    </div>      
                </div>
            </div>
            <div className='asthma relative min-h-10 w-full'>
                <img src={fourth} width='100%' height='100%' alt="" />
                <div className='galleryp3 absolute bottom-0 left-0 right-0 '>
                    <div className='flex flex-col items-center justify-end h-[inherit]'>
                        <h1 className='font-custom text-boldtext font-semibold text-2xl opacity-100'>ASTHMA APLLY</h1>
                        <h2 className='font-custom text-boldtext text-2xl opacity-100'>GENETICS</h2>
                    </div>      
                </div>
            </div>
            <div className='urine relative min-h-10 w-full'>
                <img src={fifth} width='100%' height='100%' alt="" />
                <div className='galleryp4 absolute bottom-0 left-0 right-0 '>
                    <div className='flex flex-col items-center justify-end h-[inherit]'>
                        <h1 className='font-custom text-boldtext font-semibold text-2xl opacity-100'>URINE ANALYSIS</h1>
                        <h2 className='font-custom text-boldtext text-2xl opacity-100'>GENETICS</h2>
                    </div>      
                </div>
            </div>
            <div className='md:col-span-2 relative min-h-10 w-full hiv '>
                <img src={second} width='100%' height='100%' alt="" />
                <div className='galleryp6  absolute bottom-0 left-0 right-0'>
                    <div className='flex flex-col items-center justify-end h-[inherit]'>
                        <h1 className='font-custom text-boldtext font-semibold text-2xl opacity-100'>HIV ANALYSIS & TESTING</h1>
                        <h2 className='font-custom text-boldtext text-2xl opacity-100'>GENETICS</h2>
                    </div>      
                </div>

            </div>
        </div>
        <div className='min-h-[10px] w-full  justify-center grid'>

            <Link to={'/Contact'}>
                <Button
                    label = 'EXPLORE MORE'
                    className = 'btn btn-info w-[200px] text-bodybg '
                
                />
            
            </Link>


        </div>
        
        
        
    </div>
  )
}

export default HomeComponent4
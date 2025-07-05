import React from 'react'
import first from './HomePictures/firstpic.jpg'
import second from './HomePictures/secondpic.jpg'
import third from './HomePictures/third.jpg'
import fourth from './HomePictures/fourth.jpg'
import fifth from './HomePictures/fifth.jpg'
import { Link } from 'react-router-dom'
import Button from '../../ReusableComponent/Button'

function HomeComponent5() {
  return (
    <div className='min-h-[100px]  mt-[50px] relative p-[30px] hidden lg:block bg-[url(assets/Frame2.png)]  '>
        <div className='min-h-[200px] bg-blue-700 flex flex-col items-center  relative '>
            <h1 className='before:h-[3px] before:w-[20px] before:bg-bodybg  after:h-[3px] after:w-[20px] after:bg-bodybg flex relative items-center text-[15px] font-light  text-bodybg font-custom leading-10'>WORK GALLERY</h1>
            <h1 className='text-4xl text-bodybg font-custom font-bold'>Accon Gallery</h1>
        </div>
        <div className='min-h-[200px] grid grid-cols-1 lg:grid-cols-3 w-[90%] left-5 md:left-10 translate-x-20 p-[10px] box-border mt-[-60px] gap-10 '>
            <div className='first min-h-10 w-full relative'>
                <img src={first} width='100%' height='100%' alt="" />
                <div className='galleryp1 absolute bottom-0 left-0 right-0 '>
                    <div className='flex flex-col items-center justify-end h-[inherit]'>
                        <h1 className='font-custom text-boldtext font-semibold text-2xl opacity-100'>COVID ANALYSIS</h1>
                        <h2 className='font-custom text-boldtext text-2xl opacity-100'>GENETICS</h2>
                    </div>
                
                </div>
            </div>
            <div className='md:col-span-2 relative min-h-10 w-full hiv '>
                <img src={second} width='100%' height='100%' alt="" />
                <div className='galleryp5  absolute bottom-0 left-0 right-0'>
                    <div className='flex flex-col items-center justify-end h-[inherit]'>
                        <h1 className='font-custom text-boldtext font-semibold text-2xl opacity-100'>HIV ANALYSIS & TESTING</h1>
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

export default HomeComponent5
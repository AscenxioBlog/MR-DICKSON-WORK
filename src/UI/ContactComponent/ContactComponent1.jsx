import React from 'react'

function ContactComponent1() {
  return (
   <div>
     <div className='min-h-[430px] md:min-h-[400px] lg:min-h-[425px] w-full text-bodybg flex justify-center flex-col md:hidden p-[10px]  contactbg'>
        <div>
            <h1 className='text-bodybg font-custom text-4xl font-extrabold'>CONTACT US</h1>
        </div>
        <div>
            <h1 className=' relative  text-2xl font-custom font-extrabold'>BabaKazo: CONTACT US</h1>
            <h1 className='absolute flex before:h-[3px] before:w-[140px] before:bg-bodybg  left-[135px]'></h1>
        </div>
        

     </div>
     <div className='min-h-[430px] md:min-h-[400px] lg:min-h-[425px] w-full text-bodybg justify-around items-center hidden md:flex  lg:hidden contactbg'>
        <div>
            <h1 className='text-bodybg font-custom text-6xl font-extrabold'>CONTACT US</h1>
        </div>
        <div>
            <h1 className=' relative  text-2xl font-custom font-extrabold'>BabaKazo Shoes : CONTACT US</h1>
            <h1 className='absolute flex before:h-[3px] before:w-[140px] before:bg-bodybg  right-[48px]'></h1>
        </div>
        
    
     </div>
     <div className='min-h-[430px] md:min-h-[400px] lg:min-h-[425px] w-full text-bodybg justify-around items-center hidden md:hidden  lg:flex contactbg'>
        <div>
            <h1 className='text-bodybg font-custom text-3xl font-extrabold'>CONTACT US</h1>
        </div>
        <div>
            <h1 className=' relative  text-2xl font-custom font-extrabold'>BabaKazo Shoes : CONTACT US</h1>
            <h1 className='absolute flex before:h-[3px] before:w-[120px] before:bg-bodybg  right-[14.7%] xl:right-[16%]'></h1>
        </div>
        

     </div>
   </div>
  )
}

export default ContactComponent1
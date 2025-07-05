import React from 'react'

function CheckoutComponent1() {
  return (
    <div>
           <div className='min-h-[430px] md:min-h-[400px]  lg:min-h-[425px] w-full text-bodybg flex justify-center flex-col md:hidden p-[10px]  contactbg'>
        <div>
            <h1 className='text-bodybg font-custom text-4xl font-extrabold'>CHECKOUT</h1>
        </div>
        <div>
            <h1 className=' relative  text-2xl font-custom font-extrabold'>Accon Lab : CHECKOUT</h1>
            <h1 className='absolute flex before:h-[3px] before:w-[110px] before:bg-bodybg  left-[135px]'></h1>
        </div>
        

     </div>
     <div className='min-h-[430px] md:min-h-[400px] lg:min-h-[425px] w-full text-bodybg justify-around items-center hidden md:flex  lg:hidden contactbg'>
        <div>
            <h1 className='text-bodybg font-custom text-6xl font-extrabold'>CHECKOUT</h1>
        </div>
        <div>
            <h1 className=' relative  text-2xl font-custom font-extrabold'>Accon Lab : CHECKOUT</h1>
            <h1 className='absolute flex before:h-[3px] before:w-[100px] before:bg-bodybg  right-[68px]'></h1>
        </div>
        
    
     </div>
     <div className='min-h-[430px] md:min-h-[400px] lg:min-h-[425px] w-full text-bodybg justify-around items-center hidden md:hidden  lg:flex contactbg'>
        <div>
            <h1 className='text-bodybg font-custom text-6xl font-extrabold'>CHECKOUT</h1>
        </div>
        <div>
            <h1 className=' relative  text-2xl font-custom font-extrabold'>Accon Lab : CHECKOUT</h1>
            <h1 className='absolute flex before:h-[3px] before:w-[110px] before:bg-bodybg  right-[15.6%] xl:right-[17%]'></h1>
        </div>
        

     </div>
    </div>
  )
}

export default CheckoutComponent1
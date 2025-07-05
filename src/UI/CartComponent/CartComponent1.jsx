import React from 'react'

function CartComponent1() {
  return (
    <div>
         <div className='min-h-[430px] md:min-h-[400px] lg:min-h-[425px] w-full text-bodybg flex justify-center flex-col md:hidden p-[10px]  contactbg'>
            <div>
                <h1 className='text-bodybg font-custom text-4xl font-extrabold'>MY CART</h1>
            </div>
            <div>
                <h1 className=' relative  text-2xl font-custom font-extrabold'>Wilcon Lab : MY CART</h1>
                <h1 className='absolute flex before:h-[3px] before:w-[90px] before:bg-bodybg  left-[140px]'></h1>
            </div>
        </div>
        <div className='min-h-[430px] md:min-h-[400px] lg:min-h-[425px] w-full text-bodybg justify-around items-center hidden md:flex  lg:hidden contactbg'>
                <div>
                    <h1 className='text-bodybg font-custom text-6xl font-extrabold'>MY CART</h1>
                </div>
                <div>
                    <h1 className=' relative  text-2xl font-custom font-extrabold'>Wilcon Lab : MY CART</h1>
                    <h1 className='absolute flex before:h-[3px] before:w-[80px] before:bg-bodybg  right-[90px]'></h1>
                </div>        
        </div>
        <div className='min-h-[430px] md:min-h-[400px] lg:min-h-[425px] w-full text-bodybg justify-around items-center hidden md:hidden  lg:flex contactbg'>
            <div>
                <h1 className='text-bodybg font-custom text-6xl font-extrabold'>MY CART</h1>
            </div>
            <div>
                <h1 className=' relative  text-2xl font-custom font-extrabold'>Wilcon Lab : MY CART</h1>
                <h1 className='absolute flex before:h-[3px] before:w-[90px] before:bg-bodybg xl:right-[18%]   right-[16.5%]'></h1>
            </div>
            

        </div>
    </div>
  )
}

export default CartComponent1
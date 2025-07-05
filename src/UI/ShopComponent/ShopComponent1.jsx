import React from 'react'

function ShopComponent1() {
  return (
    <div>
          <div className='min-h-[430px] md:min-h-[400px] lg:min-h-[425px] w-full text-bodybg flex justify-center flex-col md:hidden p-[10px]  contactbg'>
            <div>
                <h1 className='text-bodybg font-custom text-4xl font-extrabold'>SHOP</h1>
            </div>
            <div>
                <h1 className=' relative  text-2xl font-custom font-extrabold'>Accon Lab : SHOP</h1>
                <h1 className='absolute flex before:h-[3px] before:w-[50px] before:bg-bodybg  left-[35%]'></h1>
            </div>
        </div>
        <div className='min-h-[430px] md:min-h-[400px] lg:min-h-[425px] w-full text-bodybg justify-around items-center hidden md:flex  lg:hidden contactbg'>
                <div>
                    <h1 className='text-bodybg font-custom text-6xl font-extrabold'>SHOP</h1>
                </div>
                <div>
                    <h1 className=' relative  text-2xl font-custom font-extrabold'>Accon Lab : SHOP</h1>
                    <h1 className='absolute flex before:h-[3px] before:w-[56px] before:bg-bodybg  right-[14.5%]'></h1>
                </div>        
        </div>
        <div className='min-h-[430px] md:min-h-[400px] lg:min-h-[425px] w-full text-bodybg justify-around items-center hidden md:hidden  lg:flex contactbg'>
            <div>
                <h1 className='text-bodybg font-custom text-6xl font-extrabold'>SHOP</h1>
            </div>
            <div>
                <h1 className=' relative  text-2xl font-custom font-extrabold'>Accon Lab : SHOP</h1>
                <h1 className='absolute flex before:h-[3px] before:w-[50px] before:bg-bodybg  right-[19.3%] xl:right-[20%]'></h1>
            </div>
            

        </div>
    </div>
  )
}

export default ShopComponent1
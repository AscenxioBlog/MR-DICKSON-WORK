import React from 'react'
import Button from '../../ReusableComponent/Button'


function FAQComponent3() {
  return (
    <div>
         <div className='min-h-[740px] md:min-h-[750px] bg-bodybg w-full  flex flex-col items-center'>
            <div className='min-h-[200px] bg- w-full items-center justify-center flex flex-col'> 
                <h1 className='text-[.9rem] font-custom flex items-center gap-1 font-semibold relative before:w-[26px] before:h-[3px] before:bg-textc after:w-[26px] after:h-[3px] after:bg-textc'>GET IN TOUCH</h1>
                <h1 className='text-[2rem] font-custom font-semibold text-boldtext'>Need Any Help</h1>
            </div>
            <div className='min-h-[450px] w-[90%] md:w-[70%]  lg:w-[60%] bg-white border-b-textc border-b-[7px] flex flex-col items-center p-[10px]'>
                <div className='  w-full md:w-[90%]'>
                    <h1 className='text-[1.2rem] mt-10 font-custom font-semibold dark:text-black'>Direct Contact with us</h1>
                </div>
               <form action=""  className=' w-full md:w-[90%] flex flex-col items-center'>
               <input
                    type="text"
                    placeholder="Enter your Name"
                    className="input input-bordered input-info w-full mt-8 dark:text-black dark:bg-bodybg"
                    required
                />
                  <input
                    type="email"
                    placeholder="Enter your Mail"
                    className="input input-bordered input-info w-full mt-5 dark:text-black dark:bg-bodybg"
                />

                <textarea className="textarea textarea-info mt-5 w-full dark:text-black dark:bg-bodybg" placeholder="Type your Message"></textarea>

                <Button
                  className='btn w-[100%]   mt-10 bg-textc text-white font-custom text-[1.3rem] '
                  label='SEND MESSAGE'
                  />
               </form>
            </div>

        </div>
    </div>
  )
}

export default FAQComponent3
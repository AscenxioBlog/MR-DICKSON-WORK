import React, { useEffect } from 'react'
import Button from '../../ReusableComponent/Button'
import { Link } from 'react-router-dom'
import { TbCurrencyNaira } from "react-icons/tb";

function CartComponent3({ cart=[], cartTotal=0}) {
    console.log(cart, cartTotal);

     // Save cart to localStorage on changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("storageUpdate"));
  }, [cart]);

  return (
    <div >
        <div className='min-h-[100px] bg-bodybg mt-5   dark:text-black'>
            <div className='md:flex justify-between p-[10px] items-center'>
                <div className='md:flex  gap-3 '>
                    <input type="text" placeholder=" Coupon code" className="input input-bordered w-full max-w-36 dark:bg-white" />

                    <Button
                        className='btn bg-textc text-white uppercase mt-4 md:mt-0'
                        label='apply coupon'
                    
                    />

                </div>
                <div>
                <Link to={'/Shop'}>
                    <Button
                     className='btn bg-textc text-white uppercase mt-4 md:mt-0'
                        label='UPDATE CART'
                    />
                    </Link>
                </div>
            </div>
            <div className='w-full flex flex-col md:items-end mt-[10px]'>
                <div className='text-start md:w-[40%] lg:w-[20%] font-custom font-bold text-[1.4rem] text-boldtext'>
                    <h1>CART TOTAL</h1>
                </div>
                <div className='min-h-[100px] md:w-[40%] lg:w-[20%]'>
                    <div className='flex justify-between border-black border-[1px] font-custom font-semibold text-[1.2rem]'>
                        <h1 className='font-medium'>subtotal</h1>
                        <h1>
                        <span className=' flex justify-center items-center'><TbCurrencyNaira />{cartTotal.toFixed(2)}</span>
                        </h1>
                    </div>
                    <div className='flex justify-between border-black border-[1px] font-custom font-semibold'>
                        <h1>Total</h1>
                        <h1>
                        <span className=' flex justify-center items-center'><TbCurrencyNaira />{cartTotal.toFixed(2)}</span>
                        </h1>
                    </div>
                </div>
                <div>
                    <Link to="/checkout" 
                        state={{ cart, cartTotal }}> 
                    <Button
                        label='PROCEED TO CHECKOUT'
                        className='btn bg-textc font-custom text-[1.1rem] text-white'
                    />
                    
                    </Link>
                </div>
            </div>

        </div>

    </div>
  )
}

export default CartComponent3
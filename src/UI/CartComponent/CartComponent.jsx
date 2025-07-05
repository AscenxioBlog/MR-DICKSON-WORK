import React from 'react'
import CartComponent1 from './CartComponent1'
import CartComponent2 from './CartComponent2'

function CartComponent() {
  return (
    <div className='mt-[0px] overflow-x-hidden  bg-white'>
        <CartComponent1/>
        <CartComponent2/>

    </div>
  )
}

export default CartComponent
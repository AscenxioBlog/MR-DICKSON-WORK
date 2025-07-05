import React from 'react'
import CheckoutComponent1 from './CheckoutComponent1'
import CheckoutComponent2 from './CheckoutComponent2'

function CheckoutComponent() {
  return (
    <div className='mt-[110px] bg-bodybg dark:text-black'>
      <CheckoutComponent1/>
      <CheckoutComponent2/>
    </div>
  )
}

export default CheckoutComponent
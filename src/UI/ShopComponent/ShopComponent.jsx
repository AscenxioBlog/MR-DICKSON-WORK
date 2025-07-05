import React from 'react'
import ShopComponent1 from './ShopComponent1'
import ShopComponent2 from './ShopComponent2'
import ShopData from './ShopData'

function ShopComponent() {
  return (
    <div className='mt-[0px] bg-white'>
      <ShopComponent1/>
      {/* <ShopComponent2/> */}
      <ShopData/>
    </div>
  )
}

export default ShopComponent
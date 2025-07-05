import React, { useContext } from 'react';

import ProductRowDisplay from './ProductRowDisplay';
import { productsBox } from './ProductContext';

function Row2() {
  let {newArrivals} = useContext(productsBox)

  return (
   
    <>
      <div className=' flex justify-center bg-white'>
        <div className=" w-[95%] md:w-[90%] min-h-[50vh] relative pb-2 text-gray-500">
          <ProductRowDisplay products={newArrivals} textDeal="New Arrivals "/>
        </div>
      </div>
    </>
    
  );
}

export default Row2;
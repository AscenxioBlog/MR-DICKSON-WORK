import React from 'react'
import HomeComponent1 from './HomeComponent1'
import HomeComponent2 from './HomeComponent2'
import HomeComponent3 from './HomeComponent3'
import HomeComponent4 from './HomeComponent4'
import HomeComponent5 from './HomeComponent5'
import HomeComponent6 from './HomeComponent6'
import HomeComponent7 from './HomeComponent7'
import HomeComponent8 from './HomeComponent8'
import HomeComponent9 from './HomeComponent9'
import HomeComponent10 from './HomeComponent10'
import HomeComponent11 from './HomeComponent11'
import HomeComponent12 from './HomeComponent12'
import HomeComponent13 from './HomeComponent13'
import HomeComponent14 from './HomeComponent14'
import HomeComponent114 from './HomeComponent114'
import HomeComponent15 from './HomeComponent15'
import HomeComponent16 from './HomeComponent16'
import Row2 from './Row2'
import Row3 from './Row3'
import Row4 from './Row4'
import ProductContext from './ProductContext'
import Row5 from './Row5'

function HomeComponent() {
  return (
    <div className='  overflow-x-hidden '>
        <HomeComponent2/>
        <HomeComponent16/>
        <ProductContext>
          <Row2/>
          <Row3/>
          <Row4/>
        </ProductContext>
        <HomeComponent15/>
        <Row5/>
        

    </div>
  )
}

export default HomeComponent
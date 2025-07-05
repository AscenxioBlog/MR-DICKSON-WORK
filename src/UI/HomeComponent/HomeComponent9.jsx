import React from 'react'
import Slider from 'react-slick/lib/slider'
import brand from './HomePictures/brand.png'
import brand2 from './HomePictures/brand2.png'
import brand3 from './HomePictures/brand-03.png'
import brand4 from './HomePictures/brand-04.png'
import brand5 from './HomePictures/brand-05.png'

function HomeComponent9() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 200,
        autoplaySpeed: 3000,
        cssEase: "linear"
    }
  return (
    <div>
             <div className=" p-[10px] hidden md:block w-[90%]  translate-x-10 lg:translate-x-14">
                <Slider {...settings}>
                    <div className='min-h-[100px] flex items-end justify-end  mt-3'>
                        <img src={brand} width='100%' height='100%' alt="" />
                    </div>
                    <div  className='min-h-[100px] flex items-center justify-center'>
                     <img src={brand2} width='100%' height='100%' alt="" />

                    </div>
                    <div className='min-h-[100px] flex items-center justify-center '>
                    <img src={brand3} width='100%' height='100%' alt="" />
                        
                    </div>
                    <div  className='min-h-[100px] flex items-center justify-center '>
                    <img src={brand4} width='100%' height='100%' alt="" />
                        
                   </div>
                    <div className='min-h-[100px] flex items-center justify-center '>
                    <img src={brand5} width='100%' height='100%' alt="" />

                    </div>
                </Slider>
            </div>
    </div>
  )
}

export default HomeComponent9
import React from 'react'
import Slider from 'react-slick'
import team1 from './HomePictures/team1.png'
import team2 from './HomePictures/team2.png'
import team3 from './HomePictures/team3.png'
import team4 from './HomePictures/team4.png'

function HomeComponent12() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 200,
        autoplaySpeed: 3000,
        cssEase: "linear"
    
      };
  return (
    <div className='min-h-[100px] w-full hidden md:block lg:hidden '>
    <div className="slider-container p-[20px] box-border w-[99%]  ">
        <Slider {...settings}>
            <div className='p-5'>
                <div className='flex items-center'>
                     <img src={team1} width='100%' height='100%' alt="" />

                </div>
                <div className='text-center'>
                    <h1 className='text-boldtext text-2xl font-custom font-extrabold'>Savannah Nguyen</h1>
                    <h1 className='text-textc text-2xl font-custom font-extrabold'>MICROBIOLOGIST EXPERT</h1>
                </div>
            </div>
            <div className='p-5'>
                <div>
                    <img src={team2} width='100%' height='100%' alt="" />
                </div>
                <div className='text-center'>
                    <h1 className='text-boldtext text-2xl font-custom font-extrabold'>Darlene Robertson</h1>
                    <h1 className='text-textc text-2xl font-custom font-extrabold'>GENETIC SPECIALIST</h1>
                </div>
            </div>
             <div className='p-5'>
                <div>
                    <img src={team3} width='100%' height='100%' alt="" />
                </div>
                <div className='text-center'>
                    <h1 className='text-boldtext text-2xl font-custom font-extrabold'>Marvin McKinney</h1>
                    <h1 className='text-textc text-2xl font-custom font-extrabold'>MEDICAL DOCTOR</h1>
                </div>
            </div>
            <div className='p-5'>
                <div>
                    <img src={team4} width='100%' height='100%' alt="" />
                </div>
                <div className='text-center'>
                    <h1 className='text-boldtext text-2xl font-custom font-extrabold'>Cameron Williamson</h1>
                    <h1 className='text-textc text-2xl font-custom font-extrabold'>GENETIC SPECIALIST</h1>
                </div>
            </div>
          
           
        </Slider>
    </div>

</div>
  )
}

export default HomeComponent12
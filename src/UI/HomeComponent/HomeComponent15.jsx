import React, { useState } from 'react';
import test1 from './HomePictures/test1.png';
import test2 from './HomePictures/testi2.png';
import test3 from './HomePictures/testi3.png';
import test4 from './HomePictures/testi4.png';
import Button from '../../ReusableComponent/Button';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function HomeComponent15() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
    
  const slides = [
    {
      img: test1,
      name: 'Kathryn Murphy',
      text: 'WilconLab is another theme that is beautiful and professionally constructed by the developers. The price for the template is cheap but not the quality of the product. What a bargain. This theme works for many types of websites and seems to be durable. Does not break and its easy to work with.',
    },
    {
      img: test2,
      name: 'Darlene Robertson',
      text: 'Accon scientific / lab equipment is another theme that is beautiful and professionally constructed by the developers. The price for the template is cheap but not the quality of the product. What a bargain. This theme works for many types of websites and seems to be durable. Does not break and its easy to work with.',
    },
    {
      img: test3,
      name: 'Courtney Henry',
      text: 'Accon scientific / lab equipment is another theme that is beautiful and professionally constructed by the developers. The price for the template is cheap but not the quality of the product. What a bargain. This theme works for many types of websites and seems to be durable. Does not break and its easy to work with.',
    },
    {
      img: test4,
      name: 'Robertson JR',
      text: 'Accon scientific / lab equipment is another theme that is beautiful and professionally constructed by the developers. The price for the template is cheap but not the quality of the product. What a bargain. This theme works for many types of websites and seems to be durable. Does not break and its easy to work with.',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };
  
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className='min-h-[100px] bg-textc w-full hidden md:block relative'>
      <div className="h-[150px] w-full  flex gap-4 justify-center items-center">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`h-[130px] w-[130px]  rounded-[50%] overflow-hidden cursor-pointer ${
              currentSlide === index ? 'ring-4 ring-bodybg' : ''
            }`}
            onClick={() => goToSlide(index)}
          >
            <img src={slide.img} alt={slide.name} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      <div className="min-h-[250px] w-[70%] translate-x-[115px] lg:translate-x-[190px] overflow-hidden relative ">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="min-h-[300px] w-full flex-shrink-0  text-center flex flex-col justify-center"
              >
                <div className='min-h-[200px] font-custom text-bodybg text-[20px]  flex items-center '>
                    <p>{slide.text}</p>

                </div>
                <div className='min-h-[100px]  '>
                  <h1 className="text-[30px] font-semibold font-custom text-boldtext mt-3"> {slide.name}</h1>

                </div>
              </div>
            ))}
          </div>
        </div>

      <div className=''>
        <Button
          className="h-[60px] w-[60px] btn btn-success rounded-[50%] absolute top-[260px] right-[10px] text-bodybg text-4xl flex items-center justify-center bg-textc hover:bg-bodybg hover:text-textc border-[2px] border-[white]"
          label={<FaArrowRight />}
          onClick={nextSlide}
        />
        <Button
          className="h-[60px] w-[60px] btn btn-success rounded-[50%] absolute top-[260px] left-[20px] text-bodybg text-4xl flex items-center justify-center bg-textc hover:bg-bodybg hover:text-textc border-[2px] border-[white]"
          label={<FaArrowLeft />}
          onClick={prevSlide}
        />
      </div>
    </div>
  );
}

export default HomeComponent15;

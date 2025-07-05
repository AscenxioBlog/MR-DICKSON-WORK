import React, { useState } from 'react';
import test1 from './HomePictures/test1.png';
import test2 from './HomePictures/testi2.png';
import test3 from './HomePictures/testi3.png';
import test4 from './HomePictures/testi4.png';
import Button from '../../ReusableComponent/Button';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

function HomeComponent114() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSliding, setIsSliding] = useState(false); // New state for sliding animation

  const slides = [
    {
      img: test1,
      name: 'Kathryn Murphy',
      text: 'WilconLab is another theme that is beautiful and professionally constructed by the developers. The price for the template is cheap but not the quality of the product. What a bargain. This theme works for many types of websites and seems to be durable. Does not break and its easy to work with.',
    },
    {
      img: test2,
      name: 'Darlene Robertson',
      text: 'WilconLab is another theme that is beautiful and professionally constructed by the developers. The price for the template is cheap but not the quality of the product. What a bargain. This theme works for many types of websites and seems to be durable. Does not break and its easy to work with.',
    },
    {
      img: test3,
      name: 'Courtney Henry',
      text: 'WilconLab is another theme that is beautiful and professionally constructed by the developers. The price for the template is cheap but not the quality of the product. What a bargain. This theme works for many types of websites and seems to be durable. Does not break and its easy to work with.',
    },
    {
      img: test4,
      name: 'Robertson JR',
      text: 'WilconLab is another theme that is beautiful and professionally constructed by the developers. The price for the template is cheap but not the quality of the product. What a bargain. This theme works for many types of websites and seems to be durable. Does not break and its easy to work with.',
    },
  ];

  const nextSlide = () => {
    setIsSliding(true); // Trigger slide animation
    setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      setIsSliding(false); // End slide animation after transition
    }, 200); // Adjust timeout to match the transition duration
  };

  const prevSlide = () => {
    setIsSliding(true); // Trigger slide animation
    setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
      setIsSliding(false); // End slide animation after transition
    }, 200); // Adjust timeout to match the transition duration
  };

  return (
    <div className='min-h-[100px] bg-textc w-full md:hidden'>
      {/* Display current image */}
      <div className="min-h-[100px]  flex justify-center overflow-hidden">
        <div className="h-[130px]  rounded-[50%] overflow-hidden mt-3">
          <img
            src={slides[currentSlide].img}
            alt={slides[currentSlide].name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Display text content and name with slide transition */}
      <div className="min-h-[330px] md:min-h-[250px] w-full bg-textc m text-center relative">
        <div
          className={`min-h-[100px] mt-[40px] w-full flex-shrink-0  text-center flex flex-col justify-center transition-transform duration-500 ease-in-out transform ${
            isSliding ? 'translate-x-[100%]' : 'translate-x-0'
          }`}
          key={currentSlide}
        >
          {/* Text with sliding effect */}
          <div className="min-h-[100px] bg-textc text-bodybg font-custom font-light text-[15px]  p-[20px]">
            <p className="transition-all duration-500 ease-in-out">{slides[currentSlide].text}</p>
          </div>

          {/* Name with sliding effect */}
          <div className="min-h-[10px] mb-3 ">
            <h1 className="text-[30px] font-semibold mt-1 font-custom text-boldtext">{` ${slides[currentSlide].name}`}</h1>
          </div>
        </div>

        {/* Navigation buttons */}
        <Button
          className="h-[60px] w-[60px] btn btn-success rounded-[50%] absolute left-[100px] text-bodybg text-4xl flex items-center justify-center bg-textc hover:bg-bodybg hover:text-textc  border-[2px] border-[white] "
          label={<FaArrowLeft />}
          onClick={prevSlide}
        />
        <Button
          className="h-[60px] w-[60px] btn btn-success rounded-[50%] absolute right-[100px] text-bodybg text-4xl flex items-center justify-center bg-textc hover:bg-bodybg hover:text-textc border-[2px] border-[white] "
          label={<FaArrowRight />}
          onClick={nextSlide}
        />
      </div>
    </div>
  );
}

export default HomeComponent114;


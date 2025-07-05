import React, { useState } from 'react';
import test1 from './HomePictures/test1.png';
import test2 from './HomePictures/testi2.png';
import test3 from './HomePictures/testi3.png';
import test4 from './HomePictures/testi4.png';
import Button from '../../ReusableComponent/Button';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";


function HomeComponent14() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      img: test1,
      name: 'boy1',
      text: 'Bioxlab is another theme that is beautiful and professionally constructed by the developers. The price for the template is cheap but not the quality of the product. What a bargain. This theme works for many types of web sites and seems to be durable. Does not break and its easy to work with.',
    },
    {
      img: test2,
      name: 'boy2',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, inventore reiciendis...',
    },
    {
      img: test3,
      name: 'boy3',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, inventore reiciendis...',
    },
    {
      img: test4,
      name: 'boy4',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, inventore reiciendis...',
    },
    {
      img: test3,
      name: 'boy5',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, inventore reiciendis...',
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
    <div className="relative w-full overflow-hidden  hidden md:block">
      {/* Thumbnails */}
      <div className="h-[150px] w-full bg-[green] flex gap-4 justify-center items-center">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`h-[130px] w-[130px] bg-yellow-200 rounded-[50%] overflow-hidden cursor-pointer ${
              currentSlide === index ? 'ring-4 ring-blue-500' : ''
            }`}
            onClick={() => goToSlide(index)}
          >
            <img src={slide.img} alt={slide.name} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* Slide content */}
      <div className="relative min-h-[350px] w-full bg-pink-900 flex justify-center items-center">
        <button
          onClick={prevSlide}
          className="h-[40px] w-[60px] bg-[orange] rounded-[10px] absolute left-[30px]"
        >
          Prev
        </button>
        <Button  
          onClick={nextSlide}
          className="h-[60px] w-[60px] btn btn-success rounded-[50%] absolute top-[200px] right-[10px] text-bodybg text-4xl flex items-center justify-center bg-textc hover:bg-bodybg hover:text-textc border-[2px] border-[white]"
          label={<FaArrowRight />}
            
            
        />
     

        <div className="min-h-[250px] w-[60%] overflow-hidden relative">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="min-h-[300px] w-full flex-shrink-0 bg-green-300 text-center flex flex-col justify-center"
              >
                <div className='min-h-[200px] w-full bg-yellow-300 flex items-center '>
                    <p>{slide.text}</p>

                </div>
                <div className='min-h-[100px] bg-blue-900 '>
                  <h1 className="text-[30px] font-semibold mt-3">Name: {slide.name}</h1>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent14;

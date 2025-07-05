// HeroSection.tsx
import React from 'react';

const HeroSection = () => {
  return (
    <section className="w-full bg-[#f3f7fa] py-8 px-4 lg:px-16">
      <div className="flex flex-col lg:flex-row gap-6 min-h-[70vh] items-center lg:items-start ">
        <div className=' flex-1 flex-col h-[80vh] shadow-md text-black'>
          <div className=' h-[85%]'>
              <img src="/images/Slide 1.png" className=' h-full rounded-tl-md rounded-tr-md w-full object-cover'/>
          </div>
          <div className=' md:h-[15%] h-[30%] bg-white rounded-bl-md rounded-br-md'>
              <ol className=' flex justify-around h-full items-center'>
                  <li>Education</li>
                  <li>Surgical</li>
                  <li>Biolody</li>
                  <li>Chemistry</li>
                  <li>Physics</li>
              </ol>
          </div>
        </div>  

        {/* Right Side Cards */}
        <div className="lg:w-[15%] grid gap-4 ">
          {[
            { title: 'Hospital Store', img: 'hospital.jpeg' },
            { title: 'Chemistry Store', img: 'chemistry.jpeg' },
            { title: 'Best Biology Products', img: 'biology.jpeg' },
          ].map((card, index) => (
            <div
              key={index}
              className=" shadow-md rounded overflow-hidden text-center hover:shadow-lg transition"
            >
              <img src={card.img} alt={card.title} className="w-full h-[90px] object-cover" />
              <p className="py-2 font-semibold text-sm text-gray-500">{card.title}</p>
              <p className="text-blue-600 text-xs mb-2">SHOP NOW</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

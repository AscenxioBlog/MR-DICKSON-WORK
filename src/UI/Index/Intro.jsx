import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Intro() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });
  }, []);

  const categories = [
    { name: 'Sneakers', icon: '' },
    { name: 'Boots', icon: '' },
    { name: 'Chealsea Boots', icon: '' },
    { name: 'Brogues', icon: '' },
    { name: 'Sandals', icon: '' },
    { name: 'Oxfors Shoe', icon: '' }
  ];

  const sliderItems = [
    {
      image: '/images/slide-1.jpg',
      title: 'MID-YEAR SALE',
      subtitle: 'Everything must go',
      discount: 'UP TO 65% OFF',
      bgGradient: 'from-[#ff4d4d] to-[#f9cb28]'
    }
  ];

  const featureCards = [
    { 
      title: 'Entertainment', 
      img: 'hospital.jpeg',
      color: 'bg-gradient-to-br from-purple-500 to-pink-500'
    },
    { 
      title: 'TV & Audio', 
      img: 'chemistry.jpeg',
      color: 'bg-gradient-to-br from-blue-500 to-cyan-400'
    },
    { 
      title: 'Fresh Finds', 
      img: 'biology.jpeg',
      color: 'bg-gradient-to-br from-green-500 to-teal-400'
    },
    { 
      title: 'Smartphones', 
      img: 'chemistry.jpeg',
      color: 'bg-gradient-to-br from-red-500 to-orange-400'
    },
    { 
      title: 'Hot Deals', 
      img: 'hospital.jpeg',
      color: 'bg-gradient-to-br from-yellow-500 to-amber-400'
    },
    { 
      title: 'Appliances', 
      img: 'biology.jpeg',
      color: 'bg-gradient-to-br from-indigo-500 to-violet-400'
    },
  ];

  return (
    <div className="md:mt-[110px] mt-[150px] w-full px-4 sm:px-6 lg:px-8 max-w-[1800px] mx-auto">
      <div className="relative">
        {/* Compact Categories Panel */}
        <div 
          className="hidden md:block absolute top-0 left-0 h-full w-[200px] bg-white shadow-lg z-10 rounded-r-lg overflow-hidden"
          data-aos="fade-right"
        >
          <div className="p-4 h-full">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span></span> Categories
            </h3>
            <ul className="space-y-2">
              {categories.map((cat, idx) => (
                <li 
                  key={idx} 
                  className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 cursor-pointer transition-all text-sm"
                >
                  <span className="text-xl">{cat.icon}</span>
                  <span className="font-medium text-gray-700">{cat.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="md:ml-[200px]">
          {/* Compact Hero Banner */}
          <div 
            className={`bg-gradient-to-r ${sliderItems[0].bgGradient} flex flex-col md:flex-row items-center justify-between p-6 rounded-xl mb-4`}
            data-aos="zoom-in"
          >
            <div className="md:w-1/2 text-center md:text-left mb-4 md:mb-0">
              <div className="inline-block px-3 py-1 bg-black/20 backdrop-blur-sm rounded-full mb-3 text-xs">
                LIMITED TIME
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {sliderItems[0].title}
              </h2>
              <p className="text-white/90 mb-3">{sliderItems[0].subtitle}</p>
              <div className="text-3xl md:text-4xl font-black text-white mb-4">
                {sliderItems[0].discount}
              </div>
              <button className="px-6 py-2 bg-black text-white rounded-full font-bold text-sm hover:bg-white hover:text-black transition-all">
                SHOP NOW
              </button>
            </div>
            
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-[180px] h-[180px] md:w-[220px] md:h-[220px]">
                <img 
                  src="/images/slide-1.jpg" 
                  alt="Clearance" 
                  className="w-full h-full object-contain" 
                />
              </div>
            </div>
          </div>

          {/* Compact Feature Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {featureCards.map((card, index) => (
              <div
                key={index}
                className={`${card.color} rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all h-32 relative`}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover mix-blend-overlay opacity-70"
                />
                <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
                  <h3 className="text-white font-bold text-sm drop-shadow-md">{card.title}</h3>
                </div>
                <div className="absolute top-1 right-1 text-xl">
                  {/* {['🔥','💎','🆕','👍','🎉','✨'][index]} */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
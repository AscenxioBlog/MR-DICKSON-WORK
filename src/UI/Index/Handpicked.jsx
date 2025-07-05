import React from 'react';
import { FreeShippingOrder } from '../../../Resources/Handpicked';
import { handPicked } from '../../../Resources/Handpicked';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Virtual, Navigation } from 'swiper/modules';
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { LiaTruckMovingSolid } from "react-icons/lia";
import { FaRecycle } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';

function Handpicked() {

  // Icon map to dynamically render icons based on string keys
  const iconMap = {
    LiaTruckMovingSolid: LiaTruckMovingSolid,
    IoCallOutline: IoCallOutline,
    FaRecycle: FaRecycle,
    FaMoneyCheckDollar: FaMoneyCheckDollar ,
  };

  return (
    <div className="w-full  py-12">
      {/* Title Section */}
      <div className="flex justify-between font-bold rounded p-3 gap-2 bg-[#B6B09F] ">
        <h1 className="lg:text-2xl">Handpicked for you | Up to 50% Off</h1>  
        <Link className='flex gap-2'>See All <span className='mt-[3px]'><FaLongArrowAltRight /></span></Link>
        {/* <div className="h-[3px] w-40 bg-[#FF496C] rounded"></div> */}
      </div>
     

     {/* Main Section
      <div className="lg:min-h-[75vh] lg:bg-[#FAFAFA] mt-5 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
    
        <div className="text-center hidden lg:inline-block lg:text-left max-w-xl">
          <p className="text-sm text-[#FF496C] uppercase tracking-wide">Deal of the day</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2">
            Shop Your Flower <br />
            <span>Best Offer - 50%</span>
          </h1>
        </div>

  
        <div className="w-full max-w-[700px] relative">
          Custom Navigation Buttons
          <button className="custom-prev absolute left-[-30px] top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button className="custom-next absolute right-[-30px] top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <Swiper
            modules={[Pagination, Virtual, Navigation, Autoplay]}
            spaceBetween={20}
            autoplay={{ delay: 3000 }}
            loop={false} 
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }}
            virtual
            breakpoints={{
              320: { slidesPerView: 2 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {handPicked.map((item, index) => (
              <SwiperSlide key={item.id} virtualIndex={index}>
                <Link
                  to={`/product/${item.id}`}
                  className="h-[330px] w-full border border-gray-200 p-4 flex flex-col items-center rounded shadow-sm"
                >
                  <img
                    src={item.image}
                    alt={item.description}
                    className="w-full h-40 object-cover mb-4"
                  />
                  <p className="text-gray-600 text-center text-sm line-clamp-2 mt-2">
                    {item.description}
                  </p>
                  <p className="text-xl font-bold text-gray-800 mt-auto"># {item.price}</p>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div> */}

    <div className="w-full relative">
          {/* Custom Navigation Buttons */}
          <button className="custom-prev absolute left-[-5px] top-1/2 transform -translate-y-1/2 z-10 bg-gray-200 p-2 rounded-full shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button className="custom-next absolute right-[-5px] top-1/2 transform -translate-y-1/2 z-10 bg-gray-200 p-2 rounded-full shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <Swiper
            modules={[Pagination, Virtual, Navigation, Autoplay]}
            spaceBetween={20}
            autoplay={{ delay: 3000 }}
            loop={false} 
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }}
            virtual
            breakpoints={{
              320: { slidesPerView: 2 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 5 },
            }}
          >
            {handPicked.map((item, index) => (
              <SwiperSlide key={item.id} virtualIndex={index}>
                <Link
                  to={`/product/${item.id}`}
                  className="h-[300px] mt-2 w-full border border-gray-200 p-4 flex flex-col items-center rounded shadow-sm"
                >
                  <img
                    src={item.image}
                    alt={item.description}
                    className="w-full h-40 object-cover mb-4"
                  />
                  <p className="text-gray-600 text-center text-sm line-clamp-2 mt-2">
                    {item.description}
                  </p>
                  <p className="text-xl font-bold text-gray-800 mt-auto">₦ {item.price}</p>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>


        
      {/* Free Shipping / Services Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
        {FreeShippingOrder.map((item) => {
          const IconComponent = iconMap[item.icon]; 
          return (
            <div
              key={item.id}
              className="border border-gray-200 flex justify-center items-center space-x-3 rounded bg-white"
            >
              <span className="text-3xl text-[#FF496C]">
                {IconComponent && <IconComponent />}
              </span>
              <div>
              <strong className="text-gray-600 text-center mt-3">{item.description}</strong>
              <p className=" font-bold text-black-600">{item.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Handpicked;

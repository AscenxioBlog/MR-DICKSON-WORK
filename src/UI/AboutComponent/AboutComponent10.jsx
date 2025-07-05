import React from 'react'
import Slider from "react-slick";
import team1 from './AboutPictures/team1.jpg'
import team2 from './AboutPictures/team2.jpg'
import team3 from './AboutPictures/team3.jpg'
import team4 from './AboutPictures/team4.jpg'
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";

function AboutComponent10() {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };
  return (
    <div>
    <div className='min-h-[700px] w-full aboutbg hidden md:hidden lg:block   p-[20px] '>
        <div className='min-h-[160px] flex flex-col justify-end p-[10px]'>
            <h1 className='font-custom text-textc font-semibold text-[1.5rem] flex before:h-[4px] before:w-[30px] gap-1 before:bg-textc items-center'>OUR TEAM</h1>
            <h1 className='font-custom text-boldtext font-semibold text-[2rem]'>Meet Specialist</h1>
        </div>
            <div className="slider-container">
                <Slider {...settings}>
                    <div className='p-[10px] box-border'>
                        <div className="card bg-base-100 w-96 shadow-xl">
                            <figure>
                                <img
                                src={team1}
                                loading='lazy'
                                className='hover:scale-110 transition-transform duration-500 ease-in-out'
                                alt="teampicture" />
                            </figure>
                            <div className="card-body">
                                <h1 className="card-title font-custom text-boldtext text-[1.5rem] font-semibold ">Cameron Williamson</h1>
                                <h1 className='text-textc cursor-pointer font-custom font-medium'>GENETIC SPECIALIST</h1>
                                <p className='font-custom font-normal text-[1.2rem]'>Providing insight-driven transformation to investment banks, wealth and asset mana, exchanges,Finance</p>
                                <div className="card-actions flex gap-5 ">
                                    <div className='min-h-[50px] w-[50px] rounded-[50%] group hover:bg-red-600 flex items-center justify-center '>
                                        <a href="#"><FaYoutube className='text-red-600 group-hover:text-white' /></a>
                                    </div>
                                    <div className='min-h-[50px] w-[50px] rounded-[50%] group hover:bg-blue-600 flex items-center justify-center'>
                                        <a href="#"><FaTwitter className='text-blue-600 group-hover:text-white' /></a>
                                    </div>
                                    <div className='min-h-[50px] w-[50px] rounded-[50%] group hover:bg-blue-600 flex items-center justify-center'>
                                        <a href="#"><FaFacebook className='text-blue-600 group-hover:text-white' /></a>
                                    </div>
                                    <div className='min-h-[50px] w-[50px] rounded-[50%] group hover:bg-textc flex items-center justify-center'>
                                        <a href="#"><FaSkype className='text-textc group-hover:text-white' /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card bg-base-100 w-96 shadow-xl">
                            <figure>
                                <img
                                src={team2}
                                loading='auto'
                                className='hover:scale-110 transition-transform duration-500 ease-in-out'
                                alt="teampicture"/>
                            </figure>
                            <div className="card-body">
                                <h1 className="card-title font-custom text-boldtext text-[1.5rem] font-semibold ">Savannah Nguyen</h1>
                                <h1 className='text-textc cursor-pointer font-custom font-medium'>NEURO SPECIALIST</h1>
                                <p className='font-custom font-normal text-[1.2rem]'>Providing insight-driven transformation to investment banks, wealth and asset mana, exchanges,Finance</p>
                                <div className="card-actions flex gap-5 ">
                                    <div className='min-h-[50px] w-[50px] rounded-[50%] group hover:bg-red-600 flex items-center justify-center '>
                                        <a href="#"><FaYoutube className='text-red-600 group-hover:text-white' /></a>
                                    </div>
                                    <div className='min-h-[50px] w-[50px] rounded-[50%] group hover:bg-blue-600 flex items-center justify-center'>
                                        <a href="#"><FaTwitter className='text-blue-600 group-hover:text-white' /></a>
                                    </div>
                                    <div className='min-h-[50px] w-[50px] rounded-[50%] group hover:bg-blue-600 flex items-center justify-center'>
                                        <a href="#"><FaFacebook className='text-blue-600 group-hover:text-white' /></a>
                                    </div>
                                    <div className='min-h-[50px] w-[50px] rounded-[50%] group hover:bg-textc flex items-center justify-center'>
                                        <a href="#"><FaSkype className='text-textc group-hover:text-white' /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div>
                         <div className="card bg-base-100 w-96 shadow-xl">
                            <figure>
                                <img 
                                src={team3}
                                loading='auto'
                                className='hover:scale-110 transition-transform duration-500 ease-in-out'
                                alt="teampicture" />
                            </figure>
                            <div className="card-body">
                                <h1 className="card-title font-custom text-boldtext text-[1.5rem] font-semibold ">Darlene Robertson</h1>
                                <h1 className='text-textc cursor-pointer font-custom font-medium'>GYNECOLOGY SPECIALIST</h1>
                                <p className='font-custom font-normal text-[1.2rem]'>Providing insight-driven transformation to investment banks, wealth and asset mana, exchanges,Finance</p>
                                <div className="card-actions flex gap-5 ">
                                    <div className='min-h-[50px] w-[50px] rounded-[50%] group hover:bg-red-600 flex items-center justify-center '>
                                        <a href="#"><FaYoutube className='text-red-600 group-hover:text-white' /></a>
                                    </div>
                                    <div className= 'min-h-[50px] w-[50px] rounded-[50%] group hover:bg-blue-600 flex items-center justify-center'>
                                        <a href="#"><FaTwitter className='text-blue-600 group-hover:text-white' /></a>
                                    </div>
                                    <div className='min-h-[50px] w-[50px] rounded-[50%] group hover:bg-blue-600 flex items-center justify-center'>
                                        <a href="#"><FaFacebook className='text-blue-600 group-hover:text-white' /></a>
                                    </div>
                                    <div className='min-h-[50px] w-[50px] rounded-[50%] group hover:bg-textc flex items-center justify-center'>
                                        <a href="#"><FaSkype className='text-textc group-hover:text-white' /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card bg-base-100 w-96 shadow-xl">
                            <figure>
                                <img
                                src={team4}
                                loading='auto'
                                className='hover:scale-110 transition-transform duration-500 ease-in-out'
                                alt="teampicture" />
                            </figure>
                            <div className="card-body">
                                <h1 className="card-title font-custom text-boldtext text-[1.5rem] font-semibold ">Jhon Methweu</h1>
                                <h1 className='text-textc cursor-pointer font-custom font-medium'>PEDIATRIC SPECIALIST</h1>
                                <p className='font-custom font-normal text-[1.2rem]'>Providing insight-driven transformation to investment banks, wealth and asset mana, exchanges,Finance</p>
                                <div className="card-actions flex gap-5 ">
                                    <div className='min-h-[50px] w-[50px] rounded-[50%] group hover:bg-red-600 flex items-center justify-center '>
                                        <a href="#"><FaYoutube className='text-red-600 group-hover:text-white' /></a>
                                    </div>
                                    <div className='min-h-[50px] w-[50px] rounded-[50%] group hover:bg-blue-600 flex items-center justify-center'>
                                        <a href="#"><FaTwitter className='text-blue-600 group-hover:text-white' /></a>
                                    </div>
                                    <div className='min-h-[50px] w-[50px] rounded-[50%] group hover:bg-blue-600 flex items-center justify-center'>
                                        <a href="#"><FaFacebook className='text-blue-600 group-hover:text-white' /></a>
                                    </div>
                                    <div className='min-h-[50px] w-[50px] rounded-[50%] group hover:bg-textc flex items-center justify-center'>
                                        <a href="#"><FaSkype className='text-textc group-hover:text-white' /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
             
                    
                </Slider>
        </div>

    </div>
</div>
  )
}

export default AboutComponent10
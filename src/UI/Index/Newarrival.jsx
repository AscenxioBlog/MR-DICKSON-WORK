import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { CartContext } from '../../ReusableComponent/CartContext';
import { FaEye } from "react-icons/fa";
import API_URL from '../../Config';

function Newarrival() {
    const { addToCart } = useContext(CartContext);
    const [productData, setProductData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${API_URL}/product`, {
                    method: "GET",
                    credentials: "include",
                });
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const data = await response.json();
                setProductData(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching products:", error);
                setLoading(false);
            }
        };
        
        fetchProducts();
    }, []);

    const handleAddToCart = (product) => {
        addToCart(product, (addedItem) => {
            setAlertMessage(`${addedItem.productName} added to cart!`);
            setShowAlert(true);
            setTimeout(() => setShowAlert(false), 3000);
        });
    };

    // Loading Skeleton Component
    const LoadingSkeleton = () => (
        <Swiper
            loop={true}
            modules={[Autoplay]}
            breakpoints={{
                320: { slidesPerView: 2, spaceBetween: 10 },
                640: { slidesPerView: 2, spaceBetween: 15 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 4, spaceBetween: 25 },
                1280: { slidesPerView: 5, spaceBetween: 30 },
            }}
            className="mySwiper"
        >
            {[...Array(5)].map((_, index) => (
                <SwiperSlide key={index}>
                    <div className="border border-gray-200 p-2 flex flex-col items-center rounded shadow-sm bg-white h-[250px] overflow-hidden">
                        {/* Image Skeleton */}
                        <div className="h-[120px] w-full mb-2 bg-gray-200 rounded animate-pulse"></div>
                        
                        {/* Text Skeleton */}
                        <div className="w-full flex-1 flex flex-col justify-between">
                            <div>
                                <div className="h-4 bg-gray-200 rounded-full animate-pulse mb-2 w-3/4 mx-auto"></div>
                                <div className="h-4 bg-gray-200 rounded-full animate-pulse mb-2 w-1/2 mx-auto"></div>
                                <div className="h-6 bg-gray-200 rounded-full animate-pulse w-1/3 mx-auto mt-2"></div>
                            </div>
                            
                            {/* Button Skeletons */}
                            <div className="flex gap-2 mt-2 w-full justify-center">
                                <div className="flex-1 h-8 bg-gray-200 rounded animate-pulse"></div>
                                <div className="flex-1 h-8 bg-gray-200 rounded animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );

    return (
        <div className="">
            {/* Alert Notification */}
            {showAlert && (
                <div className="fixed top-20 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50 animate-fade-in">
                    {alertMessage}
                </div>
            )}

            {/* Title Section */}
            <div className="flex gap-2 flex-col mt-8">
                <h1 className="text-3xl font-bold">New Arrival</h1>
                <div className="h-[3px] w-25 rounded bg-[#FF496C]"></div>
            </div>

            {/* Responsive Swiper Slider */}
            <div className="mt-6">
                {loading ? (
                    <LoadingSkeleton />
                ) : (
                    <Swiper
                        loop={true}
                        autoplay={{
                            delay: 2900,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        breakpoints={{
                            320: { slidesPerView: 2, spaceBetween: 10 },
                            640: { slidesPerView: 2, spaceBetween: 15 },
                            768: { slidesPerView: 2, spaceBetween: 20 },
                            1024: { slidesPerView: 4, spaceBetween: 25 },
                            1280: { slidesPerView: 5, spaceBetween: 30 },
                        }}
                        className="mySwiper"
                    >
                        {productData.map((item) => (
                            <SwiperSlide key={item._id}>
                                <div className="border h-[250px] border-sky-500 p-2 flex flex-col items-center rounded shadow-sm bg-white hover:shadow-md transition-shadow overflow-hidden">
                                    {/* Image container with fixed height */}
                                    <div className="h-[120px] w-full flex items-center justify-center mb-2">
                                        <img
                                                src={item.images[0]}
                                                alt={item.name}
                                                className="h-full w-auto object-contain"
                                            />
                                    </div>
                                    
                                    {/* Product info with constrained height */}
                                    <div className="w-full flex-1 flex flex-col justify-between">
                                        <div>
                                            <p className="text-gray-600 text-center line-clamp-2 text-sm leading-tight">
                                                {item.productName}
                                            </p>
                                            <p className="text-lg font-bold text-black mt-1 text-center">₦ {item.price}</p>
                                        </div>
                                        
                                        {/* Buttons with compact styling */}
                                        <div className="flex gap-2 mt-2 w-full justify-center">
                                            <button 
                                                onClick={() => handleAddToCart(item)}
                                                className="flex-1 flex items-center justify-center gap-1 bg-sky-500 text-white px-2 py-1 rounded text-sm hover:bg-sky-600 transition-colors"
                                            >
                                                Cart
                                            </button>
                                            <Link 
                                                to={`/product/${item._id}`}
                                                className="flex-1 flex items-center justify-center gap-1 border border-sky-500 text-sky-500 px-2 py-1 rounded text-sm hover:bg-sky-500 hover:text-white transition-colors"
                                            >
                                                <FaEye className="text-xs" /> View
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>

            {/* Animation Styles */}
            <style jsx>{`
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }
                .animate-pulse {
                    animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.3s ease-out;
                }
            `}</style>
        </div>
    );
}

export default Newarrival;
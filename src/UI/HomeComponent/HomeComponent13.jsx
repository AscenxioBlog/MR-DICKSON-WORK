import React, { useEffect, useState } from 'react';
import { FaShoppingCart, FaHeart, FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import glucose from '../ShopComponent/ShopPictures/glucose.jpg';
import gloves from '../ShopComponent/ShopPictures/gloves.jpg';
import plant from '../ShopComponent/ShopPictures/plant.jpg';
import digital from '../ShopComponent/ShopPictures/shop4.jpg';
import sethoscope from '../ShopComponent/ShopPictures/shop5.jpg';
import sphygmomanometer from '../ShopComponent/ShopPictures/shop6.jpg';
import sphygmomanometer2 from '../ShopComponent/ShopPictures/shop7.jpg';
import handgloves from '../ShopComponent/ShopPictures/shop8.jpg';
import sphygmomanometer3 from '../ShopComponent/ShopPictures/shop9.jpg';
import API_URL from '../../Config';


// Import your images here...

function HomeComponent13() {
    // const productData = [
    //     { id: 1, name: 'Glucose Monitor', price: 46.00, originalPrice: 55.00, rating: 4, image: glucose, sku: 'PROD001', category: 'Medical', isNew: true },
    //     { id: 2, name: 'Examination Gloves', price: 58.10, originalPrice: 65.00, rating: 4, image: gloves, sku: 'PROD002', category: 'Medical', isNew: false },
    //     { id: 3, name: 'Pharmaceutical Plants', price: 88.00, originalPrice: 100.00, rating: 3, image: plant, sku: 'PROD003', category: 'Equipment', isNew: true },
    //     { id: 4, name: 'Premium Stethoscope', price: 96.00, originalPrice: 120.00, rating: 4, image: sethoscope, sku: 'PROD004', category: 'Medical', isNew: false },
    //     { id: 5, name: 'Digital Sphygmomanometer', price: 69.00, originalPrice: 85.00, rating: 4, image: sphygmomanometer, sku: 'PROD005', category: 'Medical', isNew: true },
    //     { id: 6, name: 'Professional Sphygmomanometer', price: 70.00, originalPrice: 80.00, rating: 3, image: sphygmomanometer2, sku: 'PROD006', category: 'Medical', isNew: false },
    //     { id: 7, name: 'Sterile Hand Gloves', price: 52.00, originalPrice: 60.00, rating: 4, image: handgloves, sku: 'PROD007', category: 'Medical', isNew: true },
    //     { id: 8, name: 'Advanced Sphygmomanometer', price: 66.00, originalPrice: 75.00, rating: 4, image: sphygmomanometer3, sku: 'PROD008', category: 'Medical', isNew: false },
    // ];

     let [productData, setProductData] = useState([]);
         useEffect(() => {
             const fetchData = async () => {
                 try {
                     const response = await fetch(`${API_URL}/product/latest`, {
                         method: "GET",
                         credentials: "include",
                     });
             
                     if (!response.ok) {
                         throw new Error(`HTTP error! status: ${response.status}`);
                     }
             
                     const data = await response.json();
                     setProductData(data);
                 } catch (error) {
                     console.error("Error fetching data:", error.message);
                 }
             };
             
             fetchData();
         }, []);

    return (
        <div className="w-full px-4 py-8">
            <div className=" h-[100px] w-full flex justify-center items-center text-[1.5rem] font-extrabold text-purple-800">
                <h1>Latest Product</h1>
            </div>
            <div className="relative">
                <div className="flex space-x-4 overflow-x-auto pb-6 scrollbar-hide">
                    {productData.map((item) => (
         <Link  to={`/singleproduct/${item._id}`} key={item._id}>
                        <div key={item.id} className="flex-shrink-0 w-[200px] md:w-[180px]">
                            <div className="card bg-white shadow-md hover:shadow-xl transition-shadow group h-full flex flex-col">
                                {/* Product Image with Badges */}
                                <figure className="relative pt-[80%] overflow-hidden">
                                    <img 
                                        src={item.image} 
                                        alt={item.name} 
                                        className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    {item.status && (
                                        <div className="absolute top-2 left-2 bg-textc text-white text-xs font-bold px-2 py-1 rounded">
                                            NEW
                                        </div>
                                    )}
                                    {item.originalPrice > item.price && (
                                        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                                            SALE
                                        </div>
                                    )}
                            
                                </figure>

                                {/* Product Info */}
                                <div className="card-body p-4 flex flex-col flex-grow">
                                    <h3 className="card-title text-sm md:text-base font-semibold line-clamp-2 min-h-[3em]">
                                        {item.productName}
                                    </h3>
                                    <div className="mt-auto">
                                        <div className="flex items-center justify-between mt-2">
                                            <div>
                                                <span className="font-bold text-textc">${item.price.toFixed(2)}</span>
                                                {item.oldPrice > item.price && (
                                                    <span className="text-sm line-through text-gray-500 ml-2">${item.oldPrice.toFixed(2)}</span>
                                                )}
                                            </div>
                                            {/* <button className="btn btn-sm bg-textc hover:bg-textc border-none text-white">
                                                Add
                                            </button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
         </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HomeComponent13;
import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../ReusableComponent/CartContext';
import { Link } from 'react-router-dom';
import { MdSearch, MdShoppingCart } from "react-icons/md";
import { FaAngleLeft, FaAngleRight, FaEye } from "react-icons/fa";
import API_URL from '../../Config';

function FeaturedProducts() {
      const { addToCart } = useContext(CartContext);
      const [productData, setProductData] = useState([]);
      const [loading, setLoading] = useState(true);
      const [searchTerm, setSearchTerm] = useState('');
      const [sortOption, setSortOption] = useState('none');
      const [currentPage, setCurrentPage] = useState(1);
      const [priceRange, setPriceRange] = useState(200);
      const [selectedCategory, setSelectedCategory] = useState('All');
      const [showAlert, setShowAlert] = useState(false);
      const [alertMessage, setAlertMessage] = useState('');
  
      const itemsPerPage = 30;
  
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
  
      const categories = ['All', ...new Set(productData.map(product => product.category))];
  
      const filteredProducts = productData
          .filter(product => {
              const matchesSearch = searchTerm 
                  ? product.productName.toLowerCase().includes(searchTerm.toLowerCase())
                  : true;
              
              const matchesCategory = selectedCategory === 'All' 
                  ? true 
                  : product.category === selectedCategory;
              
              const matchesPrice = priceRange >= 200 
                  ? true 
                  : product.price <= priceRange;
              
              return matchesSearch && matchesCategory && matchesPrice;
          })
          .sort((a, b) => {
              if (sortOption !== 'none') {
                  switch(sortOption) {
                      case 'date': 
                          return new Date(b.createdAt) - new Date(a.createdAt);
                      case 'price-low': 
                          return a.price - b.price;
                      case 'price-high': 
                          return b.price - a.price;
                      case 'name': 
                          return a.productName.localeCompare(b.productName);
                      case 'rating':
                          return (b.rating || 0) - (a.rating || 0);
                      default: 
                          return 0;
                  }
              }
              return 0;
          });
  
      const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  
      const handlePageChange = (page) => {
          if (page >= 1 && page <= totalPages) {
              setCurrentPage(page);
              window.scrollTo({ top: 0, behavior: 'smooth' });
          }
      };
  
      const handleAddToCart = (product) => {
          addToCart(product, (addedItem) => {
              setAlertMessage(`${addedItem.productName} added to cart!`);
              setShowAlert(true);
              setTimeout(() => setShowAlert(false), 3000);
          });
      };
  
      // Loading Skeleton Component
      const LoadingSkeleton = () => (
          <div className="w-full  flex flex-col">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                  {[...Array(12)].map((_, index) => (
                      <div key={index} className="border border-gray-200 p-3 flex flex-col items-center rounded shadow-sm bg-white h-[250px] overflow-hidden">
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
                  ))}
              </div>
              
          
          </div>
      );
  
  
  return (
    <div className="p-4">
               {showAlert && (
                   <div className="fixed top-20 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50 animate-fade-in">
                       {alertMessage}
                   </div>
               )}
   
               <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                {/* Title Section */}
            <div className="flex gap-2 flex-col mt-8">
                <h1 className="text-3xl font-bold">Featured Product</h1>
                <div className="h-[3px] w-25 rounded bg-[#FF496C]"></div>
            </div>
   
                
               </div>
   
               <div className="mt-10 ">
             
   
                   {loading ? (
                       <LoadingSkeleton />
                   ) : (
                       <div className="w-full  flex flex-col">
                           {filteredProducts.length > 0 ? (
                               <>
                                   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                                       {currentItems.map((item) => (
                                           <div key={item._id} className="border h-[250px] border-sky-500 p-3 flex flex-col items-center rounded shadow-sm bg-white hover:shadow-md transition-shadow overflow-hidden">
                                               <div className="h-[120px] w-full flex items-center justify-center mb-2">
                                                  <img
                                                src={item.images[0]}
                                                alt={item.name}
                                                className="h-full w-auto object-contain"
                                            />
                                               </div>
                                               <div className="w-full flex-1 flex flex-col justify-between">
                                                   <div>
                                                       <p className="text-gray-600 text-center line-clamp-2 text-sm leading-tight">
                                                           {item.productName}
                                                       </p>
                                                       <p className="text-lg font-bold text-black mt-1 text-center">₦ {item.price}</p>
                                                   </div>
                                                   <div className="flex gap-2 mt-2 w-full justify-center">
                                                       <button 
                                                           onClick={() => handleAddToCart(item)}
                                                           className="flex-1 flex items-center justify-center gap-1 bg-sky-500 text-white px-2 py-1 rounded text-sm hover:bg-sky-600 transition-colors"
                                                       >
                                                           Cart
                                                       </button>
                                                       <Link 
                                                           to={`/singleproduct/${item._id}`}
                                                           className="flex-1 flex items-center justify-center gap-1 border border-sky-500 text-sky-500 px-2 py-1 rounded text-sm hover:bg-sky-500 hover:text-white transition-colors"
                                                       >
                                                           <FaEye className="text-xs" /> View
                                                       </Link>
                                                   </div>
                                               </div>
                                           </div>
                                       ))}
                                   </div>
   
                                
                               </>
                           ) : (
                               <div className="text-center py-10">
                                   <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
                               </div>
                           )}
                       </div>
                   )}
               </div>
   
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

export default FeaturedProducts;

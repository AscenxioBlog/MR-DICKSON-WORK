import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../ReusableComponent/CartContext';
import { Link } from 'react-router-dom';
import { MdSearch, MdShoppingCart } from "react-icons/md";
import { FaAngleLeft, FaAngleRight, FaEye } from "react-icons/fa";
import API_URL from '../../Config';

function Shopproducts() {
    const { addToCart } = useContext(CartContext);
    const [productData, setProductData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('none');
    const [currentPage, setCurrentPage] = useState(1);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(200000);
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
            
            const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
            
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
        <div className="w-full lg:w-3/4 flex flex-col">
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
            
            {/* Pagination Skeleton */}
            <div className="flex justify-center items-center gap-3 mt-8">
                <div className="px-3 py-1 rounded border text-sm bg-gray-200 animate-pulse w-8 h-8"></div>
                {[...Array(5)].map((_, idx) => (
                    <div key={idx} className="px-3 py-1 rounded border text-sm bg-gray-200 animate-pulse w-8 h-8"></div>
                ))}
                <div className="px-3 py-1 rounded border text-sm bg-gray-200 animate-pulse w-8 h-8"></div>
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
                <div className="flex items-center justify-center">
                    {/* <img
                        src="https://tunatheme.com/tf/html/fiama-preview/fiama/img/logo.png"
                        alt="logo"
                        className="object-contain"
                    /> */}
            <h1 className=' font-montserrat md:text-[1.5rem] font-extrabold tracking-tighter text-gray-700'>BABAKAZO</h1>

                </div>

                <div className="relative w-full max-w-md">
                    <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                        <MdSearch className="h-5 w-5 text-gray-500" />
                    </span>
                    <input
                        type="text"
                        placeholder="Search Product, brands and categories"
                        className="w-full border border-gray-300 rounded-md pl-10 pr-4 py-2 text-lg focus:outline-none focus:ring-1 focus:ring-[#FF496C]"
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setCurrentPage(1);
                        }}
                    />
                </div>

                <div className="flex items-center space-x-4 mb-2">
                    <label htmlFor="sort" className="text-lg font-medium text-gray-700">
                        Sort by:
                    </label>
                    <select
                        id="sort"
                        value={sortOption}
                        onChange={(e) => {
                            setSortOption(e.target.value);
                            setCurrentPage(1);
                        }}
                        className="border border-gray-300 px-9 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF496C]"
                    >
                        <option value="none">None (Default)</option>
                        <option value="date">Newest</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="name">Name</option>
                        <option value="rating">Rating</option>
                    </select>
                </div>
            </div>

            <div className="mt-10 flex flex-col lg:flex-row gap-8">
                <div className="w-full lg:w-1/4">
                    <h1 className="font-extrabold text-[18px] text-black">PRODUCT CATEGORIES</h1>
                    <div className="flex flex-col gap-2 lg:gap-4 text-[16px] text-gray-500 font-semibold mt-4">
                        {loading ? (
                            [...Array(8)].map((_, idx) => (
                                <div key={idx} className="h-6 bg-gray-200 rounded animate-pulse"></div>
                            ))
                        ) : (
                            categories.map(category => (
                                <button
                                    key={category}
                                    onClick={() => {
                                        setSelectedCategory(category);
                                        setCurrentPage(1);
                                    }}
                                    className={`text-left ${selectedCategory === category ? 'text-[#FF496C]' : ''}`}
                                >
                                    {category}
                                </button>
                            ))
                        )}
                    </div>

                    <div className="mt-10">
                        <h1 className="font-extrabold text-[20px] text-black">Price</h1>
                        <div className="flex flex-col bg-white mt-5">
                            <h2 className="text-lg font-medium text-gray-800">FILTER BY PRICE</h2>
                            {loading ? (
                                <div className="h-3 bg-gray-200 rounded-full animate-pulse mt-3 w-full"></div>
                            ) : (
                                <>
                                    <div className="flex gap-3 mt-3">
                                        <div className="flex flex-col">
                                            <label className="text-sm text-gray-600 mb-1">Min Price</label>
                                            <input
                                                type="number"
                                                placeholder="0"
                                                value={minPrice}
                                                onChange={(e) => {
                                                    setMinPrice(Number(e.target.value) || 0);
                                                    setCurrentPage(1);
                                                }}
                                                className="w-24 px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#FF496C]"
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="text-sm text-gray-600 mb-1">Max Price</label>
                                            <input
                                                type="number"
                                                placeholder="200000"
                                                value={maxPrice}
                                                onChange={(e) => {
                                                    setMaxPrice(Number(e.target.value) || 200000);
                                                    setCurrentPage(1);
                                                }}
                                                className="w-24 px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#FF496C]"
                                            />
                                        </div>
                                    </div>
                                    <span className="mt-3 text-gray-700 text-sm">
                                        Price: ₦{minPrice} - ₦{maxPrice}
                                    </span>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                {loading ? (
                    <LoadingSkeleton />
                ) : (
                    <div className="w-full lg:w-3/4 flex flex-col">
                        {filteredProducts.length > 0 ? (
                            <>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                                    {currentItems.map((item) => (
                                        <div key={item._id} className="border h-[250px] border-sky-500 p-3 flex flex-col items-center rounded shadow-sm bg-white hover:shadow-md transition-shadow overflow-hidden">
                                            <div className="h-[120px] w-full flex items-center justify-center mb-2">
                                                <img
                                                    src={item.images[0]}
                                                    alt={item.productName}
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

                                <div className="flex justify-center items-center gap-3 mt-8">
                                    <button
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        disabled={currentPage === 1}
                                        className="px-3 py-1 rounded border text-sm text-gray-600 disabled:opacity-40"
                                    >
                                        <FaAngleLeft />
                                    </button>

                                    {Array.from({ length: totalPages }, (_, idx) => (
                                        <button
                                            key={idx + 1}
                                            onClick={() => handlePageChange(idx + 1)}
                                            className={`px-3 py-1 rounded border text-sm ${
                                                currentPage === idx + 1
                                                    ? 'bg-[#FF496C] text-white'
                                                    : 'text-gray-600'
                                            }`}
                                        >
                                            {idx + 1}
                                        </button>
                                    ))}

                                    <button
                                        onClick={() => handlePageChange(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                        className="px-3 py-1 rounded border text-sm text-gray-600 disabled:opacity-40"
                                    >
                                        <FaAngleRight />
                                    </button>
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

export default Shopproducts;
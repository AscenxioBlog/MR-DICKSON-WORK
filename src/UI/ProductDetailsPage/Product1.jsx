import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar, FaShoppingCart, FaHeart } from 'react-icons/fa';
import API_URL from '../../Config';

function ProductPage() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState('');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [lensPosition, setLensPosition] = useState({ x: 0, y: 0 });
    const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
    const [hovering, setHovering] = useState(false);
    const imageRef = useRef(null);
    // let {id} = useParams();
    // Fetch product data
    useEffect(() => {
       console.log(id)


        const fetchProduct = async () => {
            try {
                const response = await fetch(`${API_URL}/product/${id}`);
                if (!response.ok) throw new Error('Product not found');
                const data = await response.json();
                setProduct(data);
                if (data.sizes && data.sizes.length > 0) {
                    setSelectedSize(data.sizes[0].size);
                }
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    // Zoom lens handlers
    const handleMouseMove = (e) => {
        if (!imageRef.current) return;
        const rect = imageRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setLensPosition({ x, y });
        setImageDimensions({ width: rect.width, height: rect.height });
    };

    const handleMouseEnter = () => setHovering(true);
    const handleMouseLeave = () => setHovering(false);

    // Zoom lens styles
    const zoomLensStyle = {
        position: 'absolute',
        top: `${lensPosition.y - 50}px`,
        left: `${lensPosition.x - 50}px`,
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        border: '2px solid #fff',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        pointerEvents: 'none',
        display: hovering ? 'block' : 'none',
        transform: 'translate(-50%, -50%)',
        boxShadow: '0 0 10px rgba(0,0,0,0.2)'
    };

    const zoomedImageStyle = {
        backgroundImage: `url(${product?.images?.[currentImageIndex]})`,
        backgroundPosition: `${(lensPosition.x / imageDimensions.width) * 100}% ${(lensPosition.y / imageDimensions.height) * 100}%`,
        backgroundSize: `${imageDimensions.width * 2}px ${imageDimensions.height * 2}px`,
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        display: hovering ? 'block' : 'none',
        transition: 'opacity 0.3s ease'
    };

    if (loading) return <div className="text-center py-20">Loading...</div>;
    if (error) return <div className="text-center py-20 text-red-500">{error}</div>;
    if (!product) return <div className="text-center py-20">Product not found</div>;

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Product Details Section with Zoom */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {/* Image with Zoom Container */}
                <div className="relative group">
                    <div 
                        className="relative h-[400px] bg-gray-100 rounded-lg overflow-hidden"
                        onMouseMove={handleMouseMove}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img
                            ref={imageRef}
                            src={product.images?.[currentImageIndex]}
                            alt={product.name}
                            className="w-full h-full object-contain"
                        />
                        <div style={zoomLensStyle}></div>
                    </div>
                </div>
                
                {/* Product Info with Mirror Preview */}
                <div className="space-y-6 relative">
                    {/* Mirror/Zoom Preview - positioned within the info container */}
                    <div 
                        className={`hidden lg:block h-[300px] bg-gray-100 rounded-lg overflow-hidden mb-4 transition-all duration-300 ${hovering ? 'opacity-100' : 'opacity-0'}`}
                        style={{
                            position: 'relative',
                            visibility: hovering ? 'visible' : 'hidden',
                            height: hovering ? '300px' : '0',
                            marginBottom: hovering ? '1rem' : '0'
                        }}
                    >
                        <div style={zoomedImageStyle}></div>
                    </div>
                    
                    {/* Image Thumbnails */}
                    {product.images && product.images.length > 1 && (
                        <div className="flex gap-2 mb-4">
                            {product.images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`${product.name} ${index + 1}`}
                                    className={`w-16 h-16 object-cover rounded cursor-pointer border-2 ${
                                        currentImageIndex === index ? 'border-blue-500' : 'border-gray-200'
                                    }`}
                                    onClick={() => setCurrentImageIndex(index)}
                                />
                            ))}
                        </div>
                    )}
                    
                    {/* Product Information */}
                    <h1 className="text-3xl font-bold">{product.name}</h1>
                    
                    <div className="flex items-center space-x-2">
                        {[...Array(5)].map((_, i) => (
                            <FaStar 
                                key={i}
                                className={`text-lg ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                            />
                        ))}
                        <span className="text-gray-600">({product.reviewCount || 0} reviews)</span>
                    </div>
                    
                    <div className="space-y-2">
                        <p className="text-2xl font-bold">${product.price}</p>
                        <p className="text-sm text-gray-600">Brand: {product.brand || 'N/A'}</p>
                        <p className="text-sm text-gray-600">Color: {product.color}</p>
                        <p className="text-sm text-gray-600">Style: {product.style}</p>
                    </div>
                    
                    {/* Size Selection */}
                    {product.sizes && product.sizes.length > 0 && (
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Size:</label>
                            <div className="flex gap-2 flex-wrap">
                                {product.sizes.map((sizeObj, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedSize(sizeObj.size)}
                                        className={`px-3 py-1 border rounded ${
                                            selectedSize === sizeObj.size
                                                ? 'border-blue-500 bg-blue-50 text-blue-600'
                                                : 'border-gray-300 hover:border-gray-400'
                                        } ${sizeObj.countInStock === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        disabled={sizeObj.countInStock === 0}
                                    >
                                        {sizeObj.size} ({sizeObj.countInStock} left)
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                    
                    <div className="flex items-center space-x-4 pt-4">
                        <div className="flex items-center border rounded">
                            <button 
                                className="px-3 py-1 text-xl"
                                onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                            >
                                -
                            </button>
                            <span className="px-4 py-1">{quantity}</span>
                            <button 
                                className="px-3 py-1 text-xl"
                                onClick={() => setQuantity(prev => prev + 1)}
                            >
                                +
                            </button>
                        </div>
                        <button className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition flex items-center space-x-2">
                            <FaShoppingCart />
                            <span>Add to Cart</span>
                        </button>
                        <button className="p-2 text-gray-500 hover:text-red-500 transition">
                            <FaHeart className="text-xl" />
                        </button>
                    </div>
                    
                    <div className="pt-4 border-t">
                        <p><span className="font-semibold">Category:</span> {product.category}</p>
                        <p><span className="font-semibold">SKU:</span> {product.sku}</p>
                        <p><span className="font-semibold">Availability:</span> {
                            product.sizes?.some(size => size.countInStock > 0) ? 'In Stock' : 'Out of Stock'
                        }</p>
                    </div>
                </div>
            </div>
            
            {/* Product Tabs */}
            <div className="mb-12">
                <div className="tabs">
                    <button className="tab tab-bordered tab-active">Description</button>
                    <button className="tab tab-bordered">Specifications</button>
                    <button className="tab tab-bordered">Reviews</button>
                </div>
                
                <div className="bg-white p-6 rounded-b-lg shadow-md">
                    <h2 className="text-xl font-bold mb-4">Product Description</h2>
                    {product.description ? (
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                            {product.description.split(/[.\n]/).filter(item => item.trim()).map((item, index) => (
                                <li key={index}>{item.trim()}</li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-700">No description available.</p>
                    )}
                    
                    {product.features && (
                        <div className="mt-6">
                            <h3 className="font-semibold mb-2">Features:</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                {product.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
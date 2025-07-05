import React, { useState } from 'react';
import API_URL from '../../Config';

function Adder() {
    // const [selectedFile, setSelectedFile] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        
        const formData = new FormData(event.target);

        try {
            const response = await fetch(`${API_URL}/product`, {
                method: 'POST',
                body: formData,
                credentials:"include"
                // Don't set Content-Type header - the browser will set it automatically with the correct boundary
            });

            if (response.ok) {
                alert('Product added successfully!');
                event.target.reset();
            } else {
                const errorData = await response.json(); // Try to get error details from server
                console.error('Server error:', errorData);
                alert(`Error adding product: ${errorData.message || 'Please try again.'}`);
            }
        } catch (error) {
            console.error('Network error:', error);
            alert('Network error. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };
    // const handleFileChange = (event) => {
    //     setSelectedFile(event.target.files[0]);
    // };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
            <h1 className='text-center font-bold text-3xl text-white mb-8'>Add Product Form</h1>
            <form onSubmit={handleSubmit} encType="multipart/form-data" className='space-y-6'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className='block text-white font-medium'>Product Name</label>
                        <input 
                            type="text" 
                            name='productName' 
                            className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label className='block text-white font-medium'>Product Image</label>
                        <input 
                            type="file" 
                            name='image' 
                            // onChange={handleFileChange}
                            className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label className='block text-white font-medium'>Product SKU</label>
                        <input 
                            type="text" 
                            name='sku'
                            className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label className='block text-white font-medium'>Price</label>
                        <input 
                            type="number" 
                            name='price'
                            className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label className='block text-white font-medium'>Old Price</label>
                        <input 
                            type="number" 
                            name='oldPrice'
                            className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className='block text-white font-medium'>Product Quantity</label>
                        <input 
                            type="number" 
                            name='productQuantity'
                            className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label className='block text-white font-medium'>Product Rating</label>
                        <input 
                            type="number" 
                            name="rating" 
                            min={0} 
                            max={5}
                            className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className='block text-white font-medium'>Product Category</label>
                        <select 
                            name="category"
                            className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        >
                            <option value="">Select a category</option>
                            <option value="hospital">Hospital Equipment</option>
                            <option value="education">Education / Teaching Model</option>
                            <option value="lab">Lab Consumable</option>
                            <option value="surgical">Surgical Equipment</option>
                            <option value="biology">Biology Equipment</option>
                            <option value="chemistry">Chemistry Equipment</option>
                            <option value="physics">Physics Equipment</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className='block text-white font-medium'>Product Status</label>
                        <select 
                            name="status"
                            className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        >
                            <option value="new">New</option>
                            <option value="regular">Regular</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className='block text-white font-medium'>Product Description</label>
                    <textarea 
                        name="description" 
                        rows="4"
                        className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    ></textarea>
                </div>

                <div className="flex justify-center pt-4">
                    <button 
                        type='submit' 
                        disabled={isSubmitting}
                        className={`px-6 py-3 rounded-md font-medium text-gray-900 ${isSubmitting ? 'bg-yellow-600' : 'bg-yellow-400 hover:bg-yellow-500'} transition-colors flex items-center justify-center min-w-32`}
                    >
                        {isSubmitting ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Processing...
                            </>
                        ) : 'Submit'}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Adder;
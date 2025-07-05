import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function AddProduct() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [sizes, setSizes] = useState([{ size: '', countInStock: '' }]);
  const [submitStatus, setSubmitStatus] = useState({
    isVisible: false,
    isSuccess: false,
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const previews = files.map(file => URL.createObjectURL(file));
    setImagePreviews(previews);
  };

  const addSizeField = () => {
    setSizes([...sizes, { size: '', countInStock: '' }]);
  };

  const removeSizeField = (index) => {
    setSizes(sizes.filter((_, i) => i !== index));
  };

  const handleSizeChange = (index, field, value) => {
    const updatedSizes = sizes.map((size, i) => 
      i === index ? { ...size, [field]: value } : size
    );
    setSizes(updatedSizes);
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!sizes.some(size => size.size && size.countInStock)) {
      newErrors.sizes = 'At least one size with stock is required';
    }
    
    setFormErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (data) => {
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('description', data.description);
      formData.append('sku', data.sku);
      formData.append('price', data.price);
      formData.append('category', data.category);
      formData.append('brand', data.brand || '');
      formData.append('color', data.color);
      formData.append('style', data.style);
      formData.append('sizes', JSON.stringify(sizes.filter(size => size.size && size.countInStock)));
      
      Array.from(data.images).forEach(file => {
        formData.append('images', file);
      });

      const response = await fetch('https://babakazo-shoes.onrender.com/product', {
        method: 'POST',
        credentials: 'include',
        body: formData
      });

      if (response.ok) {
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);
        reset();
        setSizes([{ size: '', countInStock: '' }]);
        setImagePreviews([]);
        setFormErrors({});
      } else {
        const errorData = await response.json();
        setFormErrors({ api: errorData.message || 'Failed to add product' });
      }
    } catch (error) {
      setFormErrors({ api: 'Network error. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 bg-[url(assets/Frame2.png)] py-8 px-4 sm:px-6 lg:px-8">
      <div className={`fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out z-50 ${
        showAlert ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}>
        Product Added Successfully!
      </div>
      <div className="max-w-3xl mx-auto">
        <div className="bg-[#fff9] shadow rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800">Add New Product</h2>
            <p className="mt-1 text-sm text-gray-600">Fill in all the required product details</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="px-6 py-4" encType="multipart/form-data">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* Product Name */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Product Name *</label>
                <input
                  type="text"
                  {...register("name", { required: 'Product name is required' })}
                  className={`mt-1 block w-full h-[40px] rounded-md border ${errors.name ? 'border-red-500' : 'border-gray-300'} shadow-sm sm:text-sm px-3`}
                  placeholder="Enter product name"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
              </div>

              {/* SKU */}
              <div>
                <label className="block text-sm font-medium text-gray-700">SKU *</label>
                <input
                  type="text"
                  {...register("sku", { required: 'SKU is required' })}
                  className={`mt-1 block w-full h-[40px] rounded-md border ${errors.sku ? 'border-red-500' : 'border-gray-300'} shadow-sm sm:text-sm px-3`}
                  placeholder="e.g., SHOE001"
                />
                {errors.sku && <p className="mt-1 text-sm text-red-600">{errors.sku.message}</p>}
              </div>

              {/* Price */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Price (NGNz) *</label>
                <input
                  type="number"
                  step="0.01"
                  {...register("price", { required: 'Price is required', min: { value: 0.01, message: 'Price must be greater than 0' } })}
                  className={`mt-1 block w-full h-[40px] rounded-md border ${errors.price ? 'border-red-500' : 'border-gray-300'} shadow-sm sm:text-sm px-3`}
                  placeholder="99.99"
                />
                {errors.price && <p className="mt-1 text-sm text-red-600">{errors.price.message}</p>}
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Category *</label>
                <select
                  {...register("category", { required: 'Category is required' })}
                  className={`mt-1 block w-full h-[40px] rounded-md border ${errors.category ? 'border-red-500' : 'border-gray-300'} shadow-sm sm:text-sm px-3`}
                >
                  <option value="">Select category</option>
                  <option value="heels">Heels</option>
                  <option value="sneakers">Sneakers</option>
                  <option value="mule">Mule</option>
                  <option value="sandal">Sandal</option>
                  <option value="chelsea">Chelsea</option>
                  <option value="boat">Boat</option>
                  <option value="oxfords">Oxfords</option>
                  <option value="loafers">Loafers</option>
                  <option value="boots">Boots</option>
                  <option value="clogs">Clogs</option>
                  <option value="slippers">Slippers</option>
                </select>
                {errors.category && <p className="mt-1 text-sm text-red-600">{errors.category.message}</p>}
              </div>

              {/* Brand */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Brand</label>
                <select
                  {...register("brand")}
                  className="mt-1 block w-full h-[40px] rounded-md border border-gray-300 shadow-sm sm:text-sm px-3"
                >
                  <option value="">Select brand</option>
                  <option value="Nike">Nike</option>
                  <option value="Adidas">Adidas</option>
                  <option value="Puma">Puma</option>
                  <option value="Reebok">Reebok</option>
                  <option value="New Balance">New Balance</option>
                  <option value="Converse">Converse</option>
                  <option value="Vans">Vans</option>
                  <option value="Under Armour">Under Armour</option>
                  <option value="Asics">Asics</option>
                  <option value="Skechers">Skechers</option>
                </select>
              </div>

              {/* Color */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Color *</label>
                <input
                  type="text"
                  {...register("color", { required: 'Color is required' })}
                  className={`mt-1 block w-full h-[40px] rounded-md border ${errors.color ? 'border-red-500' : 'border-gray-300'} shadow-sm sm:text-sm px-3`}
                  placeholder="e.g., Black, White, Red"
                />
                {errors.color && <p className="mt-1 text-sm text-red-600">{errors.color.message}</p>}
              </div>

              {/* Style */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Style *</label>
                <select
                  {...register("style", { required: 'Style is required' })}
                  className={`mt-1 block w-full h-[40px] rounded-md border ${errors.style ? 'border-red-500' : 'border-gray-300'} shadow-sm sm:text-sm px-3`}
                >
                  <option value="">Select style</option>
                  <option value="casual">Casual</option>
                  <option value="formal">Formal</option>
                  <option value="sport">Sport</option>
                  <option value="party">Party</option>
                  <option value="business">Business</option>
                  <option value="athletic">Athletic</option>
                  <option value="outdoor">Outdoor</option>
                  <option value="lounge">Lounge</option>
                </select>
                {errors.style && <p className="mt-1 text-sm text-red-600">{errors.style.message}</p>}
              </div>

              {/* Product Images */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Product Images *</label>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  {...register("images", { required: 'At least one image is required' })}
                  onChange={handleImageChange}
                  className={`mt-1 block w-full ${errors.images ? 'border-red-500' : ''}`}
                />
                {errors.images && <p className="mt-1 text-sm text-red-600">{errors.images.message}</p>}
                {imagePreviews.length > 0 && (
                  <div className="mt-2 flex gap-2 flex-wrap">
                    {imagePreviews.map((preview, index) => (
                      <img key={index} src={preview} alt={`Preview ${index + 1}`} className="h-16 w-16 object-cover rounded-md" />
                    ))}
                  </div>
                )}
              </div>

              {/* Sizes and Stock */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Sizes & Stock *</label>
                {sizes.map((size, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      placeholder="Size (e.g., 8, 9, 10)"
                      value={size.size}
                      onChange={(e) => handleSizeChange(index, 'size', e.target.value)}
                      className="flex-1 h-[40px] rounded-md border border-gray-300 shadow-sm sm:text-sm px-3"
                    />
                    <input
                      type="number"
                      placeholder="Stock count"
                      value={size.countInStock}
                      onChange={(e) => handleSizeChange(index, 'countInStock', parseInt(e.target.value) || 0)}
                      className="flex-1 h-[40px] rounded-md border border-gray-300 shadow-sm sm:text-sm px-3"
                    />
                    {sizes.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeSizeField(index)}
                        className="px-3 py-2 bg-red-500 text-white rounded-md text-sm hover:bg-red-600"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addSizeField}
                  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600"
                >
                  Add Size
                </button>
                {formErrors.sizes && <p className="mt-1 text-sm text-red-600">{formErrors.sizes}</p>}
              </div>

              {/* Description */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Description *</label>
                <textarea
                  {...register("description", { required: 'Description is required' })}
                  rows={4}
                  className={`mt-1 block w-full rounded-md border ${errors.description ? 'border-red-500' : 'border-gray-300'} shadow-sm sm:text-sm px-3 py-2`}
                  placeholder="Detailed product description..."
                />
                {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>}
              </div>
            </div>

            {formErrors.api && (
              <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                {formErrors.api}
              </div>
            )}

            <div className="mt-6 flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => {
                  reset();
                  setSizes([{ size: '', countInStock: '' }]);
                  setImagePreviews([]);
                  setFormErrors({});
                }}
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                Reset
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-2 bg-purple-600 text-white rounded-md text-sm font-medium hover:bg-purple-700 disabled:opacity-50"
              >
                {isSubmitting ? 'Adding Product...' : 'Add Product'}
              </button>
            </div>


          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProduct; 

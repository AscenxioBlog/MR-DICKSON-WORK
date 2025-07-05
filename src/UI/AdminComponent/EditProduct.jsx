import { useState, useEffect } from "react";
import { CgClose } from "react-icons/cg";
import API_URL from "../../Config";

const EditProductModal = ({ isOpen, onClose, product, onProductChange }) => {
  const [formData, setFormData] = useState(product || {});
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState("");

  useEffect(() => {
    if (product) {
      setFormData(product);
      setImagePreview(product.image || "");
    }
  }, [product]);

  if (!isOpen || !formData) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImagePreview(url);

      // Optional: you can upload the file to a cloud service here and update the formData.image with the URL
      setFormData((prev) => ({
        ...prev,
        image: url, // For demo. Replace with uploaded URL if needed.
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/product/${formData._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(formData);
      if (!res.ok) throw new Error("Update failed");

      onProductChange()
      onClose();
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fade-in">
      <div className="bg-white w-full max-w-lg rounded-lg p-6 shadow-xl  overflow-y-auto max-h-[90vh]"> 
        <button
          onClick={onClose}
          className="absolute top-2 right-3 hover:text-black text-white text-2xl h-[30px] w-[30px] bg-red-500 rounded-full"
        >
          <CgClose/>
        </button>

        <h2 className="text-2xl font-bold mb-4 text-gray-500">Edit Product</h2>

        <form onSubmit={handleSubmit} className="space-y-2">
            <div>
            <label className=" text-gray-500 mb-[2px] block">Product Name</label>
            <input
                type="text"
                name="productName"
                value={formData.productName || ""}
                onChange={handleChange}
                placeholder="Product Name"
                className="w-full border p-2 rounded"
            />
            </div>
            

            <div>
            <label className=" text-gray-500 mb-[2px] block">Product Price</label>
            <input
                type="number"
                name="price"
                value={formData.price || ""}
                onChange={handleChange}
                placeholder="Price"
                className="w-full border p-2 rounded"
            />
            </div>

            <div>
            <label className=" text-gray-500 mb-[2px] block">Old Product Price</label>
            <input
                type="number"
                name="oldPrice"
                value={formData.oldPrice || ""}
                onChange={handleChange}
                placeholder="oldPrice"
                className="w-full border p-2 rounded"
            />
            </div>

            <div>
                <label className=" text-gray-500 mb-[2px] block font-semibold">Status</label>
                <select
                    name="status"
                    value={formData.status || ""}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                >
                    <option value="new">New</option>
                    <option value="regular">Regular</option>
                </select>
            </div>
          
            <div>
                <label className=" text-gray-500 mb-[2px] block">Product Category</label>
                <select name="category"  
                    value={formData.category || ""}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
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
          
          <div>
            <label className=" text-gray-500 mb-[2px] block">Description</label>
            <textarea
            name="description"
            value={formData.description || ""}
            onChange={handleChange}
            placeholder="Description"
            className="w-full border p-2 rounded"
          />
          </div>
          {/* Image Upload */}
          <div>
            <label className="block mb-1 font-medium text-gray-500">Product Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mb-2 text-gray-500"
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="w-32 h-32 object-cover rounded border"
              />
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProductModal;

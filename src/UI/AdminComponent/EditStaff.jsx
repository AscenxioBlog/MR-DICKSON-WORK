import { useState, useEffect } from "react";
import { CgClose } from "react-icons/cg";
import API_URL from "../../Config";

const EditStaff = ({ isOpen, onClose, staff, onUpdate }) => {
  const [formData, setFormData] = useState(staff || {});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (staff) {
      setFormData(staff);
    }
  }, [staff]);

  if (!isOpen || !formData) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/user/${formData._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        credentials: "include",
      });
      console.log(formData);
      if (!res.ok) throw new Error("Update failed");

      onUpdate()
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

        <h2 className="text-2xl font-bold mb-4 text-gray-500">Edit Staff</h2>

        <form onSubmit={handleSubmit} className="space-y-2">
            <div>
            <label className=" text-gray-500 mb-[2px] block"> FirstName</label>
            <input
                type="text"
                name="firstName"
                value={formData.firstName || ""}
                onChange={handleChange}
                placeholder="FirstName"
                className="w-full border p-2 rounded"
            />
            </div>
            

            <div>
            <label className=" text-gray-500 mb-[2px] block"> LastName</label>
            <input
                type="text"
                name="lastName"
                value={formData.lastName || ""}
                onChange={handleChange}
                placeholder="lastName"
                className="w-full border p-2 rounded"
            />
            </div>

            <div>
            <label className=" text-gray-500 mb-[2px] block"> Email</label>
            <input
                type="text"
                name="email"
                value={formData.email || ""}
                onChange={handleChange}
                placeholder="email"
                className="w-full border p-2 rounded"
            />
            </div>

            <div>
                <label className=" text-gray-500 mb-[2px] block font-semibold">Role</label>
                <select
                    name="role"
                    value={formData.role || ""}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                >
                    <option value="Admin">Admin</option>
                    <option value="Staff">Staff</option>
                    <option value="User">User</option>
                </select>
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

export default EditStaff;

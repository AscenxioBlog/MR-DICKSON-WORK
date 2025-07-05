import React, { useEffect, useState } from "react";
import API_URL from "../../Config";
import ViewStaffs from "./ViewStaffs";

function Settings() {
  // Admin details state
  const [adminDetails, setAdminDetails] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [passwordForm, setPasswordForm] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [staffForm, setStaffForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    password: "",
  });

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      try {
        // const res = await fetch(`http://localhost:3600/auth/admin`, {
        const res = await fetch(`${API_URL}/auth/admin`, {
          method: "GET",
          credentials: "include",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch admin details");
        }

        const data = await res.json();
        setAdminDetails(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load your details.");
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, []);


  // Handle password change
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordForm((prev) => ({ ...prev, [name]: value }));
  };

  // Handle staff form change
  const handleStaffFormChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setStaffForm((prev) => ({ ...prev, [name]: value }));
  };

  // Submit password change
  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      alert("New passwords don't match!");
      return;
    }
    // Add password validation and API call here
    // const response = await fetch(`http://localhost:3600/auth/change-password`, {
      const response = await fetch(`${API_URL}/auth/change-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(passwordForm),
      credentials: "include",
    });

    const result = await response.json();
    console.log("Password reset sucessful:", result);

    setPasswordForm({
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  // Add new staff member
  const handleAddStaff = async (e) => {
    e.preventDefault();
    if (!staffForm.firstName || !staffForm.lastName  || !staffForm.email || !staffForm.password) {
      alert("Please fill all fields");
      return;
    }

    // Add password validation and API call here
    // const response = await fetch(`http://localhost:3600/auth`, {
      const response = await fetch(`${API_URL}/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(staffForm),
      credentials: "include",
    });

    const result = await response.json();

    if (result.message) {
      alert(result.message);
    }

    setStaffForm({ firstName: "", lastName: "" , email: "", role:"", password: "" });
    
  };

  return (
    <div className="p-6 max-w-4xl mx-auto mt-3">
      <h1 className="text-2xl font-bold mb-6 text-gray-500">Settings</h1>

      {/* Admin Details Section */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-500">
          Admin Details
        </h2>
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <p className="mt-1 text-gray-900 ml-2 font-bold">
              {adminDetails.firstName} {adminDetails.lastName}
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <p className="mt-1 text-gray-900 ml-2 font-bold">
              {adminDetails.email}
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Role
            </label>
            <p className="mt-1 text-gray-900 ml-2 font-bold">
              {adminDetails.role}
            </p>
          </div>
        </div>
      </div>

      {/* Change Password Section */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-500">
          Change Password
        </h2>
        <form onSubmit={handlePasswordSubmit}>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="currentPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Current Password
              </label>
              <input
                type="password"
                id="oldPassword"
                name="oldPassword"
                value={passwordForm.oldPassword}
                onChange={handlePasswordChange}
                className="mt-1 block w-full border text-white border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="newPassword"
                className="block text-sm font-medium text-gray-700"
              >
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                value={passwordForm.newPassword}
                onChange={handlePasswordChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
                minLength="6"
              />
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm New Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={passwordForm.confirmPassword}
                onChange={handlePasswordChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
                minLength="6"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Change Password
            </button>
          </div>
        </form>
      </div>

      {/* Staff Management Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-500">
          Staff Management
        </h2>

        {/* Add Staff Form */}
        <form onSubmit={handleAddStaff} className="mb-6">
          <h3 className="text-lg font-medium mb-3 text-gray-500">
            Add New Staff
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                FirstName
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={staffForm.name}
                onChange={handleStaffFormChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                LastName
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={staffForm.lastName}
                onChange={handleStaffFormChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="staffEmail"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="staffEmail"
                name="email"
                value={staffForm.email}
                onChange={handleStaffFormChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="staffName"
                className="block text-sm font-medium text-gray-700"
              >
                Role
              </label>
              <select 
                id="staffRole"
                name="role"
                value={staffForm.role}
                onChange={handleStaffFormChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="Staff">Staff</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="staffPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="staffPassword"
                name="password"
                value={staffForm.password}
                onChange={handleStaffFormChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
                minLength="6"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Add Staff
          </button>
        </form>

        {/* Staff List */}
        <ViewStaffs/>
      </div>
    </div>
  );
}

export default Settings;

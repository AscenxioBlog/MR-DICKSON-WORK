import React, { useEffect, useState } from "react";
import EditStaff from './EditStaff';
import API_URL from "../../Config";

function ViewStaffs() {
  const [staffMembers, setStaffMembers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [notification, setNotification] = useState({ show: false, message: '', staffName: '' });
  const [deleteConfirm, setDeleteConfirm] = useState({ show: false, staffId: null, staffName: '' });
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState(null);

  const fetchStaffMembers = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/user/staff`, {
        method: "GET",
        credentials: "include",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch staff members");
      }

      const data = await res.json();
      setStaffMembers(data);
    } catch (err) {
      console.error(err);
      setError("Failed to load staffs.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStaffMembers();
  }, []);

  const handleEditClick = (staff) => {
    setSelectedStaff(staff);
    setIsEditModalOpen(true);
  };

  // Handle delete confirmation
  const confirmDelete = (staffId, staffName) => {
    setDeleteConfirm({ show: true, staffId, staffName });
  };

  // Cancel delete
  const cancelDelete = () => {
    setDeleteConfirm({ show: false, staffId: null, staffName: '' });
  };

  const showNotification = (message, staffName) => {
    setNotification({ show: true, message, staffName });
    setTimeout(() => {
      setNotification({ show: false, message: '', staffName: '' });
    }, 3000);
  };

  //delete staff
  const executeDelete = async (staffId) => {
    try {
      const res = await fetch(`${API_URL}/user/${staffId}`, {
        method: 'DELETE',
        credentials: 'include',
      });
  
      if (!res.ok) {
        throw new Error('Failed to delete product');
      }
  
      const data = await res.json();
  
      // Update the UI immediately
      setStaffMembers(prevData => prevData.filter(staff => staff._id !== staffId));
  
      // Show success notification
      showNotification('Staff deleted successfully', deleteConfirm.staffName);
    } catch (err) {
      console.log(err.message);
      showNotification('Failed to delete staff', deleteConfirm.staffName);
    } finally {
      setDeleteConfirm({ show: false, staffId: null, staffName: '' });
    }
  };

  return (
    <div>
        {/* Notification Popup */}
        {notification.show && (
            <div className="fixed top-4 right-4 z-50">
            <div className={` ${notification.message == "Failed to delete staff" ? " bg-red-600" : "bg-green-500"} text-white px-4 py-2 rounded-md shadow-lg flex items-center`}>
                <span className={`mr-2 ${notification.message == "Failed to delete staff" ? " hidden" : " inline"}`}>✓</span>
                <span>{notification.message}: <strong>{notification.staffName}</strong></span>
            </div>
            </div>
        )}

        {deleteConfirm.show && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full text-black">
                <h3 className="text-lg font-medium mb-4">Confirm Delete</h3>
                <p className="mb-4">Are you sure you want to delete <strong>{deleteConfirm.staffName}</strong>? This action cannot be undone.</p>
                <div className="flex justify-end space-x-3">
                <button
                    onClick={cancelDelete}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
                >
                    Cancel
                </button>
                <button
                    onClick={() => executeDelete(deleteConfirm.staffId)}
                    className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                >
                    Delete
                </button>
                </div>
            </div>
            </div>
        )}

      {/* Staff Members */}
      <div className="bg-white p-6 rounded-lg shadow-sm mt-6">
        <h3 className="text-lg font-medium mb-3 text-gray-500">
          Staff Members
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {loading ? (
                <p>Loading staff members...</p>
              ) : error ? (
                <p className="text-red-500">{error.staff}</p>
              ) : staffMembers.length === 0 ? (
                <p className="text-gray-500">No staff members found.</p>
              ) : (
                staffMembers.map((staff) => (
                  <tr key={staff.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                      {staff.firstName} {staff.lastName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                      {staff.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        {staff.role}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button onClick={()=> handleEditClick(staff)} className="text-blue-600 hover:text-blue-900 mr-3">
                        Edit
                      </button>
                      <button onClick={() => confirmDelete(staff._id, staff.firstName)} className="text-red-600 hover:text-red-900">
                        Remove
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      {/* Staff Members ends */}
      <EditStaff
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        staff={selectedStaff}
        onUpdate={fetchStaffMembers}

        />
    </div>
  );
}

export default ViewStaffs;

// OrderCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const OrderCard = ({ order }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">
          Order #{order._id}...
        </h3>
        <span
          className={`px-3 py-1 text-sm rounded-full ${
            order.status === 'Delivered'
              ? 'bg-green-100 text-green-700'
              : 'bg-yellow-100 text-yellow-700'
          }`}
        >
          {order.status}
        </span>
      </div>

      <div className="text-gray-600 mb-2">
        <strong>Date:</strong> {order.orderDate}
      </div>

      <div className="text-gray-600 mb-2">
        <strong>Total:</strong> ₦{order.totalAmount.toLocaleString()}
      </div>

      <div className="text-gray-600 mb-4">
        <strong>Items:</strong> {order.items.length}
      </div>

      <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md">
        <Link to={`/order/${order._id}`}>
          View Details
        </Link>
      </button>
    </div>
  );
};

export default OrderCard;

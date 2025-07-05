import React, { useEffect, useState } from 'react';
import { FaShoppingCart, FaCalendarAlt, FaUser, FaMoneyBillWave, FaSpinner } from 'react-icons/fa';
import API_URL from '../../Config';
import { Link } from 'react-router-dom';

function ViewOrder() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch(`${API_URL}/order`, {
          method: 'GET',
          credentials: 'include',
        });

        if (!res.ok) {
          throw new Error('Failed to fetch orders');
        }

        const data = await res.json();
        setOrders(data);
      } catch (err) {
        console.error('Error fetching orders:', err);
        setError(err.message || 'Failed to load orders');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Shipped': return 'bg-blue-100 text-blue-800';
      case 'Processing': return 'bg-yellow-100 text-yellow-800';
      case 'Cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[url(assets/Frame2.png)] p-6 flex items-center justify-center">
        <div className="text-center">
          <FaSpinner className="animate-spin text-4xl text-textc mx-auto mb-4" />
          <p className="text-lg">Loading your orders...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[url(assets/Frame2.png)] p-6 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md text-center">
          <h2 className="text-xl font-bold text-red-600 mb-2">Error Loading Orders</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-textc text-white py-2 px-4 rounded hover:bg-purple-700 transition"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="min-h-screen bg-[url(assets/Frame2.png)] p-6 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md text-center">
          <h2 className="text-xl font-bold text-gray-800 mb-2">No Orders Found</h2>
          <p className="text-gray-600 mb-4">You haven't placed any orders yet.</p>
          <Link 
            to="/shop" 
            className="bg-textc text-white py-2 px-6 rounded hover:bg-purple-700 transition inline-block"
          >
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[url(assets/Frame2.png)] p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Your Orders</h1>
        
        <div className="space-y-4">
          {orders.map((order) => {
            return (
              <div key={order._id} className="bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-textc">
                <div className="p-4">
                  {/* Order Header */}
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h2 className="font-bold text-lg text-black">Order #{order._id.slice(0, 8)}</h2>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <FaCalendarAlt className="mr-1" />
                        <span>{formatDate(order.dateOrdered)}</span>
                      </div>
                    </div>
                    {order.status && (
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    )}
                  </div>
                  
                  {/* Customer Info */}
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <FaUser className="mr-1" />
                    <span>{order.user?.firstName} {order.user?.lastName}</span>
                  </div>
                  
                  {/* Order Items */}
                  <div className="border-t border-gray-200 pt-3">
                    <h3 className="font-medium mb-2 flex items-center text-black">
                      <FaShoppingCart className="mr-2" />
                      Ordered Items ({order.items.length})
                    </h3>
                    <ul className="space-y-2">
                      {order.items.map((item, index) => (
                        <li key={index} className="flex justify-between text-sm">
                          <span className="text-gray-700">
                            {item.product?.productName || 'Product not available'} × {item.quantity}
                          </span>
                          <span className="text-gray-900 font-medium">
                            ${(item.product?.price * item.quantity).toFixed(2)}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Order Total */}
                  <div className="border-t border-gray-200 pt-3 mt-3 flex justify-between font-medium text-blue-600">
                    <span className="flex items-center">
                      <FaMoneyBillWave className="mr-2" />
                      Total Amount
                    </span>
                    <span>${order.totalAmount?.toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="bg-gray-50 px-4 py-3 text-right">
                  <Link 
                    to={`/order/${order._id}`}
                    className="inline-block bg-textc hover:bg-purple-700 text-white py-2 px-4 rounded-md transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ViewOrder;
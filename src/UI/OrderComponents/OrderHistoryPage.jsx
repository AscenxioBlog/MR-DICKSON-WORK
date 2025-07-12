import React, { useContext, useEffect, useState } from 'react';
import OrderCard from './OrderCard'; // Adjust path if needed
import API_URL from '../../Config';
import { AuthContxt } from '../AuthenticationComponent/AuthContext';


const OrderHistoryPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { isLoggedIn } = useContext(AuthContxt);

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API_URL}/order/my-orders`, {
          method: 'GET',
          credentials: 'include', // 💥 this is important so that cookies go along
        });

        if (!isLoggedIn) {
          setError('You must be logged in to view your orders.');
        }else if (!res.ok) {
          throw new Error('Failed to fetch orders');
        }

        const data = await res.json();
        console.log(data); // Check the structure of the response
        setOrders(data); // assuming your backend sends { orders: [...] }
      } catch (err) {
        console.error(err);
        setError('Failed to load your orders.');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4 mt-[130px]">
      <h2 className="text-2xl font-bold mb-6">My Orders</h2>

      {loading ? (
        <p>Loading your orders...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : orders.length === 0 ? (
        <p className="text-gray-500">You have no orders yet.</p>
      ) : (
        orders.map((order) => <OrderCard key={order._id} order={order} />)
      )}
    </div>
  );
};

export default OrderHistoryPage;

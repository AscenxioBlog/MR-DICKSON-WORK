import React, { useEffect, useState } from "react";
import {
  FaBoxOpen,
  FaUsers,
  FaChartLine,
  FaCalendarAlt,
  FaClipboardList,
} from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import API_URL from "../../Config";
import ViewStaffs from "./ViewStaffs";

function Dashboard() {
  const [order, setOrders] = useState([]);
  const [dashboardStats, setDashboardStats] = useState([]);
  const [loading, setLoading] = useState({
    dashboard: false,
    orders: false,
    staff: false,
  });
  const [error, setError] = useState(
    {
      dashboard: "",
      orders: "",
      staff: "",
    }
  );

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading((prevLoading) => ({ ...prevLoading, orders: true }));
      try {
        const res = await fetch(`${API_URL}/order/recent`, {
          method: "GET",
          credentials: "include",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch orders");
        }

        const data = await res.json();
        setOrders(data); 
      } catch (err) {
        console.error(err);
        setError((error)=>({ ...error, orders: "Failed to load your orders." }));
      } finally {
        setLoading((prevLoading) => ({ ...prevLoading, orders: false }));
      }
    };

    fetchOrders();
  }, []);

  useEffect(() => {
    const fetchDashboardStats = async () => {
      setLoading((prevLoading) => ({ ...prevLoading, dashboard: true }));
      try {
        const res = await fetch(`${API_URL}/admin/dashboard`, {
          method: "GET",
          credentials: "include",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch dashboard stats");
        }

        const data = await res.json();

        setDashboardStats(data);
      } catch (err) {
        console.error(err);
        setError((error)=>({ ...error, dashboard: "Failed to load dashboard stats." }));

      } finally {
        setLoading((prevLoading) => ({ ...prevLoading, dashboard: false }));
      }

    };
    fetchDashboardStats();

  }, []);

  
  // Mock data - replace with real API calls
  const metrics = [
    {
      title: "Total Products",
      value: dashboardStats.totalProducts,
      icon: <FaBoxOpen className="text-3xl" />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: " Customers",
      value: dashboardStats.totalUsers,
      icon: <FaUsers className="text-3xl" />,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Pending Orders",
      value: dashboardStats.pendingOrders,
      icon: <FaClipboardList className="text-3xl" />,
      color: "bg-orange-100 text-orange-600",
    },
    {
      title: "Completed Orders",
      value: dashboardStats.completedOrders,
      icon: <TbTruckDelivery className="text-3xl" />,
      color: "bg-green-100 text-green-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto mt-3">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Laboratory Dashboard
        </h1>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {loading.dashboard ? (
            <p>Loading dashboard stats...</p>
          ) : error.dashboard ? (
            <p className="text-red-500">{error.dashboard}</p>
          ) : dashboardStats.length === 0 ? (
            <p className="text-gray-500">No dashboard stats available.</p>
          ) : (
            metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-black"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      {metric.title}
                    </p>
                    <p className="text-2xl font-bold mt-2 text-black">
                      {metric.value}
                    </p>
                    {/* <p className="text-xs text-gray-500 mt-1">{metric.trend}</p> */}
                  </div>
                  <div className={`p-3 rounded-full ${metric.color}`}>
                    {metric.icon}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Recent Orders */}
        <div className="bg-white p-6 rounded-lg shadow-sm mt-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-400">
              Recent Orders
            </h2>
            <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
              View All Orders <FaClipboardList className="ml-2" />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {loading.orders ? (
                  <p>Loading your orders...</p>
                ) : error.orders ? (
                  <p className="text-red-500">{error.orders}</p>
                ) : order.length === 0 ? (
                  <p className="text-gray-500">You have no orders yet.</p>
                ) : (
                  order.map((order) => (
                    <tr key={order.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-[13px] font-medium text-blue-600">
                        {order._id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {order.items.length}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {order.billingDetails.firstname}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(order.orderDate).toISOString().split("T")[0]}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${
                            order.status === "Delivered"
                              ? "bg-green-100 text-green-800"
                              : order.status === "Shipped"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {order.deliveryStatus}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
        {/* order ends */}

       <ViewStaffs/>
      </div>
    </div>
  );
}

export default Dashboard;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API_URL from "../../Config";

function OrderDetails() {
  let [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  let { orderId } = useParams();
  console.log(orderId);

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API_URL}/order/${orderId}`, {
          method: "GET",
          credentials: "include", // 💥
        });

        if (!res.ok) {
          throw new Error("Failed to fetch orders");
        }

        const data = await res.json();
        console.log(data); // Check the structure of the response
        setOrder(data); // assuming your backend sends { orders: [...] }
      } catch (err) {
        console.error(err);
        setError("Failed to load your orders.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [orderId]);

  return (
    <div className="max-w-4xl mx-auto p-6 mt-[100px]">
      <h1 className="text-3xl font-bold mb-4 text-white">Order Details</h1>

      {loading ? (
        <p>Loading order details...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : order === null ? (
        <p className="text-gray-500">No order found.</p>
      ) : (
        <>
          <div className="bg-white shadow-md rounded p-6 mb-6 text-black">
            <h2 className="text-2xl font-bold mb-4">Order #{order._id}</h2>
            <div className="flex flex-wrap justify-between">
              <div>
                <p>
                  <span className="font-semibold">Status:</span>{" "}
                  <span className="text-green-600">{order.status}</span>
                </p>
                <p>
                  <span className="font-semibold">Date:</span>{" "}
                  {order.orderDate}
                </p>
                <p>
                  <span className="font-semibold">Payment:</span>{" "}
                  {/* {order.paymentMethod} */}
                </p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold">Total: ₦{order.totalAmount}</p>
              </div>
            </div>
          </div>

          {/* Delivery Info */}
          <div className="bg-white shadow-md rounded p-6 mb-6 text-black">
            <h3 className="text-xl font-bold mb-4">Delivery Information</h3>
            <p>
              <span className="font-semibold">Name:</span>{" "}
              {order.billingDetails.firstname} {order.billingDetails.lastname}
            </p>
            {/* <p>
              <span className="font-semibold">Phone:</span>{" "}
              {order.shippingAddress.phone}
            </p> */}
            <p>
              <span className="font-semibold">Address:</span>{" "}
              {order.shippingAddress.address}
            </p>
            <p>
              <span className="font-semibold">State:</span>{" "}
              {order.shippingAddress.state}
            </p>
          </div>

          {/* Ordered Items */}
          <div className="bg-white shadow-md rounded p-6 text-black">
            <h3 className="text-xl font-bold mb-4">Items</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-center border-collapse">
                <thead>
                  <tr>
                    <th className="border-b p-2">Product Image</th>
                    <th className="border-b p-2">Product Name</th>
                    <th className="border-b p-2">Quantity</th>
                    <th className="border-b p-2">Price</th>
                    <th className="border-b p-2">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {order.items.map((item) => (
                    console.log(item),
                    <tr key={item._id} className=" text-center">
                      <td className="p-2">
                        <img src={item.product.image} alt={item.product.productName} className=" w-[50px]"/>
                      </td>
                      <td className="p-2">{item.product.productName}</td>
                      <td className="p-2">{item.quantity}</td>
                      <td className="p-2">₦{item.product.price}</td>
                      <td className="p-2">₦{item.product.price * item.product.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default OrderDetails;

// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { CheckCircleIcon } from '@heroicons/react/24/solid';

// function SuccessfulPayment() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { order, paymentId } = location.state || {};
//   console.log("order", order)
//   console.log("paymentId", paymentId);
//   // Check if order and paymentId are available

//   if (!order) {
//     return (
//       <div className="max-w-md mx-auto mt-[120px] p-6 bg-yellow-50 rounded-lg shadow-md">
//         <h2 className="text-xl font-semibold text-yellow-600">No Order Found</h2>
//         <p className="mt-2 text-yellow-500">
//           We couldn't find any order details. 
//           <button 
//             onClick={() => navigate('/')}
//             className="ml-2 text-blue-600 hover:underline"
//           >
//             Return to home
//           </button>
//         </p>
//       </div>
//     );
//   }


//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       {/* Success Header */}
//       <div className="text-center mb-10">
//         <div className="flex justify-center mb-4">
//           <CheckCircleIcon className="h-16 w-16 text-green-500" />
//         </div>
//         <h1 className="text-3xl font-bold text-gray-800 mb-2">Payment Successful!</h1>
//         <p className="text-lg text-gray-600">Thank you for your purchase.</p>
//         <p className="text-sm text-gray-500 mt-2">Payment Reference: {paymentId}</p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Order Summary */}
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Order Summary</h2>
//           <div className="space-y-3">
//             <div className="flex justify-between">
//               <span className="text-gray-600">Date:</span>
//               <span className="font-medium">{new Date().toLocaleDateString()}</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-gray-600">Status:</span>
//               <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
//                 Paid
//               </span>
//             </div>
//             <div className="flex justify-between border-t pt-3">
//               <span className="text-gray-600 font-medium">Total:</span>
//               <span className="font-bold text-lg">₦{order.totalAmount.toFixed(2)}</span>
//             </div>
//           </div>
//         </div>

//         {/* Customer Information */}
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Customer Information</h2>
//           <div className="space-y-2">
//             <p className="font-medium">{order.billingDetails.firstname} {order.billingDetails.lastname}</p>
//             <p>{order.billingDetails.email}</p>
//             <p>{order.billingDetails.phone}</p>
//           </div>
//         </div>
//       </div>

//       {/* Shipping Information */}
//       <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Shipping Information</h2>
//         <div className="space-y-2">
//           <p>{order.billingDetails.address}</p>
//           {order.billingDetails.apartment && <p>{order.billingDetails.apartment}</p>}
//           <p>{order.billingDetails.city}, {order.billingDetails.state}</p>
//         </div>
//       </div>

//       {/* Order Items */}
//       <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Order Items</h2>
//         <div className="divide-y">
//           {order.items.map((item, index) => (
//             <div key={index} className="py-4 flex">
//               <div className="ml-4 flex-grow">
//                 <h3 className="font-medium text-gray-800">{item.name || `Product ${index + 1}`}</h3>
//                 <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
//               </div>
//               <div className="text-right">
//                 <p className="font-medium">₦{item.price.toFixed(2)}</p>
//                 <p className="text-sm text-gray-500">₦{(item.price * item.quantity).toFixed(2)}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Actions */}
//       <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
//         <button 
//           onClick={() => window.print()} 
//           className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
//         >
//           Print Receipt
//         </button>
//         <button 
//           onClick={() => navigate('/')} 
//           className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
//         >
//           Back to Home
//         </button>
//       </div>
//     </div>
//   );
// }

// export default SuccessfulPayment;


import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SuccessPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { order, paymentId } = location.state || {};

  if (!order || !paymentId) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6 mt-[100px]">
        <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg text-center">
          <div className="text-red-500 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Invalid Order Information</h2>
          <p className="text-gray-600 mb-6">We couldn't find your order details. Please contact support if this is unexpected.</p>
          <button
            className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-200"
            onClick={() => navigate('/')}
          >
            Go to Homepage
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-12 px-4 sm:px-6 lg:px-8 mt-[100px]" >
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-500 to-blue-600 p-6 sm:p-8 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold">🎉 Payment Successful!</h1>
                <p className="mt-2 opacity-90">Thank you for your purchase!</p>
              </div>
              <div className="hidden sm:block">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Order Summary */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h2>
                <div className="space-y-4">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex items-start border-b border-gray-100 pb-4">
                      <div className="flex-shrink-0 h-20 w-20 rounded-md overflow-hidden bg-gray-100">
                        {item.image && (
                          <img
                            src={item.prucductImage}
                            alt={item.productName}
                            className="h-full w-full object-cover"
                          />
                        )}
                      </div>
                      <div className="ml-4 flex-1">
                        <h3 className="text-sm font-medium text-gray-900">{item.name || `Product ID: ${item.product}`}</h3>
                        <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                        {item.price && (
                          <p className="text-sm font-medium text-gray-900 mt-1">₦{(item.price * item.quantity).toLocaleString()}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 border-t border-gray-200 pt-4">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Total</p>
                    <p>₦{order.totalAmount.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              {/* Customer Details */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Customer Details</h2>
                <div className="bg-gray-50 rounded-lg p-4 space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Payment Reference</h3>
                    <p className="mt-1 text-sm text-gray-900 font-mono">{paymentId}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Customer Name</h3>
                    <p className="mt-1 text-sm text-gray-900">
                      {order.billingDetails.firstname} {order.billingDetails.lastname}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Email</h3>
                    <p className="mt-1 text-sm text-gray-900">{order.billingDetails.email}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Shipping Address</h3>
                    <p className="mt-1 text-sm text-gray-900">
                      {order.shippingAddress.address}<br />
                      {order.shippingAddress.city}, {order.shippingAddress.state}<br />
                      {order.shippingAddress.country}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row justify-end space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => navigate('/order-history')}
                className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition duration-200"
              >
                View My Orders
              </button>
              <button
                onClick={() => navigate('/')}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-200"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>

        {/* Additional Help Section */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Need help with your order? <a href="/contact" className="text-blue-600 hover:text-blue-800">Contact us</a></p>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
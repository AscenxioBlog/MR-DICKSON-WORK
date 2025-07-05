import React, { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import API_URL from '../../Config';
import { useNavigate } from 'react-router-dom'; // Make sure this is imported at the top



const PaystackButton = ({ amount, email, customerInfo, cart }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Declare at the top inside your component

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://js.paystack.co/v1/inline.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handlePayment = () => {
    const handler = window.PaystackPop && window.PaystackPop.setup({
    //   key: import.meta.env.VITE_REACT_APP_PAYSTACK_PUBLIC_KEY, // 👈 Correct way to access env variable
      // key: 'pk_live_511373897bc114068063d761c1548a136ea2faf9', // 👈 Correct way to access env variable
      key: 'pk_test_411c6d368e4cfe20cef4589ad7616364e808db11', // 👈 Correct way to access env variable
      email,
      amount: amount * 100, // 👈 Paystack expects kobo
      currency: 'NGN',
      ref: `ref_${Date.now()}`,
      callback: function (response) { // 👈 Normal function (NOT async)
        handlePaymentSuccess(response);
      },
      onClose: function () {
        alert('Payment popup closed.');
      },
    });

    handler && handler.openIframe();
  };

  const handlePaymentSuccess = async (response) => {
    setLoading(true);
  
    try {
      const verifyRes = await fetch(`${API_URL}/api/payment/verify-payment`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          reference: response.reference,
          customerInfo,
          products: cart,
          total: amount,
        }),
        credentials: 'include'
      });
  
      const verifyData = await verifyRes.json();
  
      if (verifyRes.ok) {
        const orderData = {
          billingDetails: {
            firstname: customerInfo.firstname,
            lastname: customerInfo.lastname,
            email: customerInfo.email
          },
          items: cart.map(item => ({
            product: item._id,
            quantity: item.quantity,
            price: item.price,  
            image: item.productImage,
            productName: item.productName,
          })),
          shippingAddress: {
            address: customerInfo.address,
            city: customerInfo.city,
            state: customerInfo.state
          },
          totalAmount: amount,
          paymentReference: response.reference,
          status: 'paid'
        };
  
        const placeOrderRes = await fetch(`${API_URL}/order/placeorder`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(orderData),
          credentials: 'include',
        });
  
        const orderResult = await placeOrderRes.json();
        console.log('Order placed successfully:', orderResult);
  
        alert('Payment and Order successful!');
        localStorage.removeItem('cart');
  
        navigate('/order-success', {
          state: {
            order: orderData,
            paymentId: response.reference,
          },
        });
      } else {
        alert('Payment verification failed.');
      }
    } catch (err) {
      console.error('Error during payment/order:', err);
      alert('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handlePayment}
      className={`btn uppercase mt-4 w-[60%] font-custom text-[1rem] font-bold text-bodybg bg-textc hover:bg-textc hover:opacity-70 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={loading}
    >
      {loading ? (
        <div className="flex items-center justify-center gap-2">
          <ClipLoader size={20} color="#ffffff" />
          Processing...
        </div>
      ) : (
        'Place Order'
      )}
    </button>
  );
};

export default PaystackButton;

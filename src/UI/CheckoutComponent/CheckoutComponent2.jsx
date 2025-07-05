import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Button from '../../ReusableComponent/Button';
import PaystackButton from './PaystackButton';
import API_URL from '../../Config';

function CheckoutComponent2() {
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
    });

    // Form state
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        phone: '',
        address: '',
        apartment: '',
        city: '',
        state: '',
        email: ''
    });

    // Load cart from localStorage
    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Calculate total
    const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Prepare the data to send
        const orderData = {
            // customerInfo: formData,
            // cart: cart,
            // totalAmount: cartTotal.toFixed(2),
            // orderDate: new Date().toISOString()
            billingDetails: {
                firstname: formData.firstname,
                lastname: formData.lastname,
                email: formData.email
            },
            items: cart.map(item => ({
                    product: item._id,
                    quantity: item.quantity,
            })),
            shippingAddress: {
                address: formData.address,
                city: formData.city,
                state: formData.state
            },
            totalAmount: cartTotal
        };

        console.log(orderData)

        try {
            // Replace with your actual API endpoint
            // const response = await fetch('http://localhost:3600/order/placeorder', {
            const response = await fetch(`${API_URL}/order/placeorder`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData),
                credentials: "include",
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
                console.log(orderData)
            }

            const result = await response.json();
            console.log('Order successful:', result);
            
            // Optionally clear cart after successful order
            // localStorage.removeItem('cart');
            // setCart([]);
            
            
        } catch (error) {
            console.error('Error submitting order:', error);
            // Handle error (show error message to user)
        }
    };

    return (
        <div>
            <div>
                <form>
                    <div className='min-h-[100px] lg:translate-x-20  dark:bg-bodybg  lg:w-[90%] bg-bodybg grid gap-4 grid-cols-1 lg:grid-cols-2 p-[20px] lg:justify-center font-custom lg:p-[30px]'>
                        <div>
                            <div>
                                <h1 className='text-boldtext text-[1.3rem] font-bold'>Billing address</h1>
                            </div>
                            <div>
                                <div className="flex flex-col md:flex md:flex-row justify-between mt-4">
                                    <div className="md:w-[48%]">
                                        <label htmlFor="firstname" className="block mb-1 font-semibold">
                                            First Name <span className='text-[red]'>*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="firstname"
                                            name="firstname"
                                            value={formData.firstname}
                                            onChange={handleInputChange}
                                            placeholder="Type here"
                                            required
                                            className="input input-bordered input-sm w-full  dark:bg-white"
                                        />
                                    </div>

                                    <div className="md:w-[48%]">
                                        <label htmlFor="lastname" className="block mb-1 font-semibold">
                                            Last Name <span className='text-[red]'>*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="lastname"
                                            name="lastname"
                                            value={formData.lastname}
                                            onChange={handleInputChange}
                                            placeholder="Type here"
                                            className="input input-bordered input-sm w-full dark:bg-white"
                                            required
                                        />
                                    </div>
                                    <div className="md:w-[48%]">
                                        <label htmlFor="phone" className="block mb-1 font-semibold">
                                            Phone Number <span className='text-[red]'>*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder="Type here"
                                            className="input input-bordered input-sm w-full dark:bg-white"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='mt-[10px]'>
                                    <label htmlFor="address" className="block mt-1 font-semibold">
                                        Address <span className='text-[red]'>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        placeholder="Street Address"
                                        className="input input-bordered input-sm w-full dark:bg-white"
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="apartment"
                                        value={formData.apartment}
                                        onChange={handleInputChange}
                                        placeholder="Apartment suite, unit etc (optional)"
                                        className="input input-bordered input-sm w-full mt-[10px] dark:bg-white"
                                    />
                                    <label htmlFor="city" className="block mt-1 font-semibold">
                                        Town/City <span className='text-[red]'>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        placeholder="Town/City"
                                        className="input input-bordered input-sm w-full dark:bg-white"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col md:flex md:flex-row justify-between mt-4">
                                    <div className="md:w-[48%]">
                                        <label htmlFor="state" className="block font-semibold">
                                            State<span className='text-[red]'>*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="state"
                                            value={formData.state}
                                            onChange={handleInputChange}
                                            placeholder="Enter your state"
                                            required
                                            className="input input-bordered input-sm w-full dark:bg-white"
                                        />
                                    </div>
                                    <div className="md:w-[48%]">
                                        <label htmlFor="email" className="block font-semibold">
                                            Email<span className='text-[red]'>*</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="Enter your email"
                                            required
                                            className="input input-bordered input-sm w-full dark:bg-white"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div>
                                <h1 className='text-boldtext text-[1.3rem] font-bold'>Your order</h1>
                            </div>
                            <div className="mt-2 p-4 border border-gray-300 rounded-lg">
                                <div className="flex justify-between font-semibold border-b pb-2">
                                    <span>Product</span>
                                    <span>Total</span>
                                </div>
                                {cart.map((item, index) => (
                                    <div key={index} className="flex justify-between py-2">
                                        <span>{item.id} x {item.quantity}</span>
                                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                                    </div>
                                ))}
                                <div className="flex justify-between font-bold mt-4 border-t pt-2">
                                    <span>Total</span>
                                    <span>${cartTotal.toFixed(2)}</span>
                                </div>
                            </div>
                            <div>
                                <PaystackButton
                                    amount={cartTotal}
                                    email={formData.email}
                                    customerInfo={formData}
                                    cart={cart}
                                    className='btn uppercase mt-4 w-[60%] font-custom text-[1rem] font-bold text-bodybg bg-textc hover:bg-textc hover:opacity-70'
                                />
                                {/* <Button
                                    type="submit"
                                    className='btn uppercase mt-4 w-[60%] font-custom text-[1rem] font-bold text-bodybg bg-textc hover:bg-textc hover:opacity-70'
                                    label='place order'
                                /> */}
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CheckoutComponent2;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API_URL from '../../Config';

function AdminSignUp() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({
        email: null,
        password: null,
        general: null
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: null,
                general: null
            }));
        }
    };

    const validateForm = () => {
        let valid = true;
        const newErrors = {
            email: null,
            password: null,
            general: null
        };

        // Email validation
        if (!formData.email) {
            newErrors.email = "Email is required";
            valid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
            valid = false;
        }

        // Password validation
        if (!formData.password) {
            newErrors.password = "Password is required";
            valid = false;
        } else if (formData.password.length < 2) {
            newErrors.password = "Password must be at least 3 characters";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) return;
        
        setIsSubmitting(true);
        setErrors({ email: null, password: null, general: null });

        try {
            const response = await fetch(`${API_URL}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                // Handle server-side validation errors
                const serverErrors = {
                    email: data.emailMessage || null,
                    password: data.passwordMessage || null,
                    general: data.message || "Login failed. Please try again."
                };
                setErrors(serverErrors);
                return;
            }

            // Success case
            localStorage.setItem("token", data.token);
            localStorage.setItem("username", data.username);
            navigate('/accon', { replace: true }); // Adjust this to your desired redirect path

            
            // setShowSuccess(true);
            // setTimeout(() => {
            //     window.location.reload();
            //     navigate('/accon', { replace: true }); // Adjust this to your desired redirect path
            // }, 1500);

        } catch (err) {
            console.error("Login failed:", err);
            setErrors(prev => ({
                ...prev,
                general: "Network error. Please try again."
            }));
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <section className="bg-white  dark:bg-gray-900">
                <div className="container px-6 py-24 mx-auto lg:py-32">
                    <div className="lg:flex">
                        <div className="lg:w-1/2">
                            <h1 className='font-custom text-3xl font-bold text-boldtext'>ACCON LAB</h1>
                            <h1 className="mt-4 text-gray-600 dark:text-gray-300 md:text-lg">Welcome back</h1>
                            <h1 className="mt-4 text-2xl font-medium text-gray-800 capitalize lg:text-3xl dark:text-white">
                                Login to your account
                            </h1>
                        </div>

                        <div className="mt-8 lg:w-1/2 lg:mt-0">
                            {showSuccess && (
                                <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
                                    Login successful! Redirecting...
                                </div>
                            )}
                            
                            {errors.general && (
                                <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
                                    {errors.general}
                                </div>
                            )}

                            <form 
                                className="w-full lg:max-w-xl"
                                onSubmit={handleSubmit}
                            >
                                <div className="relative flex items-center">
                                    <span className="absolute">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </span>

                                    <input 
                                        type="email" 
                                        name="email" 
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" 
                                        placeholder="Email address"
                                        disabled={isSubmitting}
                                    />
                                </div>
                                {errors.email && (
                                    <p className="mt-1 text-red-600 text-sm">{errors.email}</p>
                                )}

                                <div className="relative flex items-center mt-4">
                                    <span className="absolute">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </span>

                                    <input 
                                        type="password" 
                                        name="password" 
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" 
                                        placeholder="Password"
                                        disabled={isSubmitting}
                                    />
                                </div>
                                {errors.password && (
                                    <p className="mt-1 text-red-600 text-sm">{errors.password}</p>
                                )}

                                <div className="mt-8 md:flex md:items-center">
                                    <button 
                                        type="submit" 
                                        className={`w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform rounded-lg md:w-1/2 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 ${isSubmitting ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-400'}`}
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center justify-center">
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Processing...
                                            </span>
                                        ) : 'Sign in'}
                                    </button>

                                    <a href="/forgot-password" className="inline-block mt-4 text-center text-blue-500 md:mt-0 md:mx-6 hover:underline dark:text-blue-400">
                                        Forgot your password?
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="mt-8 md:mt-24 sm:flex sm:items-center">
                        <h3 className="text-blue-500 dark:text-blue-400 sm:w-1/2">Social networks</h3>
                        <div className="flex items-center mt-4 sm:mt-0 -mx-1.5 sm:w-1/2">
                            {/* Social icons remain the same */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AdminSignUp;
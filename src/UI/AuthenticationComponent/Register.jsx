import React, { useState } from 'react';
import API_URL from '../../Config';

function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState('');


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError('');
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        // Debugging - log the full request details
        console.log('Making request to:', `${API_URL}/auth`);
        console.log('Request payload:', {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: '******' // Don't log actual password
        });
  
        const response = await fetch(`${API_URL}/auth`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json' // Explicitly ask for JSON
          },
          body: JSON.stringify({
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password
          }),
        });
  
        // Check if response is successful (2xx status)
        if (!response.ok) {
          // Try to get error message from response
          const errorData = await response.text();
          console.error('Server response:', errorData);
          
          // Handle common error cases
          if (response.status === 404) {
            throw new Error('Registration endpoint not found (404)');
          } else if (response.status === 500) {
            throw new Error('Server error occurred. Please try again later.');
          } else {
            throw new Error(errorData || `Registration failed with status ${response.status}`);
          }
        }
  
        // Try to parse JSON only if response is OK
        const data = await response.json();
        
        // Registration successful
        alert('Registration successful!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
        
      } catch (error) {
        console.error('Registration error:', error);
        
        // Special handling for HTML responses
        if (error.message.includes('<!DOCTYPE html>')) {
          setApiError('Server error occurred. Please try again later.');
        } 
        // Handle network errors
        else if (error.name === 'TypeError' && error.message.includes('Failed to fetch')) {
          setApiError('Network error. Please check your connection.');
        }
        else {
          setApiError(error.message || 'Registration failed. Please try again.');
        }
      } finally {
        setIsSubmitting(false);
      }
    }
  };
  return (
    <div>
      <section className="  dark:bg-gray-900 w-full flex justify-center ">
        <div className="container h-[100vh]  flex items-center justify-center  box-border">
          <form onSubmit={handleSubmit} className=" w-[98%] md:w-[90%] lg:w-[50%] p-[10px]   register_shadow">
            <div className="flex justify-center mx-auto">
              <h1 className='font-custom text-[1rem] font-bold text-boldtext'>ACCON SCIENTIFIC/<br />LAB EQUIPMENT</h1>
            </div>
            
            <div className="flex items-center justify-center mt-6">
              <a href="#" className="w-1/3 pb-4 font-medium text-center text-gray-500 capitalize border-b dark:border-gray-400 dark:text-gray-300">
                sign in
              </a>

              <a href="#" className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white">
                sign up
              </a>
            </div>

            <div className="relative flex items-center mt-8">
              <span className="absolute">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-boldtext dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>

              <input
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                className={`block w-full py-3 border-boldtext border-[2px] text-gray-700 bg-white rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 ${errors.firstName ? 'border-red-500' : ''}`}
                placeholder="FirstName"
              />
            </div>
            {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}

            <div className="relative flex items-center mt-4">
              <span className="absolute">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-boldtext dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>

              <input
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                className={`block w-full py-3 border-boldtext border-[2px] text-gray-700 bg-white rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 ${errors.lastName ? 'border-red-500' : ''}`}
                placeholder="Lastname"
              />
            </div>
            {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}

            <div className="relative flex items-center mt-4">
              <span className="absolute">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-boldtext dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>

              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={`block w-full py-3 text-gray-700 bg-white border-boldtext border-[2px] rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 ${errors.email ? 'border-red-500' : ''}`}
                placeholder="Email address"
              />
            </div>
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}

            <div className="relative flex items-center mt-4">
              <span className="absolute">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-boldtext dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>

              <input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className={`block w-full px-10 py-3 text-gray-700 bg-white border-boldtext border-[2px] rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 ${errors.password ? 'border-red-500' : ''}`}
                placeholder="Password"
              />
            </div>
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}

            <div className="relative flex items-center mt-4">
              <span className="absolute">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-boldtext dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>

              <input
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`block w-full px-10 py-3 text-gray-700 bg-white border-boldtext border-[2px] rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 ${errors.confirmPassword ? 'border-red-500' : ''}`}
                placeholder="Confirm Password"
              />
            </div>
            {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}

            {apiError && (
  <div className="mb-4 p-2 text-red-500 text-center bg-red-50 rounded">
    {apiError.startsWith('<!DOCTYPE html>') 
      ? 'Server error occurred. Please try again later.' 
      : apiError}
  </div>
)}

            <div className="mt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Processing...' : 'Sign Up'}
              </button>

              <div className="mt-6 text-center">
                <a href="#" className="text-sm text-blue-500 hover:underline dark:text-blue-400">
                  Already have an account?
                </a>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Register;
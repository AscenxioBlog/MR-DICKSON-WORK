import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContxt } from "./AuthContext";
import API_URL from "../../Config";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  let { setIsLoggedIn } = useContext(AuthContxt);
  const from = location.state?.from?.pathname || '/'; // Default to homepage

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  let [errors, setErrors] = useState({});


  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/auth/login`, {
      // const response = await fetch(`http://localhost:3600/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        credentials: "include",
      });

      const result = await response.json();
      console.log("Login response:", result);
      setIsLoggedIn(true);

      if (response.status === 200) {
        alert(result.message);
        // Redirect to previous page if exists, else home
        navigate(from, { replace: true });
      } else {
        setErrors({
          email: result.emailMessage || null,
          password: result.passwordMessage || null,
        });
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div>
      <form
        onSubmit={handlesubmit}
        className="w-full h-screen flex justify-center items-center "
      >
      <div className="bg-[#fff5] p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className=" text-2xl font-bold text-center text-gray-700 mb-6">
          Log In
        </h2>
        {/* <form onSubmit={forhandleSubmit}> */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm text-gray-600 font-semibold"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              className={`w-full px-4 py-2 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
              onChange={handleInputChange}
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">{errors.email}</p>
            )}
          </div>
          <div className="mb-3">
            <label
              htmlFor="password"
              className="block text-sm text-gray-600 font-semibold"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              className={`w-full px-4 py-2 border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
              onChange={handleInputChange}
            />
            {errors.password && (
              <p className="text-sm text-red-500 mt-1">{errors.password}</p>
            )}
          </div>
        
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 mb-3 mt-4 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Log In
          </button>
          <div className=" flex justify-between items-center">
            <span className=" text-[0.7rem] text-black">Don't have an account? <Link to="/register" className=" text-blue-600 underline">sign-up here </Link></span>
            <Link to="/password-reset" className=" text-[0.9rem] underline cursor-pointer text-blue-600 ">
              Forgot password?
            </Link>
          </div>
          

        {/* </form> */}
      </div>
        {/* <div className="h-[450px] w-full md:w-[80%] lg:w-[50%] flex flex-col items-center justify-center space-y-6">
          <div className="h-[120px] w-[80%] text-center flex flex-col justify-center">
            <h1 className="text-[1.5rem] font-bold text-boldtext">
              Welcome to Accon Lab
            </h1>
            <p className="text-[1.1rem]">
              Type your e-mail to log in or create a Accon Lab account.
            </p>
          </div>

          <input
            type="text"
            required
            placeholder="email"
            name="email"
<<<<<<< HEAD
            // value={formData.email}
            className="h-[55px] w-[80%] border-boldtext border-[2px] rounded-md"
=======
            value={formData.email}
            className="h-[55px] w-[80%] border-boldtext border-[2px] rounded-md px-4"
>>>>>>> 18b4e2828f4c7829e6dad1c269e000c213444a21
            onChange={handleInputChange}
          />

          <div className="relative w-[80%]">
            <input
              type={showPassword ? "text" : "password"}
              required
              placeholder="password"
              name="password"
              value={formData.password}
              className="h-[55px] w-full border-boldtext border-[2px] rounded-md px-4 pr-12"
              onChange={handleInputChange}
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-boldtext"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </button>
          </div>

          <div className="w-[80%] text-center">
            <input
              type="submit"
              value="Continue"
              className="h-[50px] cursor-pointer w-full bg-boldtext font-semibold text-white rounded-md hover:bg-textc"
            />

            <p className="text-gray-500 text-[14px] mt-3">
              <span>Don't have an account? </span>
              <Link to="/register">
                <span className="text-textc underline">Register</span>
              </Link>
            </p>
          </div>
        </div> */}
      </form>
    </div>
  );
}

export default Login;
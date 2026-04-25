import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = (e) => {
    if (!formData.email && formData.password) {
      // newErrors.email = "Email is required";
      setError("Email is required");
      return false;
    }

    if (formData.password.length < 6) {
      setError("Password must be atleast 6 characters");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) return;

    console.log("User Data:", formData);
    navigate("/homepage");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 rounded-xl shadow-md bg-white">
        <h1 className="text-xl font-bold text-center mb-5">Login</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="email"
            onChange={handleChange}
            type="email"
            placeholder="Email"
            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500"
          />
          <input
            name="password"
            onChange={handleChange}
            type="password"
            placeholder="Enter your password"
            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500"
          />

          {error && (
            <div className="bg-red-100 text-red-600 border border-red-300 p-2 rounded text-center">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full p-3 cursor-pointer text-white font-semibold rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:scale-105 transition"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-gray-600 text-center mt-4">
          Don't have an account?{" "}
          <Link
            to="/SignUp"
            className="text-indigo-600 font-medium hover:underline"
          >
            Sign Up
          </Link>
        </p>
        <p>
          <Link to="/forgot-password" className="text-indigo-600 font-medium hover:underline">Forgot your password?</Link>
        </p>
       
      </div>
    </div>
  );
};

export default Login;
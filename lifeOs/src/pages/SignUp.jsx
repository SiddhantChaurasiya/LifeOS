import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return false;
    }
    if (!/^[0-9]{10}$/.test(formData.phone)) {
      setError('Enter valid 10-digit phone number');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) return;

    console.log('User Data:', formData);
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
      
      <div className="bg-white w-full max-w-xl p-10 rounded-xl shadow-2xl">
        
        <h2 className="text-center text-3xl font-semibold text-gray-800 mb-8">
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Username + Email */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500"
              required
            />
          </div>

          {/* First + Last Name */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500"
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500"
            />
          </div>

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500"
            required
          />

          {/* Passwords */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500"
              required
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500"
              required
            />
          </div>

          {/* Error */}
          {error && (
            <div className="bg-red-100 text-red-600 border border-red-300 p-2 rounded text-center">
              {error}
            </div>
          )}

          {/* Button */}
          <button
            type="submit"
            className="w-full cursor-pointer p-3 text-white font-semibold rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:scale-105 transition"
          >
            Register
          </button>
        </form>

        {/* Footer */}
        <div className="text-center mt-6 text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-indigo-600 font-medium hover:underline">
            Login here
          </Link>
        </div>

      </div>
    </div>
  );
};

export default SignUp;
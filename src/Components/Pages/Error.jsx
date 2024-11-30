import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-200 px-4">
      {/* Error Code */}
      <h1 className="text-9xl font-extrabold text-red-500">404</h1>

      {/* Error Message */}
      <h2 className="text-2xl mt-4 font-semibold text-gray-100">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-400 mt-2 text-center">
        The page you are looking for might have been moved, deleted, or never
        existed.
      </p>

      {/* Navigation Buttons */}
      <div className="mt-6 flex space-x-4">
        <button
          onClick={() => navigate(-1)} // Go back to the previous page
          className="px-6 py-3 text-lg font-medium bg-red-500 hover:bg-red-600 text-white rounded-md shadow-md transition-transform transform hover:scale-105"
        >
          Go Back
        </button>
        <button
          onClick={() => navigate("/")} // Navigate to the home page
          className="px-6 py-3 text-lg font-medium bg-gray-700 hover:bg-gray-600 text-white rounded-md shadow-md transition-transform transform hover:scale-105"
        >
          Go to Home
        </button>
      </div>

      {/* Decorative Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-800 opacity-30 pointer-events-none"></div>
    </div>
  );
};

export default ErrorPage;

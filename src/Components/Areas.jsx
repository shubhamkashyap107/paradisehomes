import React from 'react';
import { FaMapMarkerAlt, FaCity, FaGlobe } from 'react-icons/fa'; // Import icons

const Areas = () => {
  const areas = ["Inderpuri", "Naraina Vihar", "Gurugram"];

  return (
    <div className="text-center mt-16 p-14">
      {/* Title with Icons */}
      <div className="flex items-center justify-center space-x-4 mb-8">
        <h3 className="sm:text-4xl text-3xl font-bold text-transparent text-white bg-clip-text">
          Areas We Serve
        </h3>
        <FaMapMarkerAlt className="text-red-600 sm:w-8 sm:h-8 w-6 h-6"   />

      </div>

      {/* Areas Section */}
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {areas.map((area, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 rounded-lg shadow-lg p-6 w-64 hover:scale-105 transform transition-transform duration-300 hover:shadow-2xl"
          >
            <div className="flex items-center justify-center space-x-3">
              <FaCity className="text-yellow-400 w-6 h-6" />
              <span className="text-2xl font-semibold text-white">{area}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Areas;

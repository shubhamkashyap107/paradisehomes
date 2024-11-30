import React from 'react';

const Map = () => {
  return (
    <div className="w-full mx-auto p-6 sm:p-8 mt-5 bg-gray-900 rounded-lg">
      {/* Styled h1 with underline */}
      <h1 className="w-fit mx-auto text-2xl sm:text-3xl font-bold text-blue-500 mb-6 border-b-2 border-blue-500 pb-2">
        Our Location
      </h1>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.084514452412!2d77.14176648388613!3d28.62722902159893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03a0f3acdee7%3A0x9d110c3cd76625d!2sParadise%20Homes!5e0!3m2!1sen!2sus!4v1731697478374!5m2!1sen!2sus"
        width="100%"
        height="350" // Default height for larger screens
        className="sm:h-[450px] h-[350px]" // Adjusted height for mobile screens (350px) and larger screens (450px)
        style={{ border: '0', borderRadius: '8px' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Paradise Homes Location"
      />
    </div>
  );
};

export default Map;

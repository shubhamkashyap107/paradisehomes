import React, { useEffect, useState } from "react";

const ContactInfo = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check if the device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // You can adjust the breakpoint as needed
    };

    checkMobile();
    window.addEventListener('resize', checkMobile); // Re-check on window resize

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const mailToLink = isMobile
    ? 'mailto:mailtoparadisehomes@gmail.com'
    : 'https://mail.google.com/mail/?view=cm&fs=1&to=mailtoparadisehomes@gmail.com';

  return (
    <div className="rounded-lg bg-gray-900 text-white p-8 mt-5">
      {/* Styled h1 with underline */}
      <h1 className="w-fit mx-auto text-2xl font-bold text-blue-500 mb-6 border-b-2 border-blue-500 pb-2">
        Contact Info
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {/* Phone */}
        <div className="bg-gray-800 border border-gray-700 p-4 sm:p-6 w-full sm:w-11/12 md:w-full flex items-center space-x-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <i className="fa-solid fa-phone text-blue-500 text-3xl"></i>
          <div>
            <p className={`text-lg sm:text-xl text-white font-semibold ${isMobile ? 'text-sm' : ''}`}>+91 9811043593</p>
            <p className={`text-lg sm:text-xl text-white font-semibold ${isMobile ? 'text-sm' : ''}`}>+91 9999800990</p>
          </div>
        </div>

        {/* Email */}
        <div className="bg-gray-800 border border-gray-700 p-4 sm:p-6 w-full sm:w-11/12 md:w-full flex items-center space-x-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <i className="fa-regular fa-envelope text-red-500 text-3xl"></i>
          <a
            href={mailToLink}
            target={isMobile ? '_self' : '_blank'} // Open in same tab for mobile, new tab for browsers
            className={`text-lg sm:text-xl text-white font-semibold transition-colors duration-200 hover:text-blue-500 ${isMobile ? 'text-sm' : ''}`}
          >
            mailtoparadisehomes@gmail.com
          </a>
        </div>

        {/* Instagram */}
        <div className="bg-gray-800 border border-gray-700 p-4 sm:p-6 w-full sm:w-11/12 md:w-full flex items-center space-x-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <i className="fa-brands fa-instagram text-pink-500 text-3xl"></i>
          <a
            href="https://www.instagram.com/paradisehomesdelhi"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-lg sm:text-xl text-white font-semibold transition-colors duration-200 hover:text-blue-500 ${isMobile ? 'text-sm' : ''}`}
          >
            @paradisehomesdelhi
          </a>
        </div>

        {/* Location */}
        <div className="bg-gray-800 border border-gray-700 p-4 sm:p-6 w-full sm:w-11/12 md:w-full flex items-center space-x-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <i className="fa-solid fa-location-dot text-green-500 text-3xl"></i>
          <p className={`text-lg sm:text-xl text-white font-semibold ${isMobile ? 'text-sm' : ''}`}>
            ER-3, Inderpuri, New Delhi - 110012
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;

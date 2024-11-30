import React, { useEffect, useState } from 'react'; 
import { Link } from 'react-router-dom'; // Import Link for navigation

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 py-10 px-4 lg:py-14 lg:px-16 font-sans tracking-wide relative">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8">
        {/* Left Section: Links + Contact Info */}
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          
          {/* Contact Info Section */}
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Contact Info</h2>
            <ul className="space-y-4 text-gray-300">
              {/* Mobile Numbers Section */}
              <li className="flex items-center space-x-4 text-sm">
                <i className="fa-solid fa-phone text-xl"></i>
                <span>
                  +91 9811043593, +91 9999800990
                </span>
              </li>

              {/* Addresses Section */}
              <li className="flex items-center space-x-4 text-sm">
                <i className="fa-solid fa-location-dot text-xl"></i>
                <span>
                  Head Office - ER-3, Inderpuri, New Delhi - 110012 <br />
                  Branch Office - Plot No 742, Udyog Vihar Phase V, Gurugram, Haryana - 122016
                </span>
              </li>

              <EmailLink />

              {/* Instagram */}
              <li className="flex items-center space-x-4 text-sm">
                <i className="fa-brands fa-instagram text-xl transition-transform duration-200 hover:scale-110"></i>
                <a
                  href="https://www.instagram.com/paradisehomesdelhi"
                  target="_blank"
                  className="transition-colors duration-200 hover:text-pink-500"
                >
                  @paradisehomesdelhi
                </a>
              </li>

            </ul>
          </div>

          {/* Links Section - Hidden on mobile */}
          <div className="lg:block hidden">
            <h2 className="text-white text-lg font-semibold mb-4">Links</h2>
            <ul className="space-y-4">
              <li>
                <Link to="/Home" className="text-gray-300 hover:text-white text-sm transition-all">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-white text-sm transition-all">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white text-sm transition-all">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white text-sm transition-all">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section: Logo */}
        <div className="flex justify-center lg:justify-start">
          <Link to="#">
            <img src="src/assets/Logos/finalPng.png" alt="logo" className="w-60 mx-auto lg:mx-0" />
          </Link>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-8 border-gray-600" />

      {/* Copyright */}
      <p className="text-gray-300 text-sm text-center lg:text-left">
        Paradise Homes. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

function EmailLink() {
  const [isMobile, setIsMobile] = useState(false);

  // Check if the device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 400); // You can adjust the breakpoint as needed
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
    <li className="flex items-center space-x-4 text-sm">
      <i className="fa-regular fa-envelope text-xl transition-transform duration-200 hover:scale-110"></i>
      <a
        href={mailToLink}
        target={isMobile ? '_self' : '_blank'} // Open in same tab for mobile, new tab for browsers
        className="transition-colors duration-200 hover:text-blue-500"
      >
        mailtoparadisehomes@gmail.com
      </a>
    </li>
  );
}

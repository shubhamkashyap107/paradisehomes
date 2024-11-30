import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

let logo = "https://res.cloudinary.com/ddx0hz1ku/image/upload/v1732955359/fwx5qxzkaeeus5icnivk.png";
let text1 = "https://res.cloudinary.com/ddx0hz1ku/image/upload/v1732955359/qn9m7wpkigdsyacfkjlm.png";
let text2 = "https://res.cloudinary.com/ddx0hz1ku/image/upload/f_auto,q_auto/rtapk4thfxljrjxfblq7";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null); // Reference to the dropdown menu

  // Toggle the mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prevState => !prevState);
  };

  // Close the mobile menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest('button')) {
        setIsMobileMenuOpen(false);
      }
    };


    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close the menu on link click
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black shadow-md z-50 sm:h-24 sm:p-0 p-2 h-18">
      <div className="max-w-screen-lg px-4 py-2 mx-auto flex items-center justify-between text-slate-800 lg:px-8 lg:py-3">
        <div className="flex gap-4">
          <img className="sm:h-16 h-10" src={logo} alt="Logo" />
          <div className="flex flex-col gap-1">
            <img src={text1} className="sm:h-6 sm:w-48 w-24" alt="Text 1" />
            <img src={text2} className="sm:h-8 sm:w-48 w-24" alt="Text 2" />
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <li className="flex items-center p-1 text-sm gap-x-2 text-white">
              <Link
                to="/home"
                className={`relative flex items-center ${
                  location.pathname === '/home' ? 'active-link' : ''
                }`}
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li className="flex items-center p-1 text-sm gap-x-2 text-white">
              <Link
                to="/projects"
                className={`relative flex items-center ${
                  location.pathname === '/projects' ? 'active-link' : ''
                }`}
                onClick={handleLinkClick}
              >
                Projects
              </Link>
            </li>
            <li className="flex items-center p-1 text-sm gap-x-2 text-white">
              <Link
                to="/services"
                className={`relative flex items-center ${
                  location.pathname === '/services' ? 'active-link' : ''
                }`}
                onClick={handleLinkClick}
              >
                Services
              </Link>
            </li>
            <li className="flex items-center p-1 text-sm gap-x-2 text-white">
              <Link
                to="/contact"
                className={`relative flex items-center ${
                  location.pathname === '/contact' ? 'active-link' : ''
                }`}
                onClick={handleLinkClick}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
          type="button"
          onClick={toggleMobileMenu}
        >
          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
  ref={menuRef}
  className={`lg:hidden bg-gray-800 text-white absolute top-full left-0 w-full py-4 rounded-lg shadow-lg transition-all ease-in-out duration-300 ${
    isMobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto visible' : 'opacity-0 translate-y-[-10px] pointer-events-none invisible'
  }`}
  style={{ zIndex: 99 }}
>
  <ul className="flex flex-col gap-3 text-center">
    <li>
      <Link
        to="/home"
        className="text-xl p-3 hover:bg-gray-700 hover:rounded-md transition duration-200"
        onClick={handleLinkClick}
      >
        Home
      </Link>
    </li>
    <li>
      <Link
        to="/projects"
        className="text-xl p-3 hover:bg-gray-700 hover:rounded-md transition duration-200"
        onClick={handleLinkClick}
      >
        Projects
      </Link>
    </li>
    <li>
      <Link
        to="/services"
        className="text-xl p-3 hover:bg-gray-700 hover:rounded-md transition duration-200"
        onClick={handleLinkClick}
      >
        Services
      </Link>
    </li>
    <li>
      <Link
        to="/contact"
        className="text-xl p-3 hover:bg-gray-700 hover:rounded-md transition duration-200"
        onClick={handleLinkClick}
      >
        Contact
      </Link>
    </li>
  </ul>
</div>

    </nav>
  );
}

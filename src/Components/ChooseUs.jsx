import React, { useRef, useState, useEffect } from 'react';
import { FaRocket, FaHammer, FaTree, FaPencilAlt, FaHandshake } from 'react-icons/fa';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const featuresData = [
  {
    title: "Innovation-Driven Design",
    description:
      "At Paradise Homes, innovation is at the heart of everything we do. Our team leverages the latest technologies and cutting-edge design trends to create homes that are not only stylish but also forward-thinking.",
    icon: <FaRocket className="text-white w-8 h-8" />,
  },
  {
    title: "Durable Craftsmanship",
    description:
      "We take pride in the superior craftsmanship of our homes, ensuring they are built to last. Every material used is selected for its durability and long-term performance.",
    icon: <FaHammer className="text-white w-8 h-8" />,
  },
  {
    title: "Sustainable Living",
    description:
      "Paradise Homes is dedicated to building environmentally responsible homes. We incorporate sustainable practices to minimize environmental impact while maximizing energy efficiency.",
    icon: <FaTree className="text-white w-8 h-8" />,
  },
  {
    title: "Tailored Solutions",
    description:
      "We offer personalized solutions and customization options, allowing you to create a home that reflects your individual style and preferences.",
    icon: <FaPencilAlt className="text-white w-8 h-8" />,
  },
  {
    title: "Trust and Excellence",
    description:
      "At Paradise Homes, we build more than just houses; we build trust. Our commitment to excellence ensures an exceptional living experience.",
    icon: <FaHandshake className="text-white w-8 h-8" />,
  },
];

const ChooseUs = () => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Update button states based on scroll position
  const updateScrollButtons = () => {
    const scrollContainer = scrollContainerRef.current;
    setCanScrollLeft(scrollContainer.scrollLeft > 0);
    setCanScrollRight(
      scrollContainer.scrollLeft < scrollContainer.scrollWidth - scrollContainer.clientWidth
    );
  };

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  // Listen for scroll events and update button states
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    scrollContainer.addEventListener('scroll', updateScrollButtons);

    return () => {
      scrollContainer.removeEventListener('scroll', updateScrollButtons);
    };
  }, []);

  return (
    <div className="bg-black py-12 relative">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text mb-12">
          Why Choose Us
        </h2>
        <div className="relative">
          {/* Left Scroll Button */}
          <button
            onClick={scrollLeft}
            disabled={!canScrollLeft} // Disable if at the left edge
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-600 text-white rounded-full p-3 z-10 ${!canScrollLeft ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <FaChevronLeft className="w-6 h-6" />
          </button>

          <div
            ref={scrollContainerRef}
            className="overflow-x-auto flex space-x-8 pb-6"
          >
            {featuresData.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800 text-white rounded-lg shadow-lg w-80 flex-shrink-0"
              >
                <div
                  className="flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-20 w-20 mx-auto mt-6 rounded-full"
                >
                  {feature.icon}
                </div>
                <div className="px-6 py-8 text-center">
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Scroll Button */}
          <button
            onClick={scrollRight}
            disabled={!canScrollRight} // Disable if at the right edge
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-600 text-white rounded-full p-3 z-10 ${!canScrollRight ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <FaChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;

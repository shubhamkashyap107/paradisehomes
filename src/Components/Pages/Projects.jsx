import React, { useState } from 'react';
import { motion } from 'framer-motion';
import nv18 from "../../assets/Details/nv18.JPG"
import dlf19 from "../../assets/Details/dlf19.jpeg"
import dlf20 from "../../assets/Details/dlf20.jpeg"
import ip21 from "../../assets/Details/ip21.PNG"
import ip22 from "../../assets/Details/ip22.JPG"



const timelineData = [
  { year: "2018", address: "A-82, Naraina Vihar, New Delhi", image: nv18, details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, debitis vero! Rerum maxime atque accusantium, at vero maiores possimus accusamus quod repellat dolore, quae odit, non itaque velit quasi aperiam!" },
  { year: "2019", address: "N14/1, DLF-2, Gurugram", image: dlf19 , details: "Details about the event in 2018." },
  { year: "2020", address: "K-12A/13, DLF-2, Gurugram", image: dlf20, details: "Details about the event in 2020." },
  { year: "2021", address: "EF-13, Inderpuri, New Delhi", image: ip21, details: "Details about the event in 2023." },
  { year: "2022", address: "RA-09, Inderpuri, New Delhi", image: ip22, details: "Details about the event in 2023." },
  { year: "2021", address: "EF-13, Inderpuri, New Delhi", image: ip21, details: "Details about the event in 2023." },
  { year: "2021", address: "EF-13, Inderpuri, New Delhi", image: ip21, details: "Details about the event in 2023." },
];

const Timeline = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <div className="container mx-auto p-6 bg-slate-200">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Projects Delivered</h1>

      <div className="relative">
        {/* Road-like line with dashed center */}
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-full flex flex-col items-center">
          <div className="w-8 bg-gray-800 h-full relative rounded-lg overflow-hidden">
            {/* Dashed white center line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-transparent border-dashed border-2 border-white opacity-80"></div>
          </div>
        </div>

        {/* Timeline Events */}
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            className={`flex items-center mb-10 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <motion.div
              className={`relative w-6/12 p-6 bg-white shadow-lg rounded-lg flex items-center ${
                index % 2 === 0 ? 'ml-16' : 'mr-16'
              }`}
              onMouseEnter={() => setExpandedIndex(index)}
              onMouseLeave={() => setExpandedIndex(null)}
              style={{
                width: expandedIndex === index ? '80vw' : '50%', // Change width on expand
                height: expandedIndex === index ? '70vh' : 'auto', // Change height on expand
                overflow: 'hidden', // Prevent overflow when expanded
                transition: 'width 0.3s ease, height 0.3s ease',
                zIndex: expandedIndex === index ? 20 : 1, // Keep expanded card on top
              }}
            >
              <img
                src={item.image}
                alt={`Event in ${item.year}`}
                className="w-24 h-24 object-cover rounded-full mr-6"
              />
              <div className=''>
                <span className="text-blue-500 font-bold text-lg">{item.year}</span>
                <p className="text-gray-600 mt-2">{item.address}</p>
                {/* Display additional details when card is expanded */}
                {expandedIndex === index && (
                  <p className="mt-4 text-gray-800">{item.details}</p>
                )}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;

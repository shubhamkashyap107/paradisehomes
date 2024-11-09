import React, { useState } from 'react';
import { motion } from 'framer-motion';
import nv18 from "../../assets/Details/nv18.JPG"
import dlf19 from "../../assets/Details/dlf19.jpeg"
import dlf20 from "../../assets/Details/dlf20.jpeg"
import ip21 from "../../assets/Details/ip21.PNG"
import ip22 from "../../assets/Details/ip22.JPG"




const timelineData = [
  { year: "2018", address: "A-82, Naraina Vihar, New Delhi", image: nv18, details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, debitis vero! Rerum maxime atque accusantium, at vero maiores possimus accusamus quod repellat dolore, quae odit, non itaque velit quasi aperiam!" },
  { year: "2019", address: "N14/1, DLF-2, Gurugram", image: dlf19, details: "Details about the event in 2018." },
  { year: "2020", address: "K-12A/13, DLF-2, Gurugram", image: dlf20, details: "Details about the event in 2020." },
  { year: "2021", address: "EF-13, Inderpuri, New Delhi", image: ip21, details: "Details about the event in 2023." },
  { year: "2022", address: "RA-09, Inderpuri, New Delhi", image: ip22, details: "Details about the event in 2023." },
  { year: "2021", address: "EF-13, Inderpuri, New Delhi", image: ip21, details: "Details about the event in 2023." },
  { year: "2021", address: "EF-13, Inderpuri, New Delhi", image: ip21, details: "Details about the event in 2023." },
];

const Timeline = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Timeline</h2>
      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full"></div>
        
        {timelineData.map((event, index) => (
          <div key={index} className="mb-12 flex items-center w-full">
            <div className={`flex items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
              {/* Event image */}
              <div className="w-1/2 p-4">
                <img src={event.image} alt={event.year} className="rounded-lg shadow-lg mx-auto" />
              </div>
              
              {/* Event content */}
              <div className="w-1/2 p-4 relative">
                <div className={`relative ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                  <span className="text-lg font-bold text-blue-500">{event.year}</span>
                  <h3 className="text-xl font-semibold">{event.address}</h3>
                  <p className="text-gray-700 mt-2">{event.details}</p>
                </div>

                {/* Dot on the timeline line */}
                <span className={`absolute top-1/2 transform -translate-y-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-white ${index % 2 === 0 ? '-right-3' : '-left-3'}`} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;

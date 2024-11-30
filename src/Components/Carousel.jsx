import React, { useState, useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable";

import image0 from "../assets/Carousel/0.jpg";
import image1 from "../assets/Carousel/1.jpeg";
import image5 from "../assets/Carousel/2.jpg";
import image3 from "../assets/Carousel/3.jpg";
import image4 from "../assets/Carousel/4.jpg";
import image2 from "../assets/Carousel/5.jpg";

// Mobile-specific images
import m1 from "../assets/Carousel/m1.jpeg";
import m2 from "../assets/Carousel/m2.jpg";
import m3 from "../assets/Carousel/m3.jpeg";

// Video for mobile
import mobileVideo from "../assets/Carousel/reel.mp4";

const images = [image0, image1, image2, image3, image4, image5];
const mobileImages = [m1, m2, m3];

const Carousel = ({ interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  // Detect the screen size and set the images/video accordingly
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const currentImages = isMobile ? mobileImages : images;

  // Carousel functionality for desktop
  useEffect(() => {
    if (!isMobile) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === currentImages.length - 1 ? 0 : prevIndex + 1
        );
      }, interval);

      return () => clearInterval(timer);
    }
  }, [currentImages.length, interval, isMobile]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === currentImages.length - 1 ? 0 : prevIndex + 1
      );
    },
    onSwipedRight: () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? currentImages.length - 1 : prevIndex - 1
      );
    },
    trackMouse: true,
  });

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  return (
    <div
      {...swipeHandlers}
      className="relative w-full overflow-hidden bg-gray-100 mt-16 sm:mt-24"
    >
      {/* Render Video for Mobile */}
      {isMobile ? (
        <div className="relative w-full h-[80vh]">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            muted={isMuted}
            loop
            playsInline
            src={mobileVideo}
          ></video>

          {/* Mute/Unmute Button */}
          <button
            onClick={toggleMute}
            className="absolute top-4 right-4 bg-black text-white p-2 rounded-full z-10"
          >
            {isMuted ? "Unmute" : "Mute"}
          </button>
        </div>
      ) : (
        // Render Carousel for Desktop
        <div className="relative w-full h-[80vh] flex items-center justify-center">
          <img
            src={currentImages[currentIndex]}
            alt={`carousel image ${currentIndex}`}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Indicators for carousel (Only for Desktop) */}
      {!isMobile && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {currentImages.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                index === currentIndex ? "bg-white" : "bg-gray-400"
              }`}
            ></span>
          ))}
        </div>
      )}

      {/* Carousel Navigation Buttons for Desktop */}
      {!isMobile && (
        <div className="absolute inset-y-0 left-0 flex items-center z-10">
          <button
            onClick={() => {
              setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? currentImages.length - 1 : prevIndex - 1
              );
            }}
            className="bg-black text-white p-4 rounded-full shadow-lg ml-2"
          >
            &#8592;
          </button>
        </div>
      )}
      {!isMobile && (
        <div className="absolute inset-y-0 right-0 flex items-center z-10">
          <button
            onClick={() => {
              setCurrentIndex((prevIndex) =>
                prevIndex === currentImages.length - 1 ? 0 : prevIndex + 1
              );
            }}
            className="bg-black text-white p-4 rounded-full shadow-lg mr-2"
          >
            &#8594;
          </button>
        </div>
      )}
    </div>
  );
};

export default Carousel;

import React, { useState, useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable";

// Desktop Images
let image0 = "https://res.cloudinary.com/ddx0hz1ku/image/upload/v1732973920/0_uiz5ow.jpg";
let image1 = "https://res.cloudinary.com/ddx0hz1ku/image/upload/v1732974216/50932101-0506-4B89-A056-D72CE7B46EB7_1_201_a_atdy7a.jpg";
let image2 = "https://res.cloudinary.com/ddx0hz1ku/image/upload/v1732974308/3_zidkt1.jpg";
let image3 = "https://res.cloudinary.com/ddx0hz1ku/image/upload/v1732974305/4_sdmnob.jpg";
let image4 = "https://res.cloudinary.com/ddx0hz1ku/image/upload/v1732974465/5_wbxh9y.jpg";
let image5 = "https://res.cloudinary.com/ddx0hz1ku/image/upload/v1732974616/DSC00604-HDR_copy_c3aqtw.jpg";

const images = [image0, image1, image2, image3, image4, image5];

// Video for Mobile
import mobileVideo from "../assets/Carousel/reel.mp4";

// Import icons from Heroicons v2
import { SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/solid';

const Carousel = ({ interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isMuted, setIsMuted] = useState(true); // state to track mute status
  const videoRef = useRef(null);

  // Detect screen size to toggle between mobile and desktop
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

  // Carousel functionality for desktop
  useEffect(() => {
    if (!isMobile) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isMobile, interval]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    },
    onSwipedRight: () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    },
    trackMouse: true,
  });

  // Mute/Unmute functionality for the video
  const toggleMute = () => {
    setIsMuted((prevState) => !prevState);
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
            muted={isMuted} // mute/unmute based on state
            loop
            playsInline
            src={mobileVideo}
          ></video>

          {/* Mute/Unmute Button */}
          <button
            onClick={toggleMute}
            className="absolute top-4 right-4 bg-black text-white p-2 rounded-full z-10"
          >
            {isMuted ? (
              <SpeakerXMarkIcon className="w-6 h-6" />
            ) : (
              <SpeakerWaveIcon className="w-6 h-6" />
            )}
          </button>
        </div>
      ) : (
        // Render Carousel for Desktop
        <div className="relative w-full h-[80vh] flex items-center justify-center">
          <img
            src={images[currentIndex]}
            alt={`carousel image ${currentIndex}`}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Indicators for carousel (Only for Desktop) */}
      {!isMobile && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {images.map((_, index) => (
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
                prevIndex === 0 ? images.length - 1 : prevIndex - 1
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
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
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

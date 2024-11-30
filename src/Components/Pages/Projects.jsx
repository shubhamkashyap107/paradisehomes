import React, { useState, useEffect } from "react";

import nv18 from "../../assets/Details/nv18.JPG";
import ip21 from "../../assets/Details/ip21.PNG";
import ip22 from "../../assets/Details/ip22.JPG";
// import ip23 from "../../assets/Details/ip23.JPG";
let ip23 = "https://res.cloudinary.com/ddx0hz1ku/image/upload/v1732962854/IP23_pp5leq.jpg"
import dlf20 from "../../assets/Details/dlf20.jpeg";
import dlf19 from "../../assets/Details/dlf19.jpeg";
import EA from "../../assets/Details/EA-141.JPG";

import img00 from "../../assets/modalImages/00.jpg";
import img01 from "../../assets/modalImages/01.jpg";
import img02 from "../../assets/modalImages/02.jpg";

import img10 from "../../assets/modalImages/10.jpeg";
import img11 from "../../assets/modalImages/11.jpeg";
import img12 from "../../assets/modalImages/12.jpg";

import img20 from "../../assets/modalImages/20.jpg";
import img21 from "../../assets/modalImages/21.jpg";
import img22 from "../../assets/modalImages/22.jpg";

import img30 from "../../assets/modalImages/30.jpg";
import img31 from "../../assets/modalImages/31.jpg";
import img32 from "../../assets/modalImages/32.jpg";

import img40 from "../../assets/modalImages/40.jpg";
import img41 from "../../assets/modalImages/41.jpg";
import img42 from "../../assets/modalImages/42.jpg";

import img50 from "../../assets/modalImages/50.jpg";
import img51 from "../../assets/modalImages/51.jpg";
import img52 from "../../assets/modalImages/52.jpg";

import img60 from "../../assets/modalImages/60.jpg";
import img61 from "../../assets/modalImages/61.jpeg";
import img62 from "../../assets/modalImages/62.jpg";

// Modal Component
const Modal = ({ isOpen, onClose, project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(1); // Start from index 1
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (isOpen && project) { // Only start the interval if the modal is open and project is available
      const id = setInterval(() => {
        setCurrentImageIndex((prevIndex) => {
          // When the last image is reached, skip to index 1
          if (prevIndex === project.images.length - 1) {
            return 1;
          }
          return prevIndex + 1;
        });
      }, 2000); // Change image every 2 seconds
      setIntervalId(id);

      return () => clearInterval(id); // Clear interval on cleanup
    }
  }, [isOpen, project]);

  // If no project, return null to avoid rendering
  if (!isOpen || !project) return null;

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => {
      if (prevIndex === project.images.length - 1) {
        return 1; // Skip to index 1 when on the last image
      }
      return prevIndex + 1;
    });
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => {
      if (prevIndex - 1 >= 0) {
        return prevIndex - 1;
      }
      return prevIndex; // Stay on the first image
    });
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(); // Close modal if backdrop (outside area) is clicked
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      onClick={handleBackdropClick} // Close modal on backdrop click
    >
      <div className="bg-white rounded-lg p-6 w-[95%] max-w-4xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-1 right-2 text-black text-2xl font-bold z-10"
        >
          &times;
        </button>

        {/* Carousel */}
        <div className="relative">
          {/* Ensure project and images exist */}
          {project.images && project.images.length > 0 && (
            <img
              src={project.images[currentImageIndex]}
              alt={`${project.title} - ${currentImageIndex + 1}`}
              className="w-full h-96 object-cover rounded-lg"
            />
          )}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
          >
            &larr;
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
          >
            &rarr;
          </button>
        </div>

        {/* Project Details */}
        <div className="mt-4">
          <h3 className="text-lg font-bold mb-2">{project.title}</h3>
          <p className="text-gray-700">{project.location}</p>
        </div>
      </div>
    </div>
  );
};

// ProjectCard Component
const ProjectCard = ({ title, location, image, onClick }) => {
  return (
    <div
      className="relative sm:w-[300px] sm:h-[70vh] w-[85vw] h-[25vh] rounded-lg overflow-hidden group cursor-pointer flex flex-col sm:flex-row sm:my-0 my-2"
      onClick={onClick}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-100 scale-110"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>

      {/* Centered Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-md">
          <h3 className="text-lg font-bold text-white uppercase mb-1">{title}</h3>
          <p className="text-sm text-gray-300">{location}</p>
        </div>
      </div>
    </div>
  );
};

// Projects Component
const Projects = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "A-82, Naraina Vihar, New Delhi",
      location: "2018",
      images: [nv18, img00, img01, img02],
    },
    {
      title: "N-14/1, DLF-2, Gurugram",
      location: "2019",
      images: [dlf19, img10, img11, img12],
    },
    {
      title: "K-12A/13, DLF-2, Gurugram",
      location: "2020",
      images: [dlf20, img20, img21, img22],
    },
    {
      title: "EF-13, Inderpuri, New Delhi",
      location: "2021",
      images: [ip21, img30, img31, img32],
    },
    {
      title: "RA-09, Inderpuri, New Delhi",
      location: "2022",
      images: [ip22, img40, img41, img42],
    },
    {
      title: "C-98, Inderpuri, New Delhi",
      location: "2023",
      images: [ip23, img50, img51, img52],
    },
    {
      title: "ER-3, Inderpuri, New Delhi",
      location: "2024",
      images: [EA, img60, img61, img62],
    },
  ];

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="sm:mt-24 mt-16 p-8 bg-black">
      <h2 className="text-4xl font-bold text-center text-white mb-8">Our Projects</h2>
      <div className="flex flex-col sm:flex-row sm:space-x-4 sm:overflow-x-scroll w-full mx-auto mt-4">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            location={project.location}
            image={project.images[0]}
            onClick={() => handleCardClick(project)}
          />
        ))}
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </div>
  );
};

export default Projects;

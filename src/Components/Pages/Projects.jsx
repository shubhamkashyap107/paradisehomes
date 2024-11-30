import React, { useState, useEffect } from "react";

let nv18 = "https://res.cloudinary.com/ddx0hz1ku/image/upload/v1732983451/nv18_dfm3he.jpg";
let ip21 =  "https://res.cloudinary.com/ddx0hz1ku/image/upload/v1732983619/ip21_lf05ka.png";
let ip22 = "https://res.cloudinary.com/ddx0hz1ku/image/upload/v1732983451/ip22_zfrbmq.jpg";
let ip23 = "https://res.cloudinary.com/ddx0hz1ku/image/upload/v1732962854/IP23_pp5leq.jpg"
let dlf20 = "https://res.cloudinary.com/ddx0hz1ku/image/upload/v1732983450/dlf20_nw3yfo.jpg";
let dlf19 = "https://res.cloudinary.com/ddx0hz1ku/image/upload/v1732983450/dlf19_c0xbgc.jpg";
let EA = "https://res.cloudinary.com/ddx0hz1ku/image/upload/v1732983451/EA-141_mh9u9b.jpg";


let img00 = "https://res.cloudinary.com/ddx0hz1ku/image/upload/v1732976436/00_n9xnz1.jpg"
let img01 = "https://res.cloudinary.com/ddx0hz1ku/image/upload/v1732976436/01_flqquq.jpg";
let img02 = "https://res.cloudinary.com/ddx0hz1ku/image/upload/v1732976436/02_v7kin7.jpg";

let img10 =  "https://res.cloudinary.com/ddx0hz1ku/image/upload/v1732976438/10_jzpbuc.jpg";
let img11 =  "https://res.cloudinary.com/ddx0hz1ku/image/upload/v1732976438/11_x4vk8s.jpg";
let img12 =  "https://res.cloudinary.com/ddx0hz1ku/image/upload/v1732976437/12_fu8ffz.jpg";

let img20 = "https://res.cloudinary.com/ddx0hz1ku/image/upload/v1732976799/20_ptu27e.jpg";
let img21 = "https://res.cloudinary.com/ddx0hz1ku/image/upload/v1732976438/21_bdxpp2.jpg";
let img22 = "https://res.cloudinary.com/ddx0hz1ku/image/upload/v1732976438/22_ni2e3t.jpg";

let img30 = "https://res.cloudinary.com/ddx0hz1ku/image/upload/v1732976438/30_izotug.jpg";
let img31 = "https://res.cloudinary.com/ddx0hz1ku/image/upload/v1732976438/31_cgb4we.jpg";
let img32 = "https://res.cloudinary.com/ddx0hz1ku/image/upload/v1732976438/32_vmjm3j.jpg";

let img40 = "https://res.cloudinary.com/ddx0hz1ku/image/upload/v1732976439/40_rwenca.jpg";
let img41 = "https://res.cloudinary.com/ddx0hz1ku/image/upload/v1732976439/41_njxroz.jpg";
let img42 = "https://res.cloudinary.com/ddx0hz1ku/image/upload/v1732976439/42_aqdy41.jpg";

let img50 =  "https://res.cloudinary.com/ddx0hz1ku/image/upload/v1732976440/50_orc1gk.jpg";
let img51 =  "https://res.cloudinary.com/ddx0hz1ku/image/upload/v1732976440/51_q1rozc.jpg";
let img52 =  "https://res.cloudinary.com/ddx0hz1ku/image/upload/v1732976441/52_g38mnn.jpg";

let img60 = "https://res.cloudinary.com/ddx0hz1ku/image/upload/v1732976444/60_fqaua1.jpg";
let img61 = "https://res.cloudinary.com/ddx0hz1ku/image/upload/v1732976446/61_bkq37b.jpg";
let img62 = "https://res.cloudinary.com/ddx0hz1ku/image/upload/v1732976442/62_gtffya.jpg";



const Modal = ({ isOpen, onClose, project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(1); // Start from index 1
  const [loading, setLoading] = useState(true); // State to track image loading
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (isOpen && project) {
      const id = setInterval(() => {
        setCurrentImageIndex((prevIndex) => {
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

  if (!isOpen || !project) return null;

  const handleNext = () => {
    setLoading(true); // Set loading to true when changing the image
    setCurrentImageIndex((prevIndex) => {
      if (prevIndex === project.images.length - 1) {
        return 1;
      }
      return prevIndex + 1;
    });
  };

  const handlePrev = () => {
    setLoading(true); // Set loading to true when changing the image
    setCurrentImageIndex((prevIndex) => {
      if (prevIndex - 1 >= 0) {
        return prevIndex - 1;
      }
      return prevIndex;
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
          {project.images && project.images.length > 0 && (
            <>
              {/* Loader */}
              {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-50">
                  <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
                </div>
              )}
              {/* Image */}
              <img
                src={project.images[currentImageIndex]}
                alt={`${project.title} - ${currentImageIndex + 1}`}
                className={`w-full h-96 object-cover rounded-lg transition-opacity duration-500 ${
                  loading ? "opacity-0" : "opacity-100"
                }`}
                onLoad={() => setLoading(false)} // Set loading to false when image loads
              />
            </>
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

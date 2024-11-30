import React from 'react';

const team = [
  {
    name: "Ravinder Jain",
    img: "https://res.cloudinary.com/ddx0hz1ku/image/upload/v1732962068/ravinderJi_rxnzcx.jpg"
  },
  {
    name: "Ashish Jain",
    img: "https://res.cloudinary.com/ddx0hz1ku/image/upload/v1732962068/ashishJi_hwwcrp.jpg"
  },
  {
    name: "Anshul Jain",
    img: "https://res.cloudinary.com/ddx0hz1ku/image/upload/v1732962068/anshulJi_ity6yn.jpg"
  },
  {
    name: "Sahil Jain",
    img: "https://res.cloudinary.com/ddx0hz1ku/image/upload/v1732962069/sahilJi_noluov.jpg"
  },
];

const Team = () => {
  return (
    <div id="team" className="flex flex-col rounded-lg bg-gray-800 text-white p-6 shadow-[0_4px_15px_rgba(0,0,0,0.5)] mt-14 [w-100%]">
      {/* Title */}
      <h1 className="w-fit mx-auto text-2xl font-bold text-blue-500 mb-6 border-b-2 border-blue-500 pb-2">
        Our Team
      </h1>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {team.map((item, index) => (
          <div
            key={index}
            className="sm:h-[260px] h-[250px] flex flex-col items-center p-8 sm:p-6 rounded-lg bg-gray-900 hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              className="rounded-full w-28 h-28 object-cover border-4 border-blue-500"
              src={item.img}
            />
            <h2 className="mt-4 text-lg font-semibold text-white">{item.name}</h2>
            <p className="mt-1 text-sm text-gray-400">{index === 0 ? "Founder" : "Director"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
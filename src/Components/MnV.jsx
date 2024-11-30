import React from "react";

const MnV = () => {
  return (
    <div className=" text-gray-200 px-6 py-16 md:py-24 md:px-10 shadow-lg bg-black">
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2 max-w-6xl mx-auto">
        {/* Mission Section */}
        <div className="relative p-8 border border-neutral-800 bg-neutral-900 rounded-lg shadow-md">
          <div className="absolute inset-0 -z-10 blur-lg opacity-70 bg-gradient-to-br from-purple-600 via-blue-500 to-teal-400"></div>
          <h1 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 to-blue-300 bg-clip-text text-transparent">
            Our Mission
          </h1>
          <p className="text-gray-300 leading-relaxed tracking-wide">
            Our mission at Paradise Homes is to craft homes that blend modern
            architecture with tradition, infused with emotion and built to the
            highest safety standards. It is also to build homes that resonate
            with emotion, seamlessly blending modern architecture with the rich
            traditions that define us.
          </p>
        </div>

        {/* Vision Section */}
        <div className="relative p-8 border border-neutral-800 bg-neutral-900 rounded-lg shadow-md">
          <div className="absolute inset-0 -z-10 blur-lg opacity-70 bg-gradient-to-br from-green-500 via-teal-400 to-blue-500"></div>
          <h1 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-teal-400 to-green-300 bg-clip-text text-transparent">
            Our Vision
          </h1>
          <p className="text-gray-300 leading-relaxed tracking-wide">
            Our future vision is to redefine the construction experience through
            unparalleled client relationships, built on trust, transparency,
            and tailored solutions. We aim to be the industry leader in client
            satisfaction, leveraging technology and innovation to deliver
            personalized, end-to-end services that exceed expectations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MnV;

import React from 'react';

const Services = () => {
  const servicesData = [
    {
      title: "SALE",
      description: "Helping you achieve the best value for your property with expert guidance and support."
    },
    {
      title: "PURCHASE",
      description: "Finding your dream home or investment property, tailored to your specific needs and budget."
    },
    {
      title: "RENTING",
      description: "Providing flexible and hassle-free rental solutions for both tenants and property owners."
    },
    {
      title: "CONSTRUCTION",
      description: "Delivering top-quality construction services with precision, durability, and modern design."
    },
    {
      title: "COLLABORATION",
      description: "Partnering with you to bring innovative and collaborative property development solutions."
    },
  ];

  return (
    <div className="bg-black text-white py-16 px-6 mt-10">
      <div className="max-w-7xl mx-auto text-center">
        {/* Main Title */}
        <h2 className="text-5xl font-bold text-white mb-12">Our Services</h2>

        {/* Services Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 hover:bg-gray-700 transition-colors rounded-lg shadow-lg p-8 h-[160px]"
            >
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

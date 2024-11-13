import React from 'react';
import { motion } from 'framer-motion';
import Logo from "../../assets/Logos/finalPng.png";

const Home = () => {
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="container mx-auto p-6 font-lora">
      {/* About Us Section */}
      <div className="flex mb-10">
        <motion.div 
          className="w-6/12 p-6 h-[70vh]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeLeft}
        >
          <h1 className="text-3xl font-semibold mb-4 text-gray-800 font-poppins">About Us</h1>
          <p className="text-lg leading-relaxed text-gray-700">
            With almost a decade of experience in the construction and real estate industry, we have established ourselves as a trusted partner in building and developing exceptional properties. Our team has successfully managed numerous projects from conception to completion, honing our expertise in construction management, project delivery, and client satisfaction.
            Paradise Homes is a trailblazing real estate and construction company based out of Delhi NCR founded by its dynamic young entrepreneurs, dedicated to redefining the home ownership experience through a customer-centric approach.
            At Paradise Homes, we believe that a house is more than just a physical structure, it’s a dream come true and a sanctuary where life’s most cherished moments are created. We emphasize the importance of modern facades and cutting-edge design, blending functionality with aesthetics to craft exceptional living spaces.
          </p>
        </motion.div>
        <motion.img 
          src={Logo} 
          alt="Paradise Homes Logo" 
          className="w-6/12 p-12 h-[70vh]" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeRight}
        />
      </div>

      {/* Mission and Vision Section */}
      <div className="flex mb-10">
        <motion.img 
          src="https://images.unsplash.com/photo-1583263496887-4e3046c78090?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fG1pc3Npb24lMjBhbmQlMjB2aXNpb258ZW58MHx8MHx8fDA%3D" 
          alt="Mission and Vision" 
          className="w-6/12" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeLeft}
        />
        <motion.div 
          className="w-6/12 p-6 space-y-10 h-[60vh]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeRight}
        >
          <div>
            <h1 className="text-3xl font-semibold mb-4 text-gray-800 font-poppins">Our Mission</h1>
            <p className="text-lg leading-relaxed text-gray-700">
              Our mission at Paradise Homes is to craft homes that blend modern architecture with tradition, infused with emotion and built to the highest safety standards. It is also to build homes that resonate with emotion, seamlessly blending modern architecture with the rich traditions that define us.
            </p>
          </div>
          <div>
            <h1 className="text-3xl font-semibold mb-4 text-gray-800 font-poppins">Our Vision</h1>
            <p className="text-lg leading-relaxed text-gray-700">
              Our future vision is to redefine the construction experience through unparalleled client relationships, built on trust, transparency, and tailored solutions. We aim to be the industry leader in client satisfaction, leveraging technology and innovation to deliver personalized, end-to-end services that exceed expectations.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Why Choose Us Section */}
      <div className="flex mb-10">
        <motion.div 
          className="w-6/12 p-6 space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeLeft}
        >
          <h1 className="text-3xl font-semibold mb-4 text-gray-800 font-poppins">Why Choose Us?</h1>
          
          <div>
            <h3 className="text-xl font-medium text-gray-800 font-poppins">Innovation-Driven Design</h3>
            <p className="text-lg leading-relaxed text-gray-700">
              At Paradise Homes, innovation is at the heart of everything we do. Our team leverages the latest technologies and cutting-edge design trends to create homes that are not only stylish but also forward-thinking. We continuously explore new ways to enhance your living experience, ensuring your home is as modern as it is functional.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-800 font-poppins">Durable Craftsmanship</h3>
            <p className="text-lg leading-relaxed text-gray-700">
              We take pride in the superior craftsmanship of our homes, ensuring they are built to last. Our commitment to quality means that every material used and every detail crafted is selected for its durability and long-term performance, providing you with a home that stands the test of time.
            </p>
          </div>
        </motion.div>
        
        <motion.img 
          src="https://plus.unsplash.com/premium_photo-1661512001232-486df66a4ce4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhhbmRzaGFrZXxlbnwwfHwwfHx8MA%3D%3D" 
          alt="Trust and Excellence" 
          className="w-6/12" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeRight}
        />
      </div>

      {/* Additional Content Section */}
      <div className="flex mb-10 h-full">
        <motion.img 
          src="https://plus.unsplash.com/premium_photo-1683121291576-786e1d36fc2c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGhhbmRzaGFrZXxlbnwwfHwwfHx8MA%3D%3D" 
          alt="" 
          className="w-6/12" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeLeft}
        />
        <motion.div 
          className="w-6/12 p-6 space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeRight}
        >
          <div>
            <h3 className="text-xl font-medium text-gray-800 font-poppins">Sustainable Living</h3>
            <p className="text-lg leading-relaxed text-gray-700">
              Paradise Homes is dedicated to building environmentally responsible homes. We incorporate sustainable practices and eco-friendly materials into our construction process, creating homes that minimize environmental impact while maximizing energy efficiency. Our sustainable approach ensures a greener future for you and your family.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-gray-800 font-poppins">Tailored Solutions</h3>
            <p className="text-lg leading-relaxed text-gray-700">
              We understand that every homeowner has unique needs and desires. That’s why we offer personalized solutions and customization options, allowing you to create a home that reflects your individual style and preferences. From layout to finishing touches, every aspect of your home can be tailored to suit your vision.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-gray-800 font-poppins">Trust and Excellence</h3>
            <p className="text-lg leading-relaxed text-gray-700">
              At Paradise Homes, we build more than just houses; we build trust. Our unwavering commitment to excellence and our customer-centric approach ensure that we deliver not just a home, but an exceptional living experience. You can rely on us to provide transparency, quality, and dedication at every stage of your home-building journey.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

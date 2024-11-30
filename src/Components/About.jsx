import React from "react";

const About = () => {
  return (
    <>
      <section className="overflow-hidden p-6 sm:pt-20 sm:pb-12 lg:pt-[120px] lg:pb-[90px] bg-black ">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://res.cloudinary.com/ddx0hz1ku/image/upload/v1732960588/a1_plqvqp.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://res.cloudinary.com/ddx0hz1ku/image/upload/v1732960692/a2_ojhufj.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img
                      src="https://res.cloudinary.com/ddx0hz1ku/image/upload/v1732960588/a1_plqvqp.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
            
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full p-4 sm:px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="block mb-4 text-5xl font-semibold text-primary text-[#FFDE4D]">
                  Our Story
                </span>
                <p className="mb-5 text-base text-body-color dark:text-dark-6 text-white">
                With almost a decade of experience in the construction and real estate industry, we have established ourselves as a trusted partner in building and developing exceptional properties. Our team has successfully managed numerous projects from conception to completion, honing our expertise in construction management, project delivery, and client satisfaction.
                </p>
                <p className="mb-8 text-base text-body-color dark:text-dark-6 text-white">
                Paradise Homes is a trailblazing real estate and construction company based out of Delhi NCR founded by its dynamic young entrepreneurs, dedicated to redefining the home ownership experience through a customer-centric approach.
                At Paradise Homes, we believe that a house is more than just a physical structure, it's a dream come true and a sanctuary where life’s most cherished moments are created. We emphasize the importance of modern facades and cutting-edge design, blending functionality with aesthetics to craft exceptional living spaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
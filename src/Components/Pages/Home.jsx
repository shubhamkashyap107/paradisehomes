import bgImage from '../../assets/Details/2023 C-98 Inderpuri New Delhi.jpg';
import logo from '../../assets/Logos/finalPng.png';
import { motion } from 'framer-motion';
import OutlinedCard from '../Card';
import { homePageConfig } from '../../lib/utils';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

const Home = () => {
  return (
    <div className='scroll-smooth'>
      <motion.div id='top-home relative flex'>
        <div className='relative'>
          {/* overlay */}
          <div className="absolute inset-0 bg-black opacity-85"></div>
          {/* bg image */}
          <img src={bgImage} className="w-screen h-screen" alt="" />
        </div>
        {/* Logo */}
        <a href="#sections" className='absolute top-0 flex items-center justify-center w-full h-full'>
          <img src={logo} className="mb-10" alt="" />
        </a>
      </motion.div>
      <motion.div id='sections' className='grid items-center w-full h-screen grid-flow-col grid-cols-1 gap-12 !p-8 bg-gray-900 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center'>
        {homePageConfig.map((item) => (
          <div onClick={() => { window.location.hash = `#${item.id}` }} >
            <OutlinedCard title={item.title} key={item.id} initialDescription={item.initialDescription} bgColor={item.bgColor} goToId={item.id} />
          </div>
        ))}
      </motion.div>
      <motion.div id="about-us" className='w-full h-screen p-12 bg-gray-900'>
        <Typography variant='h1' className='!font-black text-[#F0A500] !mb-8'>About Us</Typography>
        <div className='pl-4 pr-96'>
        <Typography variant='body1' className='!text-[#fff0d1] !mb-8 !text-xl'>With almost a decade of experience in the construction and real estate industry, we have established ourselves as a trusted partner in building and developing exceptional properties. Our team has successfully managed numerous projects from conception to completion, honing our expertise in construction management, project delivery, and client satisfaction.
        </Typography>
        <Typography variant='body1' className='!text-[#fff0d1] !text-xl'>
        Paradise Homes is a trailblazing real estate and construction company based out of Delhi NCR founded by its dynamic young entrepreneurs, dedicated to redefining the home ownership experience through a customer-centric approach.
        At Paradise Homes, we believe that a house is more than just a physical structure, it’s a dream come true and a sanctuary where life’s most cherished moments are created. We emphasize the importance of modern facades and cutting-edge design, blending functionality with aesthetics to craft exceptional living spaces.</Typography>
        </div>
      </motion.div>
      <motion.div id="mission-and-vision" className='w-full h-screen p-12 bg-gray-900'>
        <Typography variant='h1' className='!font-black text-[#F08400] !mb-8'>About Us</Typography>
        <div className='pl-4 pr-96'>
        <Typography variant='body1' className='!text-[#ffe3c1] !mb-8 !text-xl'>With almost a decade of experience in the construction and real estate industry, we have established ourselves as a trusted partner in building and developing exceptional properties. Our team has successfully managed numerous projects from conception to completion, honing our expertise in construction management, project delivery, and client satisfaction.
        </Typography>
        <Typography variant='body1' className='!text-[#ffe3c1] !text-xl'>
        Paradise Homes is a trailblazing real estate and construction company based out of Delhi NCR founded by its dynamic young entrepreneurs, dedicated to redefining the home ownership experience through a customer-centric approach.
        At Paradise Homes, we believe that a house is more than just a physical structure, it’s a dream come true and a sanctuary where life’s most cherished moments are created. We emphasize the importance of modern facades and cutting-edge design, blending functionality with aesthetics to craft exceptional living spaces.</Typography>
        </div>
      </motion.div>
      <motion.div id="why-choose-us" className='w-full h-screen p-12 bg-gray-900'>
        <Typography variant='h1' className='!font-black text-[#ff6c1d] !mb-8'>Why Choose Us?</Typography>
        <div className='pl-4 pr-96'>
          <Typography variant='h2' className='!font-black text-[#ff6c1d] !mb-8'>Innovation Driven Design</Typography>
        <Typography variant='body1' className='!text-[#ffe5d7] !mb-8 !text-xl !pl-4'>At Paradise Homes, innovation is at the heart of everything we do. Our team leverages the latest technologies and cutting-edge design trends to create homes that are not only stylish but also forward-thinking. We continuously explore new ways to enhance your living experience, ensuring your home is as modern as it is functional.
        </Typography>
        <Typography variant='h2' className='!font-black text-[#ff6c1d] !mb-8'>Durable Craftsmanship</Typography>
        <Typography variant='body1' className='!text-[#ffe5d7] !text-xl !pl-4'>
        We take pride in the superior craftsmanship of our homes, ensuring they are built to last. Our commitment to quality means that every material used and every detail crafted is selected for its durability and long-term performance, providing you with a home that stands the test of time.  </Typography>
        </div>
      </motion.div>
      <motion.div id="additional-information" className='w-full h-screen p-12 bg-gray-900'>
        <Typography variant='h1' className='!font-black text-[#ff1d1d] !mb-8'>Additional Information</Typography>
        <div className='pl-4 pr-96'>
        <Typography variant='body1' className='!text-[#ffe3e3] !mb-8 !text-xl'>Paradise Homes is dedicated to building environmentally responsible homes. We incorporate sustainable practices and eco-friendly materials into our construction process, creating homes that minimize environmental impact while maximizing energy efficiency. Our sustainable approach ensures a greener future for you and your family.
        </Typography>
        <Typography variant='body1' className='!text-[#ffe3e3] !text-xl'>
        Tailored Solutions
        Trust and Excellence</Typography>
        </div>
      </motion.div>

    </div>
  )
}

export default Home

// import bgImage from '../../assets/Details/2023 C-98 Inderpuri New Delhi.jpg';
// import logo from '../../assets/Logos/finalPng.png';
// const Home = () => {
//   return (
//     <div className='scroll-smooth'>
//       <div id='top-home relative flex'>
//         <div className='relative'>
//           {/* overlay */}
//           <div className="absolute inset-0 bg-black opacity-85"></div>
//           {/* bg image */}
//           <img src={bgImage} className="w-screen h-screen" alt="" />
//         </div>
//         {/* Logo */}
//         <a href="#about-home">
//           <div className='flex items-center justify-center max-h-svh max-w-screen'>
//           <img src={logo} className="absolute top-0" alt="" />
//           </div>
//         </a>
//       </div>
//       <div id='about-home' className='w-full h-screen'>
//         ABOUT
//       </div>
//     </div>
//   )
// }

// export default Home
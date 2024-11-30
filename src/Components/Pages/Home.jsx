import React from 'react'
import Carousel from '../Carousel';
import About from '../About';
import ChooseUs from '../ChooseUs';
import MnV from '../MnV';
import Divider from "../Divider"





const Home = () => {

  return (
    <div className='bg-black'>
      <Carousel  interval={4000} />
 

      <About />

      <Divider />



      <MnV />

      <Divider />



      <ChooseUs />
    </div>
  )
}

export default Home
import React from 'react';
import Carousel from "../components/home/carousel/Carousel"
import HowItWorks from '../components/home/carousel/HowItWorks';
const Home = () => {
  return (
    <div>
      {/* carousel slider */}
      <Carousel></Carousel>

      {/* how its works section */}
      <HowItWorks></HowItWorks>
    </div>

  );
};

export default Home;
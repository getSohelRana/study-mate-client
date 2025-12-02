import React from 'react';
import Carousel from "../components/home/carousel/Carousel"
import HowItWorks from '../components/home/HowItWorks';
import Testimonials from '../components/home/Testimonials';
const Home = () => {
  return (
    <div>
      {/* carousel slider */}
      <Carousel></Carousel>

      {/* how its works section */}
      <HowItWorks></HowItWorks>

      {/* testimonials content goes here */}
      <Testimonials></Testimonials>
    </div>

  );
};

export default Home;
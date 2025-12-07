import React from 'react';
import Carousel from "../components/home/carousel/Carousel"
import HowItWorks from '../components/home/HowItWorks';
import Testimonials from '../components/home/Testimonials';
import TopStudents from '../components/home/TopStudents';
// const topStudentsPromise = fetch('http://localhost:5000/top-rated-students').then(res => res.json());
const Home = () => {
  return (
    <div>
      {/* carousel slider */}
      <Carousel></Carousel>

      {/* top rated students goes here */}
      {/* <TopStudents topStudentsPromise={topStudentsPromise}></TopStudents> */}

      {/* how its works section */}
      <HowItWorks></HowItWorks>

      {/* testimonials content goes here */}
      <Testimonials></Testimonials>
    </div>

  );
};

export default Home;
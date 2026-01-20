import React, { useEffect, useState } from "react";
import TestimonialsCard from "./TestimonialsCard";
import Marquee from "react-fast-marquee";

const Testimonials = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch("/testimonials.json")
      .then((res) => res.json())
      .then((data) => setReview(data))
      .catch((err) => {
        console.log(err)
      });
  }, []);

  return (
    <div className="py-10 md:py-16 my-10 md:my-20">
      <div className="px-4 md:px-8">
        <h2 className="text-center text-2xl md:text-4xl font-bold  mb-2">
          What Students Say About StudyMate
        </h2>

        <p className="text-center text-gray-500 mb-8 md:mb-12 text-sm md:text-base">
          Real feedback from learners who improved their study experience
        </p>

        <Marquee pauseOnHover={true} speed={40} gradient={false}>
          <div className="flex gap-4 md:gap-6 overflow-hidden py-2">
            {review.map((item) => (
              <TestimonialsCard key={item.id} review={item} />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Testimonials;

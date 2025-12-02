import React from "react";
import { BiSolidQuoteLeft } from "react-icons/bi";

const TestimonialsCard = ({ review }) => {
  const { name, role, img, message } = review || {};

  return (
    <div className="bg-white min-h-[320px] md:min-h-[350px] 
      w-[250px] sm:w-[260px] md:w-[300px] lg:w-[320px]
      p-4 md:p-6 rounded-xl shadow 
      hover:shadow-xl hover:scale-[1.03] transition-all duration-300 overflow-hidden  flex flex-col justify-between">

      <div className="flex mb-4">
        <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center 
          border border-primary text-primary rounded-full shadow text-xl md:text-2xl">
          <BiSolidQuoteLeft />
        </div>
      </div>

      <p className="text-gray-600 text-xs sm:text-sm md:text-base text-justify mb-6">
        {message}
      </p>

      <div className="flex items-center  gap-3 mt-auto shadow p-2 rounded-xl">
        <img
          src={img}
          alt=""
          className="w-10 h-10 md:w-14 md:h-14 rounded-full object-cover"
        />

        <div>
          <h3 className="font-semibold text-primary text-sm md:text-lg">
            {name}
          </h3>
          <p className="text-gray-500 text-xs md:text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;

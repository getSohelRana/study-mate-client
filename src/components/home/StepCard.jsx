import React from 'react';

const StepCard = ({step}) => {
  const {id , title , img} = step || {}
  
  return (
    <div className="card bg-base-300 shadow-xl p-5 rounded-xl text-center relative hover:scale-105 transition-all duration-300">
      <div className="flex justify-center mb-3">
        <div className="w-15 h-15 flex items-center justify-center bg-primary text-white font-bold rounded-full shadow absolute  -top-8">
          {id}
        </div>
      </div>

      <figure className="mb-4">
        <img src={img} alt="" className="w-20 mx-auto py-5" />
      </figure>

      <h3 className="font-semibold text-lg">{title}</h3>

      <p className="text-gray-600 mt-2 text-sm">{step.desc}</p>
    </div>
  );
};

export default StepCard;
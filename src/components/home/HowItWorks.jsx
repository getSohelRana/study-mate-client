import React, { useEffect, useState } from "react";
import StepCard from "./StepCard";

const HowItWorks = () => {
  const [steps, setSteps] = useState([]);

  // loads step
  useEffect(() => {
    fetch("/steps.json")
      .then((res) => res.json())
      .then((data) => setSteps(data))
      // .catch((err) => console.log("Failed to load steps:", err));
  }, []);
  return (
    <div className="py-16 bg-base-200 my-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-semibold  text-center  mb-2">
          How StudyMate Works
        </h2>

        <p className="text-center text-gray-500 mb-12">
          StudyMate helps students connect, collaborate, and learn smarter
          together.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          {steps.map((step) => (
            <StepCard key={step.id} step={step} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

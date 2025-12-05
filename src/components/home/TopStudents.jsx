import React, { use } from "react";
import TopStudentsCard from "./TopStudentsCard";

const TopStudents = ({ topStudentsPromise }) => {
  const topStudents = use(topStudentsPromise);
  // console.log(topStudents)
  return (
    <div>
      <h2 class="text-2xl md:text-4xl font-semibold text-bg-base-300 text-center p-20">
        Top Study Partners
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {topStudents?.map((topStudent) => (
          <TopStudentsCard key={topStudent._id} topStudent={topStudent} />
        ))}
      </div>
    </div>
  );
};

export default TopStudents;

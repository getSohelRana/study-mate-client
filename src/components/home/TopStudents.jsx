import React, { use } from "react";
import TopStudentsCard from "./TopStudentsCard";

const TopStudents = ({ topStudentsPromise }) => {
  const topStudents = use(topStudentsPromise);
  // console.log(topStudents)
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 pt-20">
      {topStudents?.map((topStudent) => (
        <TopStudentsCard key={topStudent._id} topStudent={topStudent} />
      ))}
    </div>
  );
};

export default TopStudents;

import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";

const FindPartners = () => {
  const studentsInfo = useLoaderData();

  return (
    <div className="py-10">
      <h1 className="text-2xl text-center mb-6">
        Total partners{" "}
        <span className="text-primary font-semibold">
          {studentsInfo.length}
        </span>{" "}
        found.
      </h1>

      <div className="max-w-7xl mx-auto px-4">
        {/* ===== Top Bar ===== */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
          {/* Sort */}
          <select className="select select-bordered w-full md:w-52">
            <option disabled selected>
              Sort By
            </option>
            <option>Name</option>
            <option>Experience</option>
            <option>Subject</option>
          </select>

          {/* Search */}
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search profile..."
              className="input input-bordered w-full pl-10"
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* ===== Cards Grid ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {studentsInfo.map((student) => (
            <div
              key={student._id}
              className="card bg-white shadow-md hover:shadow-xl transition"
            >
              <div className="card-body text-center">
                <img
                  src={student.profileimage}
                  alt={student.name}
                  className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-primary"
                />

                <h2 className="text-xl font-semibold mt-3">{student.name}</h2>

                <p className="text-sm text-gray-500">
                  Subject:{" "}
                  <span className="font-medium">{student.subject}</span>
                </p>

                <div className="flex justify-center gap-2 mt-2">
                  <span className="badge badge-outline">
                    {student.studyMode}
                  </span>
                  <span className="badge badge-secondary">
                    {student.experienceLevel}
                  </span>
                </div>

                <div className="card-actions justify-center mt-4">
                  <Link to = {`/student-details/${student._id}`} className="btn btn-primary btn-sm">
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindPartners;

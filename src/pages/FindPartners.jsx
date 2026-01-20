import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";

const FindPartners = () => {
  const studentsInfo = useLoaderData();
  const [searchStudents, setSearchStudents] = useState([]);
  const [searchFounds, setSearcthFounds] = useState(false);
  const [sortOrder, setSortOrder] = useState("desc");
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(false);
  const displayStudents = searchFounds ? searchStudents : studentsInfo;

  const handleSearch = (e) => {
    e.preventDefault();
    const search_text = e.target.search.value.trim();
    // console.log(search_text);
    setSearcthFounds(true);
    setLoading(true);
    e.target.reset();

    fetch(
      `https://study-mate-server-virid.vercel.app/search?search=${search_text}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setSearchStudents(data);
        setLoading(false);
        // console.log(data);
      })
      .catch(() => setLoading(false));
  };
  // handle sort
  const handleSortChange = (e) => {
    const order = e.target.value;
    setSortOrder(order);
    setLoading(true);

    fetch(`https://study-mate-server-virid.vercel.app/sort?sort=${order}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setSearchStudents(data);
        setSearcthFounds(true);
      })
      .finally(() => setLoading(false));
  };
  //handle filter
  const handleFilter = (e) => {
    const level = e.target.value;
    // console.log(level)
    // if (!level) return;
    setFilter(level);
    setLoading(true);

    fetch(
      `https://study-mate-server-virid.vercel.app/filter?experienceLevel=${level}`,
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setSearchStudents(data);
        setSearcthFounds(true);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="py-10">
      <title> Find partners</title>
      <h1 className="text-2xl text-center mb-6">
        Total partners{" "}
        <span className="text-primary font-semibold">
          {displayStudents.length}
        </span>{" "}
        found.
      </h1>

      <div className="max-w-7xl mx-auto px-4">
        {/* ===== Top Bar ===== */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
          {/* Sort */}
          <select
            className="select w-full md:w-52"
            value={sortOrder}
            onChange={handleSortChange}
          >
            <option disabled>Sort By</option>
            <option value="desc">Experience: High → Low</option>
            <option value="asc">Experience: Low → High</option>
          </select>

          {/* filter */}
          <select
            className="select w-full md:w-52"
            value={filter}
            onChange={handleFilter}
          >
            <option value="">All Experience</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>

          {/* Search */}

          <form onSubmit={handleSearch} className="flex gap-1">
            <div className="relative w-full md:w-64">
              <input
                type="search"
                name="search"
                placeholder="Type a subject name..."
                className="input w-full pl-10 focus:outline-0 focus:border-primary"
              />
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
            <button className="btn btn-primary">Search</button>
          </form>
        </div>

        {/* ===== Loading ===== */}
        {loading && (
          <div className="flex justify-center items-center min-h-70 bg-base-100">
            <span className="w-15 h-15 loading loading-ring loading-10xl"></span>
          </div>
        )}

        {/* ===== Cards Grid ===== */}

        {/* if search matched  */}
        {!loading && displayStudents.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayStudents.map((student) => (
              <div
                key={student._id}
                className="card bg-base-300 shadow-md hover:shadow-xl transition"
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
                    <Link
                      to={`/student-details/${student._id}`}
                      className="btn btn-primary btn-sm"
                    >
                      View Profile
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {/* if not matched search data */}
        <div className="flex justify-center items-center min-h-50">
          {!loading && searchFounds && searchStudents.length === 0 && (
            <p className="text-center text-warning text-lg flex gap-2 items-center">
              <FaSearch></FaSearch> No students matched your search, Try a
              different subject name.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FindPartners;

import { FaRegStar } from "react-icons/fa";
import { SiLevelsdotfyi } from "react-icons/si";
import { Link } from "react-router";

const TopStudentsCard = ({ topStudent }) => {
  const {_id, name, profileimage, subject, experienceLevel, rating } =
    topStudent || {};
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {/* Profile Image */}
      <figure className="flex justify-center mb-4">
        <img
          src={profileimage}
          alt={name}
          className="w-24 h-24 rounded-full object-cover border-4 border-base-200 shadow-sm"
        />
      </figure>

      {/* Name */}
      <h3 className="text-lg font-semibold text-gray-700">{name}</h3>

      {/* Subject Badge */}
      <p className="mt-2">
        <span className="px-3 py-1 text-xs font-medium bg-base-200 rounded-full">
          {subject}
        </span>
      </p>

      {/* Experience Rating Stars */}
      <div className="flex justify-between items-center gap-1 mt-3">
        <div className="flex items-center gap-2 mt-3">
          <span className="text-primary text-xl">
            {" "}
            <SiLevelsdotfyi />
          </span>
          <p className="text-gray-600  ">{experienceLevel}</p>
        </div>
        <div className="flex items-center gap-2 mt-3">
          <span className="text-primary text-xl">
            <FaRegStar />
          </span>
          <p className="text-gray-600 ">{rating}</p>
        </div>
      </div>
      <div className="mt-4">
      <Link to={`/student-profile/${_id}`} className="btn w-full rounded-3xl"> View Profile</Link>
      </div>
    </div>
  );
};

export default TopStudentsCard;

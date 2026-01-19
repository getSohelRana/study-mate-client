import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../provider/AuthContext";

const UpdateMyProfile = () => {
  const { user } = useContext(AuthContext);
  const [error, setError] = useState("");
	const [myProfile , setMyProfile] = useState(null);

// get logged user data
	useEffect(()=> {
		fetch(`http://localhost:5000/my-profile?email=${user?.email}`)
		.then(res => res.json())
		.then(data => {
			console.log(data)
			setMyProfile(data)
		})
	}, [user?.email])

	// update logged user profile data
  const handleUpdateMyProfile = (e) => {
    e.preventDefault();
  };
  return (
    <div className="my-10">
      <div className="mb-10">
        <h1 className="text-center sm:text-2xl text-primary font-semibold">
          Update your profile information!
        </h1>
      </div>
      <div>
        <form onSubmit={handleUpdateMyProfile}>
          <div className="max-w-xl mx-auto space-y-4">
            {/* Name */}
            <div>
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                className="input input-bordered w-full"
                placeholder="Name"
								readOnly
                defaultValue={user?.displayName}
              />
            </div>
            {/* subject */}
            <div>
              <label className="label">
                <span className="label-text">Subject</span>
              </label>
              <input
                type="text"
                name="subject"
                className="input input-bordered w-full"
                placeholder="Subject name"
              />
            </div>
            {/* subject mode */}
            <div>
              <label className="label">
                <span className="label-text">Subject Mode</span>
              </label>
              <input
                type="text"
                name="studyMode"
                className="input input-bordered w-full"
                placeholder="Online or Offline"
                
              />
            </div>
            {/* Availability Time */}
            <div>
              <label className="label">
                <span className="label-text">Availability Time</span>
              </label>
              <input
                type="text"
                name="availabilityTime"
                className="input input-bordered w-full"
                placeholder="Availability time"
              />
            </div>
            {/* Location */}
            <div>
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input
                type="text"
                name="location"
                className="input input-bordered w-full"
                placeholder="Location"
              />
            </div>
            {/* Experience Level */}
            <div>
              <label className="label">
                <span className="label-text">Experience Level</span>
              </label>
              <input
                type="text"
                name="experienceLevel"
                className="input input-bordered w-full"
                placeholder="Experience Level"
              />
            </div>
            {/* Email */}
            <div>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                className="input input-bordered w-full"
                placeholder="email"
								readOnly
                defaultValue={user?.email}
              />
            </div>

            {/* Error Message */}
            <small
              className={`text-error block p-2 rounded ${
                error ? "bg-red-200" : ""
              }`}
            >
              {error}
            </small>

            {/* Submit Button */}
            <button
              className="btn bg-[#00c497] hover:bg-[#00b38a] text-white w-full"
              type="submit"
            >
              Create Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateMyProfile;

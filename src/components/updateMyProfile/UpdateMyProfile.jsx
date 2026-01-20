import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../provider/AuthContext";
import showToast from "../../utilities/toast";

const UpdateMyProfile = () => {
  const { user } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [myProfile, setMyProfile] = useState(null);

  // get logged user data
  useEffect(() => {
    // check logged user email
    if (!user?.email) return;
    // get logged user data
    fetch(`http://localhost:5000/my-profile?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setMyProfile(data);
        setLoading(false);
      })
      .catch((err) => {
				console.log(err)
        setError("Failed to fetch profile");
        setLoading(false);
      });
  }, [user?.email]);

  // update logged user profile data
  const handleUpdateMyProfile = (e) => {
    e.preventDefault();
		if(!myProfile) return;
    // updated profile data
    const updatedProfile = {
      name: e.target.name.value,
      subject: e.target.subject.value,
      studyMode: e.target.studyMode.value,
      availabilityTime: e.target.availabilityTime.value,
      location: e.target.location.value,
      experienceLevel: e.target.experienceLevel.value,
    };
    // console.log(myProfile._id)

    //save updated profile data backend
		setLoading(true)
    fetch(`http://localhost:5000/students/${myProfile._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProfile),
    })
      .then((res) => res.json())
      .then(() => {
        showToast("success", "Profile updated successfully");
				setLoading(false);

        //  update local state
        setMyProfile((prev) => ({ ...prev, ...updatedProfile }));
      })
      .catch((err) => {
				console.error(err);
        showToast("error", "Failed to update profile");
        setLoading(false);
			});
  };
  return (
    <div className="my-10">
      <title> Update Your Profile</title>
      <div className="mb-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-primary">
          Update your profile information!
        </h1>
      </div>
      <div>
        <form onSubmit={handleUpdateMyProfile}>
          <div className="max-w-xl mx-auto space-y-4 shadow-lg bg-base-300 rounded-lg p-6">
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
                defaultValue={myProfile?.name}
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
                defaultValue={myProfile?.subject}
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
                defaultValue={myProfile?.studyMode}
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
                defaultValue={myProfile?.availabilityTime}
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
                defaultValue={myProfile?.location}
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
                defaultValue={myProfile?.experienceLevel}
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
                defaultValue={myProfile?.email}
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

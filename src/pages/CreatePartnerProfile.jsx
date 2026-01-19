import React, { useContext, useState } from "react";
import AuthContext from "../provider/AuthContext";
import { useLocation, useNavigate } from "react-router";
import showToast from "../utilities/toast";

const CreatePartnerProfile = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const redirectTo = location.state?.from?.pathname || "/";

  const handleCreateProfile = async (e) => {
    e.preventDefault();
    setError("");

    const name = e.target.name.value.trim();
    const photo = e.target.photo.value.trim();
    const subject = e.target.subject.value.trim();
    const studyMode = e.target.studyMode.value.trim();
    const availabilityTime = e.target.availabilityTime.value.trim();
    const location = e.target.location.value.trim();
    const experienceLevel = e.target.experienceLevel.value.trim();
    const rating = e.target.rating.value.trim();
    const partnerCount = e.target.partnerCount.value.trim();
    const email = e.target.email.value.trim();
    // name validation
    if (name.length < 5) {
      setError("Name must be at least 5 characters.");
      return;
    }
    // all felids validation
    if (
      !photo ||
      !subject ||
      !studyMode ||
      !availabilityTime ||
      !location ||
      !experienceLevel ||
      !rating ||
      !partnerCount ||
      !email
    ) {
      setError("Please fill up alls felids");
      return;
    }
    try {
      // ✅ Check if email already exists
      const res = await fetch(`http://localhost:5000/students?email=${email}`);
      const existing = await res.json();
      if (existing.length > 0) {
        setError("A profile with this email already exists.");
        return;
      }
      // save to backend created student
      const newStudent = {
        name,
        email,
        profileimage: photo,
        subject,
        studyMode,
        availabilityTime,
        location,
        experienceLevel,
        rating,
        patnerCount: partnerCount,
      };
      await fetch("http://localhost:5000/students", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(newStudent),
      });
      showToast(
        "success",
        `Partner profile created successfully, ${name || "User"}!`
      );
      e.target.reset();
      navigate(redirectTo);
    } catch (err) {
      console.log(err)
      setError("Something went wrong. Please try again.");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <title>Create Your Profile</title>
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-6 my-3 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-primary">
          Create Study Mate Profile
        </h1>

        {/* FORM */}
        <form onSubmit={handleCreateProfile} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

            {/* Photo URL */}
            <div>
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="url"
                name="photo"
                className="input input-bordered w-full"
                placeholder="Photo URL"
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
            {/* Rating */}
            <div>
              <label className="label">
                <span className="label-text"></span>Rating
              </label>
              <input
                type="text"
                name="rating"
                className="input input-bordered w-full"
                placeholder="Rating"
              />
            </div>
            {/* partner count */}
            <div>
              <label className="label">
                <span className="label-text">Partner</span>
              </label>
              <input
                type="text"
                name="partnerCount"
                className="input input-bordered w-full"
                placeholder="partner "
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
        </form>
      </div>
    </div>
  );
};

export default CreatePartnerProfile;

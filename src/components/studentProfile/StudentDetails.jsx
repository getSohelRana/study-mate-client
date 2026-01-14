import React, { useContext, useEffect, useState } from "react";
import { FaRegStar, FaUsers } from "react-icons/fa";
import { IoLocationOutline, IoTimeOutline } from "react-icons/io5";
import { RxEnvelopeClosed } from "react-icons/rx";
import { IoMdPaperPlane } from "react-icons/io";

import { useLoaderData } from "react-router";
import showToast from "../../utilities/toast";
import AuthContext from "../../provider/AuthContext";

const StudentDetails = () => {
  const studentDetails = useLoaderData();
  // console.log(studentDetails);
  const { user } = useContext(AuthContext);
  const [requestSent, setRequestSent] = useState(false);

  const {
    availabilityTime,
    email,
    experienceLevel,
    location,
    name,
    patnerCount,
    rating,
    profileimage,
    studyMode,
    subject,
  } = studentDetails || {};

  useEffect(() => {
    setRequestSent(false);
  }, [email, user?.email]);

  const handlePartnerCounts = async () => {
    // to check already sent request
    if (requestSent) {
      showToast("warning", "You already sent a request❗");
      return;
    }

    try {
      //  POST → save partner request backend
      const res = await fetch("http://localhost:5000/partnerCounts", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          partnerId: studentDetails._id,
          partnerEmail: email,
          partnerName : name,
          partnerPhoto: profileimage,
          partnerSubject: subject,
          partnerStudyMode : studyMode,
          requested_by: user.email,
        }),
      });

      const data = await res.json();
      // console.log(data);    //
      // duplicate request
      if (data.message === "already_sent") {
        showToast("warning", "You already sent a request ❗");
        setRequestSent(true);
        return;
      }

      if (data.insertedId) {
        // PATCH → increment partner count and save backend
        const patchRes = await fetch(
          `http://localhost:5000/partnerCounts/${studentDetails._id}`,
          {
            method: "PATCH",
          }
        );

        const patchData = await patchRes.json();
        if (patchData.modifiedCount > 0) {
          showToast(
            "success",
            `To ${name || "User"} Partner request send successfully,!`
          );
          setRequestSent(true);
        }
      }
    } catch (error) {
      console.log(error);
      showToast("error", "can not send request once more");
    }
  };

  return (
    <div>
      <div>
        <title> Student Profile</title>
        <div class="flex justify-center p-4">
          <div class="card w-full max-w-md bg-white shadow">
            {/* Profile Image */}
            <figure class="px-6 pt-6">
              <img
                src={profileimage}
                alt={name}
                class="rounded-full w-32 h-32 object-cover border-4 border-primary"
              />
            </figure>

            {/* Card body */}
            <div class="card-body items-center text-center space-y-2">
              <h2 class="card-title text-xl font-bold">{name}</h2>

              <p class="text-sm flex gap-2 text-gray-500 items-center">
                <IoLocationOutline />
                {location}
              </p>

              {/* Tags  */}
              <div class="flex flex-wrap justify-center gap-2">
                <span class="badge badge-primary">{subject}</span>
                <span class="badge badge-secondary">{experienceLevel}</span>
                <span class="badge badge-primary">{studyMode}</span>
              </div>

              {/* Info  */}
              <div class="text-sm w-full mt-3 space-y-1">
                <p className="flex items-center justify-center gap-2">
                  <IoTimeOutline />
                  <strong>Availability:</strong> {availabilityTime}
                </p>
                <p className="flex items-center justify-center gap-2">
                  <FaRegStar />
                  <strong>Rating:</strong> {rating}
                </p>
                <p className="flex items-center justify-center gap-2">
                  <FaUsers></FaUsers>
                  <strong>Partner Count:</strong> {patnerCount}
                </p>
              </div>

              <p class=" text-gray-400 mt-2 flex items-center gap-2">
                <RxEnvelopeClosed />
                {email}
              </p>

              {/* Actions  */}
              <div class="card-actions mt-4 w-full">
                <button
                  onClick={handlePartnerCounts}
                  class="btn btn-primary w-full"
                >
                  Send Partner Request <IoMdPaperPlane />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;

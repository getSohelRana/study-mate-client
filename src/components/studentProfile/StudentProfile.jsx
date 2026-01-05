import React from 'react';
import { FaRegStar,  FaUsers } from 'react-icons/fa';
import { IoLocationOutline, IoTimeOutline } from 'react-icons/io5';
import { RxEnvelopeClosed } from "react-icons/rx";
import { useLoaderData } from 'react-router';

const StudentProfile = () => {
  const studentdata = useLoaderData();
  console.log(studentdata)
  const {availabilityTime, email, experienceLevel, location, name, patnerCount, rating, profileimage, studyMode, subject} = studentdata || {};
  return (
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
      <h2 class="card-title text-xl font-bold">
        {name}
      </h2>

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
        <p className='flex items-center justify-center gap-2'> 
          <IoTimeOutline />
          <strong>Availability:</strong> {availabilityTime}
        </p>
        <p className='flex items-center justify-center gap-2'>
          <FaRegStar />
          <strong>Rating:</strong> {rating} 
        </p>
        <p className='flex items-center justify-center gap-2'>
          <FaUsers></FaUsers>
          <strong>Partner Count:</strong> {patnerCount}
          </p>
      </div>

       {/* Actions  */}
      <div class="card-actions mt-4 w-full">
        <button class="btn btn-primary w-full">
          Contact Tutor
        </button>
      </div>

      <p class=" text-gray-400 mt-2 flex items-center gap-2">
        <RxEnvelopeClosed />
        {email}
      </p>
    </div>
  </div>
</div>

    </div>
  );
};

export default StudentProfile;
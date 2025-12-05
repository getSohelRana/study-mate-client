import React from 'react';
import { useLoaderData } from 'react-router';

const StudentProfile = () => {
  const studentdata = useLoaderData();
  console.log(studentdata)
  return (
    <div>
      
    </div>
  );
};

export default StudentProfile;
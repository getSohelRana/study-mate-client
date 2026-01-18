import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../provider/AuthContext";

const MyConnections = () => {
  const { user } = useContext(AuthContext);
  const [myConnection, setMyConnection] = useState([]);
  // console.log(user.email)
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/my-connection?requested_by=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setMyConnection(data);
        });
    }
  }, [user?.email]);
  return (
    <div className="py-10">
      <div>
        <h1 className="text-2xl text-center mb-6">
          Total partners{" "}
          <span className="text-primary font-semibold">
            {myConnection.length}
          </span>{" "}
          found.
        </h1>
      </div>
      {/* table */}
      <div className="overflow-x-auto rounded-box bg-white/50 shadow">
        <table className="table ">
          {/* head */}
          <thead>
            <tr className="bg-base-200/40">
              <th>S.L No</th>
              <th>Profile</th>
              <th>Name</th>
              <th>Subject</th>
              <th>Subject Mode</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {myConnection.map((connection, index) => (
              <tr>
                {/* s.l no */}
                <td>{index + 1}</td>
                <td>
                  {/* profile img */}
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12 rounded-full">
                      <img
                        src={connection.partnerPhoto}
                        alt={connection.partnerName}
                      />
                    </div>
                  </div>
                </td>
                {/* partner name */}
                <td>{connection.partnerName}</td>
                {/* partner subject */}
                <td>{connection.partnerSubject}</td>
                {/* subject mode */}
                <td>{connection.partnerStudyMode}</td>
                <th>
                  <div className="flex justify-center items-center gap-2">
                    <button className="btn btn-primary btn-xs">Update</button>
                    <button className="btn btn-error btn-xs">Delate</button>
                  </div>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyConnections;

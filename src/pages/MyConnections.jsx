import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../provider/AuthContext";
import Swal from "sweetalert2";

const MyConnections = () => {
  const { user } = useContext(AuthContext);
  const [myConnection, setMyConnection] = useState([]);
  // console.log(user.email)
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/my-connection?requested_by=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setMyConnection(data);
        });
    }
  }, [user?.email]);
  // delete partner
  const handleDeletePartner = (_id) => {
    // console.log(_id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/partnerCounts/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data)
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "The requested partner has been deleted successfully.",
                icon: "success",
              });
              // remaining partner for ui auto updated
              const remainingPartners = myConnection.filter(connect => connect._id !==_id);
              setMyConnection(remainingPartners);
            }
          });
      }
    });
  };
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
              <th>Study Mode</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {myConnection.map((connection, index) => (
              <tr key={index}>
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
                    <button
                      className="btn btn-error btn-xs"
                      onClick={() => handleDeletePartner(connection._id)}
                    >
                      Delate
                    </button>
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

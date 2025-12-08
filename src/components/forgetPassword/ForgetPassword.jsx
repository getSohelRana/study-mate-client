import React, { use, useState } from "react";
import AuthContext from "../../provider/AuthContext";
import { Link } from "react-router";
import { MdOutgoingMail } from "react-icons/md";
import { GoArrowLeft } from "react-icons/go";
import Swal from "sweetalert2";

const ForgetPassword = () => {
  const { fotgetPassword } = use(AuthContext);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  // reset password
  const handleReset = (e) => {
    e.preventDefault();
    // checm empty
    if (!email) {
      setError("Please enter your registered email.");
      return;
    }
    if (!email.includes("@")) {
      setError("We can't seem to find the right email address for you.");
      return;
    }
    setError("");
    fotgetPassword(email)
      .then(() => {
        // show password reset success notification
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });

        Toast.fire({
          icon: "success",
          title: "Password reset link successfully send your email",
        });
        // clear input
        setEmail("");
      })
      .catch((error) => {
        // console.log(error);

        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: `${error}!`,
        });
      });
    // reset email
    e.target.reset();
  };
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
          {/* Title */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-center">Forgot Password?</h2>
            <p className="text-center text-gray-500">
              No worries, we’ll send you reset instructions
            </p>
          </div>

          <form onSubmit={handleReset}>
            {/* Email Input */}
            <label className="form-control w-full">
              <span className="label-text mb-1">Enter your email</span>
              <input
                type="email"
                placeholder="type your registered email here"
                className="input input-bordered w-full rounded-xl focus:outline-0 focus:border-primary"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            {/* Error Message */}
            <div className="my-2">
              {error && (
                <div className="alert alert-error text-white rounded-xl text-sm py-3">
                  <span>{error}</span>
                </div>
              )}
            </div>

            {/* Reset Button */}
            <button
              className="btn bg-primary hover:bg-base-200 text-white w-full rounded-xl py-3 text-base mt-3"
              onClick={handleReset}
            >
              Reset Password
            </button>
          </form>

          {/* Back to Login  or go to gmail*/}
          <div className="flex justify-between mt-5">
            <Link
              to="/sign-in"
              className="btn btn-outline border-primary  rounded-xl py-3 flex items-center gap-2"
            >
              <span className="text-primary text-xl font-bold">
                <GoArrowLeft />
              </span>
              Back to Login
            </Link>
            <Link
              to="https://mail.google.com/mail/u/0/"
              className="btn btn-outline rounded-xl py-3 flex items-center gap-2 border-primary"
            >
              <span className="text-primary text-xl font-bold">
                {" "}
                <MdOutgoingMail />{" "}
              </span>
              Go to Gmail
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;

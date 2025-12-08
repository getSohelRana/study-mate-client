import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import img3 from "../../assets/slider5.png";
import AuthContext from "../../provider/AuthContext";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import showToast from "../../utilities/toast";

const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signInWithGoogle, signInUser } = useContext(AuthContext);
  const [togglePassword, setTogglePassword] = useState("");

  //sign with email and password
  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    // check email and password empty
    if (!email|| !password) {
      showToast('warning' , 'Oops! Some fields are missing. Please fill them in')
      return;
    }
    signInUser(email, password)
      .then((res) => {
        // console.log(res)
        const user = res.user;
        showToast('success' , `Login successfully done, ${user.displayName || "User"}!` )
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        showToast("error", `${error}!`)
      });
    // reset input fields
    e.target.reset();
  };
  // Google Sign-In
  const handleSignInGoogle = () => {
    signInWithGoogle()
      .then((res) => {
        const user = res.user;

        const newUser = {
          name: res.user.displayName,
          email: res.user.email,
          image: res.user.photoURL,
        };
        // create user on databse
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("data afer saving", data);
          });
        showToast("success", `Account creatd successfully, ${user.displayName || "User"}!`)
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        showToast("success", `${error}!`)
      });
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row py-20 gap-4">
      {/* LEFT SIDE */}
      <div className="lg:w-1/2 w-full bg-linear-to-l from-[#b7e5cd] to-[#00c497] p-10 flex flex-col justify-center rounded-xl">
        <h1 className="text-4xl font-bold mb-4 text-center text-white">
          Welcome to studyMate!
        </h1>

        <div>
          <img src={img3} alt="" />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="lg:w-1/2 w-full flex justify-center items-center p-10 bg-white rounded-xl">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-primary">
            Sign In
          </h2>

          {/* FORM */}
          <div className="form-control gap-3">
            <form onSubmit={handleSignIn}>
              <fieldset>
                {/* Email */}
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input w-full"
                  placeholder="Email"
                />

                {/* Password */}
                <label className="label mt-3">Password</label>
                <div className="relative">
                  <input
                    type={togglePassword ? "text" : "password"}
                    name="password"
                    className="input w-full"
                    placeholder="Password"
                  />
                  <button
                    onClick={() => setTogglePassword(!togglePassword)}
                    type="button"
                    className="btn absolute top-0 right-0 z-1"
                  >
                    {togglePassword ? (
                      <IoEyeOutline size={20} />
                    ) : (
                      <IoEyeOffOutline size={20} />
                    )}
                  </button>
                </div>

                <button
                  className="btn bg-[#00c497] text-white mt-3 w-full"
                  type="submit"
                >
                  Sign In
                </button>
              </fieldset>
            </form>

            <div className="flex justify-between">
              <p className="text-center mt-4 text-sm">
                <Link
                  to="/forget-password"
                  className="text-primary font-semibold hover:underline"
                >
                  Forgot Password
                </Link>
              </p>
              <p className="text-center mt-4 text-sm">
                Don't have an account?{" "}
                <Link
                  to="/sign-up"
                  className="text-primary font-semibold hover:underline"
                >
                  Sign Up
                </Link>
              </p>
            </div>

            <div className="divider">or</div>

            {/* GOOGLE BUTTON */}
            <button
              onClick={handleSignInGoogle}
              className="btn w-full mt-3 bg-white border text-gray-700 hover:bg-gray-100"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="google"
                className="w-5"
              />
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

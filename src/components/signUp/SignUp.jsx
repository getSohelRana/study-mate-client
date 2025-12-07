import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import signUpImg from "../../assets/signup.svg";
import AuthContext from "../../provider/AuthContext";
import Swal from "sweetalert2";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
const SignUp = () => {
  const { signInWithGoogle, createUser, updateUserProfile, setUser } =
    use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [togglePassword, setTogglePassword] = useState("");

  // create users

  const handleSignUp = (e) => {
    e.preventDefault();
    /* Name data validation */
    const name = e.target.name.value.trim();
    if (name.length < 5) {
      setError("Name must be 5 characters");
      return;
    } else {
      setError("");
    }
    /* check photo and email empty */
    const photo = e.target.photo.value.trim();
    const email = e.target.email.value.trim();
    if (!photo || !email) {
      // toast.error("🤦‍♂️ Oops! Some fields are missing. Please fill them in.");
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
        icon: "warning",
        title: "Oops! Some fields are missing. Please fill them in",
      });
      return;
    }
    /* Password validation */
    const password = e.target.password.value.trim();

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    } else {
      setError("");
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter.");
      return;
    } else {
      setError("");
    }

    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter.");
      return;
    } else {
      setError("");
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setError("Password must contain at least one special character.");
      return;
    } else {
      setError("");
    }
    //firebae user create
    createUser(email, password)
      .then((res) => {
        const user = res.user;
        // update profile data

        /* Save user info in database */
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

        // console.log(user)
        // show success login notification
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
          title: `Account creatd successfully, ${user.displayName || "User"}!`,
        });
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        // console.log(error);
        // Firebase error code
        const errorCode = error.code;

        //Custom error message replace custom message
        const errorMessages = {
          "auth/email-already-in-use":
            "This email is already registered. Please log in instead.",
          "auth/invalid-email":
            "Invalid email address. Please enter a valid one.",
        };

        // Show custom error message
        const customMessage =
          errorMessages[errorCode] ||
          "Something went wrong. Please try again later.";

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
          icon: "error",
          title: `${error(customMessage)}!`,
        });
      });
    // reset form data
    e.target.reset();
  };

  // sign in with google
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
        // show success login notification
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
          title: `Account creatd successfully, ${user.displayName || "User"}!`,
        });
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        // show alert on sweetalert
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
          title: `Sign in failed!, ${error}!`,
        });
      });
  };
  return (
    <div className="min-h-screen flex flex-col lg:flex-row py-20 gap-4 ">
      {/* LEFT SIDE */}
      <div className="lg:w-1/2 w-full bg-linear-to-l from-[#b7e5cd] to-[#00c497] text-white p-10 flex flex-col justify-center rounded-xl">
        <h1 className="text-4xl font-bold mb-2">studyMate</h1>

        <h2 className="text-2xl lg:text-3xl font-semibold leading-snug mt-10">
          Ready to take your learning to the next level?
          <br />
          Join studyMate today.
        </h2>
        <img src={signUpImg} alt="" />
        <div className="flex items-center gap-3 mt-10">
          <div className="flex -space-x-2">
            <img
              src="https://i.pravatar.cc/40?img=1"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <img
              src="https://i.pravatar.cc/40?img=2"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <img
              src="https://i.pravatar.cc/40?img=3"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
          </div>
          <p className="text-lg font-medium">9.5k members</p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="lg:w-1/2 w-full flex justify-center items-center p-10 bg-white rounded-xl">
        <div className="w-full max-w-md">
          <h2 className="text-3xl  font-bold text-center text-primary">
            Sign Up
          </h2>

          {/* FORM */}
          <div className="form-control gap-3">
            <form onSubmit={handleSignUp}>
              <fieldset>
                {/* Name */}
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input w-full"
                  placeholder="Name"
                />
                {/* Photo URL */}
                <label className="label mt-3">Photo URL</label>
                <input
                  type="url"
                  name="photo"
                  className="input w-full"
                  placeholder="Photo URL"
                />

                {/* Email */}
                <label className="label mt-3">Email</label>
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
                {/* <small className="text-error">{passwordError}</small> */}
                <small className="text-error">{error}</small>
                <button
                  className="btn bg-[#00c497] text-white mt-3 w-full"
                  type="submit"
                >
                  Sign Up
                </button>
              </fieldset>
            </form>

            <p className="text-center mt-4 text-sm">
              Already have an account?{" "}
              <Link
                to="/sign-in"
                className="text-primary font-semibold hover:underline"
              >
                Sign In
              </Link>
            </p>

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
              Sign up with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

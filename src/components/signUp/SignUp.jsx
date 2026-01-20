import React, { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import signUpImg from "../../assets/signup.svg";
import AuthContext from "../../provider/AuthContext";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import showToast from "../../utilities/toast";

const SignUp = () => {
  const { signInWithGoogle, createUser, updateUserProfile, setUser } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [togglePassword, setTogglePassword] = useState(false);

  const redirectTo = location.state?.from?.pathname || "/";

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");

    const name = e.target.name.value.trim();
    const photo = e.target.photo.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    // name validation
    if (name.length < 5) {
      setError("Name must be at least 5 characters.");
      return;
    }
    //email and phot validation
    if (!photo || !email) {
      showToast("warning", "Oops! Some fields are missing. Please fill them in");
      return;
    }
    // password validation
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter.");
      return;
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setError("Password must contain at least one special character.");
      return;
    }

    try {
      // create firebase user
      const res = await createUser(email, password);
      const firebaseUser = res.user;

      // update firebase profile with name & photo
      if (updateUserProfile) {
        await updateUserProfile({ displayName: name, photoURL: photo });
      }

      // optionally update local auth state
      if (setUser) {
        setUser({ ...firebaseUser, displayName: name, photoURL: photo });
      }

      // save to backend (use the name and photo)
      const newUser = {
        name,
        email,
        image: photo,
      };

      await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(newUser),
      });

      showToast("success", `Account created successfully, ${name || "User"}!`);
      e.target.reset();
      navigate(redirectTo);
    } catch (err) {
      const errorCode = err?.code;
      const errorMessages = {
        "auth/email-already-in-use":
          "This email is already registered. Please log in instead.",
        "auth/invalid-email": "Invalid email address. Please enter a valid one.",
      };
      const customMessage = errorMessages[errorCode] || "Something went wrong. Please try again later.";
      showToast("error", customMessage);
      console.error("SignUp error:", err);
    }
  };

  const handleSignInGoogle = async () => {
    try {
      const res = await signInWithGoogle();
      const user = res.user;

      const newUser = {
        name: user.displayName,
        email: user.email,
        image: user.photoURL,
      };

      await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(newUser),
      });

      showToast("success" , `Account created successfully, ${user.displayName || "User"}!`)
      navigate(redirectTo);
    } catch (err) {
      showToast("error" , `Sign in failed: ${err.message || err}` )
      // console.error("Google sign-in error:", err);
    }
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
        <img src={signUpImg} alt="signup" />
        <div className="flex items-center gap-3 mt-10">
          <div className="flex -space-x-2">
            <img
              src="https://i.pravatar.cc/40?img=1"
              className="w-10 h-10 rounded-full border-2 bg-base-300"
            />
            <img
              src="https://i.pravatar.cc/40?img=2"
              className="w-10 h-10 rounded-full border-2 bg-base-300"
            />
            <img
              src="https://i.pravatar.cc/40?img=3"
              className="w-10 h-10 rounded-full border-2 bg-base-300"
            />
          </div>
          <p className="text-lg font-medium">9.5k members</p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="lg:w-1/2 w-full flex justify-center items-center p-10 bg-base-300 rounded-xl">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-primary">
            Sign Up
          </h2>

          <div className="form-control gap-3">
            <form onSubmit={handleSignUp}>
              <fieldset>
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input w-full"
                  placeholder="Name"
                />

                <label className="label mt-3">Photo URL</label>
                <input
                  type="url"
                  name="photo"
                  className="input w-full"
                  placeholder="Photo URL"
                />

                <label className="label mt-3">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input w-full"
                  placeholder="Email"
                />

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

                <small className="text-error">{error}</small>
                <button
                  className="btn bg-[#00c497] bg-base-300 mt-3 w-full"
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

            <button
              onClick={handleSignInGoogle}
              className="btn w-full mt-3 bg-base-300 border text-gray-700 hover:bg-gray-100"
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

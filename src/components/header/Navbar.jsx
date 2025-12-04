import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";
import AuthContext from "../../provider/AuthContext";
import userIcon from "../../assets/user.png";
import ThemeSwitcher from "../theme/ThemeSwitcher";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  

  // handle sign out
  const handleSignOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-left",
          icon: "success",
          title: "Signed out successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/find-partners">Find Partners</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="create-partner-profile">
              Create Partner Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="my-connections">My Connections</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="bg-white shadow-sm">
      <div className="navbar container mx-auto">
        <div className="navbar-start items-center">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden -mx-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/">
            <img className="h-9 sm:h-12" src={logo} alt="site_logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-2">
          {/* Theme switcher */}
          <ThemeSwitcher></ThemeSwitcher>

          {user ? (
            <>
              <div className="dropdown dropdown-bottom dropdown-end z-10">
                <div
                  tabIndex={0}
                  role="button"
                  className="m-1 border-2 border-primary rounded-full"
                >
                  <img
                    className="w-10 h-10 object-cover rounded-full"
                    src={`${user ? user.photoURL : userIcon}`}
                    alt="user_icon"
                  />
                </div>
                <ul
                  tabIndex="-1"
                  className="dropdown-content menu bg-base-100 rounded-box z-1 w-35 lg:w-52 p-2 shadow-sm"
                >
                  <li>
                    <Link to="/" className="btn btn-primary mb-2">View Profile</Link>
                  </li>
                  <li>
                    <button
                      onClick={handleSignOut}
                      className="btn bg-error text-white"
                    >
                      Sign Out
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <Link
                to="/sign-in"
                className="btn btn-sm btn-primary px-5 rounded-2xl text-[16px] transition-all duration-300 hover:bg-secondary hover:scale-105"
              >
                Login
              </Link>
              <Link
                to="/sign-up"
                className="btn btn-sm btn-outline rounded-2xl text-[16px]
    transition-all duration-300 hover:bg-primary hover:text-white hover:border-secondary hover:scale-105"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

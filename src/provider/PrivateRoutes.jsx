import React, { use } from "react";
import { Navigate, useLocation } from "react-router";
import Loading from "../components/loading/Loading";
import AuthContext from "./AuthContext";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }
  //isUser logged go to private page
  if (user && user?.email) {
    return children;
  }
  // other wise go to login page
  return <Navigate state={location.pathname} to="/sign-in"></Navigate>;
};

export default PrivateRoutes;

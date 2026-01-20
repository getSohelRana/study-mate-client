import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import FindPartners from "../pages/FindPartners";
import CreatePartnerProfile from "../pages/CreatePartnerProfile";
import MyConnections from "../pages/MyConnections";
import SignIn from "../components/signIn/SignIn";
import SignUp from "../components/signUp/SignUp";
import PrivateRoutes from "../provider/PrivateRoutes";
import StudentProfile from "../components/studentProfile/StudentProfile";
import StudentDetails from "../components/studentProfile/StudentDetails";
import ForgetPassword from "../components/forgetPassword/ForgetPassword";
import Loading from "../components/loading/Loading";
import UpdateMyProfile from "../components/updateMyProfile/UpdateMyProfile";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/find-partners",
        element: <FindPartners></FindPartners>,
        loader: () =>
          fetch("https://study-mate-server-virid.vercel.app/students"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/student-details/:id",
        loader: ({ params }) =>
          fetch(
            `https://study-mate-server-virid.vercel.app/students/${params.id}`,
          ),
        element: (
          <PrivateRoutes>
            <StudentDetails></StudentDetails>
          </PrivateRoutes>
        ),
      },
      {
        path: "/create-partner-profile",
        element: (
          <PrivateRoutes>
            <CreatePartnerProfile></CreatePartnerProfile>
          </PrivateRoutes>
        ),
      },
      {
        path: "/my-connections",
        element: (
          <PrivateRoutes>
            <MyConnections></MyConnections>
          </PrivateRoutes>
        ),
      },
      {
        path: "/sign-in",
        element: <SignIn></SignIn>,
      },
      {
        path: "/forget-password",
        element: <ForgetPassword></ForgetPassword>,
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },
      {
        path: "/student-profile/:id",
        loader: ({ params }) =>
          fetch(
            `https://study-mate-server-virid.vercel.app/students/${params.id}`,
          ),
        element: (
          <PrivateRoutes>
            <StudentProfile></StudentProfile>
          </PrivateRoutes>
        ),
      },
      {
        path: "/update-my-profile",
        element: (
          <PrivateRoutes>
            <UpdateMyProfile></UpdateMyProfile>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;

import React from "react";
import UnAuthorized from "../../views/UnAuthorized";
const Login = React.lazy(() => import("../../views/auth/Login"));
const Register = React.lazy(() => import("../../views/auth/Register"));
const AdminLogin = React.lazy(() => import("../../views/auth/AdminLogin"));
const Home = React.lazy(() => import("../../views/Home"));

const publicRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/admin/login",
    element: <AdminLogin />,
  },
  {
    path: "/unauthorized",
    element: <UnAuthorized />,
  },
];

export default publicRoutes;

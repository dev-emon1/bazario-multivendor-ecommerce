import React from "react";
const Login = React.lazy(() => import("../../views/auth/Login"));
const Register = React.lazy(() => import("../../views/auth/Register"));
const AdminLogin = React.lazy(() => import("../../views/auth/AdminLogin"));

const publicRoutes = [
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
];

export default publicRoutes;

import { privateRoutes } from "./privateRoutes";
import RootLayout from "../../layouts/RootLayout";

export const getRoutes = () => {
  return {
    path: "/",
    element: <RootLayout />,
    children: privateRoutes,
  };
};

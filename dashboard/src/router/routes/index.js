import { privateRoutes } from "./privateRoutes";
import RootLayout from "../../layouts/RootLayout";
import ProtectRoutes from "./ProtectRoutes";

export const getRoutes = () => {
  privateRoutes.map((r) => {
    r.element = <ProtectRoutes route={r}>{r.element}</ProtectRoutes>;
  });

  return {
    path: "/",
    element: <RootLayout />,
    children: privateRoutes,
  };
};

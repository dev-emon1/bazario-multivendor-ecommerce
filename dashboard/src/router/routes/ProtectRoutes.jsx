import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectRoutes = ({ route, children }) => {
  const { role, userInfo } = useSelector((state) => state.auth);

  if (role) {
    if (route.role) {
      if (userInfo) {
        if (userInfo.role === route.role) {
          if (route.status) {
            if (route.status === userInfo.status) {
              return <Suspense fallback={null}>{children}</Suspense>;
            } else {
              if (userInfo.status === "pending") {
                return <Navigate to="/seller/account-pending" />;
              } else {
                return <Navigate to="/seller/account-deactivate" />;
              }
            }
          } else {
            if (role.visibility) {
              if (role.visibility.some((r) => r === userInfo.status)) {
                return <Suspense fallback={null}>{children}</Suspense>;
              } else {
                return <Navigate to="/seller/account-pending" />;
              }
            } else {
              return <Suspense fallback={null}>{children}</Suspense>;
            }
          }
        } else {
          return <Navigate to="/unauthorized" replace />;
        }
      }
    } else {
      if (route.ability === "seller") {
        return <Suspense fallback={null}>{children}</Suspense>;
      }
    }
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectRoutes;

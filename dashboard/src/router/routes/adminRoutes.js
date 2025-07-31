import { lazy } from "react";

const AdminDashboard = lazy(() =>
  import("../../views/admin/AdminDashboard.jsx")
);
const Orders = lazy(() => import("../../views/admin/Orders.jsx"));
const OrderDetails = lazy(() => import("../../views/admin/OrderDetails.jsx"));
const Category = lazy(() => import("../../views/admin/Category.jsx"));
const Sellers = lazy(() => import("../../views/admin/Sellers.jsx"));
const PaymentRequest = lazy(() =>
  import("../../views/admin/PaymentRequest.jsx")
);
const DeactivatedSellers = lazy(() =>
  import("../../views/admin/DeactivatedSellers.jsx")
);
const SellerRequests = lazy(() =>
  import("../../views/admin/SellerRequests.jsx")
);
const SellerDetails = lazy(() => import("../../views/admin/SellerDetails.jsx"));
const ChatSellers = lazy(() => import("../../views/admin/ChatSellers.jsx"));

export const adminRoutes = [
  {
    path: "admin/dashboard",
    element: <AdminDashboard />,
    role: "admin",
  },
  {
    path: "admin/dashboard/orders",
    element: <Orders />,
    role: "admin",
  },
  {
    path: "admin/dashboard/order/details/:orderId",
    element: <OrderDetails />,
    role: "admin",
  },
  {
    path: "admin/dashboard/category",
    element: <Category />,
    role: "admin",
  },
  {
    path: "admin/dashboard/sellers",
    element: <Sellers />,
    role: "admin",
  },
  {
    path: "admin/dashboard/payment-requests",
    element: <PaymentRequest />,
    role: "admin",
  },
  {
    path: "admin/dashboard/deactivated-sellers",
    element: <DeactivatedSellers />,
    role: "admin",
  },
  {
    path: "admin/dashboard/seller-requests",
    element: <SellerRequests />,
    role: "admin",
  },
  {
    path: "admin/dashboard/seller/details/:sellerId",
    element: <SellerDetails />,
    role: "admin",
  },
  {
    path: "admin/dashboard/chat-sellers",
    element: <ChatSellers />,
    role: "admin",
  },
];

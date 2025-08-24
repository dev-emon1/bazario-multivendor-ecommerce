import { lazy } from "react";
import Pending from "../../views/Pending";
import Deactivate from "../../views/Deactivate";

const OrderDetails = lazy(() => import("../../views/seller/OrderDetails"));
const EditProduct = lazy(() => import("../../views/seller/EditProduct"));
const SellerProfile = lazy(() => import("../../views/seller/SellerProfile"));
const SellerToCustomer = lazy(() =>
  import("../../views/seller/SellerToCustomer")
);
const SellerToAdmin = lazy(() => import("../../views/seller/SellerToAdmin"));
const DiscountProducts = lazy(() =>
  import("../../views/seller/DiscountProducts")
);
const Orders = lazy(() => import("../../views/seller/Orders"));
const Payments = lazy(() => import("../../views/seller/Payments"));
const Products = lazy(() => import("../../views/seller/Products"));
const AddProduct = lazy(() => import("../../views/seller/AddProduct"));
const SellerDashboard = lazy(() =>
  import("../../views/seller/SellerDashboard")
);

export const sellerRoutes = [
  {
    path: "/seller/account-pending",
    element: <Pending />,
    ability: "seller",
  },
  {
    path: "/seller/account-deactivate",
    element: <Deactivate />,
    ability: "seller",
  },
  {
    path: "/seller/dashboard",
    element: <SellerDashboard />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/add-product",
    element: <AddProduct />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/edit-product/:productId",
    element: <EditProduct />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/all-products",
    element: <Products />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/discount-products",
    element: <DiscountProducts />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/orders",
    element: <Orders />,
    role: "seller",
    ability: ["activate", "deactivate"],
  },
  {
    path: "/seller/dashboard/orders/details/:orderId",
    element: <OrderDetails />,
    role: "seller",
    ability: ["activate", "deactivate"],
  },
  {
    path: "/seller/dashboard/payments",
    element: <Payments />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/chat-support",
    element: <SellerToAdmin />,
    role: "seller",
    ability: ["activate", "deactivate", "pending"],
  },
  {
    path: "/seller/dashboard/chat-customers",
    element: <SellerToCustomer />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/chat-customers/:customerId",
    element: <SellerToCustomer />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/profile",
    element: <SellerProfile />,
    role: "seller",
    status: "active",
  },
];

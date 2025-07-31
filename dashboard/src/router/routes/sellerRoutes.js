import { lazy } from "react";
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
const Home = lazy(() => import("../../views/Home"));

export const sellerRoutes = [
  {
    path: "/",
    element: <Home />,
    ability: ["admin", "seller"],
  },
  {
    path: "/seller/dashboard",
    element: <SellerDashboard />,
    ability: ["seller"],
  },
  {
    path: "/seller/dashboard/add-product",
    element: <AddProduct />,
    ability: ["seller"],
  },
  {
    path: "/seller/dashboard/all-products",
    element: <Products />,
    ability: ["seller"],
  },
  {
    path: "/seller/dashboard/discount-products",
    element: <DiscountProducts />,
    ability: ["seller"],
  },
  {
    path: "/seller/dashboard/orders",
    element: <Orders />,
    ability: ["seller"],
  },
  {
    path: "/seller/dashboard/payments",
    element: <Payments />,
    ability: ["seller"],
  },
];

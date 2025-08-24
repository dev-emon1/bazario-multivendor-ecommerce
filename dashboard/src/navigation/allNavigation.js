import { AiOutlineDashboard, AiOutlineShoppingCart } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { FaUsers, FaCartPlus, FaRocketchat } from "react-icons/fa";
import {
  MdPayment,
  MdDiscount,
  MdOutlinePayments,
  MdOutlineContactSupport,
} from "react-icons/md";
import { FaCodePullRequest, FaUserXmark } from "react-icons/fa6";
import { SiLivechat } from "react-icons/si";
import { IoMdAddCircleOutline } from "react-icons/io";
import { RiAlignItemLeftFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

export const allNav = [
  {
    id: 1,
    name: "Dashboard",
    icon: <AiOutlineDashboard />,
    role: "admin",
    path: "/admin/dashboard",
  },
  {
    id: 2,
    name: "Orders",
    icon: <AiOutlineShoppingCart />,
    role: "admin",
    path: "/admin/dashboard/orders",
  },
  {
    id: 3,
    name: "Category",
    icon: <BiCategory />,
    role: "admin",
    path: "/admin/dashboard/category",
  },
  {
    id: 4,
    name: "Sellers",
    icon: <FaUsers />,
    role: "admin",
    path: "/admin/dashboard/sellers",
  },
  {
    id: 5,
    name: "Payment Requests",
    icon: <MdPayment />,
    role: "admin",
    path: "/admin/dashboard/payment-requests",
  },
  {
    id: 6,
    name: "Deactivated Sellers",
    icon: <FaUserXmark />,
    role: "admin",
    path: "/admin/dashboard/deactivated-sellers",
  },
  {
    id: 7,
    name: "Seller Requests",
    icon: <FaCodePullRequest />,
    role: "admin",
    path: "/admin/dashboard/seller-requests",
  },
  {
    id: 8,
    name: "Live Chat",
    icon: <SiLivechat />,
    role: "admin",
    path: "/admin/dashboard/chat-sellers",
  },
  {
    id: 9,
    name: "Dashboard",
    icon: <AiOutlineDashboard />,
    role: "seller",
    path: "/seller/dashboard",
  },
  {
    id: 10,
    name: "Add Product",
    icon: <IoMdAddCircleOutline />,
    role: "seller",
    path: "/seller/dashboard/add-product",
  },
  {
    id: 11,
    name: "All Product",
    icon: <RiAlignItemLeftFill />,
    role: "seller",
    path: "/seller/dashboard/all-products",
  },
  {
    id: 12,
    name: "Discount Product",
    icon: <MdDiscount />,
    role: "seller",
    path: "/seller/dashboard/discount-products",
  },
  {
    id: 13,
    name: "Orders",
    icon: <FaCartPlus />,
    role: "seller",
    path: "/seller/dashboard/orders",
  },
  {
    id: 14,
    name: "Payments",
    icon: <MdOutlinePayments />,
    role: "seller",
    path: "/seller/dashboard/payments",
  },
  {
    id: 15,
    name: "Chat Customers",
    icon: <FaRocketchat />,
    role: "seller",
    path: "/seller/dashboard/chat-customers",
  },
  {
    id: 16,
    name: "Chat Support",
    icon: <MdOutlineContactSupport />,
    role: "seller",
    path: "/seller/dashboard/chat-support",
  },
  {
    id: 16,
    name: "Profile",
    icon: <CgProfile />,
    role: "seller",
    path: "/seller/dashboard/profile",
  },
];

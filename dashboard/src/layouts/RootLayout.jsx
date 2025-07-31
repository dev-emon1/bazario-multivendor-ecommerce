import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const RootLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="bg-[#cac4ff] w-full h-screen">
      <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div className="ml-0 lg:ml-[260px] pt-24 transition-all duration-300">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;

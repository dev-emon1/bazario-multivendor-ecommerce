import React from "react";
import { FaList } from "react-icons/fa";

const Header = ({ showSidebar, setShowSidebar }) => {
  return (
    <div className="fixed top-0 left-0 w-full py-5 px-2 lg:px-7 z-50">
      <div className="ml-0 lg:ml-[260px] rounded-md h-[70px] flex justify-between items-center px-5 bg-[#e6e7fb] shadow-[0_0_15px_0_rgb(34_41_47_/_5%)] transition-all">
        <div className="flex items-center justify-between gap-4">
          <div
            onClick={() => setShowSidebar(!showSidebar)}
            className="w-9 h-9 flex lg:hidden rounded-full items-center justify-center bg-transparent text-black cursor-pointer hover:bg-[#f7941d]/90 transition-all duration-300"
          >
            <FaList />
          </div>

          <div className="hidden md:block">
            <input
              type="text"
              placeholder="Search"
              className="px-2 py-2 outline-none bg-transparent border border-[#e0e0e0] rounded-md w-[350px] text-[#030818] text-sm"
            />
          </div>
        </div>

        <div className="flex items-center justify-center gap-8 relative">
          <div className="flex justify-center items-center">
            <div className="flex items-center justify-center gap-3">
              <div className="flex justify-center items-center flex-col text-end">
                <h3 className="text-md font-bold">Md Emon Hossain</h3>
                <span className="text-sm font-normal w-full">Admin</span>
              </div>
              <img
                className="w-9 h-9 rounded-full overflow-hidden"
                src="http://localhost:3000/images/admin.png"
                alt="Admin"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

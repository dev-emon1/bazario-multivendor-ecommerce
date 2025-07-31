import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getNav } from "../navigation/index";
import { GrLogout } from "react-icons/gr";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const [allNav, setAllNav] = useState([]);
  const { pathname } = useLocation();

  useEffect(() => {
    const navs = getNav("seller");
    setAllNav(navs);
  }, []);

  return (
    <div>
      <div
        onClick={() => setShowSidebar(false)}
        className={`flex duration-200 ${
          !showSidebar ? "invisible" : "visible"
        } w-screen h-screen bg-slate-500 fixed left-0 top-0 z-10`}
      ></div>
      <div
        className={`w-[260px] fixed bg-[#e6e7fb] z-50 top-0 h-screen shadow-[0_0_15px_0_rgb(34_41_47_/_5%)] transition-all ${
          showSidebar ? "left-0" : "-left-[260px] lg:left-0"
        }`}
      >
        <div className="h-[70px] flex items-center justify-center">
          <Link to="/" className="w-[180px] h-[50px]">
            <img src="http://localhost:3000/images/logo.png" alt="Bazario" />
          </Link>
        </div>

        <div className="px-4">
          <ul>
            {allNav.map((nav, i) => (
              <li key={i}>
                <Link
                  to={nav.path}
                  className={`flex items-center justify-start gap-3 px-3 py-2 rounded-sm hover:pl-4 transition-all w-full mb-2 ${
                    pathname === nav.path
                      ? "text-white bg-[#6168f8] shadow-indigo-500/50 duration-500"
                      : "text-[#030818] font-bold duration-200"
                  } `}
                >
                  <span>{nav.icon}</span>
                  <span>{nav.name}</span>
                </Link>
              </li>
            ))}

            <li>
              <button className="flex items-center justify-start gap-3 px-3 py-2 rounded-sm hover:pl-4 transition-all w-full mb-2 text-[#030818] font-bold duration-200">
                <GrLogout />
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

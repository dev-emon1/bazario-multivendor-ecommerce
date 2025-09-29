import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { IoMdArrowDropdown, IoMdPhonePortrait } from "react-icons/io";
import {
  FaCartPlus,
  FaFacebook,
  FaHeart,
  FaLinkedin,
  FaList,
  FaLock,
  FaPinterest,
  FaTwitter,
  FaUser,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const { pathname } = useLocation();
  const user = true;
  const wishlist_count = 5;
  return (
    <div className="w-full bg-white">
      <div className="header-top bg-[#ecf3ff] md-lg:hidden">
        <div className="w-[85%] lg:w-[90%] mx-auto">
          <div className="w-full flex justify-between items-center h-[50px] text-slate-400">
            <ul className="flex justify-start items-center gap-8 font-semibold text-black">
              <li className="flex justify-center items-center gap-2 relative text-sm after:absolute after:h-[18px] after:w-[2px] after:bg-[#afafaf] after:-right-[16px]">
                <span>
                  <MdEmail />
                </span>
                <span>support@gmail.com</span>
              </li>
              <li className="flex justify-center items-center gap-2 relative text-sm">
                <span>
                  <IoMdPhonePortrait />
                </span>
                <span>+(123) 343 54378</span>
              </li>
            </ul>

            <div>
              <div className="flex justify-center items-center gap-10">
                <div className="flex justify-center items-center gap-4 text-black">
                  <a href="#">
                    <FaFacebook />
                  </a>
                  <a href="#">
                    <FaTwitter />
                  </a>
                  <a href="#">
                    <FaLinkedin />
                  </a>
                  <a href="#">
                    <FaPinterest />
                  </a>
                </div>

                <div className="flex justify-center items-center gap-1 group cursor-pointer text-slate-800 text-sm relative after:h-[18px] after:w-[2px] after:bg-[#afafaf] before:w-[1px] before:-left-[20px]">
                  <img src="http://localhost:3001/images/language.png" alt="" />
                  <span>
                    <IoMdArrowDropdown />
                  </span>
                  <ul className="absolute invisible transition-all duration-200 top-12 rounded-sm text-white p-2 w-[100px] flex flex-col gap-2 group-hover:visible group-hover:top-6 group-hover:bg-black z-10">
                    <li>English</li>
                    <li>Hindi</li>
                    <li>Bangla</li>
                  </ul>
                </div>

                <div>
                  {user ? (
                    <Link
                      to="/dashboard"
                      className="flex justify-center items-center gap-2 cursor-pointer text-black text-sm"
                    >
                      <span>
                        <FaUser />
                      </span>
                      <span>Emon Hossain</span>
                    </Link>
                  ) : (
                    <Link
                      to="/login"
                      className="flex justify-center items-center gap-2 cursor-pointer text-black text-sm"
                    >
                      <span>
                        <FaLock />
                      </span>
                      <span>Login</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-white">
        <div className="w-[85%] lg:w-[90%] mx-auto">
          <div className="h-[80px] md-lg:h-[100px] flex justify-between items-center flex-wrap">
            <div className="md-lg:w-full w-3/12 md-lg:pt-4">
              <div className="flex justify-between items-center ">
                <Link to="/">
                  <img src="http://localhost:3001/images/logo-2.png" alt="" />
                </Link>

                <div
                  className="justify-center items-center w-8 h-8 bg-white border-slate-400 rounded-sm cursor-pointer lg:hidden md-lg:flex xl:hidden hidden"
                  onClick={() => setShowSidebar(false)}
                >
                  <span>
                    <FaList />
                  </span>
                </div>
              </div>
            </div>

            <div className="md-lg:w-full w-9/12">
              <div className="flex justify-between md-lg:justify-center items-center flex-wrap pl-8">
                <ul className="flex justify-start items-start gap-8 text-sm font-bold uppercase md-lg:hidden">
                  <li>
                    <Link
                      className={`p-2 block ${
                        pathname === "/" ? "text-[#f7941d]" : "text-slate-600"
                      }`}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`p-2 block ${
                        pathname === "/shop"
                          ? "text-[#f7941d]"
                          : "text-slate-600"
                      }`}
                    >
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`p-2 block ${
                        pathname === "/blog"
                          ? "text-[#f7941d]"
                          : "text-slate-600"
                      }`}
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`p-2 block ${
                        pathname === "/about-us"
                          ? "text-[#f7941d]"
                          : "text-slate-600"
                      }`}
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`p-2 block ${
                        pathname === "/contact"
                          ? "text-[#f7941d]"
                          : "text-slate-600"
                      }`}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>

                <div className="flex justify-center items-center gap-5 md-lg:hidden">
                  <div className="flex justify-center gap-5">
                    <div className="flex justify-center items-center relative cursor-pointer w-9 h-9 rounded-full bg-[#f3f3f3]">
                      <span className="text-xl text-[#f7941d]">
                        <FaHeart />
                      </span>
                      <div className="w-5 h-5 absolute bg-red-500 rounded-full text-white flex justify-center items-center -top-[3px] -right-[5px]">
                        {wishlist_count}
                      </div>
                    </div>
                    <div className="flex justify-center items-center relative cursor-pointer w-9 h-9 rounded-full bg-[#f3f3f3]">
                      <span className="text-xl text-[#f7941d]">
                        <FaCartPlus />
                      </span>
                      <div className="w-5 h-5 absolute bg-red-500 rounded-full text-white flex justify-center items-center -top-[3px] -right-[5px]">
                        {wishlist_count}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md-lg:block">
        <div
          className={`fixed duration-200 transition-all hidden md-lg:block w-screen h-screen bg-[rgba(0,0,0,0.4)] top-0 left-0 z-20 ${
            showSidebar ? "invisible" : "visible"
          } `}
          onClick={() => setShowSidebar(true)}
        >
          <div
            className={`w-[300px] z-[999] transition-all duration-200 fixed overflow-auto bg-white h-screen py-6 px-8 ${
              showSidebar ? "-left-[300px]" : "left-0 top-0"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-start flex-col gap-6">
              <Link to="/">
                <img src="http://localhost:3001/images/logo-2.png" alt="" />
              </Link>

              <div className="flex justify-start items-center gap-10">
                <div className="flex justify-center items-center gap-2 group cursor-pointer text-slate-800 text-sm relative after:h-[18px] after:w-[2px] after:bg-[#afafaf]">
                  <img src="http://localhost:3001/images/language.png" alt="" />
                  <span>
                    <IoMdArrowDropdown />
                  </span>
                  <ul className="absolute invisible transition-all duration-200 top-12 rounded-sm text-white p-2 w-[100px] flex flex-col gap-2 group-hover:visible group-hover:top-6 group-hover:bg-black z-10">
                    <li>English</li>
                    <li>Hindi</li>
                    <li>Bangla</li>
                  </ul>
                </div>
                {user ? (
                  <Link
                    to="/dashboard"
                    className="flex justify-center items-center gap-2 cursor-pointer text-black text-sm"
                  >
                    <span>
                      <FaUser />
                    </span>
                    <span>Emon Hossain</span>
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    className="flex justify-center items-center gap-2 cursor-pointer text-black text-sm"
                  >
                    <span>
                      <FaLock />
                    </span>
                    <span>Login</span>
                  </Link>
                )}
              </div>
              <ul className="flex flex-col justify-start items-start text-sm font-bold uppercase">
                <li>
                  <Link
                    className={`py-2 block ${
                      pathname === "/" ? "text-[#f7941d]" : "text-slate-600"
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className={`py-2 block ${
                      pathname === "/shop" ? "text-[#f7941d]" : "text-slate-600"
                    }`}
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    className={`py-2 block ${
                      pathname === "/blog" ? "text-[#f7941d]" : "text-slate-600"
                    }`}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    className={`py-2 block ${
                      pathname === "/about-us"
                        ? "text-[#f7941d]"
                        : "text-slate-600"
                    }`}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    className={`py-2 block ${
                      pathname === "/contact"
                        ? "text-[#f7941d]"
                        : "text-slate-600"
                    }`}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

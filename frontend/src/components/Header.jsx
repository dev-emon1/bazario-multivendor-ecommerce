import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import {
  IoMdArrowDropdown,
  IoMdPhonePortrait,
  IoIosArrowDown,
} from "react-icons/io";
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
  FaPhoneAlt,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [categoryMenuShow, setCategoryMenuShow] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");

  const { pathname } = useLocation();
  const user = true;
  const wishlist_count = 5;
  const category = [
    "Mobile Phones",
    "Laptops & Computers",
    "Smart Watches",
    "Cameras & Accessories",
    "Headphones & Audio Devices",
    "Men’s Clothing",
    "Women’s Clothing",
    "Kids & Baby Wear",
    "Footwear",
    "Bags & Accessories",
    "Skincare",
    "Makeup",
    "Hair Care",
    "Perfumes & Deodorants",
    "Grooming Tools",
    "Furniture",
    "Home Decor",
    "Kitchen & Dining",
    "Cleaning Supplies",
    "Bedding & Bath",
  ];
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
                <img src="http://localhost:3000/images/logo-2.png" alt="" />
              </Link>

              <div className="flex justify-start items-center gap-10">
                <div className="flex justify-center items-center gap-2 group cursor-pointer text-slate-800 text-sm relative after:h-[18px] after:w-[2px] after:bg-[#afafaf]">
                  <img src="http://localhost:3000/images/language.png" alt="" />
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

              <div className="flex justify-start items-center gap-4 text-black">
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
              <ul className="flex justify-start items-center gap-8 font-semibold text-black">
                <li className="flex justify-center items-center gap-2 relative text-sm">
                  <span>
                    <MdEmail />
                  </span>
                  <span>support@gmail.com</span>
                </li>
              </ul>
              <div className="flex md-lg:justify-start items-center justify-end gap-3">
                <div className="w-[48px] h-[48px] rounded-full bg-[#f5f5f5] flex justify-center items-center">
                  <span>
                    <FaPhoneAlt />
                  </span>
                </div>
                <div className="flex flex-col justify-end gap-1">
                  <h3 className="text-sm font-medium text-slate-700">
                    +880 1711 921230
                  </h3>
                  <span className="text-xs">Support 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[85%] lg:w-[90%] mx-auto">
        <div className="flex w-full flex-wrap md-lg:gap-8">
          <div className="w-3/12 md-lg:w-full">
            <div className="bg-white relative">
              <div
                onClick={() => setCategoryMenuShow(!categoryMenuShow)}
                className="h-12 flex justify-center items-center bg-main  md-lg:justify-between text-white md-lg:px-6 gap-3 font-bold text-md cursor-pointer"
              >
                <div className="flex justify-center items-center gap-3">
                  <span>
                    <FaList />
                  </span>
                  <span className="capitalize">all category</span>
                </div>
                <span>
                  <IoIosArrowDown />
                </span>
              </div>
              <div
                className={`${
                  categoryMenuShow ? "h-0" : "h-[400px]"
                } overflow-hidden transition-all md-lg:relative duration-500 absolute z-[999] bg-bgSurface w-full border-x`}
              >
                <ul className="py-2 text-slate-600 font-medium">
                  {category.map((menu, i) => (
                    <li
                      className="flex justify-start items-center gap-2 px-[24px] py-[6px]"
                      key={i}
                    >
                      <Link to="#" className="text-sm block">
                        {menu}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="w-9/12 md-lg:pl-0 pl-8 md-lg:w-full">
            <div className="w-full justify-between flex flex-wrap items-center md-lg:gap-6">
              <div className="w-8/12 md-lg:w-full">
                <div className="flex items-center border h-12 relative gap-6">
                  <div className="relative after:absolute after:h-6 after:w-[1px] after:bg-[#afafaf] after:-right-4 md:hidden">
                    <select
                      name=""
                      id=""
                      onChange={(e) => setCategoryValue(e.target.value)}
                      className="w-[180px] text-slate-500 font-semibold bg-transparent px-2 h-full outline-0 border-none"
                    >
                      <option value="">Select Category</option>
                      {category.map((menu, i) => (
                        <option value={menu} key={i}>
                          {menu}
                        </option>
                      ))}
                    </select>
                  </div>
                  <input
                    type="text"
                    placeholder="What do you need?"
                    onChange={(e) => setSearchValue(e.target.value)}
                    className="w-full relative bg-transparent text-slate-500 outline-0 px-3 h-full"
                  />
                  <button className="bg-main absolute right-0 px-8 h-full uppercase text-white font-semibold hover:bg-mainHover">
                    Search
                  </button>
                </div>
              </div>

              <div className="w-4/12 block md-lg:hidden pl-2 md-lg:w-full md-lg:pl-0">
                <div className="flex md-lg:justify-start items-center justify-end gap-3">
                  <div className="w-[48px] h-[48px] rounded-full bg-[#f5f5f5] flex justify-center items-center">
                    <span>
                      <FaPhoneAlt />
                    </span>
                  </div>
                  <div className="flex flex-col justify-end gap-1">
                    <h3 className="text-md font-medium text-slate-700">
                      +880 1711 921230
                    </h3>
                    <span className="text-sm">Support 24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

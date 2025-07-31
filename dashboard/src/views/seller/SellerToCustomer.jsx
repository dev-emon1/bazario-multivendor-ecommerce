import React from "react";
import { BsSendFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const SellerToCustomer = () => {
  const [show, setShow] = React.useState(false);
  const sellerId = 11;
  return (
    <div className="relative px-2 lg:px-7 pt-5">
      <div className="w-full bg-white p-4 rounded-md h-[calc(100vh-140px)] overflow-hidden relative">
        {/* Mobile Toggle Button */}
        {!show && (
          <button
            className="md:hidden absolute top-4 right-4 z-30 bg-[#aca6ee] text-white p-2 rounded shadow"
            onClick={() => setShow(true)}
            aria-label="Open Sidebar"
          >
            <FaBars />
          </button>
        )}

        {show && (
          <div
            className="fixed inset-0 bg-black opacity-40 z-10 md:hidden"
            onClick={() => setShow(false)}
          ></div>
        )}

        <div className="w-full h-full flex relative">
          {/* Sidebar */}
          <div
            className={`w-[250px] h-full absolute md:relative z-20 transition-all duration-300 ease-in-out ${
              show ? "-left-0" : "-left-[280px]"
            } md:left-0`}
          >
            <div className="w-full h-full bg-[#bab4ff] md:bg-transparent overflow-y-auto">
              <div className="flex text-xl justify-between items-center p-4 md:p-0 md:px-3 md:pb-3">
                <h2>Sellers</h2>
                {/* Close on Mobile */}
                <span
                  className="md:hidden block cursor-pointer"
                  onClick={() => setShow(false)}
                  role="button"
                  aria-label="Close Sidebar"
                >
                  <IoMdClose />
                </span>
              </div>

              {/* Seller List */}
              {["Emon", "Jhon", "Raj"].map((name, i) => (
                <div
                  key={i}
                  className={`flex justify-start gap-2 items-center px-2 py-3 rounded-sm cursor-pointer ${
                    i === 0 ? "bg-[#8388ed]" : ""
                  }`}
                >
                  <div className="relative w-10 h-10 flex items-center justify-center">
                    <img
                      className="border border-black rounded-full"
                      src="http://localhost:3000/images/seller.png"
                      alt="user"
                    />
                    <div className="w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-[2px]"></div>
                  </div>

                  <div className="flex flex-col w-full">
                    <h3 className="text-base font-semiBold">{name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Panel */}
          <div className="flex-1 flex flex-col bg-white rounded-md p-4 ml-0 md:ml-4">
            {/* Top Profile Info */}
            <div className="flex justify-between items-center">
              {sellerId && (
                <div className="flex justify-start items-center gap-3">
                  <div className="relative">
                    <img
                      className="w-[45px] h-[45px] border-green-500 border-2 p-1 rounded-full"
                      src="http://localhost:3000/images/seller.png"
                      alt="seller"
                    />
                    <div className="w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-[6px]"></div>
                  </div>
                </div>
              )}
            </div>

            {/* Messages Area (slate bg only here) */}
            <div className="flex-1 py-4 overflow-y-auto">
              <div className="bg-slate-100 h-full rounded-md p-3">
                <div className="w-full flex justify-start items-center">
                  <div className="flex justify-start items-start gap-2 md:px-2 py-2 max-w-full lg:max-w-[85%]">
                    <div>
                      <img
                        src="http://localhost:3000/images/admin.png"
                        alt="img"
                        className="w-10 h-10 border-2 border-white rounded-full max-w-10 p-1"
                      />
                    </div>
                    <div className="flex justify-center items-start flex-col w-full  bg-white shadow-md shadow-slate-400/50 text-black px-2 py-1 rounded-sm">
                      <span className="text-sm md:text-base font-medium">
                        How are you?
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-end items-center">
                  <div className="flex justify-start items-start gap-2 md:px-2 py-2 max-w-full lg:max-w-[85%]">
                    <div className="flex justify-center items-start flex-col w-full bg-blue-500 shadow-md shadow-blue-500/50 text-white px-2 py-1 rounded-sm">
                      <span className="text-sm md:text-base font-medium">
                        How are you?
                      </span>
                    </div>
                    <div>
                      <img
                        src="http://localhost:3000/images/admin.png"
                        alt="img"
                        className="w-10 h-10 border-2 border-white rounded-full max-w-10 p-1"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-start items-center">
                  <div className="flex justify-start items-start gap-2 md:px-2 py-2 max-w-full lg:max-w-[85%]">
                    <div>
                      <img
                        src="http://localhost:3000/images/admin.png"
                        alt="img"
                        className="w-10 h-10 border-2 border-white rounded-full max-w-10 p-1"
                      />
                    </div>
                    <div className="flex justify-center items-start flex-col w-full  bg-white shadow-md shadow-slate-400/50 text-black px-2 py-1 rounded-sm">
                      <span className="text-sm md:text-base font-medium">
                        I need your help. Can you?
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-end items-center">
                  <div className="flex justify-start items-start gap-2 md:px-2 py-2 max-w-full lg:max-w-[85%]">
                    <div className="flex justify-center items-start flex-col w-full bg-blue-500 shadow-md shadow-blue-500/50 text-white px-2 py-1 rounded-sm">
                      <span className="text-sm md:text-base font-medium">
                        Tell me, how may I?
                      </span>
                    </div>
                    <div>
                      <img
                        src="http://localhost:3000/images/admin.png"
                        alt="img"
                        className="w-10 h-10 border-2 border-white rounded-full max-w-10 p-1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Input Area (no bg here) */}
            <form className="flex gap-3 pt-3">
              <input
                type="text"
                placeholder="Type your message..."
                className="w-full border border-slate-200 rounded-sm outline-none bg-transparent p-3 text-base font-medium"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-800 w-[80px] h-[50px] rounded-md text-white flex justify-center items-center"
              >
                <BsSendFill size={24} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerToCustomer;

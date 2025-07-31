import React from "react";
import { BsSendFill } from "react-icons/bs";

const SellerToAdmin = () => {
  return (
    <div className="relative px-2 lg:px-7 pt-5">
      <div className="w-full bg-white p-4 rounded-md h-[calc(100vh-140px)] overflow-hidden relative">
        <div className="w-full h-full flex relative">
          {/* Chat Panel */}
          <div className="flex-1 flex flex-col bg-white rounded-md p-4 ml-0 md:ml-4">
            {/* Top Profile Info */}
            <div className="flex justify-between items-center">
              <div className="flex justify-start items-center gap-3">
                <div className="relative">
                  <img
                    className="w-[45px] h-[45px] border-green-500 border-2 p-1 rounded-full"
                    src="http://localhost:3000/images/seller.png"
                    alt="seller"
                  />
                  <div className="w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-[6px]"></div>
                </div>
                <h4 className="text-xl font-semibold">Support</h4>
              </div>
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

export default SellerToAdmin;

import React from "react";
import { FaImage, FaRegEdit } from "react-icons/fa";
import { FadeLoader } from "react-spinners";

const SellerProfile = () => {
  const img = true;
  const loader = false;
  const status = "active";
  const userInfo = true;
  return (
    <div className="px-2 lg:px-7 py-5">
      <div className="flex flex-wrap w-full">
        <div className="w-full md:w-6/12">
          <div className="w-full bg-white rounded-md">
            <div className="flex justify-center items-center py-3">
              {img ? (
                <label
                  htmlFor="img"
                  className="w-52 h-40 overflow-hidden relative p-3 cursor-pointer"
                >
                  <img
                    src="http://localhost:3000/images/admin.png"
                    alt="seller"
                    className="w-full h-full object-cover"
                  />
                  {loader && (
                    <div className="w-full h-full absolute top-0 left-0 bg-slate-400 flex justify-center items-center opacity-70 z-20">
                      <span>
                        <FadeLoader />
                      </span>
                    </div>
                  )}
                </label>
              ) : (
                <label
                  className="flex justify-center items-center flex-col h-40 w-52 cursor-pointer border border-dashed hover:border-green-500 border-slate-200 relative"
                  htmlFor="img"
                >
                  <span>
                    <FaImage />
                  </span>
                  <span>Select Image</span>

                  {loader && (
                    <div className="w-full h-full absolute top-0 left-0 bg-slate-400 flex justify-center items-center opacity-70 z-20">
                      <span>
                        <FadeLoader />
                      </span>
                    </div>
                  )}
                </label>
              )}

              <input type="file" className="hidden" id="img" />
            </div>

            <div className="px-0 md:px-5 py-2">
              <div className="flex justify-between text-sm flex-col gap-2 bg-slate-700 rounded-md relative text-white p-3">
                <span className="p-2 bg-yellow-600 rounded hover:bg-yellow-600/50 absolute right-2 top-2 cursor-pointer">
                  <FaRegEdit />
                </span>
                <div className="flex gap-2">
                  <span>Name : </span>
                  <span>Md Emon Hossain</span>
                </div>
                <div className="flex gap-2">
                  <span>Email : </span>
                  <span>emonh7806@gmail.com</span>
                </div>
                <div className="flex gap-2">
                  <span>Role : </span>
                  <span>Seller</span>
                </div>
                <div className="flex gap-2">
                  <span>Status : </span>
                  <span>Active</span>
                </div>
                <div className="flex gap-2">
                  <span>Payment Account : </span>
                  {status === "active" ? (
                    <span className="bg-green-500 text-white text-xs cursor-pointer font-normal ml-2 px-2 py-0.5 rounded">
                      Pending
                    </span>
                  ) : (
                    <span className="bg-blue-500 text-white text-xs cursor-pointer font-normal ml-2 px-2 py-0.5 rounded">
                      Pending
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="px-0 md:px-5 py-2">
              {!userInfo ? (
                <form>
                  <div className="flex flex-col w-full gap-1 my-4">
                    <label htmlFor="shop">Shop Name</label>
                    <input
                      type="text"
                      name="shop"
                      placeholder="Shop name"
                      className="outline-none px-4 py-2 bg-transparent focus:border-blue-400 border-slate-300 rounded-md border"
                      id="shop"
                    />
                  </div>
                  <div className="flex flex-col w-full gap-1 my-4">
                    <label htmlFor="division">Division Name</label>
                    <input
                      type="text"
                      name="division"
                      placeholder="Division name"
                      className="outline-none px-4 py-2 bg-transparent focus:border-blue-400 border-slate-300 rounded-md border"
                      id="division"
                    />
                  </div>
                  <div className="flex flex-col w-full gap-1 my-4">
                    <label htmlFor="district">District Name</label>
                    <input
                      type="text"
                      name="district"
                      placeholder="District name"
                      className="outline-none px-4 py-2 bg-transparent focus:border-blue-400 border-slate-300 rounded-md border"
                      id="district"
                    />
                  </div>
                  <div className="flex flex-col w-full gap-2 mt-4 mb-2">
                    <label htmlFor="sub-district">Sub-district Name</label>
                    <input
                      type="text"
                      name="sub-district"
                      placeholder="Sub-district name"
                      className="outline-none px-4 py-2 bg-transparent focus:border-blue-400 border-slate-300 rounded-md border"
                      id="sub-district"
                    />
                  </div>
                  <div className="flex">
                    <button className="bg-green-600 hover:bg-green-700 transition-all ease-in-out duration-150 hover:shadow-md text-white rounded-md px-7 py-3 my-4">
                      Save Changes
                    </button>
                  </div>
                </form>
              ) : (
                <div className="flex justify-between text-sm flex-col gap-2 bg-slate-700 rounded-md relative text-white p-3 mb-4">
                  <span className="p-2 bg-yellow-600 rounded hover:bg-yellow-600/50 absolute right-2 top-2 cursor-pointer">
                    <FaRegEdit />
                  </span>
                  <div className="flex gap-2">
                    <span>Shop Name : </span>
                    <span>Bazario</span>
                  </div>
                  <div className="flex gap-2">
                    <span>Division : </span>
                    <span>Dhaka</span>
                  </div>
                  <div className="flex gap-2">
                    <span>District : </span>
                    <span>Dhaka</span>
                  </div>
                  <div className="flex gap-2">
                    <span>Sub-district : </span>
                    <span>Khilgaon</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-full md:w-6/12">
          <div className="w-full pl-0 md:pl-7 mt-6 md:mt-0">
            <div className="bg-white rounded-md p-4">
              <h2 className="text-lg font-semibold mb-3">Change Password</h2>
              <form>
                <div className="flex flex-col w-full gap-1 my-4">
                  <label htmlFor="shop">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="outline-none px-4 py-2 bg-transparent focus:border-blue-400 border-slate-300 rounded-md border"
                    id="email"
                  />
                </div>
                <div className="flex flex-col w-full gap-1 my-4">
                  <label htmlFor="division">Current Password</label>
                  <input
                    type="password"
                    name="current-password"
                    placeholder="Enter current password"
                    className="outline-none px-4 py-2 bg-transparent focus:border-blue-400 border-slate-300 rounded-md border"
                    id="current-password"
                  />
                </div>
                <div className="flex flex-col w-full gap-1 my-4">
                  <label htmlFor="district">New Password</label>
                  <input
                    type="password"
                    name="new-password"
                    placeholder="Enter new password"
                    className="outline-none px-4 py-2 bg-transparent focus:border-blue-400 border-slate-300 rounded-md border"
                    id="new-password"
                  />
                </div>

                <div className="flex">
                  <button className="bg-green-600 hover:bg-green-700 transition-all ease-in-out duration-150 hover:shadow-md text-white rounded-md px-7 py-3 my-4">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerProfile;

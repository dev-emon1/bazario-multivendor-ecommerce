import React, { useEffect, useState } from "react";
import { FaImage, FaRegEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { BarLoader, FadeLoader } from "react-spinners";
import {
  messageCleared,
  upload_profile_image,
  add_profile_info,
} from "../../store/Reducers/authReducer";
import toast from "react-hot-toast";
import { overRideSpinner } from "../../utils/utils";

const SellerProfile = () => {
  const dispatch = useDispatch();
  const { userInfo, isLoading, successMessage, errorMessage } = useSelector(
    (state) => state.auth
  );

  const [inputText, setInputText] = useState({
    shopName: "",
    division: "",
    district: "",
    sub_district: "",
    zip_code: "",
  });

  const uploadImage = (e) => {
    if (e.target.files.length > 0) {
      const formData = new FormData();
      formData.append("image", e.target.files[0]);
      dispatch(upload_profile_image(formData));
    }
  };

  const handleInputChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(add_profile_info(inputText));
  };

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageCleared());
    }

    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageCleared());
    }
  }, [successMessage, errorMessage]);
  return (
    <div className="px-2 lg:px-7 py-5">
      <div className="flex flex-wrap w-full">
        <div className="w-full md:w-6/12">
          <div className="w-full bg-white rounded-md">
            <div className="flex justify-center items-center py-3">
              {userInfo?.image ? (
                <label
                  htmlFor="img"
                  className="w-52 h-40 overflow-hidden relative p-3 cursor-pointer"
                >
                  <img
                    src={userInfo?.image}
                    alt="seller"
                    className="w-full h-full object-cover"
                  />
                  {isLoading && (
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

                  {isLoading && (
                    <div className="w-full h-full absolute top-0 left-0 bg-slate-400 flex justify-center items-center opacity-70 z-20">
                      <span>
                        <FadeLoader />
                      </span>
                    </div>
                  )}
                </label>
              )}

              <input
                onChange={uploadImage}
                type="file"
                className="hidden"
                id="img"
              />
            </div>

            <div className="px-0 md:px-5 py-2">
              <div className="flex justify-between text-sm flex-col gap-2 bg-slate-700 rounded-md relative text-white p-3">
                <span className="p-2 bg-yellow-600 rounded hover:bg-yellow-600/50 absolute right-2 top-2 cursor-pointer">
                  <FaRegEdit />
                </span>
                <div className="flex gap-2 capitalize">
                  <span>Name : </span>
                  <span>{userInfo.name}</span>
                </div>
                <div className="flex gap-2">
                  <span>Email : </span>
                  <span>{userInfo.email}</span>
                </div>
                <div className="flex gap-2 capitalize">
                  <span>Role : </span>
                  <span>{userInfo.role}</span>
                </div>
                <div className="flex gap-2 capitalize">
                  <span>Status : </span>
                  <span>{userInfo.status}</span>
                </div>
                <div className="flex gap-2 capitalize">
                  <span>Payment Account : </span>
                  {userInfo?.status === "active" ? (
                    <span className="bg-green-500 text-white text-xs cursor-pointer font-normal ml-2 px-2 py-0.5 rounded">
                      {userInfo.payment}
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
              {!userInfo?.shopInfo ? (
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col w-full gap-1 my-4 capitalize">
                    <label htmlFor="shopName">Shop Name</label>
                    <input
                      type="text"
                      name="shopName"
                      placeholder="Shop name"
                      className="outline-none px-4 py-2 bg-transparent focus:border-blue-400 border-slate-300 rounded-md border"
                      id="shopName"
                      onChange={handleInputChange}
                      value={inputText.shopName}
                    />
                  </div>
                  <div className="flex flex-col w-full gap-1 my-4 capitalize">
                    <label htmlFor="division">Division Name</label>
                    <input
                      type="text"
                      name="division"
                      placeholder="Division name"
                      className="outline-none px-4 py-2 bg-transparent focus:border-blue-400 border-slate-300 rounded-md border"
                      id="division"
                      onChange={handleInputChange}
                      value={inputText.division}
                    />
                  </div>
                  <div className="flex flex-col w-full gap-1 my-4 capitalize">
                    <label htmlFor="district">District Name</label>
                    <input
                      type="text"
                      name="district"
                      placeholder="District name"
                      className="outline-none px-4 py-2 bg-transparent focus:border-blue-400 border-slate-300 rounded-md border"
                      id="district"
                      onChange={handleInputChange}
                      value={inputText.district}
                    />
                  </div>
                  <div className="flex flex-col w-full gap-2 mt-4 mb-2 capitalize">
                    <label htmlFor="sub-district">Sub-district Name</label>
                    <input
                      type="text"
                      name="sub_district"
                      placeholder="Sub-district name"
                      className="outline-none px-4 py-2 bg-transparent focus:border-blue-400 border-slate-300 rounded-md border"
                      id="sub-district"
                      onChange={handleInputChange}
                      value={inputText.sub_district}
                    />
                  </div>
                  <div className="flex flex-col w-full gap-2 mt-4 mb-2 capitalize">
                    <label htmlFor="zip-code">Sub-district Name</label>
                    <input
                      type="text"
                      name="zip-code"
                      placeholder="Zip code"
                      className="outline-none px-4 py-2 bg-transparent focus:border-blue-400 border-slate-300 rounded-md border"
                      id="zip-code"
                      onChange={handleInputChange}
                      value={inputText.zip_code}
                    />
                  </div>
                  <div className="flex capitalize">
                    <button
                      type="submit"
                      disabled={isLoading ? true : false}
                      className="bg-green-600 hover:bg-green-700 transition-all ease-in-out duration-150 hover:shadow-md text-white rounded-md px-7 py-3 my-4"
                    >
                      {isLoading ? (
                        <BarLoader
                          color="#ffffff"
                          width={100}
                          cssOverride={overRideSpinner}
                        />
                      ) : (
                        "Save Changes"
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="flex justify-between text-sm flex-col gap-2 bg-slate-700 rounded-md relative text-white p-3 mb-4 capitalize">
                  <span className="p-2 bg-yellow-600 rounded hover:bg-yellow-600/50 absolute right-2 top-2 cursor-pointer">
                    <FaRegEdit />
                  </span>
                  <div className="flex gap-2">
                    <span>Shop Name : </span>
                    <span>{userInfo.shopInfo?.shopName}</span>
                  </div>
                  <div className="flex gap-2">
                    <span>Division : </span>
                    <span>{userInfo.shopInfo?.division}</span>
                  </div>
                  <div className="flex gap-2">
                    <span>District : </span>
                    <span>{userInfo.shopInfo?.district}</span>
                  </div>
                  <div className="flex gap-2">
                    <span>Sub-district : </span>
                    <span>{userInfo.shopInfo?.sub_district}</span>
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
                  <label htmlFor="current-password">Current Password</label>
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

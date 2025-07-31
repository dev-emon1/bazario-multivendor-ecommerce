import React from "react";

const SellerDetails = () => {
  return (
    <div className="px-2 lg:px-7 pt-5">
      <h1 className="font-bold text-xl mb-3">Seller Details</h1>
      <div className="w-full flex flex-wrap bg-white">
        <div className="w-3/12 flex justify-center items-center py-3">
          <div>
            <img
              src="http://localhost:3000/images/seller.jpg"
              alt="Profile"
              className="w-full h-[230px]"
            />
          </div>
        </div>
        <div className="w-4/12">
          <div className="px-0 md:px-5 py-2">
            <div className="py-2 text-lg">
              <h2 className="font-semibold">Basic Info</h2>
            </div>

            <div className="flex justify-between text-sm flex-col gap-2 p-4 bg-indigo-50 rounded-md shadow-sm">
              <div className="flex gap-2 font-bold">
                <span>Name :</span>
                <span>Emon Hossain</span>
              </div>
              <div className="flex gap-2 font-bold">
                <span>Email :</span>
                <span>emonh7805@gmail.com</span>
              </div>
              <div className="flex gap-2 font-bold">
                <span>Role :</span>
                <span>Seller</span>
              </div>
              <div className="flex gap-2 font-bold">
                <span>Status :</span>
                <span>Active</span>
              </div>
              <div className="flex gap-2 font-bold">
                <span>Payment Status :</span>
                <span>Active</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-4/12">
          <div className="px-0 md:px-5 py-2">
            <div className="py-2 text-lg">
              <h2 className="font-semibold">Address Info</h2>
            </div>

            <div className="flex justify-between text-sm flex-col gap-2 p-4 bg-indigo-50 rounded-md shadow-sm">
              <div className="flex gap-2 font-bold">
                <span>Shop Name :</span>
                <span>Bazario</span>
              </div>
              <div className="flex gap-2 font-bold">
                <span>Division :</span>
                <span>Dhaka</span>
              </div>
              <div className="flex gap-2 font-bold">
                <span>District :</span>
                <span>Dhaka</span>
              </div>
              <div className="flex gap-2 font-bold">
                <span>State :</span>
                <span>Gulshan</span>
              </div>
              <div className="flex gap-2 font-bold">
                <span>Zip Code :</span>
                <span>1207</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <form>
            <div className="flex gap-4 p-4">
              <select
                className="px-4 py-2 focus:border-indigo-500 outline-none bg-indigo-100 border border-slate-500 rounded-md text-black"
                name=""
                id=""
              >
                <option value="">--Select Option--</option>
                <option value="active">Activate</option>
                <option value="deactivate">Deactivate</option>
              </select>
              <button className="w-[170px] bg-green-600 hover:bg-green-700 transition-all ease-in-out duration-150 hover:shadow-md text-white rounded-md px-7 py-3">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SellerDetails;

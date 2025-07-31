import React from "react";
import { BiDollar } from "react-icons/bi";

const Payments = () => {
  return (
    <div className="px-2 md:px-7 py-5 bg-[#cac4ff]">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7">
        <div className="flex justify-between items-center p-5 bg-[#ffd9d9] rounded-md gap-3">
          <div className="flex flex-col justify-start items-center text-[#5c5a5a]">
            <h3 className="text-2xl font-bold">$3790</h3>
            <span className="text-md font-medium">Total Sales</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-red-500 text-2xl flex justify-center items-center text-white">
            <BiDollar />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-[#fcd4ff] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-[#5c5a5a]">
            <h3 className="text-2xl font-bold">$90</h3>
            <span className="text-md font-medium">Available amount</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-purple-500 text-2xl flex justify-center items-center text-white">
            <BiDollar />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-[#e4fff7] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-[#5c5a5a]">
            <h3 className="text-2xl font-bold">$14</h3>
            <span className="text-md font-medium">Withdrawal amount</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-green-500 text-2xl flex justify-center items-center text-white">
            <BiDollar />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-[#ecebff] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-[#5c5a5a]">
            <h3 className="text-2xl font-bold">$78</h3>
            <span className="text-md font-medium">Pending amount</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-blue-400 text-2xl flex justify-center items-center text-white">
            <BiDollar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;

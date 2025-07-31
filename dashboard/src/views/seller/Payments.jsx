import React, { forwardRef } from "react";
import { FixedSizeList as List } from "react-window";
import { BiDollar } from "react-icons/bi";

function handleOnWheel(deltaY) {
  console.log("Wheel", deltaY);
}

const outerElement = forwardRef((props, ref) => (
  <div ref={ref} onWheel={(e) => handleOnWheel(e.deltaY)} {...props} />
));

const Payments = () => {
  const Row = ({ index, style }) => {
    return (
      <div style={style} className="text-sm flex mt-1">
        <div className="w-[25%] whitespace-nowrap p-2">{index + 1}</div>
        <div className="w-[25%] whitespace-nowrap p-2">$2301</div>
        <div className="w-[25%] whitespace-nowrap p-2">
          <span className="py-1 px-2 bg-slate-200 text-blue-500 rounded-md text-sm">
            Pending
          </span>
        </div>
        <div className="w-[25%] whitespace-nowrap p-2">25 Dec 2023</div>
      </div>
    );
  };
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

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 pb-4 gap-2">
        <div className="p-5 bg-white rounded-md mt-5">
          <h2 className="text-lg font-semibold">Send Request</h2>
          <div className="pt-5">
            <form>
              <div className="flex flex-wrap gap-3">
                <input
                  min={0}
                  type="number"
                  className="px-2 py-2 outline-none bg-transparent border border-[#e0e0e0] rounded-md min-w-[200px] text-[#030818] text-sm md:w-[80%] focus:border-indigo-200"
                />
                <button className="px-7 py-2 bg-green-500 hover:bg-green-500/80 rounded-md text-white">
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div>
            <h3 className="text-lg py-4">Pending Request</h3>
            <div>
              <div className="w-full overflow-x-auto">
                <div className="flex bg-[#eae9f7] uppercase text-xs font-bold min-w-[340px] rounded-md">
                  <div className="w-[25%] p-2">No</div>
                  <div className="w-[25%] p-2">Amount</div>
                  <div className="w-[25%] p-2">Status</div>
                  <div className="w-[25%] p-2">Date</div>
                </div>
                {
                  <List
                    style={{ minWidth: "340px" }}
                    className="List"
                    height={350}
                    itemCount={10}
                    itemSize={35}
                    outerElementType={outerElement}
                  >
                    {Row}
                  </List>
                }
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-5 mt-5 rounded-md">
          <h3 className="text-lg pb-4 font-medium">Success Withdrawals</h3>
          <div>
            <div className="w-full overflow-x-auto">
              <div className="flex bg-[#eae9f7] uppercase text-xs font-bold min-w-[340px] rounded-md">
                <div className="w-[25%] p-2">No</div>
                <div className="w-[25%] p-2">Amount</div>
                <div className="w-[25%] p-2">Status</div>
                <div className="w-[25%] p-2">Date</div>
              </div>
              {
                <List
                  style={{ minWidth: "340px" }}
                  className="List"
                  height={350}
                  itemCount={10}
                  itemSize={35}
                  outerElementType={outerElement}
                >
                  {Row}
                </List>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;

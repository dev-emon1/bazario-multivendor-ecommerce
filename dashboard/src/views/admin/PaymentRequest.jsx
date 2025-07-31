import React, { forwardRef } from "react";
import { FixedSizeList as List } from "react-window";

function handleOnWheel(deltaY) {
  console.log("Wheel", deltaY);
}

const outerElement = forwardRef((props, ref) => (
  <div ref={ref} onWheel={(e) => handleOnWheel(e.deltaY)} {...props} />
));

const PaymentRequest = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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
        <div className="w-[25%] whitespace-nowrap p-2">
          <button className="bg-indigo-500 text-white shadow-md hover:bg-indigo-500/50 px-3 py-1 cursor-pointer rounded-sm text-sm">
            Confirm
          </button>
        </div>
      </div>
    );
  };
  return (
    <div className="px-2 lg:px-7 pt-5">
      <h1 className="text-xl font-bold mb-4">Payment Requests</h1>
      <div className="w-full bg-white rounded-md p-4">
        <div className="w-full">
          <div className="w-full overflow-x-auto">
            <div className="flex bg-[#eae9f7] uppercase text-xs font-bold min-w-[340px] rounded-md">
              <div className="w-[25%] p-2">No</div>
              <div className="w-[25%] p-2">Amount</div>
              <div className="w-[25%] p-2">Status</div>
              <div className="w-[25%] p-2">Date</div>
              <div className="w-[25%] p-2">Action</div>
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
  );
};

export default PaymentRequest;

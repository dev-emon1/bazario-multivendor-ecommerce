import React from "react";
import { LuArrowDownFromLine } from "react-icons/lu";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";

const Orders = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [perPage, setPerPage] = React.useState(5);
  const [showOrder, setShowOrder] = React.useState(false);
  return (
    <div className="px-2 lg:px-7 pt-4">
      <h1 className="text-xl font-bold mb-4">Orders List</h1>
      <div className="w-full bg-white rounded-md p-4">
        <div className="flex items-center justify-between">
          <select
            className="px-4 py-2 hover:border-indigo-300 outline-none bg-indigo-200 border border-slate-500 rounded-md text-black"
            onChange={(e) => setPerPage(parseInt(e.target.value))}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>

          <input
            type="text"
            className="px-2 py-2 outline-none bg-transparent border border-[#e0e0e0] rounded-md min-w-[200px] text-[#030818] text-sm"
            placeholder="Search by Order ID"
          />
        </div>

        <div className="relative mt-5 overflow-x-auto">
          <div className="w-full text-sm text-left">
            <div className="text-sm text-black uppercase border-b border-gray-300 font-semibold">
              <div className="flex items-center justify-between">
                <div className="py-3 w-[25%] font-bold">Order Id</div>
                <div className="py-3 w-[13%] font-bold">Price</div>
                <div className="py-3 w-[18%] font-bold">Payment Status</div>
                <div className="py-3 w-[18%] font-bold">Order Status</div>
                <div className="py-3 w-[18%] font-bold">Action</div>
                <div className="py-3 w-[7%] font-bold">
                  <LuArrowDownFromLine />
                </div>
              </div>
            </div>
            <div className="flex items-start justify-between border-b border-gray-200 uppercase hover:bg-gray-100">
              <div className="py-3 w-[25%] font-medium whitespace-nowrap">
                #23142
              </div>
              <div className="py-3 w-[13%] font-medium">$239</div>
              <div className="py-3 w-[18%] font-medium">pending</div>
              <div className="py-3 w-[18%] font-medium">pending</div>
              <div className="py-3 w-[18%] font-medium">
                <Link
                  to="/admin/dashboard/order/details/3"
                  className="text-blue-600 hover:underline"
                >
                  View
                </Link>
              </div>
              <div
                className="py-3 w-[7%] font-medium cursor-pointer text-gray-500 hover:text-gray-700"
                onClick={() => setShowOrder(!showOrder)}
              >
                <LuArrowDownFromLine />
              </div>
            </div>

            <div
              className={
                showOrder
                  ? "block border-b border-gray-200 uppercase bg-slate-100 hover:bg-gray-100"
                  : "hidden"
              }
            >
              <div className="flex items-start justify-start border-b border-gray-200 pl-3">
                <div className="py-3 w-[25%] font-medium whitespace-nowrap">
                  #23143
                </div>
                <div className="py-3 w-[13%] font-medium">$150</div>
                <div className="py-3 w-[18%] font-medium">paid</div>
                <div className="py-3 w-[18%] font-medium">shipped</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <Pagination
            pageNumber={currentPage}
            setPageNumber={setCurrentPage}
            totalItems={50}
            perPage={perPage}
            showItems={3}
          />
        </div>
      </div>
    </div>
  );
};

export default Orders;

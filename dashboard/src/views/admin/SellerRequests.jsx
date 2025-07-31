import React from "react";
import Pagination from "../Pagination";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const SellerRequests = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [perPage, setPerPage] = React.useState(5);
  const [show, setShow] = React.useState(false);
  return (
    <div className="px-2 lg:px-7 pt-5">
      <h1 className="text-xl font-bold mb-4">Seller Requests</h1>
      <div className="w-full">
        <div className="bg-white w-full p-4 rounded-md shadow-md">
          <div className="flex items-center justify-between">
            <select
              className="px-4 py-2 hover:border-indigo-300 outline-none bg-indigo-200 border border-slate-500 rounded-md text-black"
              onChange={(e) => setPerPage(parseInt(e.target.value))}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </select>

            <input
              type="text"
              className="px-2 py-2 outline-none bg-transparent border border-[#e0e0e0] rounded-md min-w-[200px] text-[#030818] text-sm"
              placeholder="Search by Order ID"
            />
          </div>
          <div className="relative overflow-x-auto rounded">
            <table className="w-full text-sm text-left bg-white text-black uppercase">
              <thead className="text-sm text-black uppercase border-b border-gray-300">
                <tr>
                  <th scope="col" className="py-3 px-4">
                    No
                  </th>
                  <th scope="col" className="py-3 px-4">
                    Name
                  </th>
                  <th scope="col" className="py-3 px-4">
                    Email
                  </th>

                  <th scope="col" className="py-3 px-4">
                    Payment Status
                  </th>
                  <th scope="col" className="py-3 px-4">
                    Status
                  </th>

                  <th scope="col" className="py-3 px-4">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {[1, 2, 3, 4, 5].map((d, i) => (
                  <tr
                    key={i}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    <td className="py-3 px-4 font-medium whitespace-nowrap">
                      {i + 1}
                    </td>

                    <td className="py-3 px-4 font-medium whitespace-nowrap">
                      Emon Hossain
                    </td>
                    <td className="py-3 px-4 font-medium whitespace-nowrap">
                      emonh7805@gmail.com
                    </td>

                    <td className="py-3 px-4 font-medium whitespace-nowrap">
                      Inactive
                    </td>
                    <td className="py-3 px-4 font-medium whitespace-nowrap">
                      Pending
                    </td>

                    <td className="py-3 px-4 font-medium whitespace-nowrap">
                      <div className="flex justify-start items-center gap-3">
                        <Link
                          to="/admin/dashboard/seller/details/2"
                          className="text-white hover:underline p-2 bg-green-500 hover:bg-green-700 hover:shadow-md rounded"
                        >
                          <FaEye />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

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
      </div>
    </div>
  );
};

export default SellerRequests;

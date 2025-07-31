import React from "react";
import Search from "../components/Search";
import Pagination from "../Pagination";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Orders = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [perPage, setPerPage] = React.useState(5);
  return (
    <div className="px-2 lg:px-7 pt-4">
      <h1 className="text-xl font-bold mb-4">Orders</h1>
      <div className="w-full bg-white rounded-md p-4">
        <Search
          setPerPage={setPerPage}
          placeholder={"Product Name"}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </div>

      <div className="relative overflow-x-auto rounded  bg-white pb-4">
        <table className="w-full text-sm text-left text-black uppercase">
          <thead className="text-sm text-black uppercase border-b border-gray-300">
            <tr>
              <th scope="col" className="py-3 px-4">
                Order Id
              </th>
              <th scope="col" className="py-3 px-4">
                Price
              </th>
              <th scope="col" className="py-3 px-4">
                Payment Status
              </th>
              <th scope="col" className="py-3 px-4">
                Order Status
              </th>
              <th scope="col" className="py-3 px-4">
                Actions
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
                  #12321
                </td>
                <td className="py-3 px-4 font-medium whitespace-nowrap">
                  $1190
                </td>
                <td className="py-3 px-4 font-medium whitespace-nowrap">
                  Pending
                </td>
                <td className="py-3 px-4 font-medium whitespace-nowrap">
                  Pending
                </td>

                <td className="py-3 px-4 font-medium whitespace-nowrap">
                  <div className="flex justify-start items-center gap-3">
                    <Link
                      to="#"
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
  );
};

export default Orders;

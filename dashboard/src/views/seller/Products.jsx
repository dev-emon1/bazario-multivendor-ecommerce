import React from "react";
import Search from "../components/Search";
import Pagination from "../Pagination";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Products = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [perPage, setPerPage] = React.useState(5);
  return (
    <div className="px-2 lg:px-7 pt-4">
      <h1 className="text-xl font-bold mb-4">All Products</h1>
      <div className="w-full bg-white rounded-md p-4">
        <Search
          setPerPage={setPerPage}
          placeholder={"Product Name"}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </div>

      <div className="relative overflow-x-auto rounded bg-white pb-4">
        <table className="w-full text-sm text-left  text-black uppercase">
          <thead className="text-sm text-black uppercase border-b border-gray-300">
            <tr>
              <th scope="col" className="py-3 px-4">
                No
              </th>
              <th scope="col" className="py-3 px-4">
                Image
              </th>
              <th scope="col" className="py-3 px-4">
                Name
              </th>
              <th scope="col" className="py-3 px-4">
                Category
              </th>
              <th scope="col" className="py-3 px-4">
                Brand
              </th>
              <th scope="col" className="py-3 px-4">
                Price
              </th>
              <th scope="col" className="py-3 px-4">
                Discount
              </th>
              <th scope="col" className="py-3 px-4">
                Stock
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
                  {i + 1}
                </td>
                <td className="py-3 px-4 font-medium whitespace-nowrap">
                  <img
                    className="w-11 h-11"
                    src={`http://localhost:3000/images/category/${d}.jpg`}
                    alt=""
                  />
                </td>
                <td className="py-3 px-4 font-medium whitespace-nowrap">
                  iPhone 16 Pro Max
                </td>
                <td className="py-3 px-4 font-medium whitespace-nowrap">
                  Smart Phone
                </td>
                <td className="py-3 px-4 font-medium whitespace-nowrap">
                  Apple
                </td>
                <td className="py-3 px-4 font-medium whitespace-nowrap">
                  $1199
                </td>
                <td className="py-3 px-4 font-medium whitespace-nowrap">9%</td>
                <td className="py-3 px-4 font-medium whitespace-nowrap">50</td>
                <td className="py-3 px-4 font-medium whitespace-nowrap">
                  <div className="flex justify-start items-center gap-3">
                    <Link
                      to="#"
                      className="text-white hover:underline p-2 bg-blue-500 hover:bg-blue-700 hover:shadow-md rounded"
                    >
                      <FaEdit />
                    </Link>
                    <Link
                      to="#"
                      className="text-white hover:underline p-2 bg-green-500 hover:bg-green-700 hover:shadow-md rounded"
                    >
                      <FaEye />
                    </Link>
                    <Link
                      to="#"
                      className="text-white hover:underline p-2 bg-red-500 hover:bg-red-700 hover:shadow-md rounded"
                    >
                      <FaTrash />
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

export default Products;

import React, { useEffect } from "react";
import Pagination from "../Pagination";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { get_requested_sellers } from "../../store/Reducers/sellerReducer";
import Search from "../components/Search";

const SellerRequests = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [perPage, setPerPage] = React.useState(5);
  const [show, setShow] = React.useState(false);

  const { sellers, isLoading, successMessage, errorMessage } = useSelector(
    (state) => state.seller
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      get_requested_sellers({
        page: currentPage,
        perPage,
        searchQuery,
      })
    );
  }, [perPage, currentPage, searchQuery]);
  return (
    <div className="px-2 lg:px-7 pt-5">
      <h1 className="text-xl font-bold mb-4">Seller Requests</h1>
      <div className="w-full">
        <div className="bg-white w-full p-4 rounded-md shadow-md">
          <Search
            setPerPage={setPerPage}
            placeholder={"Seller name"}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />

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
                {sellers.map((d, i) => (
                  <tr
                    key={i}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    <td className="py-3 px-4 font-medium whitespace-nowrap">
                      {i + 1}
                    </td>

                    <td className="py-3 px-4 font-medium whitespace-nowrap">
                      {d.name}
                    </td>
                    <td className="py-3 px-4 font-medium whitespace-nowrap">
                      {d.email}
                    </td>

                    <td className="py-3 px-4 font-medium whitespace-nowrap">
                      {d.payment}
                    </td>
                    <td className="py-3 px-4 font-medium whitespace-nowrap">
                      {d.status}
                    </td>

                    <td className="py-3 px-4 font-medium whitespace-nowrap">
                      <div className="flex justify-start items-center gap-3">
                        <Link
                          to={`/admin/dashboard/seller/details/${d._id}`}
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

import React from "react";
import { FaEdit, FaImage, FaTrash } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";
import Search from "../components/Search";

const Category = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [perPage, setPerPage] = React.useState(5);
  const [show, setShow] = React.useState(false);
  return (
    <div className="px-2 lg:px-7 pt-5">
      <h1 className="text-xl font-bold mb-4">Categories</h1>
      <div className="flex lg:hidden justify-between items-center mb-5 bg-white rounded-md p-4 ">
        <h1 className="font-semibold text-lg">Category</h1>
        <button
          onClick={() => setShow(true)}
          className="bg-green-600 hover:bg-green-700 transition-all ease-in-out duration-150 hover:shadow-md text-white rounded-sm px-3 py-2 my-4 text-sm"
        >
          Add
        </button>
      </div>

      <div className="flex flex-wrap w-full">
        <div className="w-full lg:w-7/12">
          <div className="bg-white w-full p-4 rounded-md shadow-md">
            <Search
              setPerPage={setPerPage}
              placeholder={"Order ID"}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
            {/* <div className="flex items-center justify-between">
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
                placeholder="Search by "
              />
            </div> */}
            <div className="relative overflow-x-auto rounded">
              <table className="w-full text-sm text-left bg-white text-black uppercase">
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
                        pending
                      </td>
                      <td className="py-3 px-4 font-medium whitespace-nowrap">
                        <div className="flex justify-start items-center gap-3">
                          <Link
                            to="#"
                            className="text-white hover:underline p-2 bg-green-500 hover:bg-green-700 hover:shadow-md rounded"
                          >
                            <FaEdit />
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
        </div>

        <div
          className={`w-[320px] lg:w-5/12 translate-x-100 lg:relative lg:right-0 fixed ${
            show ? "right-0" : "-right-[340px]"
          } z-[99] top-0 transition-all duration-500`}
        >
          <div className="w-full pl-5">
            <div className="bg-white  rounded-md shadow-md h-screen lg:h-auto px-3 py-2 lg:rounded-md">
              <div className="flex justify-between items-center py-3 mb-4">
                <h1 className="font-semibold text-xl w-full text-center ">
                  Add Category
                </h1>
                <div
                  className="block lg:hidden font-bold"
                  onClick={() => setShow(false)}
                >
                  <IoMdClose size={24} />
                </div>
              </div>
              <form>
                <div className="flex flex-col w-full gap-1 mb-7">
                  <input
                    type="text"
                    className="px-3 py-3 focus:border-slate-800 outline-none bg-transparent border border-slate-200 rounded-md text-xl"
                    id="name"
                    name="category_name"
                    placeholder="Category name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="image"
                    className="flex justify-center items-center flex-col h-[249px] w-full cursor-pointer border border-dashed hover:border-green-300 border-black mb-3"
                  >
                    <span>
                      <FaImage />
                    </span>
                    <span>Select Image</span>
                  </label>
                  <input
                    type="file"
                    id="image"
                    name="image"
                    className="hidden"
                  />

                  <div>
                    <button className="bg-green-600 hover:bg-green-700 transition-all ease-in-out duration-150 w-full hover:shadow-md text-white rounded-md px-7 py-3 my-4">
                      Add Category
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;

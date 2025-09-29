import React, { useEffect, useState } from "react";
import { FaEdit, FaImage, FaTrash } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";
import Search from "../components/Search";
import { BarLoader } from "react-spinners";
import { overRideSpinner } from "../../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import {
  add_category,
  get_category,
  messageCleared,
} from "../../store/Reducers/categoryReducer";
import toast from "react-hot-toast";

const Category = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [perPage, setPerPage] = useState(5);
  const [show, setShow] = useState(false);
  const [image, setImage] = useState("");
  const [categoryText, setCategoryText] = useState({
    name: "",
    image: "",
  });

  const dispatch = useDispatch();
  const { isLoading, successMessage, errorMessage, categories } = useSelector(
    (state) => state.category
  );

  const handleImage = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      setImage(URL.createObjectURL(files[0]));
      setCategoryText({ ...categoryText, image: files[0] });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(add_category(categoryText));
  };

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageCleared());
      setCategoryText({
        name: "",
        image: "",
      });
      setImage("");
    }
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageCleared());
    }
  }, [successMessage, errorMessage]);

  useEffect(() => {
    const obj = {
      perPage: parseInt(perPage),
      page: parseInt(currentPage),
      searchQuery,
    };
    dispatch(get_category(obj));
  }, [searchQuery, perPage, currentPage]);
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
              placeholder={"Category name"}
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
                  {categories.map((c, i) => (
                    <tr
                      key={i}
                      className="border-b border-gray-200 hover:bg-gray-100"
                    >
                      <td className="py-3 px-4 font-medium whitespace-nowrap">
                        {i + 1}
                      </td>
                      <td className="py-3 px-4 font-medium whitespace-nowrap">
                        <img className="w-11 h-11" src={c.image} alt="" />
                      </td>
                      <td className="py-3 px-4 font-medium whitespace-nowrap">
                        {c.name}
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
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col w-full gap-1 mb-7">
                  <input
                    type="text"
                    className="px-3 py-3 focus:border-slate-800 outline-none bg-transparent border border-slate-200 rounded-md text-xl"
                    id="name"
                    name="category_name"
                    placeholder="Category name"
                    value={categoryText.name}
                    onChange={(e) =>
                      setCategoryText({ ...categoryText, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label
                    htmlFor="image"
                    className="flex justify-center items-center flex-col h-[249px] w-full cursor-pointer border border-dashed hover:border-green-300 border-black mb-3"
                  >
                    {image ? (
                      <img
                        src={image}
                        alt="category"
                        className="w-full h-full"
                      />
                    ) : (
                      <>
                        {" "}
                        <span>
                          <FaImage />
                        </span>
                        <span>Select Image</span>{" "}
                      </>
                    )}
                  </label>
                  <input
                    type="file"
                    id="image"
                    name="image"
                    className="hidden"
                    onChange={handleImage}
                  />

                  <div>
                    <button
                      type="submit"
                      disabled={isLoading ? true : false}
                      className="bg-green-600 hover:bg-green-700 transition-all ease-in-out duration-150 w-full hover:shadow-md text-white rounded-md px-7 py-3 my-4"
                    >
                      {isLoading ? (
                        <BarLoader
                          color="#ffffff"
                          width={100}
                          cssOverride={overRideSpinner}
                        />
                      ) : (
                        " Add Category"
                      )}
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

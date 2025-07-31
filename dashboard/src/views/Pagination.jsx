import React from "react";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

const Pagination = ({
  pageNumber,
  setPageNumber,
  totalItems,
  perPage,
  showItems,
}) => {
  let totalItemsCount = Math.ceil(totalItems / perPage);
  let startPage = pageNumber;
  let difference = totalItemsCount - pageNumber;

  if (difference <= showItems) {
    startPage = totalItemsCount - showItems;
  }
  let endPage = startPage < 0 ? showItems : showItems + startPage;

  if (startPage <= 0) {
    startPage = 1;
  }

  const createBtns = () => {
    let btns = [];
    for (let i = startPage; i <= endPage; i++) {
      btns.push(
        <li
          key={i}
          onClick={() => setPageNumber(i)}
          className={`px-3 py-1 rounded-md text-sm font-semibold cursor-pointer ${
            pageNumber === i
              ? "bg-[#6168f8] text-white"
              : "bg-white text-black hover:bg-gray-200"
          }`}
        >
          {i}
        </li>
      );
    }
    return btns;
  };

  return (
    <ul className="flex gap-2">
      {pageNumber > 1 && (
        <li
          onClick={() => setPageNumber(pageNumber - 1)}
          className="px-3 py-1 rounded-md text-sm font-semibold bg-white text-black hover:bg-gray-200 cursor-pointer flex items-center justify-center"
        >
          <MdOutlineKeyboardDoubleArrowLeft />
        </li>
      )}
      {createBtns()}
      {pageNumber < totalItemsCount && (
        <li
          onClick={() => setPageNumber(pageNumber + 1)}
          className="px-3 py-1 rounded-md text-sm font-semibold bg-white text-black hover:bg-gray-200 cursor-pointer flex items-center justify-center"
        >
          <MdOutlineKeyboardDoubleArrowRight />
        </li>
      )}
    </ul>
  );
};

export default Pagination;

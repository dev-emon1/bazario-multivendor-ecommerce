import React, { useEffect, useState } from "react";
import { IoMdImage } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { get_category } from "../../store/Reducers/categoryReducer";
import {
  get_editable_product,
  messageCleared,
  update_product,
  update_product_images,
} from "../../store/Reducers/productReducer";
import { BarLoader } from "react-spinners";
import { overRideSpinner } from "../../utils/utils";
import toast from "react-hot-toast";

const EditProduct = () => {
  const [inputText, setInputText] = useState({
    name: "",
    description: "",
    price: "",
    discount: "",
    brand: "",
    stock: "",
  });
  const { productId } = useParams();
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => state.category);
  const { product, isLoading, successMessage, errorMessage } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    dispatch(
      get_category({
        searchValue: "",
        perPage: "",
        page: "",
      })
    );
  }, [dispatch]);

  useEffect(() => {
    dispatch(get_editable_product(productId));
  }, [productId]);

  const [categoryShow, setCategoryShow] = useState(false);
  const [category, setCategory] = useState("");
  const [allCategory, setAllCategory] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  // const [images, setImages] = useState([]);
  const [imagesShow, setImagesShow] = useState([]);

  const handleInput = (e) => {
    setInputText({ ...inputText, [e.target.name]: e.target.value });
  };

  const searchCategory = (e) => {
    const value = e.target.value;
    setSearchValue(value);

    if (value) {
      let searchVal = allCategory.filter(
        (c) => c.name.toLowerCase().indexOf(value.toLowerCase()) > -1
      );
      setAllCategory(searchVal);
    } else {
      setAllCategory(categories);
    }
  };

  const handleChangeImage = (img, files) => {
    if (files.length > 0) {
      dispatch(
        update_product_images({
          oldImage: img,
          newImage: files[0],
          productId: productId,
        })
      );
    }
  };

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const obj = {
      name: inputText.name,
      description: inputText.description,
      price: inputText.price,
      discount: inputText.discount,
      brand: inputText.brand,
      stock: inputText.stock,
      productId: productId,
    };
    dispatch(update_product(obj));
  };

  useEffect(() => {
    if (categories.length > 0) {
      setAllCategory(categories);
    }
  }, [categories]);

  useEffect(() => {
    if (product) {
      setInputText({
        name: product?.name || "",
        description: product?.description || "",
        price: product?.price || "",
        discount: product?.discount || "",
        brand: product?.brand || "",
        stock: product?.stock || "",
      });

      setCategory(product?.category || "");
      setImagesShow(product?.image || []);
    }
  }, [product]);

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      if (successMessage.toLowerCase().includes("product updated")) {
        setInputText({
          name: "",
          description: "",
          price: "",
          discount: "",
          brand: "",
          stock: "",
        });
        setCategory("");
        setImagesShow([]);
      }

      dispatch(messageCleared());
    }

    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageCleared());
    }
  }, [successMessage, errorMessage]);

  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="bg-white w-full rounded-md p-4">
        <div className="flex justify-between items-center pb-4">
          <h1 className="font-semibold capitalize text-xl">Edit Product</h1>
          <Link
            to="/seller/dashboard/all-products"
            className="px-7 py-2 bg-[#6168f8] hover:bg-[#5259e0] text-white hover:shadow-lg rounded-md"
          >
            All Product
          </Link>
        </div>
        <div>
          <form onSubmit={handleUpdateProduct}>
            <div className="flex flex-col md:flex-row gap-4 w-full">
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="name">Product Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Product name"
                  className="outline-none px-4 py-2 bg-transparent focus:border-blue-400 border-slate-300 rounded-md border"
                  value={inputText.name || ""}
                  onChange={handleInput}
                  id="name"
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="brand-name">Brand Name</label>
                <input
                  type="text"
                  name="brand"
                  placeholder="Brand name"
                  className="outline-none px-4 py-2 bg-transparent focus:border-blue-400 border-slate-300 rounded-md border"
                  value={inputText.brand || ""}
                  onChange={handleInput}
                  id="brand-name"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 w-full mt-6">
              <div className="flex flex-col w-full gap-1 relative">
                <label htmlFor="category">Category</label>
                <input
                  type="text"
                  placeholder="-- select category --"
                  className="outline-none px-4 py-2 bg-transparent focus:border-blue-400 border-slate-300 rounded-md border"
                  value={category || ""}
                  onChange={handleInput}
                  id="category"
                  readOnly
                  onClick={() => setCategoryShow(!categoryShow)}
                />
                <div
                  className={`absolute top-[101%] bg-[#475569] w-full transition-all ${
                    categoryShow ? "scale-100" : "scale-0"
                  }`}
                >
                  <div className="w-full px-4 py-2 fixed">
                    <input
                      type="text"
                      placeholder="search"
                      className="w-full outline-none px-4 py-2 bg-transparent focus:border-blue-400 border-slate-300 rounded-md border overflow-hidden text-white"
                      onChange={searchCategory}
                      value={searchValue || ""}
                    />
                  </div>

                  <div className="pt-14"></div>
                  <div className="flex flex-col justify-start items-start h-[200px] overflow-y-scroll">
                    {allCategory.length > 0 &&
                      allCategory.map((cate, i) => (
                        <span
                          key={i}
                          onClick={() => {
                            setCategoryShow(false);
                            setCategory(cate.name);
                            setSearchValue("");
                            setAllCategory(categories);
                          }}
                          className={`px-4 py-2 hover:bg-indigo-400 hover:text-white hover:shadow-md w-full cursor-pointer ${
                            category === cate.name && "bg-indigo-400"
                          }`}
                        >
                          {cate.name}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="stock">Product Stock</label>
                <input
                  type="text"
                  name="stock"
                  placeholder="Product stock"
                  className="outline-none px-4 py-2 bg-transparent focus:border-blue-400 border-slate-300 rounded-md border"
                  value={inputText.stock || ""}
                  onChange={handleInput}
                  id="stock"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 w-full mt-6">
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="price">Price</label>
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  className="outline-none px-4 py-2 bg-transparent focus:border-blue-400 border-slate-300 rounded-md border"
                  value={inputText.price || ""}
                  onChange={handleInput}
                  id="price"
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="discount">Discount</label>
                <input
                  type="number"
                  name="discount"
                  placeholder="% Discount"
                  className="outline-none px-4 py-2 bg-transparent focus:border-blue-400 border-slate-300 rounded-md border"
                  value={inputText.discount || ""}
                  onChange={handleInput}
                  id="discount"
                />
              </div>
            </div>

            <div className="flex flex-col w-full gap-1 mt-6">
              <label htmlFor="description">Discount</label>
              <textarea
                name="description"
                id="description"
                className="outline-none px-4 py-2 bg-transparent focus:border-blue-400 border-slate-300 rounded-md border"
                cols="20"
                rows="8"
                value={inputText.description || ""}
                onChange={handleInput}
                placeholder="Write description here..."
              ></textarea>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 w-full mb-4 mt-6">
              {imagesShow &&
                imagesShow.length > 0 &&
                imagesShow.map((img, i) => (
                  <div className="h-[200px] relative" key={i}>
                    <label htmlFor={i}>
                      <img
                        src={img}
                        alt="Product Img"
                        className="w-full h-full object-cover"
                      />
                    </label>
                    <input
                      type="file"
                      id={i}
                      onChange={(e) => handleChangeImage(img, e.target.files)}
                      className="hidden"
                    />
                  </div>
                ))}

              <label
                className="flex justify-center items-center flex-col h-[200px] border border-dashed hover:border-green-400 w-full"
                htmlFor="image"
              >
                <span>
                  <IoMdImage size={34} />
                </span>
                <span>Select Image</span>
              </label>
              <input
                type="file"
                className="hidden"
                id="image"
                multiple
                // onChange={handleImage}
              />
            </div>
            <div className="flex">
              <button
                type="submit"
                disabled={isLoading ? true : false}
                className="bg-green-600 hover:bg-green-700 transition-all ease-in-out duration-150 hover:shadow-md text-white rounded-md px-7 py-3 my-4"
              >
                {isLoading ? (
                  <BarLoader
                    color="#ffffff"
                    width={100}
                    cssOverride={overRideSpinner}
                  />
                ) : (
                  "Save Changes"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;

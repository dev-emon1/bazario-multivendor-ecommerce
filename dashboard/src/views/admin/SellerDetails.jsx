import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  get_seller,
  messageCleared,
  update_seller_status,
} from "../../store/Reducers/sellerReducer";
import toast from "react-hot-toast";

const SellerDetails = () => {
  const { seller, successMessage } = useSelector((state) => state.seller);
  const dispatch = useDispatch();
  const { sellerId } = useParams();

  const [status, setStatus] = useState("");
  useEffect(() => {
    dispatch(get_seller(sellerId));
  }, [sellerId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(update_seller_status({ sellerId, status }));
  };

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageCleared());
    }
  }, [successMessage]);

  useEffect(() => {
    if (seller) {
      setStatus(seller.status);
    }
  }, [seller]);

  return (
    <div className="px-2 lg:px-7 pt-5">
      <h1 className="font-bold text-xl mb-3">Seller Details</h1>
      <div className="w-full flex flex-wrap bg-white">
        <div className="w-3/12 flex justify-center items-center py-3">
          <div>
            {seller?.image ? (
              <img
                src={seller?.image}
                alt="Profile"
                className="w-full h-[230px]"
              />
            ) : (
              <span>Image is not uploaded yet</span>
            )}
          </div>
        </div>
        <div className="w-4/12">
          <div className="px-0 md:px-5 py-2">
            <div className="py-2 text-lg">
              <h2 className="font-semibold">Basic Info</h2>
            </div>

            <div className="flex justify-between text-sm flex-col gap-2 p-4 bg-indigo-50 rounded-md shadow-sm">
              <div className="flex gap-2 font-bold">
                <span>Name :</span>
                <span>{seller?.name}</span>
              </div>
              <div className="flex gap-2 font-bold">
                <span>Email :</span>
                <span>{seller?.email}</span>
              </div>
              <div className="flex gap-2 font-bold">
                <span>Role :</span>
                <span>{seller?.role}</span>
              </div>
              <div className="flex gap-2 font-bold">
                <span>Status :</span>
                <span>{seller?.status}</span>
              </div>
              <div className="flex gap-2 font-bold">
                <span>Payment Status :</span>
                <span>{seller?.payment}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-4/12">
          <div className="px-0 md:px-5 py-2">
            <div className="py-2 text-lg">
              <h2 className="font-semibold">Address Info</h2>
            </div>

            <div className="flex justify-between text-sm flex-col gap-2 p-4 bg-indigo-50 rounded-md shadow-sm">
              <div className="flex gap-2 font-bold">
                <span>Shop Name :</span>
                <span>{seller?.shopInfo?.shopName}</span>
              </div>
              <div className="flex gap-2 font-bold">
                <span>Division :</span>
                <span>{seller?.shopInfo?.division}</span>
              </div>
              <div className="flex gap-2 font-bold">
                <span>District :</span>
                <span>{seller?.shopInfo?.district}</span>
              </div>
              <div className="flex gap-2 font-bold">
                <span>State :</span>
                <span>{seller?.shopInfo?.sub_district}</span>
              </div>
              <div className="flex gap-2 font-bold">
                <span>Zip Code :</span>
                <span>{seller?.shopInfo?.zip_code}</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <form onSubmit={handleSubmit}>
            <div className="flex gap-4 p-4">
              <select
                className="px-4 py-2 focus:border-indigo-500 outline-none bg-indigo-100 border border-slate-500 rounded-md text-black"
                name=""
                id=""
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="">--Select Option--</option>
                <option value="active">Activate</option>
                <option value="deactivate">Deactivate</option>
              </select>
              <button className="w-[170px] bg-green-600 hover:bg-green-700 transition-all ease-in-out duration-150 hover:shadow-md text-white rounded-md px-7 py-3">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SellerDetails;

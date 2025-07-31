import React from "react";

const OrderDetails = () => {
  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="w-full bg-white p-4 rounded-md">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-medium">Order Details</h2>

          <select
            name=""
            id=""
            className="px-4 py-2 focus:border-indigo-400 outline-none border border-slate-200 rounded-md"
          >
            <option value="pending">pending</option>
            <option value="processing">processing</option>
            <option value="warehouse">warehouse</option>
            <option value="placed">placed</option>
            <option value="cancelled">cancelled</option>
          </select>
        </div>

        <div className="p-4 ">
          <div className="flex gap-2 text-lg">
            <h3>#31234</h3>
            <span>24 June 2025</span>
          </div>
          <div className="flex flex-wrap">
            <div className="w-[30%]">
              <div className="pr-3 text-lg">
                <div className="flex flex-col gap-2">
                  <h2 className="pb-1 font-semibold">
                    Deliver to : Khalid Bin
                  </h2>
                  <p>
                    <span className="text-sm">
                      239 Paglamazar Road, Nayatola, Moghbazar.
                    </span>
                  </p>
                </div>
                <div className="flex justify-start items-center gap-4">
                  <h3>Payment Status :</h3>
                  <span className="text-base">Paid</span>
                </div>
                <span>Price: $123</span>

                <div className="mt-4 flex flex-col gap-2 bg-[#8288ed]">
                  <div className="text-white">
                    <div className="flex gap-3 text-md items-center justify-start pl-1">
                      <img
                        src="http://localhost:3000/images/category/1.jpg"
                        alt="product"
                        className="w-12 h-12 flex "
                      />
                      <div>
                        <h3>Product name here</h3>
                        <p>
                          <span>Brand : Infinity </span>

                          <span className="text-lg">Quantity : 4</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex flex-col gap-2 bg-[#8288ed]">
                  <div className="text-white">
                    <div className="flex gap-3 text-md items-center justify-start pl-1">
                      <img
                        src="http://localhost:3000/images/category/1.jpg"
                        alt="product"
                        className="w-12 h-12 flex "
                      />
                      <div>
                        <h3>Product name here</h3>
                        <p>
                          <span>Brand : Infinity </span>

                          <span className="text-lg">Quantity : 4</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex flex-col gap-2 bg-[#8288ed]">
                  <div className="text-white">
                    <div className="flex gap-3 text-md items-center justify-start pl-1">
                      <img
                        src="http://localhost:3000/images/category/1.jpg"
                        alt="product"
                        className="w-12 h-12 flex "
                      />
                      <div>
                        <h3>Product name here</h3>
                        <p>
                          <span>Brand : Infinity </span>

                          <span className="text-lg">Quantity : 4</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[70%]">
              <div className="pl-3">
                <div className="mt-4 flex flex-col bg-[#8288ed] rounded-md p-4">
                  <div className="text-[#f1f4fa] mt-3">
                    <div className="flex justify-start items-center gap-3">
                      <h2>Seller 1 Order : </h2>
                      <span>pending</span>
                    </div>
                    <div className="mt-4 flex flex-col gap-2 bg-[#8288ed]">
                      <div className="text-white">
                        <div className="flex gap-3 text-md items-center justify-start pl-1">
                          <img
                            src="http://localhost:3000/images/category/1.jpg"
                            alt="product"
                            className="w-12 h-12 flex "
                          />
                          <div>
                            <h3>Product name here</h3>
                            <p>
                              <span>Brand : Infinity </span>

                              <span className="text-lg">Quantity : 4</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-[#f1f4fa] mt-4">
                    <div className="flex justify-start items-center gap-3">
                      <h2>Seller 1 Order : </h2>
                      <span>pending</span>
                    </div>
                    <div className="mt-4 flex flex-col gap-2 bg-[#8288ed]">
                      <div className="text-white">
                        <div className="flex gap-3 text-md items-center justify-start pl-1">
                          <img
                            src="http://localhost:3000/images/category/1.jpg"
                            alt="product"
                            className="w-12 h-12 flex "
                          />
                          <div>
                            <h3>Product name here</h3>
                            <p>
                              <span>Brand : Infinity </span>

                              <span className="text-lg">Quantity : 4</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;

import React from "react";
import { BiDollar } from "react-icons/bi";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import Chart from "react-apexcharts";
import { Link } from "react-router-dom";

const SellerDashboard = () => {
  const state = {
    series: [
      {
        name: "Orders",
        data: [25, 35, 45, 50, 40, 38, 54, 63, 61, 57],
      },
      {
        name: "Revenue",
        data: [35, 15, 45, 31, 75, 22, 34, 63, 54, 57],
      },
      {
        name: "Sales",
        data: [21, 31, 47, 59, 44, 32, 50, 61, 65, 51],
      },
    ],
    options: {
      color: ["#181ee8", "#181ee8"],
      plotOptions: {
        radius: 30,
      },
      chart: {
        background: "transparent",
        foreColor: "#d0d2d6",
      },
      dataLabels: {
        enabled: false,
      },
      stoke: {
        show: true,
        curve: ["smooth", "straight", "stepline"],
        lineCap: "butt",
        colors: "#f0f0f0",
        width: 0.5,
        dashArray: 0,
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apl",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      legend: {
        position: "top",
      },
      responsive: [
        {
          breakpoint: 600,
          yaxis: {
            categories: [
              "Jan",
              "Feb",
              "Mar",
              "Apl",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
          },
          options: {
            plotOptions: {
              bar: {
                horizontal: true,
              },
            },
            chart: {
              height: "550px",
            },
          },
        },
      ],
    },
  };
  return (
    <div className="px-2 md:px-7 py-5 bg-[#cac4ff]">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7">
        <div className="flex justify-between items-center p-5 bg-[#ffd9d9] rounded-md gap-3">
          <div className="flex flex-col justify-start items-center text-[#5c5a5a]">
            <h3 className="text-3xl font-bold">$3790</h3>
            <span className="text-md font-medium">Total Sales</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-red-500 text-2xl flex justify-center items-center text-white">
            <BiDollar />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-[#fcd4ff] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-[#5c5a5a]">
            <h3 className="text-3xl font-bold">90</h3>
            <span className="text-md font-medium">Products</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-purple-500 text-2xl flex justify-center items-center text-white">
            <MdProductionQuantityLimits />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-[#e4fff7] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-[#5c5a5a]">
            <h3 className="text-3xl font-bold">14</h3>
            <span className="text-md font-medium">Orders</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-green-500 text-2xl flex justify-center items-center text-white">
            <FiShoppingCart />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-[#ecebff] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-[#5c5a5a]">
            <h3 className="text-3xl font-bold">78</h3>
            <span className="text-md font-medium">Pending Orders</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-blue-400 text-2xl flex justify-center items-center text-white">
            <FiShoppingCart />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap w-full mt-6">
        <div className="w-full lg:w-7/12 lg:pr-3">
          <div className=" w-full bg-white p-4 rounded-md">
            <Chart
              options={state.options}
              series={state.series}
              height={350}
              type="bar"
            />
          </div>
        </div>

        <div className="w-full lg:w-5/12 lg:pl-4 mt-6 lg:mt-0 ">
          <div className="w-full p-4 bg-white text-black rounded-md">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg text-black">
                Recent Customers Message
              </h3>
              <Link to="#" className="font-semibold text-sm text-black">
                View All
              </Link>
            </div>

            <div className="flex flex-col gap-2 pt-5 text-black">
              <ol className="relative border-1 border-slate-500 ml-4 ">
                <li className="mb-3 ml-6">
                  <div className="flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-1 rounded-full z-10 bg-blue-400">
                    <img
                      src="http://localhost:3000/images/admin.png"
                      alt="Admin"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="p-2 bg-slate-800 border border-slate-500 rounded-lg shadow-sm">
                    <div className="flex justify-between items-center mb-2 text-white">
                      <Link to="#" className="text-md font-normal">
                        Admin
                      </Link>
                      <time className="mb-1 text-sm font-normal sm:order-last sm:mb-0">
                        2 days ago
                      </time>
                    </div>
                  </div>
                </li>
              </ol>
            </div>
            <div className="flex flex-col gap-2 pt-5 text-black">
              <ol className="relative border-1 border-slate-500 ml-4 ">
                <li className="mb-3 ml-6">
                  <div className="flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-1 rounded-full z-10 bg-blue-400">
                    <img
                      src="http://localhost:3000/images/admin.png"
                      alt="Admin"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="p-2 bg-slate-800 border border-slate-500 rounded-lg shadow-sm">
                    <div className="flex justify-between items-center mb-2 text-white">
                      <Link to="#" className="text-md font-normal">
                        Admin
                      </Link>
                      <time className="mb-1 text-sm font-normal sm:order-last sm:mb-0">
                        2 days ago
                      </time>
                    </div>
                  </div>
                </li>
              </ol>
            </div>
            <div className="flex flex-col gap-2 pt-5 text-black">
              <ol className="relative border-1 border-slate-500 ml-4 ">
                <li className="mb-3 ml-6">
                  <div className="flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-1 rounded-full z-10 bg-blue-400">
                    <img
                      src="http://localhost:3000/images/admin.png"
                      alt="Admin"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="p-2 bg-slate-800 border border-slate-500 rounded-lg shadow-sm">
                    <div className="flex justify-between items-center mb-2 text-white">
                      <Link to="#" className="text-md font-normal">
                        Customer
                      </Link>
                      <time className="mb-1 text-sm font-normal sm:order-last sm:mb-0">
                        2 days ago
                      </time>
                    </div>
                  </div>
                </li>
              </ol>
            </div>
            <div className="flex flex-col gap-2 pt-5 text-black">
              <ol className="relative border-1 border-slate-500 ml-4 ">
                <li className="mb-3 ml-6">
                  <div className="flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-1 rounded-full z-10 bg-blue-400">
                    <img
                      src="http://localhost:3000/images/admin.png"
                      alt="Admin"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="p-2 bg-slate-800 border border-slate-500 rounded-lg shadow-sm">
                    <div className="flex justify-between items-center mb-2 text-white">
                      <Link to="#" className="text-md font-normal">
                        Seller
                      </Link>
                      <time className="mb-1 text-sm font-normal sm:order-last sm:mb-0">
                        2 days ago
                      </time>
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white mt-6 rounded-md p-4">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-lg text-black pb-3">
            Recent Orders
          </h3>
          <Link to="" className="text-sm font-semibold text-black">
            View All
          </Link>
        </div>

        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left bg-white text-black uppercase">
            <thead className="text-sm text-black uppercase border-b border-gray-300">
              <tr>
                <th scope="col" className="py-3 px-4">
                  Order ID
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
                  Active
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
                    #14321
                  </td>
                  <td className="py-3 px-4 font-medium whitespace-nowrap">
                    $132
                  </td>
                  <td className="py-3 px-4 font-medium whitespace-nowrap">
                    pending
                  </td>
                  <td className="py-3 px-4 font-medium whitespace-nowrap">
                    pending
                  </td>
                  <td className="py-3 px-4 font-medium whitespace-nowrap">
                    <Link to="#" className="text-blue-600 hover:underline">
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;

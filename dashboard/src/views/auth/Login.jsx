import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { overRideSpinner } from "../../utils/utils";
import { BarLoader } from "react-spinners";
import toast from "react-hot-toast";
import { messageCleared, seller_login } from "../../store/Reducers/authReducer";

const Login = () => {
  const { isLoading, errorMessage, successMessage } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  const [inputData, setInputData] = React.useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(seller_login(inputData));
  };

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageCleared());
    }
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageCleared());
      navigate("/");
    }
  });
  return (
    <div className="min-w-screen min-h-screen flex justify-center items-center bg-[#e9e8f7]">
      <div className="w-[400px] text-white p-2">
        <div className="bg-[#4b4b6d] p-5 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-3">Welcome to E-commerce</h2>
          <p className="text-sm font-medium mb-3">
            Please sign in to your account # Dashboard This is the React
            dashboard app.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1 mb-3 w-full">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="p-2 rounded-md bg-[#e9e8f7] text-black outline-none border border-[#4b4b6d] focus:border-[#4b4b6d] focus:ring-1 focus:ring-[#4b4b6d]"
                placeholder="Enter your email"
                name="email"
                id="email"
                required
                onChange={handleInputChange}
                value={inputData.email}
              />
            </div>
            <div className="flex flex-col gap-1 mb-6 w-full">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="p-2 rounded-md bg-[#e9e8f7] text-black outline-none border border-[#4b4b6d] focus:border-[#4b4b6d] focus:ring-1 focus:ring-[#4b4b6d]"
                placeholder="Enter your password"
                name="password"
                id="password"
                required
                onChange={handleInputChange}
                value={inputData.password}
              />
            </div>

            <button
              disabled={isLoading ? true : false}
              className="bg-slate-400 w-full hover:shadow-blue-950 hover:shadow-sm px-7 py-2 mb-3 rounded-md text-white font-semibold transition-all duration-200 ease-in-out"
            >
              {isLoading ? (
                <BarLoader
                  color="#ffffff"
                  width={100}
                  cssOverride={overRideSpinner}
                />
              ) : (
                "Login"
              )}
            </button>

            <div className="flex justify-center items-center text-sm mb-3 gap-3">
              <p className="text-gray-400">
                Don't have an account?{" "}
                <Link to="/register" className="text-blue-500 hover:underline">
                  Sign Up
                </Link>
              </p>
            </div>

            <div className="flex justify-center items-center w-full mb-3">
              <div className="w-[45%] h-[1px] bg-slate-400"></div>
              <div className="w-[10%] text-center">
                <span className="p-1">Or</span>
              </div>
              <div className="w-[45%] h-[1px] bg-slate-400"></div>
            </div>

            <div className="flex justify-between items-center gap-3 mb-3">
              <div className="w-[170px] h-[40px] bg-[#DB4437] rounded-md flex justify-center items-center cursor-pointer hover:shadow-lg hover:bg-[#ca4034] transition-all duration-200 ease-in-out">
                <FaGoogle />
              </div>
              <div className="w-[170px] h-[40px] bg-[#1877F2] rounded-md flex justify-center items-center cursor-pointer hover:shadow-lg hover:bg-[#2978df] transition-all duration-200 ease-in-out">
                <FaFacebookF />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

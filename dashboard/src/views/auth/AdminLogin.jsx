import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { admin_login, messageCleared } from "../../store/Reducers/authReducer";
import { BarLoader } from "react-spinners";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { overRideSpinner } from "../../utils/utils";

const AdminLogin = () => {
  const [inputData, setInputData] = React.useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { isLoading, errorMessage, successMessage } = useSelector(
    (state) => state.auth
  );

  const handleInputChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(admin_login(inputData));
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
  }, [errorMessage, successMessage]);

  return (
    <div className="min-w-screen min-h-screen flex justify-center items-center bg-[#e9e8f7]">
      <div className="w-[350px] text-white p-2">
        <div className="bg-[#4b4b6d] p-6 rounded-lg shadow-lg">
          <div className="h-20 flex justify-center items-center mb-3">
            <div className="w-[180px] h-[50px]">
              <img
                className="w-full h-full"
                src="http://localhost:3000/images/logo-white.png"
                alt=""
              />
            </div>
          </div>

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
              className="bg-[#F7941D] w-full hover:shadow-blue-950 hover:shadow-sm px-7 py-2 mb-3 rounded-md text-white font-semibold transition-all duration-200 ease-in-out"
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;

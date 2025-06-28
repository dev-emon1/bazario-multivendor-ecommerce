import React from "react";
import { useDispatch } from "react-redux";
import { admin_login } from "../../store/Reducers/authReducer";

const AdminLogin = () => {
  const [inputData, setInputData] = React.useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(admin_login(inputData));
    // console.log(inputData);
  };
  return (
    <div className="min-w-screen min-h-screen flex justify-center items-center bg-[#e9e8f7]">
      <div className="w-[350px] text-white p-2">
        <div className="bg-[#4b4b6d] p-5 rounded-lg shadow-lg">
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

            <button className="bg-[#F7941D] w-full hover:shadow-blue-950 hover:shadow-sm px-7 py-2 mb-3 rounded-md text-white font-semibold transition-all duration-200 ease-in-out">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;

import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { IoEyeOutline, IoEyeOffSharp } from "react-icons/io5";
import axios from "axios";
import { authdatacontext } from "../context/Authcontext";
import { userdatacontext } from "../context/Usercontext";

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { serverUrl } = useContext(authdatacontext);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  let { getCurrentUser } = useContext(userdatacontext);

  const handlelogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        serverUrl + "/api/auth/login",
        { Email, Password },
        { withCredentials: true }
      );
      getCurrentUser();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen bg-gradient-to-r from-blue-500 to-purple-500 px-4">

     <div className="flex justify-start p-4">
        <button
          onClick={() => navigate("/")}
          className="bg-white text-blue-600 font-semibold px-5 py-2 rounded-lg shadow-md hover:bg-gray-100 transition"
        >
          Home
        </button>
      </div>
      <div className="flex justify-center items-center h-[85%]">
        <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6">

          <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Login
          </h1>

          <button className="mt-2 flex items-center justify-center gap-2 bg-gray-900 text-white py-3 rounded-lg w-full hover:bg-black transition">
            <img
              className="h-6"
              src="https://imgs.search.brave.com/023_3Tu7qfEXOqwKcTSm3Zjfh_XK-At-dk3PMSaB1pE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2Lzk1LzEzLzgx/LzM2MF9GXzY5NTEz/ODE0OV9HZFJJUHhT/b1hVMGE2VGdINlNs/M1o5VEdhT1NqekhC/ZC5qcGc"
              alt=""
            />
            Login with Google
          </button>

          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-300" />
            <span className="px-2 text-gray-500 text-sm">OR</span>
            <div className="flex-grow h-px bg-gray-300" />
          </div>

          <form onSubmit={handlelogin} className="flex flex-col gap-4">

            <input
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email Address"
              className="border-2 border-gray-300 rounded-lg py-3 px-4 outline-none focus:ring-2 focus:ring-purple-500"
            />

            <div className="relative">
              <input
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="border-2 border-gray-300 rounded-lg py-3 px-4 w-full outline-none focus:ring-2 focus:ring-purple-500"
              />
              <span
                className="absolute top-3 right-4 cursor-pointer text-gray-600 text-xl"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <IoEyeOffSharp /> : <IoEyeOutline />}
              </span>
            </div>

            <button className="bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg text-lg shadow-md transition">
              Login
            </button>
          </form>

          <p
            className="text-center text-gray-600 text-sm mt-4 cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Don't have an account?
            <span className="text-purple-600 font-semibold ml-1 hover:underline">
              Sign Up
            </span>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Login;

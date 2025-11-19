import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen w-full bg-gradient-to-r from-blue-500 to-purple-500 p-6">

      <div className="flex justify-between items-center w-full">
        
        <img
          onClick={() => navigate("/")}
          className="w-28 h-16 object-contain cursor-pointer "
          src="https://imgs.search.brave.com/ppJBt96RJ7LAg3adRlnuja1s3TxOWtcbsh0dU_Lbg3Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvZWNvbW1lcmNl/LWxvZ28tdGVtcGxh/dGVfNTYxNDA4LTI0/NTguanBnP3NlbXQ9/YWlzX2h5YnJpZCZ3/PTc0MA"
          alt="Logo"
        />

        <div className="flex gap-3">
          <button
            className="bg-white px-4 py-2 rounded-lg text-purple-600 font-semibold hover:bg-gray-200 transition"
            onClick={() => navigate("/login")}
          >
            Login
          </button>

          <button
            className="bg-purple-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-purple-700 transition"
            onClick={() => navigate("/signup")}
          >
            Signup
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center flex-grow text-center">
        <h1 className="text-4xl font-bold text-white">Welcome to Store</h1>
        <p className="text-white text-lg mt-2 opacity-90">
          Explore products and enjoy shopping 🚀
        </p>
      </div>

    </div>
  );
}

export default Home;

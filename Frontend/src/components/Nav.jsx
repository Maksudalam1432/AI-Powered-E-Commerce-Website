import React from 'react'
import { useNavigate } from 'react-router-dom'

function Nav() {

    let navigate=useNavigate()
  return (
   
    
        <div className=' flex flex-col   p-6 bg-gradient-to-r from-blue-500 to-purple-500'>
      <div className="flex justify-between items-center w-full ">

        <img
          onClick={() => navigate("/")}
          className="w-28 h-12 object-contain cursor-pointer "
          src="https://imgs.search.brave.com/SyS8aC9ladG6rzZdFAwyWGDSIabkxM3P_1AWHsq5tSY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzk5Lzcz/Lzc1Lzk5NzM3NWQ2/YWM4NDU2NWE5YjE4/OTIxOGU2YWUxMDFl/LmpwZw"
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
            className="bg-purple-600 px-4 py-2  rounded-lg text-white font-semibold hover:bg-purple-700 transition"
            onClick={() => navigate("/signup")}
          >
            Signup
          </button>
        </div>
      </div>
            </div>
  )
}

export default Nav
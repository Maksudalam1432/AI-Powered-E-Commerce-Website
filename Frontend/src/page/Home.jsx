import React from "react";
import Nav from "../components/Nav";
// import { useNavigate } from "react-router-dom";

function Home() {
  // const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen w-full bg-gray-300  ">
  
 <Nav/>
      <div className="flex flex-col justify-center items-center mt-10 text-center">
        <h1 className="text-4xl font-bold   text-black">Welcome to Store</h1>
        <p className="text- text-lg mt-2 opacity-90">
          Explore products and enjoy shopping 🚀
        </p>
      </div>

    </div>
  );
}

export default Home;

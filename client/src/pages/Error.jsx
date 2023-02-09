import React from "react";
import { useNavigate } from "react-router-dom";

export const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center min-h-screen flex-col">
      <h1 className=" font-bold mb-2">Page Not Found</h1>
      <button
        className=" bg-blue-600 p-2 rounded-md text-[#fff] font-semibold "
        onClick={() => navigate("/")}
      >
        Click To Return Homepage
      </button>
    </div>
  );
};

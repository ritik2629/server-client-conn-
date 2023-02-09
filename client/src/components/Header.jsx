import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className=" bg-blue-700 p-3 text-white flex justify-between items-center">
      <a className=" flex text-2xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path
            fillRule="evenodd"
            d="M3.75 6.75a3 3 0 00-3 3v6a3 3 0 003 3h15a3 3 0 003-3v-.037c.856-.174 1.5-.93 1.5-1.838v-2.25c0-.907-.644-1.664-1.5-1.837V9.75a3 3 0 00-3-3h-15zm15 1.5a1.5 1.5 0 011.5 1.5v6a1.5 1.5 0 01-1.5 1.5h-15a1.5 1.5 0 01-1.5-1.5v-6a1.5 1.5 0 011.5-1.5h15zM4.5 9.75a.75.75 0 00-.75.75V15c0 .414.336.75.75.75H18a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75H4.5z"
            clipRule="evenodd"
          />
        </svg>
        <h1 className=" ml-2">Ritik</h1>
      </a>
      <div className=" flex text-lg bg-white text-black p-2 rounded-full mx-2 font-semibold">
        <Link to="/about">
          <div className=" cursor-pointer hover:text-red-700">About</div>
        </Link>
        <Link to="/todo">
          <div className=" ml-2 cursor-pointer hover:text-red-700">Todo</div>
        </Link>
        <Link to="/counter">
          <div className=" ml-2 cursor-pointer hover:text-red-700">Counter</div>
        </Link>
      </div>
    </header>
  );
};

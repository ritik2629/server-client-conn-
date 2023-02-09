import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  reset,
} from "../redux/features/counter/counterSlice";

export const Counter = () => {
  const state = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div className=" text-center mt-2 ">
      {/* <h1 className=" text-2xl font-semibold underline">Counter with Redux</h1> */}
      <h3 className=" text-lg font-semibold text-gray-500 p-2">
        Counter value :
        <span className=" text-blue-600 font-bold m-2 text-2xl">{state}</span>
      </h3>
      <button
        className=" bg-green-600 mr-2 rounded-md p-2 mt-2 text-white"
        onClick={() => dispatch(increment(2))}
      >
        Increment
      </button>
      <button
        className=" bg-orange-600 mr-2 rounded-md p-2 mt-2 text-white"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <button
        className=" bg-red-600 mr-2 rounded-md p-2 mt-2 text-white"
        onClick={() => dispatch(reset())}
      >
        Reset
      </button>
    </div>
  );
};

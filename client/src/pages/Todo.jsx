import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Todolist } from "../components/Todolist";
import { addTodo } from "../redux/features/todo/todoSlice";
import axios from "axios";

export const Todo = () => {
  const state = useSelector((state) => state.todo.todo);
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  function sumbitHandler(e) {
    e.preventDefault();
    dispatch(addTodo(todo));
    axios.post("http://localhost:5050/todo", { todo });
    setTodo("");
  }

  return (
    <div className=" text-center">
      <h1 className=" text-2xl font-semibold mt-3">Todo List App</h1>
      <form onSubmit={sumbitHandler}>
        <input
          type="text"
          className=" border border-red-600 p-2 mt-3 rounded-md focus:outline-none focus:border-blue-700"
          placeholder=" Add your Todo here...."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <input
          type="submit"
          className=" border ml-1 text-white bg-blue-600 p-2 rounded-md hover:cursor-pointer hover:bg-green-500"
        />
      </form>
      <Todolist state={state} />
    </div>
  );
};

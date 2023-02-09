import React from "react";
import { Header } from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Counter } from "./pages/Counter";
import { Todo } from "./pages/Todo";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Error } from "./pages/Error";

export const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

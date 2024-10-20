import React from "react";
import Home from "./pages/Home";
import AllTasks from "./pages/AllTasks";
import ImpTasks from "./pages/ImpTasks";
import CompTasks from "./pages/CompTasks";
import IncompTasks from "./pages/IncompTasks";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
const App = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-2 relative overflow-auto ">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}>
            <Route index element={<AllTasks />} />
            <Route path="/important" element={<ImpTasks />} />
            <Route path="/completed" element={<CompTasks />} />
            <Route path="/incompleted" element={<IncompTasks />} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

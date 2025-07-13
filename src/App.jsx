import React from "react";
import Navbar from "./components/header/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddPost from "./pages/AddPost";
import People from "./pages/People";
import Register from "./pages/Register";

function App() {
  return (
    <div className="bg-slate-300 w-full min-h-[100vh] px-4 py-5">
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/AddPost/:userPath" element={<AddPost />} />
        <Route path="/People" element={<People />} />
        <Route path="/Register" element={<Register />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

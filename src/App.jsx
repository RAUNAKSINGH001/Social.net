import React from "react";
import Navbar from "./components/header/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddPost from "./pages/AddPost";
import People from "./pages/People";
import Register from "./pages/Register";
import EditPost from './pages/EditPost'
import EditProfile from './pages/EditProfile'
// import DarkModeToggle from './components/header/DarkModeToggle';

function App() {
  return (
    <div className="dark:bg-black bg-gray-50  w-full min-h-[100vh] dark:text-white text-black px-4 py-4">
      <Navbar />
            {/* <DarkModeToggle /> */}

      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/AddPost/:userPath" element={<AddPost />} />
        <Route path="/People" element={<People />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/EditPost/:id" element={<EditPost />} />
        <Route path="/EditProfile/:ide" element={<EditProfile />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

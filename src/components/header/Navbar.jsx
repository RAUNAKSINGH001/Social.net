import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { House } from "lucide-react";
import { Users } from "lucide-react";
import { LogIn } from "lucide-react";
import { ImagePlus } from "lucide-react";
import { Search } from "lucide-react";
import { Sun } from "lucide-react";
import { Moon } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";

function Navbar() {
  const navigate = useNavigate();
  const [uid, setUid] = useState();

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    const id = localStorage.getItem("uid");
    setUid(id);
  });

  const tab = [
    {
      val: "Home",
      icon: (
        <House
          className="text-black dark:text-white  "
          size={32}
          strokeWidth={2.5}
        />
      ),
      path: "/Home",
    },
    {
      val: "People",
      icon: (
        <Users
          className="text-black dark:text-white  "
          size={32}
          strokeWidth={2.5}
        />
      ),
      path: "/People",
    },
    {
      val: "New Post",
      icon: (
        <ImagePlus
          className="text-black dark:text-white  "
          size={32}
          strokeWidth={2.5}
        />
      ),
      path: `/AddPost/${uid}`,
    },
    {
      val: "Register",
      icon: (
        <LogIn
          className="text-black dark:text-white  "
          size={32}
          strokeWidth={2.5}
        />
      ),
      path: "/Register",
    },
    {
      val: darkMode ? "Light" : "Dark",
      icon: (
        <Sun
          className="text-black dark:text-white  "
          size={32}
          strokeWidth={2.5}
        />
      ),
      path: "",
    },
  ];
  return (
    <div className="dark:bg-black border-1 bg-gray-50 border-gray-900 dark:border-gray-400 w-full min-h-[screen] rounded-2xl  mb-2">
      <div className="dark:bg-black bg-gray-50 w-full justify-self-start gap-20 h-[10vh] rounded-2xl px-15 flex items-center">
        <h1 className="text-3xl font-extrabold font-sans ">SOCIAL.NET</h1>

        <div className="border-1 dark:border-gray-400 dark:bg-black border-gray-900 bg-gray-50  rounded-2xl flex items-center justify-center gap-2 py-1 h-[7vh] px-4 ">
          <Search dark:color="white" color="black" strokeWidth={2.5} />
          <input
            type="text"
            placeholder="Search..."
            className="  focus:outline-none rounded-2xl w-[20vw]  px-4"
          />
        </div>

        <div className="flex items-center justify-between text-white dark:text-gray-50 w-full">
        {
        tab.map((tab, idx) => ( 


          tab.path!="" ?
          (
            <NavLink
              key={idx}
              to={tab.path}
              id={tab.val}
              className={({ isActive }) =>
                isActive
                  ? "h-[7vh] dark:bg-gray-800 bg-gray-300 rounded-2xl px-3 py-1 flex flex-col text-black dark:text-white items-center"
                  : " py-0.5 px-2 flex hover:bg-gray-300 hover:dark:bg-gray-800 hover:rounded-2xl flex-col  text-black dark:text-white items-center h-[7vh]"
              }
            >
              {tab.icon}
              <h1>{tab.val}</h1>
            </NavLink>
          )
          :
          (
            <button
      key={idx}
      onClick={() => setDarkMode(!darkMode)}
      className="px-3 active:scale:90 hover:py-1 flex flex-col text-black dark:text-white items-center hover:bg-gray-300 hover:dark:bg-gray-800 hover:rounded-2xl h-[7vh]"
    >
      {tab.icon}
      <label>{tab.val}</label>
    </button>
          )

        ))}
         
          
        </div>
      </div>
    </div>
  );
}

export default Navbar;

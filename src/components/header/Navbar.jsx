import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { House } from "lucide-react";
import { Users } from "lucide-react";
import { LogIn } from "lucide-react";
import { ImagePlus } from "lucide-react";
import { Search } from "lucide-react";

function Navbar() {
  const navigate = useNavigate();
  const [uid, setUid] = useState();

  useEffect(() => {
    const id = localStorage.getItem("uid");
    setUid(id);
  });

  const tab = [
    {
      val: "Home",
      icon: <House color="white" size={32} strokeWidth={2.5} />,
      path: "/Home",
    },
    {
      val: "People",
      icon: <Users color="white" size={32} strokeWidth={2.5} />,
      path: "/People",
    },
    {
      val: "New Post",
      icon: <ImagePlus color="white" size={32} strokeWidth={2.5} />,
      path: `/AddPost/${uid}`,
    },
    {
      val: "Register",
      icon: <LogIn color="white" size={32} strokeWidth={2.5} />,
      path: "/Register",
    },
  ];
  return (
    <div className="bg-black border-1 border-gray-400 w-full min-h-[screen] rounded-2xl  mb-5">
      <div className="bg-black w-full justify-self-start gap-20 h-[10vh] rounded-2xl px-15 flex items-center">
        <h1 className="text-3xl font-extrabold font-sans ">SOCIAL.NET</h1>

        <div className="border-1 border-gray-400 bg-black  rounded-2xl flex items-center justify-center gap-2 py-1 h-[7vh] px-4 ">
          <Search color="white" strokeWidth={2.5} />
          <input
            type="text"
            placeholder="Search..."
            className="  focus:outline-none rounded-2xl w-[20vw]  px-4"
          />
        </div>
 
        <div className="flex items-center justify-between w-full">
          {tab.map((tab, idx) => (
            <NavLink
              key={idx}
              to={tab.path}
              className={({ isActive }) =>
                isActive
                  ? "h-[7vh] bg-gray-800 rounded-2xl px-3 py-1 flex flex-col items-center"
                  : " py-0.5 px-2 flex flex-col items-center h-[7vh]"
              }
            >
              {tab.icon}
              <h1>{tab.val}</h1>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;

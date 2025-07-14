import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Instagram } from "lucide-react";
import { Facebook } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Twitter } from "lucide-react";
import {useState , useEffect} from 'react'

function ProfileCard({ id, name, userPath, profile, bio }) {
  const navigate = useNavigate();
  const handleAddPost = (ele) => {
    ele.preventDefault();
    localStorage.removeItem("uid");
    localStorage.setItem("uid", userPath);
    navigate(`/AddPost/${userPath}`);
  };

  const  removeCard = async (ele)=>
  {
      ele.preventDefault();
  const url = `http://localhost:3000/users/${id}`;
 let response= await fetch(url , {
    method:"DELETE",
  }
)
// .then((response)=>
//   {
//     if(!response.ok)
//   {
//     throw new Error("Card failde to delete.")
//   }
//   return response.json();
// }
// )
// .then((data) => {
//     console.log('Deleted:', data);
//   })


  
  }
  useEffect(()=>
  {
    removeCard();
  },[])
  return (
    <>
      <div className="rounded-2xl relative border-2 border-gray-400 min-w-[18vw] min-h-[50vh] bg-amber-200">
        <div className="  rounded-t-2xl min-w-[18vw] max-h-[15vh]">
          <img
            className=" rounded-t-2xl object-cover w-[18vw] h-[15vh]"
            src={profile}
            alt="profilePic"
          />
        </div>
        <div className="rounded-b-2xl w-[18vw] h-[35vh] gap-2 pt-18 flex flex-col items-center bg-gray-950">
          <h1 className="font-semibold text-2xl">{name}</h1>
          <h1 className="text-sm  text-gray-200 text-center">{bio}</h1>
          <div className=" absolute top-2/7 left-1/2 transform -translate-x-1/2 -translate-y-1/2  object-contain rounded-full bg-gray-200 p-2">
            <img
              className=" w-[7vw] h-[15vh] rounded-full"
              src={profile}
              alt="profilePic"
            />
          </div>
          <div className="flex gap-4">
            <NavLink className="w-[2vw] h-[3vh] rounded object-fill">
              <Instagram color="white" size={32} strokeWidth={2} />
            </NavLink>
            <NavLink>
              <Facebook color="white" size={32} strokeWidth={2} />
            </NavLink>
            <NavLink>
              <Linkedin color="white" size={32} strokeWidth={2} />
            </NavLink>
            <NavLink>
              <Twitter color="white" size={32} strokeWidth={2} />
            </NavLink>
          </div>
          <div className="flex gap-6">
            <button
              className="text-sm px-4 py-0.5 rounded-2xl active:scale-90 bg-blue-700"
              onClick={handleAddPost}
            >
              Add Post
            </button>
            <button className="text-sm px-4 py-0.5 rounded-2xl active:scale-90 bg-red-700" onClick={removeCard}>
              Remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;

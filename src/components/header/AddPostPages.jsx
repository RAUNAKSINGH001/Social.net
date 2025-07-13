import React from "react";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate , useParams } from "react-router";
import "react-toastify/dist/ReactToastify.css";
function AddPostPages() {
    const {id} = useParams();
  const [textContent, setTextContent] = useState("");
  const [videoContent, setVideoContent] = useState("");
  const [imageContent, setImageContent] = useState("");
  const [userId, setUserId] = useState("");
  const url = `http://localhost:3000/users/raunaksingh`;
  const addPostToApi = async (ele) => {
    ele.preventDefault();
    let res = await fetch(url , {
        method:"PATCH",
        body : JSON.stringify({
             textContent , videoContent , imageContent })
    });

    if(!res.ok)
    {
        throw new Error("Failed to add post .")
    }

    if(res)
    {
        alert("Post uploaded successfully.");
    }
  };
  return (
    <div className="flex  flex-col items-center w-full h-full gap-5 ">
      <h1 className="text-3xl text-slate-900 font-extrabold ">Add Post </h1>
      <div className="bg-slate-400 w-[40vw] h-[screen] rounded-2xl py-5 px-4">
        <form action="" className="flex flex-col items-center gap-3 pt-5">
          <h1>ID : </h1>
          <div className=" rounded-2xl flex flex-col items-center  justify-self-start gap-4 py-1 px-4 ">
            <label htmlFor="textcontent"> Text Content : </label>
            <input
              type="Textarea"
              id="textcontent"
              placeholder="Type..."
              className="  ml-3 focus:outline-none rounded-2xl bg-gray-200 h-[6vh] w-[30vw] border-1 border-gray-200 px-4"
              value={textContent}
              onChange={(ele) => setTextContent(ele.target.value)}
            />
          </div>

          <div className=" rounded-2xl flex-col flex items-center  justify-self-start gap-4 py-1 px-4 ">
            <label htmlFor="imagecontent"> Image Content : </label>
            <input
              type="url"
              id="imagecontent"
              placeholder="Type..."
              className="  ml-3 focus:outline-none rounded-2xl bg-gray-200 h-[6vh] w-[30vw] border-1 border-gray-200 px-4"
              value={imageContent}
              onChange={(ele) => setImageContent(ele.target.value)}
            />
          </div>

          <div className=" rounded-2xl flex flex-col items-center  justify-self-start gap-4 py-1 px-4 ">
            <label htmlFor="videocontent"> Video Content : </label>
            <input
              type="url"
              id="videocontent"
              placeholder="Type..."
              className="  ml-3 focus:outline-none rounded-2xl bg-gray-200 h-[6vh] w-[30vw] border-1 border-gray-200 px-4"
              value={videoContent}
              onChange={(ele) => setVideoContent(ele.target.value)}
            />
          </div>

          <button
            className="px-4 py-3 bg-slate-900 active:scale-90 text-slate-50 rounded-2xl w-[6vw]"
            onClick={addPostToApi}
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddPostPages;

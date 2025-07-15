import React from "react";
import { NavLink, Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
function EditPost() {
  const { id } = useParams();
  const url = `http://localhost:3000/users/${id}`;
  const [data, setData] = useState([]);
  const [textContent, setTextContent] = useState("");
  const [videoContent, setVideoContent] = useState("");
  const [imageContent, setImageContent] = useState("");


  const addPostToApi = async (ele) => {
    ele.preventDefault();
    let res = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify({
        textContent,
        videoContent,
        imageContent,
      }),
    });

    if (!res.ok) {
      throw new Error("Failed to add post .");
    }

    if (res) {
      alert("Post uploaded successfully.");
    }
  };


  const fetchData = async (ele) => {
    let res = await fetch(url);
    res = await res.json();
    setData(res);
    setImageContent(res.imageContent);
    setTextContent(res.textContent);
    setVideoContent(res.videoContent);
  };

  useEffect(() => {
    fetchData();
    addPostToApi();
  }, []);
  
  return (
   <div>
    <div className="flex  flex-col items-center w-full h-full gap-5 ">
      <h1 className="text-3xl dark:text-white text-black font-extrabold ">Edit Post </h1>
      <div className="dark:bg-black border-1 bg-gray-200 border-gray-400 w-[40vw] h-[screen] rounded-2xl py-5 px-4">
        <form action="" className="flex flex-col items-center gap-3 pt-5">
          <h1>ID : {id} </h1>
          <div className=" rounded-2xl flex flex-col items-center  justify-self-start gap-4 py-1 px-4 ">
            <label htmlFor="textcontent"> Text Content : </label>
            <input
              type="Textarea"
              id="textcontent"
              placeholder="Type..."
              className="  ml-3 focus:outline-none rounded-2xl dark:bg-black bg-gray-50 h-[6vh] w-[30vw] border-1 border-gray-400 px-4"
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
              className="  ml-3 focus:outline-none rounded-2xl dark:bg-black bg-gray-50 h-[6vh] w-[30vw] border-1 border-gray-400 px-4"
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
              className="  ml-3 focus:outline-none rounded-2xl dark:bg-black bg-gray-50 h-[6vh] w-[30vw] border-1 border-gray-400 px-4"
              value={videoContent}
              onChange={(ele) => setVideoContent(ele.target.value)}
            />
          </div>

          <button
            className="px-2 py-3 hover:bg-gray-800 hover:text-gray-50 dark:bg-black bg-gray-50 active:scale-90 dark:text-white text:black border-2 border-gray-400 rounded-2xl w-[12vw]"
            onClick={addPostToApi}
          >
            Upload Updated
          </button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default EditPost;

import React from "react";
import { Heart } from "lucide-react";
import { MessageCircleMore } from "lucide-react";
import { Share } from "lucide-react";
import { Eye } from "lucide-react";
import { CircleEllipsis } from "lucide-react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function HomePages({ name, id, textContent, videoContent, imageContent }) {


  const [isDropdown, setIsDropdown] = useState(false);
const [likeCount, setLikeCount] = useState(() =>
  JSON.parse(localStorage.getItem(`likeCount-${id}`)) || 0
);
const [shareCount, setShareCount] = useState(() =>
  JSON.parse(localStorage.getItem(`shareCount-${id}`)) || 0
);

  let editPostNavigate = useNavigate();
  

  const editPost = (ele) => {
    ele.preventDefault();
    editPostNavigate(`/EditPost/${id}`);
  };
  const deletePost = async (ele) => {
    ele.preventDefault();
    const url = `http://localhost:3000/users/${id}`;
    let response = await fetch(url, {
      method: "DELETE",
    });
    response = await response.json();
    if (response) {
      alert("Post deleted successfully.");
    }
  };
useEffect(() => {
localStorage.setItem(`likeCount-${id}`, likeCount);
}, [likeCount]);

useEffect(() => {
localStorage.setItem(`shareCount-${id}`, shareCount);
}, [shareCount]);

  return (
    <div className="w-[36vw] border-1 border-gray-400 h-[70vh] bg-gray-100 dark:bg-black flex px-4 py-2 ">
      <div className="w-[6vw] h-[68vh] rounded-2xl px-2 py-2 flex justify-center bg-gray-100 dark:bg-black">
        <img
          className="w-[4vw] h-[7vh] rounded-full "
          src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="profilePictures"
        />
      </div>
      <div className="dark:bg-black bg-gray-100 w-[30vw] flex flex-col items-self-start h-[68vh] rounded-2xl py-1 ">
        <div className="flex gap-2 px-4">
          <h1 className=" text-black dark:text-gray-50 font-bold ">{name}</h1>
          <h1 className="text-gray-700 dark:text-gray-400 ">{id}</h1>
        </div>

        <div className="w-[30vw] text-black dark:text-white text-justify h-auto px-4 py-2">
          <h1 className="">{textContent}</h1>
        </div>
        {{ imageContent } && (
          <div className="w-[30vw] h-max-h-28vh rounded-2xl px-2 py-1 flex justify-center ">
            <img
              className="w-[28vw] max-h-[30vh] rounded-2xl"
              src={imageContent}
            />
          </div>
        )}

        {{ videoContent } && (
          <div className="w-[30vw] h-auto rounded-2xl px-4 py-2">
            <h1 className="">{videoContent}</h1>
          </div>
        )}
        <div className="flex justify-between relative items-center rounded-2xl w-[30vw] text-gray-700 dark:text-gray-200 px-4 bg-gray-100 dark:bg-black h-[8vh]">
          <div
            className="flex items-center flex-col"
            onClick={(ele) => {
              setLikeCount(likeCount+1);
            }}>
            <Heart />
            <h1>{likeCount}</h1>
          </div>

          <div className="flex items-center flex-col">
            <MessageCircleMore />
            <h1>100k</h1>
          </div>

          <div
            className="flex items-center flex-col"
            onClick={(ele) => {
              setShareCount(shareCount+1);
              
            }}
          >
            <Share />
            <h1>{shareCount}</h1>
          </div>
          <div className="flex items-center flex-col">
            <Eye />
            <h1>15.1M</h1>
          </div>
          <div
            onClick={(ele) => setIsDropdown(!isDropdown)}
            className="flex items-center flex-col"
          >
            <CircleEllipsis />
            <h1>More</h1>
          </div>

          {isDropdown && (
            <div className=" absolute  rounded-2xl px-0.5 bottom-15 right-3.5 py-0.5 bg-gray-200 dark:bg-black border-1 items-center border-gray-400 flex flex-col gap-1 ">
              <option
                className="border-b-2 rounded-2xl px-2 py-0.5 border-gray-400 "
                value="edit"
                onClick={editPost}
              >
                Edit
              </option>

              <option
                className=" active:scale-90 cursor-pointer border-b-2 rounded-2xl px-2 py-0.5"
                value="delete"
                onClick={deletePost}
              >
                Delete
              </option>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePages;

import React from "react";
import { Heart } from 'lucide-react';
import { MessageCircleMore } from 'lucide-react';
import { Share } from 'lucide-react';
import { Eye } from 'lucide-react';

function HomePages({ name, id, textContent, videoContent, imageContent }) {
  return (
    <div className="w-[36vw] border-1 border-gray-400 h-[70vh] bg-black flex px-4 py-2 ">
      <div className="w-[6vw] h-[68vh] rounded-2xl px-2 py-2 flex justify-center bg-black">
        <img
          className="w-[4vw] h-[7vh] rounded-full "
          src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="profilePictures"
        />
      </div>
      <div className="bg-black w-[30vw] flex flex-col items-self-start h-[68vh] rounded-2xl py-1 ">
        <div className="flex gap-2 px-4">
          <h1 className="text-gray-50 font-bold ">{name}</h1>
          <h1 className="text-gray-400 ">{id}</h1>
        </div>

        <div className="w-[30vw] text-white text-justify h-auto px-4 py-2" >
          <h1 className="">{textContent}</h1>
        </div>
        {{ imageContent } ? (
          <div className="w-[30vw] h-max-h-28vh rounded-2xl px-2 py-1 flex justify-center ">
            <img className="w-[28vw] max-h-[30vh] rounded-2xl"src={imageContent}/>
          </div>
        ) : (
          ""
        )}

        {{ videoContent } ? (
          <div className="w-[30vw] h-auto rounded-2xl px-4 py-2">
            <h1 className="">{videoContent}</h1>
          </div>
        ) : (
          ""
        )}
        <div className="flex justify-between items-center rounded-2xl w-[30vw] text-gray-200 px-4 bg-black h-[8vh]">
            <div className="flex items-center flex-col">
                <Heart/>
                <h1>1.1M</h1>
            </div>
            <div className="flex items-center flex-col">
                <MessageCircleMore/>
                <h1>100k</h1>
            </div>
            <div className="flex items-center flex-col">
                <Share/>
                <h1>1M</h1>
            </div>
            <div className="flex items-center flex-col">
                <Eye/>
                <h1>15.1M</h1>
            </div>
        </div>
      </div>
    </div>
  );
}

export default HomePages;

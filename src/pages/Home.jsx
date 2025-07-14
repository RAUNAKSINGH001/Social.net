import React from "react";
import HomePages from "../components/header/HomePages";
import {useState , useEffect} from 'react';
function Home() {
const [data , setData] = useState([]);


  const fetchApi = async (ele)=>
  {
    const url = "http://localhost:3000/users";
    let res = await fetch(url);
    res = await res.json();
    setData(res);
  }
  useEffect(()=>
  {
    fetchApi();
  },[data])
  return (
    <div className="w-full min-h-screen  gap-0 flex flex-col items-center ">
      {
data.map((data, idx)=>
(
  <div key={data.id}>
        <HomePages name = {data.name}  id={data.id} imageContent={data.imageContent} textContent= {data.textContent} videoContent={data.videoContent} />
      </div>
))
      }
    
    </div>
  );
}

export default Home;

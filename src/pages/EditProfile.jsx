import React from 'react'
import { NavLink, Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EditProfile() {
    const {ide} = useParams();
    console.log (ide +"ide");
  const url = `http://localhost:3000/users/${ide}`;
    const [data, setData] = useState([]);
 const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState("");
  const [bio, setBio] = useState("");
  const [id, setId] = useState("");

   const fetchData = async (ele) => {
      let res = await fetch(url);
      res = await res.json();
      let dataa= res;
      console.log("data : " + dataa.name)
      setData(dataa);
      setName(dataa.name);
      setAge(dataa.age);
      setAddress(dataa.address);
      setBio(dataa.bio);
      setId(dataa.id);
      setProfile(dataa.profile);
      setEmail(dataa.email);
      setContact(dataa.contact);
      
    };

const addToApi = async (ele) => {
    ele.preventDefault();

    let res = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify({
        id,
        name,
        age,
        address,
        contact,
        email,
        profile,
        bio,
      }),
    });

    if (!res.ok) {
      throw new Error("Failed to add new user.");
    }

    if (data) {
      alert("User updated successfully.");
    }
  }; 
  useEffect(() => {
      fetchData();
    }, []);

  


  
   
  return (
    <div>
      <div className="flex  flex-col items-center w-full h-full gap-5 ">
      <h1 className="text-3xl text-gray-50 dark:text-white font-extrabold ">Edit Profile Details </h1>
      <div className="bg-gray-200 dark:bg-black border-1 border-gray-400 w-[40vw] h-[screen] rounded-2xl py-5 px-4">
        <form action="" className="flex flex-col items-center gap-3 pt-5">
          <div className=" rounded-2xl flex items-center  justify-self-start gap-4 py-1 px-4 ">
            <label htmlFor="name">Name : </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="  ml-3 focus:outline-none rounded-2xl bg-gray-100 dark:bg-black h-[6vh] w-[30vw] border-1 border-gray-400 px-4"
              value={name}
              onChange={(ele) => setName(ele.target.value)}
            />
          </div>

          <div className=" rounded-2xl flex items-center  justify-self-start gap-4 py-1 px-4 ">
            <label htmlFor="id">User Id : </label>
            <input
              type="text"
              id="id"
              placeholder="Enter your id"
              className="  ml-0 focus:outline-none rounded-2xl bg-gray-100 dark:bg-black h-[6vh] w-[30vw] border-1 border-gray-400 px-4"
              value={id}
              onChange={(ele) => setId(ele.target.value)}
            />
          </div>

          <div className=" rounded-2xl flex items-center  justify-self-start gap-4 py-1 px-4 ">
            <label htmlFor="contact">Contact : </label>
            <input
              type="text"
              id="contact"
              placeholder="9123412345"
              className="  focus:outline-none rounded-2xl bg-gray-100 dark:bg-black h-[6vh] w-[30vw] border-1 border-gray-400 px-4"
              value={contact}
              onChange={(ele) => setContact(ele.target.value)}
            />
          </div>

          <div className=" rounded-2xl flex items-center  justify-self-start gap-4 py-1 px-4 ">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              placeholder="raunak@test.com"
              className="  ml-4 focus:outline-none rounded-2xl bg-gray-100 dark:bg-black h-[6vh] w-[30vw] border-1 border-gray-400 px-4"
              value={email}
              onChange={(ele) => setEmail(ele.target.value)}
            />
          </div>

          <div className=" rounded-2xl flex items-center  justify-self-start gap-4 py-1 px-4 ">
            <label htmlFor="address">Address : </label>
            <input
              type="text"
              id="address"
              placeholder="Gopalganj , Bihar"
              className="  focus:outline-none rounded-2xl bg-gray-100 dark:bg-black h-[6vh] w-[30vw] border-1 border-gray-400 px-4"
              value={address}
              onChange={(ele) => setAddress(ele.target.value)}
            />
          </div>

          <div className=" rounded-2xl flex items-center  justify-self-start gap-4 py-1 px-4 ">
            <label htmlFor="age">Age : </label>
            <input
              type="age"
              id="age"
              placeholder="23"
              className=" ml-7 focus:outline-none rounded-2xl bg-gray-100 dark:bg-black h-[6vh] w-[30vw] border-1 border-gray-400 px-4"
              value={age}
              onChange={(ele) => setAge(ele.target.value)}
            />
          </div>

          <div className=" rounded-2xl flex items-center  justify-self-start gap-4 py-1 px-4 ">
            <label htmlFor="bio">Bio : </label>
            <input
              type="text"
              id="bio"
              placeholder="I am a owner of SOCIAL.NET ..."
              className="  ml-8 focus:outline-none rounded-2xl bg-gray-100 dark:bg-black h-[6vh] w-[30vw] border-1 border-gray-400 px-4"
              value={bio}
              onChange={(ele) => setBio(ele.target.value)}
            />
          </div>

          <div className=" rounded-2xl flex items-center  justify-self-start gap-4 py-1 px-4 ">
            <label htmlFor="profile">Profile : </label>
            <input
              type="url"
              id="profile"
              placeholder="Enter your name"
              className=" ml-3 focus:outline-none rounded-2xl bg-gray-100 dark:bg-black h-[6vh] w-[30vw] border-1 border-gray-400 px-4"
              value={profile}
              onChange={(ele) => setProfile(ele.target.value)}
            />
          </div>
          <button
            className="px-2 py-3 bg-gray-50 dark:bg-black border-2 hover:bg-gray-800 hover:text-gray-50 border-gray-400 active:scale-90 text:black dark:text-white rounded-2xl w-[8vw]"
            onClick={addToApi}
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default EditProfile

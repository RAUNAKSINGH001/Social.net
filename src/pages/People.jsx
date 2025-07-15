import React from "react";
import { useState, useEffect } from "react";
// import PeoplePages from '../components/header/PeoplePages'
import ProfileCard from "../components/header/ProfileCard";

function People() {
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchText, setSearchText] = useState("");
  const url = "http://localhost:3000/users";
 let userData ="";
  const peopleApi = async (ele) => {
    let res = await fetch(url);
    userData = await res.json();
    console.log(userData);
    setData(userData);
    
  };

  useEffect(() => {
    peopleApi();
  }, [userData]);



   useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("http://localhost:3000/users");
      const data = await res.json();
      setUsers(data);
      setFiltered(data); // initially all
    };
    fetchUsers();
  }, []);


  useEffect(() => {
    const filteredData = users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchText.toLowerCase()) ||
        user.id.toLowerCase().includes(searchText.toLowerCase()) ||
        user.bio?.toLowerCase().includes(searchText.toLowerCase())
    );
    setFiltered(filteredData);
  }, [searchText, users]);
  return (
    <>
      <div className="flex items-center flex-col text-gray-50 dark:text-white w-full min-h-full gap-5">


   <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search by name, ID, or bio..."
        className="mt-6 w-[50%] px-4 py-3 border rounded-2xl focus:outline-none border-gray-400 dark:bg-black bg-gray-200 text-black dark:text-white">
        </input>

{filtered.length > 0 ? (
  filtered.map((user, idx) => (
    <ProfileCard
      key={idx}
      id={user.id}
      name={user.name}
      bio={user.bio}
      profile={user.profile}
      userPath={user.id}
    />
  ))
) : (
  <div>
    <p className="mt-4 text-gray-600 dark:text-gray-400">No users found.</p>
  </div>
)}

{filtered.length == 0  && 
  data.map((dataa, idx) => (
    <div key={idx}>
      <ProfileCard
        id={dataa.id}
        name={dataa.name}
        bio={dataa.bio}
        profile={dataa.profile}
        userPath={dataa.id}
      />
    </div>
  ))
}
 
 
  
    </div>
        
    </>
  )
}

export default People;

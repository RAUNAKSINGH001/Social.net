import React from "react";
import { useState, useEffect } from "react";
// import PeoplePages from '../components/header/PeoplePages'
import ProfileCard from "../components/header/ProfileCard";

function People() {
  const [data, setData] = useState([]);
  const url = "http://localhost:3000/users";

  const peopleApi = async (ele) => {
    let res = await fetch(url);
    let userData = await res.json();
    console.log(userData);
    setData(userData);
  };

  useEffect(() => {
    peopleApi();
  }, [data]);
  return (
    <>
      <div className="flex items-center flex-col text-white w-full min-h-full gap-5">

        {data.map((dataa, idx) => (
          <div key={idx}>
            <ProfileCard
              id={dataa.id}
              name={dataa.name}
              bio={dataa.bio}
              profile={dataa.profile}
              userPath = {dataa.id}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default People;

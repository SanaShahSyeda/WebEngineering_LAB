import React from "react";
import "./FriendsApp.css";
import { faker } from "@faker-js/faker";
import { useState } from "react";

let names = [];
for (var i = 0; i < 10; i++) {
  names[i] = faker.person.fullName();
}

export default function FriendsApp() {
  let k = 0;

  const [goodFriends_names, setGoodFriendsNames] = useState([]);
  const [badFriends_names, setBadFriendsNames] = useState([]);

  let types = ["Acha dost", "Bura dost"];

  return (
    <>
      <div className="main">
        <div>
          <h1>Friends App</h1>
        </div>
        <div className="friend">
          <div className="friend_div">
            <div>
              <label>Friend: </label>
              <select className="friend_name" required>
                Names
                {names.map((name, index) => (
                  <option key={index} value={index}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label>Category: </label>
              <select className="friend_type" required>
                Category
                <option value="Acha dost">Acha dost</option>
                <option value="Bura dost">Bura dost</option>
              </select>
            </div>
          </div>
          <div className="buttons">
            <button
              onClick={() => {
                let friend_name = document.querySelector(".friend_name");
                let selectedName = names[friend_name.selectedIndex];

                let friend_type = document.querySelector(".friend_type");

                types[friend_type.selectedIndex] == "Acha dost"
                  ? setGoodFriendsNames([...goodFriends_names, selectedName])
                  : setBadFriendsNames([...badFriends_names, selectedName]);

                k++;
              }}
            >
              Add
            </button>
          </div>
        </div>
      </div>
      <div className="friend_result">
        <div>
          <h3>اچھے دوست</h3>
        </div>
        <div className="Ache_Dost">{JSON.stringify(goodFriends_names)}</div>
        <div>
          <h3>برے دوست</h3>
        </div>
        <div className="Bure_Dost">{JSON.stringify(badFriends_names)}</div>
      </div>
    </>
  );
}

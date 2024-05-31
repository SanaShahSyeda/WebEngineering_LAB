import React from "react";
import { useState } from "react";

export default function Friends() {
  const friendCategory = {
    acha: "acha",
    bura: "bura",
  };
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);
  const [category, setCategories] = useState(friendCategory.acha);

  const revertUser = (index, name, category) => {
    const indexOfUSer = users.findIndex(
      (item) => item.name == name && item.category == category
    );
    const updatedUsers = [...users];
    updatedUsers[indexOfUSer].category =
      category == friendCategory.acha
        ? friendCategory.bura
        : friendCategory.acha;
    setUsers(updatedUsers);
  };

  return (
    <div className="main">
      Friends
      <h5>{JSON.stringify({ name, category })}</h5>
      <input
        placeholder="Enter name "
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
      <select
        value={category}
        onChange={(e) => {
          setCategories(e.target.value);
        }}
      >
        <option value={friendCategory.acha}>{friendCategory.acha}</option>
        <option value={friendCategory.bura}>{friendCategory.bura}</option>
      </select>
      <button
        onClick={() => {
          // update prev data with new data
          setUsers((prev) => [...prev, { name, category }]);
          setName("");
        }}
      >
        Add
      </button>
      <br />
      Achay Dost:
      <ul>
        {users
          .filter((item) => item.category === friendCategory.acha)
          .map((user, index) => (
            <li
              key={index}
              onClick={() => revertUser(index, user.name, user.category)}
            >
              {user.name} [{user.category} dost]
            </li>
          ))}
      </ul>
      <hr />
      Buray Dost:
      <ul>
        {users
          .filter((item) => item.category === friendCategory.bura)
          .map((user, index) => (
            <li
              key={index}
              onClick={() => revertUser(index, user.name, user.category)}
            >
              {user.name} [{user.category} dost]
            </li>
          ))}
      </ul>
    </div>
  );
}

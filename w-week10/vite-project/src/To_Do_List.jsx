import React from "react";
import "./To_Do_List.css";
import { useState } from "react";

export default function To_Do_List() {
  const listCategory = {
    to_do: "to_do",
    in_progress: "in_progress",
    completed: "completed",
  };

  const [listTitle, setListTitle] = useState("");
  const [lists, setLists] = useState([]);
  const [category, setCategory] = useState(listCategory.to_do);

  const moveList = (listTitle, category) => {
    const index = lists.findIndex(
      (item) => item.listTitle == listTitle && item.category == category
    );

    const updatedLists = [...lists];
    if (category == listCategory.to_do) {
      updatedLists[index].category = listCategory.in_progress;
    }
    if (category == listCategory.in_progress) {
      updatedLists[index].category = listCategory.completed;
    }

    setLists(updatedLists);
  };

  return (
    <div>
      <h1>To-Do-List</h1>
      <div className="header">
        <input
          type="text"
          placeholder="Add Task"
          className="task_title"
          onChange={(e) => {
            setListTitle(e.target.value);
          }}
        />
        <button
          className="add_list"
          onClick={() => {
            setLists((prev) => [...prev, { listTitle, category }]);
          }}
        >
          Add
        </button>
      </div>
      <div className="cards">
        <div>
          <h3>To-Do</h3>
          {lists
            .filter((item) => item.category == listCategory.to_do)
            .map((list, index) => (
              <div className="to_do" key={index}>
                <div className="left">
                  <p>{list.listTitle}</p>
                </div>
                <div className="right">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    onClick={() => moveList(list.listTitle, list.category)}
                  >
                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                  </svg>
                </div>
              </div>
            ))}
        </div>
        <div>
          <div>
            <h3>In Progress</h3>
            {lists
              .filter((item) => item.category == listCategory.in_progress)
              .map((list, index) => (
                <div className="to_do" key={index}>
                  <div className="left">
                    <p>{list.listTitle}</p>
                  </div>
                  <div className="right">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      onClick={() => moveList(list.listTitle, list.category)}
                    >
                      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div>
          <div>
            <h3>Completed</h3>
            {lists
              .filter((item) => item.category == listCategory.completed)
              .map((list, index) => (
                <div className="to_do" key={index}>
                  <div className="left">
                    <p>{list.listTitle}</p>
                  </div>
                  <div className="right">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

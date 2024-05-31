import React, { useState } from "react";
import { UsersWithImages } from "../Users";
import Posts from "../posts";
import Home from "../Home";

const pages = {
  post_feed: "post_feed",
  user_feed: "user_feed",
  home_page: "home_page",
};
export default function Container() {
  const [currentPage, setCurrentPage] = useState(pages.post_feed);
  return (
    <div>
      <div>{JSON.stringify(currentPage)}</div>
      <div>
        {Object.keys(pages).map((item) => (
          <button
            onClick={() => {
              setCurrentPage(pages[item]);
            }}
          >
            {item}
          </button>
        ))}
      </div>
      <div>
        {currentPage === pages.user_feed && <UsersWithImages />}
        {currentPage === pages.post_feed && <Posts />}
        {currentPage === pages.home_page && <Home />}
      </div>
    </div>
  );
}

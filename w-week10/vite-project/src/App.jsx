import React from "react";

export default function App() {
  const names = ["zia", "abc", "zoha", "zumar", "john"];
  const filteredNames = names.filter((name) => name.charAt(0) == "z");
  return <div>{JSON.stringify(filteredNames)} </div>;
}

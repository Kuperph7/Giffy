import React, { useState } from "react";
import { useLocation } from "wouter";
import "../styles/Home.css";

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();

  const handelSumbit = (evt) => {
    evt.preventDefault();
    pushLocation(`/search/${keyword}`);
  };

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };

  return (
    <div>
      <form onSubmit={handelSumbit}>
        <input
          className="searchBar"
          type="text"
          value={keyword}
          onChange={handleChange}
          placeholder="Search a gif here..."
        />
      </form>
    </div>
  );
}

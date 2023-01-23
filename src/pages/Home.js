import React from "react";
import SearchBar from "../components/SearchBar.js";
import "../styles/Home.css";

export default function Home() {
  return (
    <div>
      <img
        className="logo"
        src="https://static.vecteezy.com/system/resources/previews/005/484/042/original/dog-logo-illustration-free-vector.jpg"
        alt="err"
      />
      <SearchBar />
    </div>
  );
}

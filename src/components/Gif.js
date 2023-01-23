import React from "react";
import "../styles/Gifs.css";

export default function Gifs({ title, url, id }) {
  return (
    <div className="gif">
      <div>
        <img src={url} />
        <h4>{title}</h4>
        <small>{id}</small>
      </div>
    </div>
  );
}

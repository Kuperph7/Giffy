import React, { useEffect, useState } from "react";
import getGifs from "../services/getGifs";
import Gifs from "./Gif";
import "../styles/Gifs.css";

export default function ListOfGift({ params }) {
  const { keyword } = params;

  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs({ keyword }).then((gifs) => setGifs(gifs));
  }, [keyword]);

  return gifs.map((indGif) => {
    return (
      <div className="gifs">
        <Gifs
          key={indGif.id}
          title={indGif.title}
          url={indGif.url}
          id={indGif.id}
        />
      </div>
    );
  });
}

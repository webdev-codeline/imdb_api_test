import React from "react";
import "./RandomMovie.css";
export const RandomMovie = ({ title, year, poster }) => {
  return (
    <div className="random-movie-container">
      <div className="desc-container random-container">
        <p className="desc title">{title}</p>
        <p className="desc">{year}</p>
      </div>
      <img className="poster" src={poster} alt="movie poster" />
    </div>
  );
};

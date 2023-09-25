import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { RandomMovie } from "../../components/RandomMovie/RandomMovie";
import "./RandomPage.css";
import { MoviePageHeader } from "../../components/MoviePageHeader/MoviePageHeader";
import { getRandomMovie } from "../../api/api";
import { CustomProgress } from "../../components/CustomProgress/CustomProgress";
export const RandomPage = () => {
  const [selectedMovie, setSelectedMovie] = useState();
  const fetchRandom = async () => {
    const movie = await getRandomMovie();
    setSelectedMovie(movie);
  };
  useEffect(() => {
    fetchRandom();
  }, []);

  return (
    <div className="page-container">
      <MoviePageHeader active="random" />
      <div className="page-container">
        <Button variant="contained" onClick={fetchRandom}>
          PICK A RANDOM MOVIE
        </Button>
        {selectedMovie ? (
          <RandomMovie
            title={selectedMovie.title}
            year={selectedMovie.year}
            poster={selectedMovie.image}
          />
        ) : <CustomProgress/>}
      </div>
    </div>
  );
};

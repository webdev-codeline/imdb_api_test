import React, { useState, useEffect, Suspense } from "react";
import Button from "@mui/material/Button";
import { RandomMovie } from "../../components/RandomMovie/RandomMovie";
import { MostPopular } from "../../components/MostPopular/MostPopular";
import { MoviePageHeader } from "../../components/MoviePageHeader/MoviePageHeader";
import { getTopMovies } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { CustomProgress } from "../../components/CustomProgress/CustomProgress";

export const PopularPage = () => {
  const [movies, setMovies] = useState();
  const navigate = useNavigate();
  const fetchMovies = async () => {
    const movies = await getTopMovies();
    setMovies(movies);
  };
  useEffect(() => {
    fetchMovies();
  }, []);
  const handleClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };
  return (
    <div className="page-container">
      <MoviePageHeader active="popular" />
      {movies ? (
        <div className="page-container">
          {movies?.map((movie) => (
            <MostPopular
              key={movie.id}
              id={movie.id}
              title={movie.title}
              year={movie.year}
              thumbnail={movie.image}
              rating={movie.imDbRating}
              rank={movie.rank}
              handleClick={handleClick}
            />
          ))}
        </div>
      ) : (
        <CustomProgress />
      )}
    </div>
  );
};

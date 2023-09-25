import React, { useState, useEffect, useMemo } from "react";
import { MovieList } from "../../components/MovieList/MovieList";
import { MoviePageHeader } from "../../components/MoviePageHeader/MoviePageHeader";
import { getTopMovies } from "../../api/api";
import { useNavigate } from "react-router-dom";

export const PopularPage = () => {
  const [movies, setMovies] = useState();
  const navigate = useNavigate();
  const fetchMovies = async () => {
    const movies = await getTopMovies();
    setMovies(movies);
  };
  useMemo(() => {
    fetchMovies();
  }, []);
  const handleClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };
  return (
    <div className="page-container">
      <MoviePageHeader active="popular" />
      <MovieList movies={movies} handleClick={handleClick}/>
 
    </div>
  );
};

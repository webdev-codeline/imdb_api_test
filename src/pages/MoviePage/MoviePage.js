import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMovie } from "../../api/api";
import { Movie } from "../../components/Movie/Movie";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import "./MoviePage.css";
import { CustomProgress } from "../../components/CustomProgress/CustomProgress";

export const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const handleMovie = async (movie_id) => {
    const movieData = await getMovie(movie_id);
    setMovie(movieData);
  };
  useEffect(() => {
    handleMovie(id);
  }, [id]);
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <>
      <div className="back-container" onClick={handleBack}>
        <ArrowBackIosNewIcon />
        <label>Back</label>
      </div>
      {movie ? (
        <div className="page-container page-left-margin">
          <Movie
            title={movie?.title}
            year={movie?.year}
            description={movie?.plot}
            trailer={movie?.trailer?.linkEmbed}
            releaseDate={movie?.releaseDate}
            duration={movie?.runtimeStr}
          />
        </div>
      ) : (
        <CustomProgress />
      )}
    </>
  );
};

import React from "react";
import { CustomProgress } from "../CustomProgress/CustomProgress";
import "./Movie.css";
export const Movie = ({
  title,
  year,
  description,
  trailer,
  releaseDate,
  duration,
}) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const handleLoad = () => {
    setIsLoading(false);
  };
  return (
    <>
      <div className="desc-container container-padding">
        <div className="desc title">{title}</div>
        <div className="desc">{year}</div>
      </div>
      {isLoading && <CustomProgress />}
      <div className="iframe-container">
        <iframe
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          src={trailer}
          title={title}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={handleLoad}
        ></iframe>
      </div>
      <div className="main-desc-container">
        <div className="desc-container">
          <label>Release Date:</label>
          <p>{releaseDate}</p>
        </div>
        <div className="desc-container">
          <label>Duration: </label>
          <p>{duration}</p>
        </div>
        <div className="description-container">
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

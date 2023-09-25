import "./MostPopular.css";
import StarIcon from "@mui/icons-material/Star";
export const MostPopular = ({
  id,
  title,
  year,
  thumbnail,
  rating,
  rank,
  handleClick,
}) => {
  const handleClickWrapper = () => {
    handleClick(id);
  };
  return (
    <>
      <div className="container" onClick={handleClickWrapper}>
        <img className="thumbnail" src={thumbnail} alt="thumbnail" />
        <div className="main-desc">
          <p className="desc title"> {title}</p>
          <p className="desc"> {year}</p>
        </div>
        <div className="rem-container">
          <div className="desc rem-title">IMDb RATING</div>
          <div className="rating-conatiner">
            <p className="desc">
              <StarIcon color="primary" />
            </p>
            <p className="desc">{rating}</p>
            <p className="desc"> / 10</p>
          </div>
        </div>

        <div className="rem-container">
          <div className="desc rem-title">Rank</div>
          <div className="desc">{rank}</div>
        </div>
      </div>
    </>
  );
};

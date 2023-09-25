
import { CustomProgress } from "../../components/CustomProgress/CustomProgress";
import { MostPopular } from "../../components/MostPopular/MostPopular";
export const MovieList = ({
  movies,
  handleClick,
}) => {
  
  return (
    <>
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

    </>
    
  )
};

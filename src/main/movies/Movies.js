import React from "react";
import "./Movies.css";
import MovieListItem from "./MovieListItem";
import Button from "../navigation/Button";

const Movies = ({
  movies,
  page,
  totalPages,
  onPageIncrease,
  onPageDecrease,
  isMainContent
}) => (
  <section>
    <ul className="movies">
      {movies.map(movie => (
        <MovieListItem key={movie.id} movie={movie} />
      ))}
    </ul>
    {isMainContent() ? (
      <React.Fragment />
    ) : (
      <div className="pagination">
        {page - 1 > 0 ? (
          <Button onClick={onPageDecrease}>Previous</Button>
        ) : (
          <div />
        )}
        <span>{`Page ${page}/${totalPages}`}</span>
        {page + 1 <= totalPages ? (
          <Button onClick={onPageIncrease}>Next</Button>
        ) : (
          <div />
        )}
      </div>
    )}
  </section>
);

export default Movies;

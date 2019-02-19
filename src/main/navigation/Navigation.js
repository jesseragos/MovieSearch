import React from "react";
import "./Navigation.css";
import "./Selection.css";
import Slider from "./Slider";
import Button from "./Button";

class Navigation extends React.Component {
  componentDidMount() {
    const genresURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${
      process.env.REACT_APP_TMDB_API_KEY
    }&language=en-US`;

    fetch(genresURL)
      .then(response => response.json())
      .then(data => this.props.setGenres(data.genres))
      .catch(error => console.log(error));
  }

  render() {
    const {
      genre,
      genres,
      onGenreChange,
      onChange,
      year,
      rating,
      runtime,
      onSearchButtonClick
    } = this.props;

    return (
      <section className="navigation">
        <Selection
          genre={genre}
          genres={genres}
          onGenreChange={onGenreChange}
        />

        <Slider data={year} onChange={onChange} />
        <Slider data={rating} onChange={onChange} />
        <Slider data={runtime} onChange={onChange} />

        <Button onClick={onSearchButtonClick}>
          Search
        </Button>
      </section>
    );
  }
}

const Selection = ({ genres, genre, onGenreChange }) => {
  return (
    <div className="selection">
      <label htmlFor="selection">Genre</label>
      <select value={genre} onChange={onGenreChange}>
        {genres.map(genre => (
          <option key={genre.id} value={genre.name}>
            {genre.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Navigation;

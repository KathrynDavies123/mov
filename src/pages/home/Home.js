import Filter from "../../components/filter/Filter";
import MovieCard from "../../components/movieCard/MovieCard";
import { useEffect, useState } from "react";

import "./Home.css";

const Home = (props) => {
  const [sortBy, setSort] = useState(0); 
  const [genres, setGenres] = useState([]);
  
  const filtered = sortBy !== 0 
  ? props.movies.filter((m) => m.genre_ids.includes(sortBy)):props.movies;
  // console.log(props.movies)

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.success === false) {
            return;
        }
        props.setMovies(data.results);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
    .then((response) => response.json())
    .then((data) => setGenres(data.genres))
  }, []);
//commentar test
  return (
    <section className="Home-Section">
      <div className="Home-Title">
        <h2 className="Home-Title-Text">Popular Movies</h2>
        <Filter setSort={setSort} sortBy={sortBy} />
      </div>
      <div className="Home-Container">
        {filtered.map((item, index) => (
          <MovieCard
          poster_path={item.poster_path}
          vote_average={item.vote_average}
          release_date={item.release_date}
          genres={item.genre_ids.map((gid) => (genres.find(genre => genre.id === gid)?.name))}
          title={item.title}
          id={item.id}
          key={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Home;

import "./MovieCard.css";
import { Link } from "react-router-dom";

const MovieCard = (props) => {

  return (
    <Link to={`/${props.id}`} className="Movie-Card">
      <img
        src={`https://image.tmdb.org/t/p/w300${props.poster_path}`}
        alt="movie poster"
      />
      <p className="Movie-Rating">{props.vote_average}</p>
      <p className="Movie-Details">{props.release_date.slice(0,4) + " - " + props.genres.join(", ")}</p>
      <h4 className="Movie-Title">{props.title}</h4>
    </Link>
  );
};

export default MovieCard;

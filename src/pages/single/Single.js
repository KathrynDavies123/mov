import './Single.css';
import { useParams } from "react-router-dom";
import { useEffect, useState} from "react";
// import moviedata from '../../moviedata';

const Single = () => {
    let params = useParams();
    // const pos = moviedata.map(i => i.id).indexOf(Number(params.id));
    const [movie, setMovie] = useState({});
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${params.id}?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}`)
        .then((response) => response.json())
        .then((data) => setMovie(data));
        
    }, [params.id]);
    return ( 
         <div className="Single-Container">
             <div className="Single-Img-Container">
                 <h2>{movie.title}</h2>
                 <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt="movie poster"/>
             </div>
             <div className="Single-Detail-Container">
                 <div className="Single-Txt-Container">
                     <div className="Single-Release-Container Single-Flex-Container">
                         <h3>Release Date</h3>
                         <p>{movie.release_date}</p>
                     </div>
                     <div className="Single-Genres-Container Single-Flex-Container">
                         <h3>Genres</h3>
                         {movie.genres &&  <div className="Gengres-Item-Container">{movie.genres.map((item) => 
                            item.name).join(", ")}
                         </div>}
                     </div>

                     <div className="Single-Overview-Container Single-Flex-Container">
                         <h3>Overview</h3>
                         {movie.overview &&<p className="Single-Text-Overview">
                        {isReadMore ? movie.overview.slice(0, 100) : movie.overview}
                        <button onClick={toggleReadMore} className="read-or-hide">
                            {isReadMore ? "...READ MORE" : "...SHOW LESS"}
                        </button>
                        </p>}
                     </div>

                     <div className="Single-Rating-Container Single-Flex-Container">
                         <h3>Average Voting</h3>
                         {movie.vote_average && <p>{movie.vote_average.toFixed(1)}</p>}
                     </div>
                     <div className="Single-Trailer-Container">
                         <h3>Watch Trailer</h3>
                         <div className="Single-Trailer-Img">
                         <img src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`} alt="movie poster"/>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     )
}
 
export default Single;
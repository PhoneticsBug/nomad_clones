import { useState, useEffect, useRef } from "react";
import MovieLink  from "../component/movielink/movielink.js";
import '../App.css'

function Movie() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const moviesDirection = useRef(null);

    const getMovies = async() => {
        const json = await (await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")).json();

        setMovies(json.data.movies);
        setLoading(false);
    };
    
    useEffect(() => {
        getMovies();
        }, []);
    
    const Scroll = (direction) => {
        if (direction === 'left') {
            moviesDirection.current.scrollBy({left: -300, behavior: 'smooth'});
        } else{
            if (direction === 'right') {
                moviesDirection.current.scrollBy({left: 300, behavior: 'smooth'})
        }
    };
  };

    return (
    
    <div>
        <h1> Movies </h1>
        <hr/>
        <div className="movies-holder">
        <button onClick={() => Scroll('left')}> left </button>
        { loading ? 
            (<strong> Loading... </strong> 
            ) : (
            <div className="movie-contiainer" ref={moviesDirection}>
                {movies.map((movie) => (
                    <MovieLink 
                    key={movie.id}
                    id={movie.id}
                    medium_cover_image={movie.medium_cover_image}
                    title={movie.title}
                    summary={movie.summary}
                    genres={movie.genres}
                    year={movie.year}
                />
                ))}
            </div>
            )
            }
        </div>
        <button onClick={() => Scroll('right')}> right </button>
    </div>)

};
export default Movie; 
import { useState, useEffect, useRef } from "react";
import MovieLink  from "../movielink/movielink.js";

import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import '../../App.css'

function MovieBox(props) {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const moviesDirection = useRef(null);
    const [sortName, setSortName] = useState(props.sortBy);


    const getMovies = async() => {
        const link = `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=${sortName}`;
        const json = await (await fetch(link)).json();

        setMovies(json.data.movies);
        setLoading(false);
    };
    
    useEffect(() => {
        getMovies();
        }, []);
    
    const Scroll = (direction) => {
        if (direction === 'left') {
            moviesDirection.current.scrollBy({left: -1288, behavior: 'smooth'});
        } else{
            if (direction === 'right') {
                moviesDirection.current.scrollBy({left: 1288, behavior: 'smooth'})
        }
    };
  };
    return (
        <>
        <h2> Sorted by {sortName} </h2>

        <div className="movies-holder">
        
        { loading ? 
            (<strong> Loading... </strong> 
            ) : (
            <>
            <button onClick={() => Scroll('left')} className="lr-btn"> <SlArrowLeft/> </button>
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
            <button onClick={() => Scroll('right')} className="lr-btn"> <SlArrowRight/> </button>
            </>
            )
            }
        
    </div>
    </>)

};
export default MovieBox; 
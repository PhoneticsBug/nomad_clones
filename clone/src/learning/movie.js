import { useState, useEffect } from "react";
import MovieLink  from "../component/movielink/movielink.js";

const Movie = () => {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
        const json = await (await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")).json();

        setMovies(json.data.movies);
        setLoading(false);
    };
    
    useEffect(() => {
        getMovies();
        }, []);
    

    return (
    
    <div>
        <h1> Movies </h1>
        <hr/>
        { loading ? 
            (<strong> Loading... </strong> 
            ) : (
            <div>
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
    </div>)

};
export default Movie; 


// [docs] https://yts.mx/api https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year

// : (
            
//     {movies.map((movie => 
//         <MovieLink 
//             coverImg={movie.medium_cover_image}
//             title={movie.title}
//             summary={movie.summary}
//             genre={movie.genres}
//             year={movie.year}
//         />
//     ))}
//     )
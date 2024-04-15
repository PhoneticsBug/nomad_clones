import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";


const Detail = () => {
    const [movie, setMovie] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMovie = async () => {
            const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
            const json = await response.json();
            setMovie(json.data.movie);
        };

        fetchMovie();
    }, [id]);

    return (
        <>
            <button onClick={() => navigate(-1)}>Go Back</button>
            <p>This is the detail page</p>
            {movie ? (
                <div>
                    <h2>{movie.title} ({movie.year || ""}) </h2>
                    <img src={movie.medium_cover_image} alt={movie.title} />
                    <p>{movie.description_full || 'No description available.'} </p>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </>
    );
};

export default Detail;

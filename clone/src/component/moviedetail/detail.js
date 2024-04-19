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

    const openImageInNewTab = () => {
        window.open(movie.large_cover_image, '_blank');
    };

    return (
        <div
        className="detail-background" 
        style={{ 
            backgroundImage: `url(${movie?.background_image_original})`,
        }}>
            <button onClick={() => navigate(-1)} className="go-back-btn"> ✖ </button>
            {movie ? (
                <div className="description-box">
                    <div className="desc-img-name">
                        <h2>{movie.title} ({movie.year || ""}) </h2>
                        <img src={movie.medium_cover_image} alt={movie.title_long} onClick={openImageInNewTab}/>
                        <h4> Rating: {movie.rating} </h4>
                        <h4> runtime: {movie.runtime}min </h4>
                        <p>  </p>
                        <h4> Genres </h4>
                        <p> {movie.genres.map((g => <li key={g}> {g} </li>))} </p>
                    </div>
                    <div className="desc-desc">
                        <h2> Descriptions </h2>
                        <div className="movie-description"> {movie.description_full  || movie.summary || 'No description available.'} </div>
                    </div>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default Detail;

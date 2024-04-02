import PropTypes from 'prop-types';
import 'react-router-dom';
import { Link } from 'react-router-dom'

function MovieLink ({medium_cover_image, title, summary, genres, year, id}) {
    return (
        <div> 
                <img src={medium_cover_image} alt={title}/>
                <h2>
                     <Link to={`/detail/${id}`}> {title} ({year}) </Link> 
                </h2>
                {/* <p> {summary} </p>  */}
                {/* <ul>
                    {genres.map((g => 
                        <li key={g}> {g} </li>))
                    }
                </ul> */}
            </div>
    );
};

MovieLink.propTypes = {
    id: PropTypes.string.isRequired, 
    medium_cover_image: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired, 
    summary: PropTypes.string.isRequired, 
    genres: PropTypes.string.isRequired, 
    year: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default MovieLink;
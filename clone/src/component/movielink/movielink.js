import { useState, useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import 'react-router-dom';
import { Link } from 'react-router-dom'
import Modal from "react-modal"
import '../../App.css'

import Detail from "../moviedetail/detail.js"

function MovieLink ({medium_cover_image, title, summary, genres, year, id}) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (movie) => {
        setIsModalOpen(true);
    };
    const closeModal = (movie) => {
        setIsModalOpen(false);
    };

    return (
        <>
        <div className="movie-box"> 
            <img src={medium_cover_image} alt={title} className='movie-img'/>
            <h3>
                <Link to={`/detail/${id}`}> {title} ({year}) </Link> 
            </h3>
        </div>
        </>
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
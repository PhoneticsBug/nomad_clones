import { useState, useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import 'react-router-dom';
import { Link } from 'react-router-dom'
import Modal from "react-modal"
import '../../App.css'

import Detail from "../moviedetail/detail.js"

Modal.setAppElement('#root');

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
            <img src={medium_cover_image} alt={title} className='movie-img' onClick={openModal}/>
            <h3 onClick={openModal}> {title} ({year}) </h3>
        </div>
        <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel="Movie Detail"
            className="modal"
            overlayClassName="overlay"
        >
            {/* Detail 컴포넌트에 id와 closeModal 함수를 props로 전달 */}
            <Detail movieId={id} closeModal={closeModal} />
        </Modal>
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
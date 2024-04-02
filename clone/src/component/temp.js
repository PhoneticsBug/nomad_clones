import React, { useState, useEffect } from 'react';

const Detail = () => {
  const [movie, setMovie] = useState(null);

  const MovieInfo = ({ movie }) => {
    if (!movie) {
      return <div>Loading...</div>;
    }
  
    return (
      <div style={{ textAlign: 'center' }}>
        <h2>{movie.title}</h2>
        <img src={movie.medium_cover_image} alt={movie.title} />
        <p>{movie.description_intro || 'No description available.'}</p>
      </div>
    );
  };

  useEffect(() => {
    // 영화 데이터를 불러오는 로직을 여기에 구현합니다.
    // 예시로, 하드코딩된 데이터를 사용합니다.
    const movieData = {
      title: "Bray Wyatt: Becoming Immortal",
      medium_cover_image: "https://yts.mx/assets/images/movies/bray_wyatt_becoming_immortal_2024/medium-cover.jpg",
      description_intro: "" // 이 부분은 실제 데이터에 따라 다를 수 있습니다.
    };
    setMovie(movieData);
  }, []);

  return (
    <div>
      <MovieInfo movie={movie} />
    </div>
  );
};

export default Detail;

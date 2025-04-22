import React, { useRef, useState } from 'react';
import '/src/stylesberanda.css';
import MovieModal from './MovieModal';

const MovieList = ({ movies, topMovies, trendingMovies }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  };

  const melanjutkanRef = useRef();
  const topMoviesRef = useRef();
  const trendingRef = useRef();

  const scroll = (ref, direction) => {
    if (ref.current) {
      const amount = 300;
      ref.current.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
    }
  };

  const renderSection = (title, data, imgClass, ref) => (
    <div id="movies-container">
      <h2 className="section-title">{title}</h2>
      <div className="scroll-wrapper">
        <button className="scroll-btn left" onClick={() => scroll(ref, 'left')}>◀</button>

        <div className="list" ref={ref}>
          {data.map((item, index) => (
            <img
              key={index}
              className={imgClass}
              src={item.src}
              alt={item.alt}
              loading="lazy"
              onClick={() => openModal(item)}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </div>

        <button className="scroll-btn right" onClick={() => scroll(ref, 'right')}>▶</button>
      </div>
    </div>
  );

  return (
    <section className="movies">
      {renderSection("Melanjutkan Tonton Film", movies, "melanjutkan", melanjutkanRef)}
      {renderSection("Top Rating Film dan Series Hari ini", topMovies, "top", topMoviesRef)}
      {renderSection("Trending Hari Ini", trendingMovies, "top", trendingRef)}
      <MovieModal isOpen={isModalOpen} onClose={closeModal} movie={selectedMovie} />
    </section>
  );
};

export default MovieList;

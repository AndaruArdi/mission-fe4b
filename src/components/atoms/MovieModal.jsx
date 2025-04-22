import React from 'react';
import useWatchlistStore from '/src/store/store.js';

const MovieModal = ({ isOpen, onClose, movie }) => {
  const {
    watchlist,
    addToWatchlist,
    removeFromWatchlist,
  } = useWatchlistStore(); 

  if (!isOpen || !movie) return null;

  const userId = localStorage.getItem("userId") || 1;

  const isInWatchlist = watchlist.some(item => item.id === movie.id || item.src === movie.src);

  const handleToggleWatchlist = () => {
    if (isInWatchlist) {
      const itemToRemove = watchlist.find(item => item.id === movie.id || item.src === movie.src);
      if (itemToRemove) {
        removeFromWatchlist(itemToRemove.id);
      }
    } else {
      addToWatchlist({ ...movie, userId });
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <h2>{movie.alt}</h2>
        {movie.description && <p>{movie.description}</p>}

        {movie.youtubeUrl && (
          <div style={{ position: 'relative', paddingTop: '56.25%', marginTop: '1rem' }}>
            <iframe
              src={movie.youtubeUrl}
              title={movie.alt}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '10px'
              }}
            ></iframe>
          </div>
        )}

        <button
          onClick={handleToggleWatchlist}
          className="form_button"
          style={{ marginTop: '1rem' }}
        >
          {isInWatchlist ? '✓ Sudah di Daftar Saya' : '+ Tambah ke Daftar Saya'}
        </button>
      </div>
    </div>
  );
};

export default MovieModal;
